import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Calendar, Users, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Destination {
  id: string;
  name: string;
  location: string;
  price_per_person: number;
  max_capacity: number;
  duration: string;
}

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    numberOfPeople: '1',
    preferredDate: '',
    message: ''
  });

  useEffect(() => {
    const fetchDestination = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from('destinations')
          .select('id, name, location, price_per_person, max_capacity, duration')
          .eq('id', id)
          .single();

        if (error) throw error;
        setDestination(data);
      } catch (error) {
        console.error('Error fetching destination:', error);
        toast({
          title: "Error",
          description: "Failed to load destination details",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) return;
    
    setSubmitting(true);
    
    try {
      const totalPrice = destination.price_per_person * parseInt(formData.numberOfPeople);
      
      const { error } = await supabase
        .from('bookings')
        .insert({
          destination_id: destination.id,
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone,
          number_of_people: parseInt(formData.numberOfPeople),
          preferred_date: formData.preferredDate,
          message: formData.message,
          total_price: totalPrice
        });

      if (error) throw error;

      toast({
        title: "Booking Submitted!",
        description: "We'll contact you within 24 hours to confirm your booking and arrange payment.",
      });

      // Reset form
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        numberOfPeople: '1',
        preferredDate: '',
        message: ''
      });

      // Navigate back to destination details after a delay
      setTimeout(() => {
        navigate(`/destination/${destination.id}`);
      }, 2000);

    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const totalPrice = destination ? destination.price_per_person * parseInt(formData.numberOfPeople || '1') : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading booking form...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Destination Not Found</h1>
            <Button onClick={() => navigate('/')} variant="travel">
              Return Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-4"
              onClick={() => navigate(`/destination/${destination.id}`)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Details
            </Button>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Trip</h1>
            <p className="text-xl text-muted-foreground">
              Complete your booking for {destination.name}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Booking Details</CardTitle>
                <CardDescription>
                  Fill out your information and preferred travel date
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name</Label>
                      <Input 
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => handleChange('customerName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customerEmail">Email Address</Label>
                      <Input 
                        id="customerEmail"
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => handleChange('customerEmail', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerPhone">Phone Number</Label>
                      <Input 
                        id="customerPhone"
                        value={formData.customerPhone}
                        onChange={(e) => handleChange('customerPhone', e.target.value)}
                        placeholder="+250 xxx xxx xxx"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numberOfPeople">Number of People</Label>
                      <Select value={formData.numberOfPeople} onValueChange={(value) => handleChange('numberOfPeople', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: destination.max_capacity }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1} {i === 0 ? 'Person' : 'People'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input 
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requests</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Any special requests or dietary requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="travel" 
                    size="lg" 
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Booking Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card className="border-0 shadow-lg h-fit sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Booking Summary</CardTitle>
                <CardDescription>Review your trip details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duration:
                    </span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      People:
                    </span>
                    <span className="font-medium">{formData.numberOfPeople} {parseInt(formData.numberOfPeople) === 1 ? 'Person' : 'People'}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Price per person:
                    </span>
                    <span className="font-medium">${destination.price_per_person}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total:</span>
                    <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a booking request. We'll contact you within 24 hours to confirm availability and arrange payment details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;