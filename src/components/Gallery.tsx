import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, X, MapPin, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import gallery images from assets
import volcanoesImg from "@/assets/volcanoespark.jpeg";
import akageraImg from "@/assets/akageranationalpark.jpeg";
import akageraParkImg from "@/assets/akagerapark.jpg";
import nyungweImg from "@/assets/nyungwepark.jpeg";
import twinlakesImg from "@/assets/twinlakes.jpeg";
import lakeMuhaziImg from "@/assets/lakemuhazi.jpg";
import karongiImg from "@/assets/karongilakekivu.jpg";
import gishwatiImg from "@/assets/gishwatipark.jpeg";
import gishwatiForestImg from "@/assets/gishwatiforest.jpg";
import genocideImg from "@/assets/genocidememorial.jpeg";
import nyanzaImg from "@/assets/nyanzaroyalpalace.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import hikingImg from "@/assets/hiking.jpeg";
import safariPeopleImg from "@/assets/safaricarwithpeople.jpg";
import safariVehicleImg from "@/assets/safarivehicle.jpeg";
import destKglImg from "@/assets/dest-kgl.jpg";
import destKivuImg from "@/assets/dest-kivu.jpg";
import destNyungweImg from "@/assets/dest-nyungwe.jpg";
import destVolcanoesImg from "@/assets/dest-volcanoes.jpg";
import destRwandaImg from "@/assets/destination-rwanda.jpg";
import congoNileImg from "@/assets/congoniletrail.jpg";
import huyeImg from "@/assets/huye.jpg";
import rusiziImg from "@/assets/rusizi.jpg";
import big5Img from "@/assets/big5animals.jpeg";
import buhangeImg from "@/assets/buhangaecopark.jpeg";
import shoebillImg from "@/assets/shoebillstork.jpeg";
import eagleImg from "@/assets/africanfisheagle.jpeg";
import turacoImg from "@/assets/greatblueturaco.jpeg";
import craneImg from "@/assets/greycrownedcrane.jpeg";
import martialEagleImg from "@/assets/martialeagle.jpeg";
import babblerImg from "@/assets/redcollardbabbler.jpeg";
import sunbirdImg from "@/assets/regalsunbird.jpeg";
import rwenzoriTuracoImg from "@/assets/rwenzorituraco.jpeg";
import waterfallImg from "@/assets/ndabarockswaterfalls.jpeg";
import ndabaWaterfallsImg from "@/assets/ndabawaterfalls.jpg";
import nyanzaHotelImg from "@/assets/nyanzaheritagehotel.jpeg";
import rwandaArtImg from "@/assets/rwandaartmeseum.jpeg";
import richardKandtImg from "@/assets/richardkandtmeseum.jpeg";

interface GalleryProps {
    initialOpen?: boolean;
    advertisementMode?: boolean;
}

const Gallery = ({ initialOpen = false, advertisementMode = false }: GalleryProps) => {
    const navigate = useNavigate();
    const [showFullGallery, setShowFullGallery] = useState(initialOpen);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isAdvertMode, setIsAdvertMode] = useState(advertisementMode);

    // Gallery categories
    const categories = ["All", "National Parks", "Lakes & Waterfalls", "Cultural Sites", "Wildlife & Birds", "Activities"];

    // Preview images for home page (6 images)
    const previewGallery = [
        { src: volcanoesImg, alt: "Volcanoes National Park", title: "Volcanoes National Park" },
        { src: akageraImg, alt: "Akagera National Park", title: "Akagera National Park" },
        { src: nyungweImg, alt: "Nyungwe Forest", title: "Nyungwe Forest" },
        { src: twinlakesImg, alt: "Twin Lakes", title: "Twin Lakes" },
        { src: genocideImg, alt: "Genocide Memorial", title: "Genocide Memorial" },
        { src: safariPeopleImg, alt: "Safari Adventure", title: "Safari Adventure" },
    ];

    // Full gallery with all images, categories, and location info
    const fullGallery = [
        { src: volcanoesImg, alt: "Volcanoes National Park", title: "Volcanoes National Park", category: "National Parks", location: "Musanze, Northern Rwanda" },
        { src: destVolcanoesImg, alt: "Volcanoes Park Views", title: "Volcanoes Park Views", category: "National Parks", location: "Musanze, Northern Rwanda" },
        { src: akageraImg, alt: "Akagera National Park", title: "Akagera National Park", category: "National Parks", location: "Eastern Rwanda" },
        { src: akageraParkImg, alt: "Akagera Wildlife Safari", title: "Akagera Wildlife Safari", category: "National Parks", location: "Eastern Rwanda" },
        { src: big5Img, alt: "Big Five Animals", title: "Big Five Animals", category: "Wildlife & Birds", location: "Akagera National Park" },
        { src: nyungweImg, alt: "Nyungwe Forest", title: "Nyungwe Forest", category: "National Parks", location: "Southern Rwanda" },
        { src: destNyungweImg, alt: "Nyungwe Canopy Walk", title: "Nyungwe Canopy Walk", category: "National Parks", location: "Nyungwe Forest, Southern Rwanda" },
        { src: twinlakesImg, alt: "Twin Lakes Burera & Ruhondo", title: "Twin Lakes", category: "Lakes & Waterfalls", location: "Northern Rwanda" },
        { src: lakeMuhaziImg, alt: "Lake Muhazi", title: "Lake Muhazi", category: "Lakes & Waterfalls", location: "Eastern Province" },
        { src: karongiImg, alt: "Karongi Lake Kivu", title: "Karongi Lake Kivu", category: "Lakes & Waterfalls", location: "Karongi, Western Rwanda" },
        { src: destKivuImg, alt: "Lake Kivu Beaches", title: "Lake Kivu Beaches", category: "Lakes & Waterfalls", location: "Rubavu & Karongi" },
        { src: gishwatiImg, alt: "Gishwati-Mukura Park", title: "Gishwati-Mukura Park", category: "National Parks", location: "Western Rwanda" },
        { src: gishwatiForestImg, alt: "Gishwati Forest Trail", title: "Gishwati Forest", category: "National Parks", location: "Western Rwanda" },
        { src: genocideImg, alt: "Kigali Genocide Memorial", title: "Genocide Memorial", category: "Cultural Sites", location: "Kigali City" },
        { src: destKglImg, alt: "Kigali City", title: "Kigali City", category: "Cultural Sites", location: "Kigali, Rwanda's Capital" },
        { src: destRwandaImg, alt: "Destination Rwanda", title: "Discover Rwanda", category: "Activities", location: "Across Rwanda" },
        { src: nyanzaImg, alt: "Nyanza Royal Palace", title: "Nyanza Royal Palace", category: "Cultural Sites", location: "Nyanza, Southern Province" },
        { src: nyanzaHotelImg, alt: "Nyanza Heritage Hotel", title: "Nyanza Heritage Hotel", category: "Cultural Sites", location: "Nyanza" },
        { src: huyeImg, alt: "Huye Cultural Experience", title: "Huye Cultural Sites", category: "Cultural Sites", location: "Huye (Butare), Southern Rwanda" },
        { src: rwandaArtImg, alt: "Rwanda Art Museum", title: "Rwanda Art Museum", category: "Cultural Sites", location: "Huye" },
        { src: richardKandtImg, alt: "Richard Kandt Museum", title: "Richard Kandt Museum", category: "Cultural Sites", location: "Kigali City" },
        { src: coffeeImg, alt: "Rwanda Coffee Plantations", title: "Coffee Experience", category: "Activities", location: "Various Locations" },
        { src: congoNileImg, alt: "Congo Nile Trail", title: "Congo Nile Trail", category: "Activities", location: "Lake Kivu Shoreline" },
        { src: rusiziImg, alt: "Rusizi District", title: "Rusizi District", category: "Cultural Sites", location: "Rusizi, Western Rwanda" },
        { src: waterfallImg, alt: "Ndaba Rocks Waterfalls", title: "Ndaba Rocks Waterfalls", category: "Lakes & Waterfalls", location: "Northern Rwanda" },
        { src: ndabaWaterfallsImg, alt: "Ndaba Waterfalls", title: "Ndaba Waterfalls", category: "Lakes & Waterfalls", location: "Musanze, Northern Rwanda" },
        { src: hikingImg, alt: "Mountain Hiking", title: "Hiking Adventures", category: "Activities", location: "Various Mountain Regions" },
        { src: safariPeopleImg, alt: "Safari Tours", title: "Safari Adventure", category: "Activities", location: "Akagera & Volcanoes" },
        { src: safariVehicleImg, alt: "Safari Vehicle", title: "Safari Experience", category: "Activities", location: "National Parks" },
        { src: buhangeImg, alt: "Buhanga Eco Park", title: "Buhanga Eco Park", category: "National Parks", location: "Musanze" },
        { src: shoebillImg, alt: "Shoebill Stork", title: "Shoebill Stork", category: "Wildlife & Birds", location: "Akagera National Park" },
        { src: eagleImg, alt: "African Fish Eagle", title: "African Fish Eagle", category: "Wildlife & Birds", location: "Akagera & Lake Kivu" },
        { src: turacoImg, alt: "Great Blue Turaco", title: "Great Blue Turaco", category: "Wildlife & Birds", location: "Nyungwe Forest" },
        { src: craneImg, alt: "Grey Crowned Crane", title: "Grey Crowned Crane", category: "Wildlife & Birds", location: "Akagera National Park" },
        { src: martialEagleImg, alt: "Martial Eagle", title: "Martial Eagle", category: "Wildlife & Birds", location: "Akagera National Park" },
        { src: babblerImg, alt: "Red-collared Babbler", title: "Red-collared Babbler", category: "Wildlife & Birds", location: "Nyungwe & Gishwati Forests" },
        { src: sunbirdImg, alt: "Regal Sunbird", title: "Regal Sunbird", category: "Wildlife & Birds", location: "Nyungwe Forest" },
        { src: rwenzoriTuracoImg, alt: "Rwenzori Turaco", title: "Rwenzori Turaco", category: "Wildlife & Birds", location: "Nyungwe & Volcanoes" },
    ];

    // Filter gallery based on selected category
    const filteredGallery = selectedCategory === "All"
        ? fullGallery
        : fullGallery.filter(item => item.category === selectedCategory);

    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Explore Rwanda
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover the beauty and diversity of Rwanda through our lens
                    </p>
                </div>

                {/* Preview Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {previewGallery.map((image, index) => (
                        <Card
                            key={index}
                            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <CardContent className="p-0 relative aspect-[4/3]">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-semibold text-sm md:text-base">
                                            {image.title}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View Full Gallery Button */}
                <div className="text-center">
                    <Button
                        size="lg"
                        variant="travel"
                        onClick={(e) => {
                            const target = e.currentTarget;
                            const advertMode = target.getAttribute('data-advert-mode') === 'true';
                            setIsAdvertMode(advertMode);
                            setShowFullGallery(true);
                            // Reset the attribute after use
                            target.removeAttribute('data-advert-mode');
                        }}
                        className="px-8"
                        data-gallery-trigger
                    >
                        View Full Gallery
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Full Gallery Dialog */}
            <Dialog open={showFullGallery} onOpenChange={setShowFullGallery}>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    {isAdvertMode ? (
                        /* Advertisement Mode Header */
                        <div className="bg-gradient-to-r from-primary to-primary/80 -mx-6 -mt-6 px-6 py-6 mb-4 text-white rounded-t-lg">
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex-1">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
                                        <Camera className="h-8 w-8" />
                                        Rwanda Photo Gallery
                                    </h2>
                                    <p className="text-white/90 text-lg">
                                        Browse stunning visuals of Rwanda's breathtaking landscapes, wildlife, and cultural treasures. Get inspired for your next adventure!
                                    </p>
                                </div>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => {
                                        setShowFullGallery(false);
                                        setIsAdvertMode(false);
                                        navigate('/destinations');
                                    }}
                                    className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                                >
                                    Book Destination Visit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        /* Normal Gallery Mode Header */
                        <DialogHeader>
                            <DialogTitle className="text-3xl mb-4">Rwanda Photo Gallery</DialogTitle>
                        </DialogHeader>
                    )}

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "travel" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="text-xs md:text-sm"
                            >
                                {category}
                                {category !== "All" && (
                                    <Badge variant="secondary" className="ml-2">
                                        {fullGallery.filter(item => item.category === category).length}
                                    </Badge>
                                )}
                            </Button>
                        ))}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                        {isAdvertMode ? (
                            <span className="font-medium">📸 {filteredGallery.length} stunning {filteredGallery.length === 1 ? 'photo' : 'photos'} • Click any image for a closer look • Filter by category above</span>
                        ) : (
                            <span>Showing {filteredGallery.length} {filteredGallery.length === 1 ? 'photo' : 'photos'}</span>
                        )}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {filteredGallery.map((image, index) => (
                            <Card
                                key={index}
                                className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <CardContent className="p-0 relative aspect-square">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3">
                                            <p className="text-white font-semibold text-sm mb-1">
                                                {image.title}
                                            </p>
                                            <div className="flex items-start gap-1">
                                                <MapPin className="h-3 w-3 text-white/90 flex-shrink-0 mt-0.5" />
                                                <p className="text-white/90 text-xs leading-tight">
                                                    {image.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Bottom CTA - Only show in normal mode */}
                    {!isAdvertMode && (
                        <div className="mt-6 text-center border-t pt-6">
                            <p className="text-muted-foreground mb-4">Ready to explore these amazing destinations?</p>
                            <Button
                                size="lg"
                                variant="travel"
                                onClick={() => {
                                    setShowFullGallery(false);
                                    navigate('/destinations');
                                }}
                                className="px-8"
                            >
                                Explore All Destinations
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Image Preview Dialog */}
            <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0 bg-black/95">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 z-50 text-white hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-6 w-6" />
                    </Button>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Full size preview"
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Gallery;
