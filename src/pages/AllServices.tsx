import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Plane, Hotel, Key, Users, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import toursImg from "@/assets/safarivehicle.jpeg";
import vipImg from "@/assets/viptransport.jpg";
import ordinaryImg from "@/assets/vehicle-fleet.jpg"; // best remaining fleet image for ordinary transport
import airportImg from "@/assets/airport.jpg";
import hotelImg from "@/assets/hotelreservation.jpg";
import rentalImg from "@/assets/carrental.jpg";
import driversImg from "@/assets/expertdriver.jpg";
import partyImg from "@/assets/eventplanning.jpg";
import fieldImg from "@/assets/carforfield.jpg";
import weddingImg from "@/assets/weddingtransport.jpg";

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
    image: string;
    price: string | null;
    priceLabel?: string;
}

const AllServices = () => {
    const navigate = useNavigate();

    const serviceIds = [
        "tours", "vip-transport", "ordinary-transport", "airport",
        "hotel", "car-rental", "expert-drivers", "party", "field-car", "wedding"
    ];

    const handleBookingClick = (index: number) => {
        if (index === 0) {
            // Tours & Travel goes to destinations
            navigate('/destinations');
        } else {
            // Other services go to service booking page
            navigate(`/service-booking/${serviceIds[index]}`);
        }
    };

    const allServices: Service[] = [
        {
            icon: MapPin,
            title: "Tours & Travel",
            description: "Explore Rwanda and neighboring countries with our expertly guided tours covering all major attractions.",
            features: ["Country-wide Tours", "Cross-border Travel", "Cultural Experiences", "Custom Itineraries"],
            image: toursImg,
            price: null,
        },
        {
            icon: Car,
            title: "VIP Transportation",
            description: "Premium vehicle transportation services with professional drivers for your comfort and safety.",
            features: ["Luxury Vehicles", "Professional Drivers", "24/7 Availability", "City Tour Available"],
            image: vipImg,
            price: "$150",
            priceLabel: "City Tour",
        },
        {
            icon: Car,
            title: "Ordinary Transportation",
            description: "Affordable and reliable transportation services for comfortable city tours and local travel.",
            features: ["Comfortable Vehicles", "Experienced Drivers", "City Tours", "Flexible Schedules"],
            image: ordinaryImg,
            price: "$120",
            priceLabel: "City Tour",
        },
        {
            icon: Plane,
            title: "Airport Pickup & Drop-off",
            description: "Reliable airport transfer services ensuring you arrive on time with stress-free pickups and drop-offs.",
            features: ["Meet & Greet Service", "Flight Tracking", "Luggage Assistance", "On-time Guarantee"],
            image: airportImg,
            price: "$70",
        },
        {
            icon: Hotel,
            title: "Hotel Reservations",
            description: "Book the best accommodations across Rwanda. We partner with top hotels for your comfort.",
            features: ["Best Rate Guarantee", "Wide Selection", "Instant Confirmation", "Special Packages"],
            image: hotelImg,
            price: null,
        },
        {
            icon: Key,
            title: "Car Rental (Kigali)",
            description: "Self-drive or chauffeur-driven car rental services with a modern fleet of well-maintained vehicles.",
            features: ["Modern Fleet", "Flexible Rental", "Insurance Included", "Provinces & Foreign Countries: Negotiable"],
            image: rentalImg,
            price: "$150",
        },
        {
            icon: Users,
            title: "Expert Drivers (Driver Guides)",
            description: "Connect with experienced, licensed drivers who know the roads and destinations intimately.",
            features: ["Licensed Professionals", "Local Knowledge", "Multilingual", "Safety Certified"],
            image: driversImg,
            price: "Negotiable",
            priceLabel: "Depends on requirements",
        },
        {
            icon: Users,
            title: "Party Organizing",
            description: "Professional event planning and coordination services to make your celebrations memorable.",
            features: ["Event Planning", "Venue Coordination", "Transportation Logistics", "Custom Packages"],
            image: partyImg,
            price: "Negotiable",
        },
        {
            icon: Car,
            title: "Car for Field",
            description: "Specialized vehicles for field work, research trips, and off-road adventures.",
            features: ["Rugged Vehicles", "Field-Ready", "GPS Equipped", "Flexible Duration"],
            image: fieldImg,
            price: "Negotiable",
        },
        {
            icon: Car,
            title: "Wedding Transportation",
            description: "Elegant and reliable transportation services to make your special day perfect.",
            features: ["Luxury Vehicles", "Decorated Options", "Professional Service", "Timely Coordination"],
            image: weddingImg,
            price: "Negotiable",
        }
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="All Travel Services in Rwanda - Brotherhood Company"
                description="Complete range of professional travel services in Rwanda including VIP transportation, airport transfers, car rentals, hotel reservations, expert driver guides, wedding transport, party organizing, and field vehicles. Available 24/7 for all your travel needs."
                keywords="Rwanda transportation services, car rental Kigali, airport pickup Rwanda, VIP transport Rwanda, wedding car rental Rwanda, party organizing Rwanda, driver guides Rwanda, hotel reservations Rwanda, travel services Rwanda, Brotherhood Company services"
                url="https://brohoodtravel-tour.netlify.app/services"
                breadcrumbs={[
                    { name: "Home", url: "https://brohoodtravel-tour.netlify.app/" },
                    { name: "Services", url: "https://brohoodtravel-tour.netlify.app/services" }
                ]}
            />
            <Header />

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-12">
                        <Button
                            variant="outline"
                            size="sm"
                            className="mb-6"
                            onClick={() => navigate("/")}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>

                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Our Complete Service Portfolio
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Comprehensive travel solutions designed to make your journey smooth, comfortable, and memorable.
                            </p>
                        </div>
                    </div>

                    {/* All Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                                <div className={index === 0 ? 'flex flex-col md:flex-row' : ''}>
                                    <div className={`relative overflow-hidden ${index === 0 ? 'md:w-1/2 h-64 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-tr-none' : 'h-48 rounded-t-lg'}`}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <service.icon className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>

                                    <div className={index === 0 ? 'md:w-1/2 flex flex-col' : ''}>
                                        <CardHeader>
                                            <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                                            <CardDescription className="text-muted-foreground">
                                                {service.description}
                                            </CardDescription>
                                            {service.price && (
                                                <div className="mt-3 pt-3 border-t">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                                                        {service.priceLabel && (
                                                            <span className="text-sm text-muted-foreground">({service.priceLabel})</span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </CardHeader>

                                        <CardContent>
                                            <ul className="space-y-2 mb-4">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button
                                                className="w-full bg-primary hover:bg-primary/90"
                                                onClick={() => handleBookingClick(index)}
                                            >
                                                {index === 0 ? 'Explore Destinations' : 'Book Now'}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Need a Custom Service Package?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Contact us to create a personalized service package that meets your specific needs and budget.
                        </p>
                        <Button
                            size="lg"
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            className="bg-primary hover:bg-primary/90"
                        >
                            Contact Us Today
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllServices;
