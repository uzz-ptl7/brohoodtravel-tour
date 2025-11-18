import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Camera, Calendar, Users, Search, Filter, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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

const AllDestinations = () => {
    const navigate = useNavigate();
    const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
    const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Wildlife Safari", "Nature & Wildlife", "Beach & Lake", "City Tour", "Cultural", "Historical", "Adventure"];

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const res = await fetch("/data/destinations.json");
                if (!res.ok) throw new Error("Failed to load destinations JSON");
                const data: Destination[] = await res.json();
                setAllDestinations(data);
                setFilteredDestinations(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        let filtered = allDestinations;

        // Filter by category
        if (selectedCategory !== "All") {
            filtered = filtered.filter(dest => dest.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(dest =>
                dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        setFilteredDestinations(filtered);
    }, [searchQuery, selectedCategory, allDestinations]);

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="All Destinations - Brotherhood Company Tours"
                description="Browse all travel destinations in Rwanda including Kigali, Volcanoes National Park, Lake Kivu, Nyungwe Forest, Akagera, and more. Find your perfect adventure."
                keywords="Rwanda destinations, all Rwanda tours, Rwanda travel packages, gorilla trekking, Lake Kivu, Nyungwe Forest, Akagera safari"
                url="https://brohoodtravel-tour.netlify.app/destinations"
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
                                All Rwanda Destinations
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Discover breathtaking landscapes, rich culture, and unforgettable experiences
                                across Rwanda and the Great Lakes region.
                            </p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12 space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search destinations, locations, or activities..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 text-base"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2">
                            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "travel" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="whitespace-nowrap transition-all"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>

                        {/* Results Count */}
                        <div className="text-center text-muted-foreground">
                            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[...Array(12)].map((_, i) => (
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
                    ) : filteredDestinations.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-muted-foreground mb-4">No destinations found matching your criteria.</p>
                            <Button variant="travel" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                                Clear Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredDestinations.map(destination => (
                                <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={destination.image_url}
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
                    )}

                    {/* Custom Destination Request */}
                    <Card className="max-w-4xl mx-auto mt-12 border-primary/20 bg-primary/5">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                Don't See Your Destination?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                While we're based in Rwanda, we can arrange special tours to neighboring countries
                                including Uganda, Tanzania, Burundi, and the Democratic Republic of Congo.
                                Contact us with your dream destination, and we'll find you the perfect solution!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="travel"
                                    size="lg"
                                    onClick={() => {
                                        const whatsappUrl = `https://wa.me/250738019704?text=${encodeURIComponent("Hi! I'm interested in a custom destination not listed on your website.")}`;
                                        window.open(whatsappUrl, "_blank");
                                    }}
                                >
                                    WhatsApp Us
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                >
                                    <a href="mailto:brotherhoodcompany200@gmail.com?subject=Custom Destination Request&body=Hi! I'm interested in a custom destination not listed on your website.">
                                        Email Us
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllDestinations;
