import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ArrowLeft, Calendar, Mail, MessageCircle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

interface ServiceInfo {
    id: string;
    title: string;
    description: string;
    price?: string;
    priceLabel?: string;
}

const services: ServiceInfo[] = [
    { id: "vip-transport", title: "VIP Transportation", description: "Premium vehicle transportation with professional drivers", price: "$150", priceLabel: "City Tour" },
    { id: "ordinary-transport", title: "Ordinary Transportation", description: "Affordable and reliable transportation services", price: "$120", priceLabel: "City Tour" },
    { id: "airport", title: "Airport Pickup & Drop-off", description: "Reliable airport transfer services", price: "$70" },
    { id: "hotel", title: "Hotel Reservations", description: "Book the best accommodations across Rwanda" },
    { id: "car-rental", title: "Car Rental (Kigali)", description: "Self-drive or chauffeur-driven car rental services", price: "$150" },
    { id: "expert-drivers", title: "Expert Drivers (Driver Guides)", description: "Professional drivers with extensive local knowledge", price: "$100" },
    { id: "party", title: "Party Organizing", description: "Professional event planning and party organization" },
    { id: "field-car", title: "Car for Field", description: "Reliable transportation for field work and research" },
    { id: "wedding", title: "Wedding Transportation", description: "Elegant wedding transportation services" },
];

const ServiceBooking = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();

    const [service, setService] = useState<ServiceInfo | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [showSubmitDialog, setShowSubmitDialog] = useState(false);

    const [formData, setFormData] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        serviceDate: "",
        serviceLocation: "",
        numberOfPeople: "1",
        message: "",
    });

    useEffect(() => {
        const foundService = services.find((s) => s.id === serviceId) || null;
        setService(foundService);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [serviceId]);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!service) return;
        setShowSubmitDialog(true);
    };

    const handleEmailSubmit = async () => {
        if (!service) return;
        setShowSubmitDialog(false);
        setSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mbdrnbnw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    service: service.title,
                    serviceDescription: service.description,
                    _formType: "Service Booking Form",
                    _subject: `New Service Booking - ${service.title}`
                }),
            });

            if (response.ok) {
                toast({
                    title: "Booking Submitted!",
                    description: `Your booking request for ${service.title} has been received. You will receive confirmation soon.`,
                });

                // Reset form
                setFormData({
                    customerName: "",
                    customerEmail: "",
                    customerPhone: "",
                    serviceDate: "",
                    serviceLocation: "",
                    numberOfPeople: "1",
                    message: "",
                });

                // Optional: Redirect after a short delay
                setTimeout(() => {
                    navigate("/services");
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
        if (!service) return;
        const phoneNumber = "250786425200";

        const message = `SERVICE BOOKING REQUEST

SERVICE: ${service.title}
${service.price ? `Price: ${service.price}${service.priceLabel ? ` (${service.priceLabel})` : ''}
` : ''}
CUSTOMER:
Name: ${formData.customerName}
Email: ${formData.customerEmail}
Phone: ${formData.customerPhone}
Date: ${formData.serviceDate || 'Not specified'}
Location: ${formData.serviceLocation || 'Not specified'}
People: ${formData.numberOfPeople}

Message: ${formData.message || 'None'}`;

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const mobileUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        const desktopAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const urlToOpen = isMobile ? mobileUrl : desktopAppUrl;

        if (isMobile) {
            window.open(urlToOpen, '_blank');
        } else {
            window.location.href = urlToOpen;
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
            serviceDate: "",
            serviceLocation: "",
            numberOfPeople: "1",
            message: "",
        });
    };

    if (!service) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
                        <Button onClick={() => navigate("/services")} variant="travel">
                            View All Services
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={`Book ${service.title} - Brotherhood Company`}
                description={`Book ${service.title} service in Rwanda - ${service.description}. ${service.price ? `Starting from ${service.price}. ` : ''}Professional and reliable service with Brotherhood Company.`}
                keywords={`${service.title} Rwanda, book ${service.title}, Rwanda ${service.id}, Brotherhood Company ${service.title}, Rwanda travel services`}
                url={`https://brotherhoodunitedcompanyltd.com/service-booking/${service.id}`}
                breadcrumbs={[
                    { name: "Home", url: "https://brotherhoodunitedcompanyltd.com/" },
                    { name: "Services", url: "https://brotherhoodunitedcompanyltd.com/services" },
                    { name: service.title, url: `https://brotherhoodunitedcompanyltd.com/service-booking/${service.id}` }
                ]}
            />
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Button
                            variant="outline"
                            size="sm"
                            className="mb-4"
                            onClick={() => navigate("/services")}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Services
                        </Button>
                        <h1 className="text-4xl font-bold text-foreground mb-4">Book Service</h1>
                        <p className="text-xl text-muted-foreground">Complete your booking for {service.title}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Booking Form */}
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Booking Details</CardTitle>
                                <CardDescription>Fill out your information and service requirements</CardDescription>
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
                                            <Label htmlFor="serviceDate">Preferred Date</Label>
                                            <Input
                                                id="serviceDate"
                                                type="date"
                                                value={formData.serviceDate}
                                                onChange={(e) => handleChange("serviceDate", e.target.value)}
                                                min={new Date().toISOString().split("T")[0]}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="serviceLocation">Service Location</Label>
                                            <Input
                                                id="serviceLocation"
                                                value={formData.serviceLocation}
                                                onChange={(e) => handleChange("serviceLocation", e.target.value)}
                                                placeholder="e.g., Kigali—Kiyovu, Airport"
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
                                                    {Array.from({ length: 20 }, (_, i) => (
                                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                            {i + 1} {i === 0 ? "Person" : "People"}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Additional Requirements</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            placeholder="Any special requests, pickup time, destinations, or other details..."
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
                                <CardDescription>Review your service details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {service.price && (
                                    <div className="bg-primary/10 rounded-lg p-6 text-center mb-6">
                                        <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                                        <p className="text-4xl font-bold text-primary mb-1">{service.price}</p>
                                        {service.priceLabel && (
                                            <p className="text-sm text-muted-foreground">{service.priceLabel}</p>
                                        )}
                                    </div>
                                )}

                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                                </div>

                                <div className="space-y-3">
                                    {formData.serviceDate && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground flex items-center">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                Date:
                                            </span>
                                            <span className="font-medium">{formData.serviceDate}</span>
                                        </div>
                                    )}

                                    {formData.serviceLocation && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground flex items-center">
                                                <MapPin className="h-4 w-4 mr-2" />
                                                Location:
                                            </span>
                                            <span className="font-medium">{formData.serviceLocation}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">People:</span>
                                        <span className="font-medium">
                                            {formData.numberOfPeople} {parseInt(formData.numberOfPeople) === 1 ? "Person" : "People"}
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-accent/10 p-4 rounded-lg">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Note:</strong> This is a booking request. Our team will contact you within 24 hours to confirm availability and finalize details.
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

export default ServiceBooking;
