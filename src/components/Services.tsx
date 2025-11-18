import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Plane, Hotel, Key, Users, MapPin, ArrowRight } from "lucide-react";
import vehicleFleet1 from "@/assets/vehicle-fleet1.jpg";
import vehicleFleet2 from "@/assets/vehicle-fleet2.jpg";
import vehicleFleet3 from "@/assets/vehicle-fleet3.jpg";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Tours & Travel",
      description: "Explore Rwanda and neighboring countries with our expertly guided tours covering all major attractions.",
      features: ["Country-wide Tours", "Cross-border Travel", "Cultural Experiences", "Custom Itineraries"],
      image: vehicleFleet1,
    },
    {
      icon: Car,
      title: "VIP Transportation",
      description: "Premium vehicle transportation services with professional drivers for your comfort and safety.",
      features: ["Luxury Vehicles", "Professional Drivers", "24/7 Availability", "Airport Services"],
      image: vehicleFleet2,
    },
    {
      icon: Plane,
      title: "Airport Picking & Dropping",
      description: "Reliable airport transfer services ensuring you arrive on time with stress-free pickups and drop-offs.",
      features: ["Meet & Greet Service", "Flight Tracking", "Luggage Assistance", "On-time Guarantee"],
      image: vehicleFleet3,
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Book the best accommodations across Rwanda. We partner with top hotels for your comfort.",
      features: ["Best Rate Guarantee", "Wide Selection", "Instant Confirmation", "Special Packages"],
      image: vehicleFleet1,
    },
    {
      icon: Key,
      title: "Car Rental",
      description: "Self-drive or chauffeur-driven car rental services with a modern fleet of well-maintained vehicles.",
      features: ["Modern Fleet", "Flexible Rental", "Insurance Included", "GPS Navigation"],
      image: vehicleFleet2,
    },
    {
      icon: Users,
      title: "Expert Drivers",
      description: "Connect with experienced, licensed drivers who know the roads and destinations intimately.",
      features: ["Licensed Professionals", "Local Knowledge", "Multilingual", "Safety Certified"],
      image: vehicleFleet3,
    }
  ];

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
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;