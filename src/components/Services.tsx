import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Plane, Hotel, Key, Users, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Use local assets provided in src/assets
import toursImg from "@/assets/toursandtravels.jpg";
import vipImg from "@/assets/viptransport.jpg";
import ordinaryImg from "@/assets/vehicle-fleet.jpg"; // best remaining fleet image for ordinary transport
import airportImg from "@/assets/airport.jpg";
import hotelImg from "@/assets/hotelreservation.jpg";
import rentalImg from "@/assets/carrental.jpg";
import driversImg from "@/assets/expertdriver.jpg";
import partyImg from "@/assets/eventplanning.jpg";
import fieldImg from "@/assets/carforfield.jpg";
import weddingImg from "@/assets/weddingtransport.jpg";

const Services = () => {
  const navigate = useNavigate();

  const serviceIdMap: Record<string, string> = {
    "Tours & Travel": "tours",
    "VIP Transportation": "vip-transport",
    "Ordinary Transportation": "ordinary-transport",
    "Airport Pickup & Drop-off": "airport",
    "Hotel Reservations": "hotel",
    "Car Rental (Kigali)": "car-rental",
    "Expert Drivers (Driver Guides)": "expert-drivers",
    "Party Organizing": "party",
    "Car for Field": "field-car",
    "Wedding Transportation": "wedding",
  };

  const handleBookingClick = (serviceTitle: string) => {
    if (serviceTitle === "Tours & Travel") {
      // Tours & Travel goes to destinations
      navigate('/destinations');
    } else {
      // Other services go to service booking page
      const serviceId = serviceIdMap[serviceTitle];
      navigate(`/service-booking/${serviceId}`);
    }
  };

  const services = [
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

  // Show only featured services: Tours & Travel + 3 major services
  // [0] Tours & Travel, [1] VIP Transportation, [5] Car Rental (Kigali), [3] Airport Pickup
  const featuredServices = [services[0], services[1], services[5], services[3]];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey smooth,
            comfortable, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
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
                      onClick={() => handleBookingClick(service.title)}
                    >
                      {service.title === "Tours & Travel" ? 'Explore Destinations' : 'Book Now'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => navigate("/services")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;