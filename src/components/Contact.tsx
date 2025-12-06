import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSubmitDialog(true);
  };

  const handleEmailSubmit = async () => {
    setShowSubmitDialog(false);
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Submitted!",
          description: "Thank you! We'll contact you within 24 hours regarding your request.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          location: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    setShowSubmitDialog(false);
    
    const message = `*SERVICE INQUIRY*
━━━━━━━━━━━━━━━━━━━━

*From:* ${formData.name}

*Email:* ${formData.email}

*Phone:* ${formData.phone}


*Service Type:* ${formData.service || 'Not specified'}

*Preferred Date:* ${formData.date || 'Not specified'}

*Location:* ${formData.location || 'Not specified'}


*Message:*

${formData.message}


━━━━━━━━━━━━━━━━━━━━

_Sent from Brotherhood Travel Website_`;

    const whatsappUrl = `https://wa.me/250786425200?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Opening WhatsApp",
      description: "Your inquiry will be sent via WhatsApp.",
    });
    
    // Detect mobile device for better compatibility
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, use location.href to open WhatsApp app directly
      window.location.href = whatsappUrl;
    } else {
      // On desktop, open in new tab with proper window features
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (whatsappWindow) whatsappWindow.opener = null;
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      location: "",
      message: "",
    });
  };

  return (
    <>
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact us for personalized travel solutions and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Get in touch with our travel experts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone Numbers</h4>
                    <p className="text-muted-foreground">+250 786 425 200</p>
                    <p className="text-muted-foreground">+250 788 485 847</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">brotherhoodcompany<br />200@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday: 24/7</p>
                    <p className="text-muted-foreground">Emergency Services Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">TIN: 121686474</h3>
              <p className="text-primary-foreground/90">
                Licensed and registered travel company providing professional transport and tourism services across Rwanda.
              </p>
            </div>
          </div>

          {/* Contact / Inquiry Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Service Inquiry</CardTitle>
              <CardDescription>Request a service or ask us anything - we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+250 xxx xxx xxx"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vip-transport">VIP Transportation</SelectItem>
                        <SelectItem value="ordinary-transport">Ordinary Transportation</SelectItem>
                        <SelectItem value="airport">Airport Pickup/Drop-off</SelectItem>
                        <SelectItem value="hotel">Hotel Reservations</SelectItem>
                        <SelectItem value="car-rental">Car Rental (Kigali)</SelectItem>
                        <SelectItem value="expert-drivers">Expert Drivers (Driver Guides)</SelectItem>
                        <SelectItem value="party">Party Organizing</SelectItem>
                        <SelectItem value="field-car">Car for Field</SelectItem>
                        <SelectItem value="wedding">Wedding Transportation</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date (Optional)</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="e.g., Kigali, Airport"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your service needs, requirements, budget, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="travel" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send Inquiry"}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-2">
                  For tour bookings, please visit our <a href="/destinations" className="text-primary hover:underline">Destinations page</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Choose Submission Method</AlertDialogTitle>
            <AlertDialogDescription>
              How would you like to submit your inquiry?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleWhatsAppSubmit}
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </AlertDialogAction>
            <AlertDialogAction onClick={handleEmailSubmit}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Contact;
