import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
// TravelTips removed per request
import destKgl from "@/assets/dest-kgl.jpg";
import destKivu from "@/assets/dest-kivu.jpg";
import destNyungwe from "@/assets/dest-nyungwe.jpg";
import destVolcanoes from "@/assets/dest-volcanoes.jpg";
import destRwanda from "@/assets/destination-rwanda.jpg";

const imageAssetMap: Record<string, string> = {
  "dest-kgl.jpg": destKgl,
  "dest-kivu.jpg": destKivu,
  "dest-nyungwe.jpg": destNyungwe,
  "dest-volcanoes.jpg": destVolcanoes,
  "destination-rwanda.jpg": destRwanda,
};

interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  duration: string;
  max_capacity: number;
  highlights: string[];
  price_per_person?: string;
  price_details?: string;
}

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [destination, setDestination] = useState<Destination | null>(null);
  
  // Check if user came from AllDestinations page
  const fromAllDestinations = location.state?.from === '/destinations';

  useEffect(() => {
    fetch("/data/destinations.json")
      .then(res => res.json())
      .then((data: Destination[]) => {
        const dest = data.find(d => d.id === id) || null;
        setDestination(dest);
      })
      .catch(err => {
        console.error("Failed to load destinations:", err);
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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
      <SEO
        title={`${destination.name} - Brotherhood Company Tours`}
        description={destination.description}
        keywords={`${destination.name}, ${destination.location}, Rwanda travel, ${destination.highlights.join(", ")}`}
        url={`https://brohoodtravel-tour.netlify.app/destination/${destination.id}`}
        image={destination.image_url}
        type="article"
      />
      <Header />

      <main>
        <div className="relative h-96 overflow-hidden">
          <img
            src={(() => {
              const parts = destination.image_url.split("/");
              const file = parts[parts.length - 1];
              return imageAssetMap[file] || destination.image_url;
            })()}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <Button
              variant="outline"
              size="sm"
              className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/80"
              onClick={() => navigate(fromAllDestinations ? '/destinations' : '/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {fromAllDestinations ? 'Back to Destinations' : 'Back to Home'}
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold">{destination.name}</h1>
            <div className="flex items-center text-lg text-white/90">
              <MapPin className="h-5 w-5 mr-2" />
              {destination.location}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">About This Destination</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {destination.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold mb-1">Duration</h3>
                        <p className="text-muted-foreground">{destination.duration}</p>
                      </div>

                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold mb-1">Group Size</h3>
                        <p className="text-muted-foreground">Up to {destination.max_capacity} people</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Camera className="h-6 w-6 mr-2" />
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {destination.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Share */}
                    <div className="flex items-center justify-between border-t pt-6">
                      <h4 className="font-semibold">Share this destination:</h4>
                      <SocialShare
                        url={`https://brohoodtravel-tour.netlify.app/destination/${destination.id}`}
                        title={destination.name}
                        description={destination.description}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg sticky top-8">
                  <CardContent className="p-6">
                    {destination.price_per_person && (
                      <div className="mb-6 pb-6 border-b">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">From</p>
                          <p className="text-4xl font-bold text-primary mb-2">{destination.price_per_person}</p>
                          <p className="text-sm text-muted-foreground">per person</p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{destination.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Max Group:</span>
                        <span className="font-medium">{destination.max_capacity} people</span>
                      </div>
                      {destination.price_details && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Includes:</span>
                          <span className="font-medium text-right">{destination.price_details}</span>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="travel"
                      size="lg"
                      className="w-full mb-4"
                      onClick={() => navigate(`/booking/${destination.id}`)}
                    >
                      Book Now
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          const element = document.querySelector('#contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips removed */}
      </main>

      <Footer />
    </div>
  );
};

export default DestinationDetails;
