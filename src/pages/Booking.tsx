import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ArrowLeft, MapPin, Calendar, Users, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Path to your local JSON file
const DESTINATIONS_JSON_PATH = "/data/destinations.json";

interface Destination {
  id: string;
  name: string;
  location: string;
  max_capacity: number;
  duration: string;
  image_url?: string;
  price_per_person?: string;
  price_details?: string;
}

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    numberOfPeople: "1",
    preferredDate: "",
    message: "",
  });

  // Fetch destination from local JSON
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(DESTINATIONS_JSON_PATH);
        const destinations: Destination[] = await response.json();
        const dest = destinations.find((d) => d.id === id) || null;
        setDestination(dest);
      } catch (err) {
        console.error("Error loading destinations:", err);
        toast({
          title: "Error",
          description: "Failed to load destination data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    fetchDestination();
  }, [id, toast]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) return;
    setShowSubmitDialog(true);
  };

  const handleEmailSubmit = async () => {
    if (!destination) return;
    setShowSubmitDialog(false);
    setSubmitting(true);

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          destination: destination.name,
          location: destination.location,
        }),
      });

      if (response.ok) {
        toast({
          title: "Booking Submitted!",
          description: `Your booking request for ${destination.name} has been received. You will receive confirmation soon.`,
        });

        // Reset form
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhone: "",
          numberOfPeople: "1",
          preferredDate: "",
          message: "",
        });

        // Optional: Redirect to a thank you page after a short delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your booking. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    if (!destination) return;
    const phoneNumber = "250786425200"; // Unified WhatsApp number

    const message = `TOUR BOOKING REQUEST

TOUR: ${destination.name}
Location: ${destination.location}
Duration: ${destination.duration}
Capacity: ${destination.max_capacity} people
${destination.price_per_person ? `Price: ${destination.price_per_person} per person
` : ''}
CUSTOMER:
Name: ${formData.customerName}
Email: ${formData.customerEmail}
Phone: ${formData.customerPhone}
People: ${formData.numberOfPeople}
Date: ${formData.preferredDate}

Message: ${formData.message || 'None'}
${destination.price_details ? `
Includes: ${destination.price_details}` : ''}`;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const mobileUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const desktopAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    const desktopWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    if (isMobile) {
      console.log('Opening WhatsApp (mobile):', mobileUrl, 'len=', message.length);
      window.open(mobileUrl, '_blank');
    } else {
      console.log('Trying WhatsApp Desktop app first:', desktopAppUrl, 'len=', message.length);
      // Try opening desktop app; if it doesn't respond, fallback to web
      window.location.href = desktopAppUrl;
      setTimeout(() => {
        console.log('Fallback to WhatsApp Web:', desktopWebUrl);
        window.open(desktopWebUrl, '_blank');
      }, 1500);
    }

    setShowSubmitDialog(false);

    toast({
      title: "Opening WhatsApp",
      description: "Your booking request will be sent via WhatsApp.",
    });

    // Reset form
    setFormData({
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      numberOfPeople: "1",
      preferredDate: "",
      message: "",
    });
  };

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
            <Button onClick={() => navigate("/")} variant="travel">
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
            <p className="text-xl text-muted-foreground">Complete your booking for {destination.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Booking Details</CardTitle>
                <CardDescription>Fill out your information and preferred travel date</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name</Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => handleChange("customerName", e.target.value)}
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
                        onChange={(e) => handleChange("customerEmail", e.target.value)}
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
                        onChange={(e) => handleChange("customerPhone", e.target.value)}
                        placeholder="+250 xxx xxx xxx"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numberOfPeople">Number of People</Label>
                      <Select
                        value={formData.numberOfPeople}
                        onValueChange={(value) => handleChange("numberOfPeople", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: destination.max_capacity }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1} {i === 0 ? "Person" : "People"}
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
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requests</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Any special requests or dietary requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="travel" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Booking Request"}
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
                {destination.price_per_person && (
                  <div className="bg-primary/10 rounded-lg p-6 text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-primary mb-1">{destination.price_per_person}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                    {destination.price_details && (
                      <p className="text-xs text-muted-foreground mt-3 italic">{destination.price_details}</p>
                    )}
                  </div>
                )}

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
                    <span className="font-medium">
                      {formData.numberOfPeople} {parseInt(formData.numberOfPeople) === 1 ? "Person" : "People"}
                    </span>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a booking request. You'll receive confirmation soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Choose Submission Method</AlertDialogTitle>
            <AlertDialogDescription>
              How would you like to submit your booking request?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              onClick={handleWhatsAppSubmit}
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button onClick={handleEmailSubmit}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Booking;
