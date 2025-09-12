import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Years of Experience", value: "10+", icon: Award },
    { label: "Happy Customers", value: "2,000+", icon: Users },
    { label: "Destinations Covered", value: "50+", icon: MapPin },
    { label: "Customer Rating", value: "4.9/5", icon: Star }
  ];

  const team = [
    {
      name: "Jean Baptiste",
      role: "Founder & CEO",
      experience: "15+ years in tourism",
      specialties: ["Gorilla Trekking", "Cultural Tours", "Adventure Travel"]
    },
    {
      name: "Marie Claire",
      role: "Operations Manager", 
      experience: "12+ years in travel operations",
      specialties: ["Group Coordination", "Logistics", "Customer Service"]
    },
    {
      name: "Emmanuel",
      role: "Lead Tour Guide",
      experience: "8+ years guiding experience",
      specialties: ["Wildlife Tours", "Photography", "Local Culture"]
    }
  ];

  const services = [
    "Professional licensed tour guides",
    "Modern, well-maintained vehicle fleet",
    "24/7 customer support and emergency assistance", 
    "Customized itinerary planning",
    "Group and individual tour options",
    "Airport pickup and drop-off services",
    "Accommodation booking assistance",
    "Travel insurance guidance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              About <span className="text-primary">Brotherhood Company</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Your trusted partner for unforgettable travel experiences across Rwanda and the Great Lakes region. 
              We've been creating memories and connecting cultures since 2014.
            </p>
            <Button variant="travel" size="lg" onClick={() => navigate('/#contact')}>
              Start Your Journey
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2014 by passionate travel enthusiasts, Brotherhood Company began as a small 
                  family business with a simple mission: to showcase the incredible beauty and rich culture 
                  of Rwanda to the world.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Over the years, we've grown from a local transport service to a comprehensive travel 
                  company, but our commitment to personalized service and authentic experiences remains unchanged. 
                  We believe that travel has the power to transform lives and build bridges between cultures.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we're proud to be one of Rwanda's most trusted travel partners, with proper licensing 
                  (TIN: 121686474) and a track record of creating unforgettable memories for thousands of visitors.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/src/assets/destination-rwanda.jpg" 
                  alt="Rwanda landscape" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                  <p className="text-2xl font-bold">2014</p>
                  <p className="text-sm">Est.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive travel services designed to make your journey seamless and memorable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced professionals dedicated to making your travel dreams come true.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 text-center">
                      {member.experience}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Rwanda?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Let us help you plan the perfect adventure. Our experienced team is ready to create 
              a customized itinerary that matches your interests and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+250 786 425 200</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>brotherhoodcompany200@gmail.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/')}
              >
                View Destinations
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;