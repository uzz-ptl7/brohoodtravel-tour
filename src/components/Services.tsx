import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Package, Users, ArrowRight } from "lucide-react";
import vehicleFleet1 from "@/assets/vehicle-fleet1.jpg";
import vehicleFleet2 from "@/assets/vehicle-fleet2.jpg";
import vehicleFleet3 from "@/assets/vehicle-fleet3.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Transport Services",
      description: "Professional vehicle rental and transportation for all your travel needs. Modern fleet of well-maintained vehicles.",
      features: ["Airport Transfers", "City Tours", "Long Distance Travel", "24/7 Availability"],
      image: vehicleFleet1,
    },
    {
      icon: Package,
      title: "Travel Packages",
      description: "Carefully curated travel packages to amazing destinations with accommodation, meals, and guided tours included.",
      features: ["All-Inclusive Packages", "Custom Itineraries", "Group Discounts", "Local Guides"],
      image: vehicleFleet2,
    },
    {
      icon: Users,
      title: "Guided Tours",
      description: "Expert-led tours to discover the beauty of Rwanda and neighboring countries with experienced local guides.",
      features: ["Cultural Tours", "Wildlife Safaris", "Adventure Tours", "Educational Trips"],
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="travel" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;