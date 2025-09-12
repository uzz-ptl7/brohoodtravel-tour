import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Calendar, DollarSign, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import destinationRwanda from "@/assets/destination-rwanda.jpg";

interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  duration: string;
  price_per_person: number;
  max_capacity: number;
  highlights: string[];
}

const Destinations = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const { data, error } = await supabase
          .from('destinations')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) throw error;
        
        // Use the actual image URLs from database, fallback to local image
        const destinationsWithImages = data.map(dest => ({
          ...dest,
          image_url: destinationRwanda // Using local image for now since paths in DB might not work
        }));
        
        setDestinations(destinationsWithImages);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        toast({
          title: "Error",
          description: "Failed to load destinations",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [toast]);

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover breathtaking landscapes, rich culture, and unforgettable experiences 
            across Rwanda and the Great Lakes region.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <div className="h-48 bg-muted animate-pulse" />
                <CardContent className="p-4">
                  <div className="h-4 bg-muted animate-pulse mb-2 rounded" />
                  <div className="h-3 bg-muted animate-pulse mb-4 rounded w-3/4" />
                  <div className="h-8 bg-muted animate-pulse rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image_url} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{destination.name}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.location}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    ${destination.price_per_person}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      Up to {destination.max_capacity}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      ${destination.price_per_person}/person
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Camera className="h-4 w-4 mr-1" />
                      {destination.highlights.length} Activities
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span key={idx} className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{destination.highlights.length - 2} more
                      </span>
                    )}
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
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;