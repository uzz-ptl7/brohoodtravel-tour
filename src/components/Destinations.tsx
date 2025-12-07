import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Camera, Calendar, Users, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
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
  category: string;
  description: string;
  image_url: string;
  duration: string;
  max_capacity: number;
  price_range: string;
  highlights: string[];
}

const Destinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  // Main 4 destinations to display on home page
  const mainDestinationIds = ["1", "2", "3", "4"]; // Kigali, Lake Kivu, Nyungwe, Volcanoes

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("/data/destinations.json");
        if (!res.ok) throw new Error("Failed to load destinations JSON");
        const data: Destination[] = await res.json();
        // Filter to show only main 4 destinations
        const mainDestinations = data.filter(dest => mainDestinationIds.includes(dest.id));
        setDestinations(mainDestinations);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section id="destinations" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4 space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover breathtaking landscapes, rich culture, and unforgettable experiences
            across Rwanda and the Great Lakes region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(destination => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={(() => {
                    const parts = destination.image_url.split("/");
                    const file = parts[parts.length - 1];
                    return imageAssetMap[file] || destination.image_url;
                  })()}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                    Up to {destination.max_capacity}
                  </div>
                </div>
                <div className="text-center mb-4 text-sm flex items-center justify-center text-muted-foreground">
                  <Camera className="h-4 w-4 mr-1" />
                  {destination.highlights.length} Activities
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <Button
                  variant="travel"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate(`/destination/${destination.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/destinations")}
          >
            View All Destinations
          </Button>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Don't see your destination? We also offer custom tours to neighboring countries.
            <button
              onClick={() => navigate("/destinations")}
              className="text-primary hover:underline ml-1 font-medium"
            >
              Contact us for special requests →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
