import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar, Users, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
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
// Additional images for galleries
import akageraPark from "@/assets/akagerapark.jpg";
import akageraNationalPark from "@/assets/akageranationalpark.jpeg";
import big5Animals from "@/assets/big5animals.jpeg";
import lakeMuhazi from "@/assets/lakemuhazi.jpg";
import karongiLakeKivu from "@/assets/karongilakekivu.jpg";
import gishwatiForest from "@/assets/gishwatiforest.jpg";
import gishwatiPark from "@/assets/gishwatipark.jpeg";
import nyungwePark from "@/assets/nyungwepark.jpeg";
import volcanoesNP from "@/assets/volcanoespark.jpeg";
import twinLakes from "@/assets/twinlakes.jpeg";
import genocideMemorial from "@/assets/genocidememorial.jpeg";
import ndabaWaterfalls from "@/assets/ndabawaterfalls.jpg";
import ndabaRocksWaterfalls from "@/assets/ndabarockswaterfalls.jpeg";
import nyanzaRoyalPalace from "@/assets/nyanzaroyalpalace.jpg";
import coffee from "@/assets/coffee.jpg";
import congoNileTrail from "@/assets/congoniletrail.jpg";
import congoNileTrail1 from "@/assets/congoniletrail1.jpeg";
import huye from "@/assets/huye.jpg";
import rusizi from "@/assets/rusizi.jpg";
// River images
import rusiziRiver from "@/assets/rusiziriver.jpg";
import rusiziRiver1 from "@/assets/rusiziriver1.jpg.jpeg";
import rusiziRiver2 from "@/assets/rusiziriver2.jpg";
import akanyaruRiver from "@/assets/akanyaruriver.jpg";
import mukungwaRiver from "@/assets/mukungwariver.jpg";
import mukungwaRiver1 from "@/assets/mukungwariver1.jpeg";
import nyabarongoRiver from "@/assets/nyabarongoriver.jpg";
import nyabarongoRiver1 from "@/assets/nyabarongoriver1.jpeg";
import sebayaRiver from "@/assets/sebayariver.jpeg";
import nileBasin from "@/assets/nilebasin.jpg";
import hiking from "@/assets/hiking.jpeg";

const imageAssetMap: Record<string, string> = {
  "dest-kgl.jpg": destKgl,
  "dest-kivu.jpg": destKivu,
  "dest-nyungwe.jpg": destNyungwe,
  "dest-volcanoes.jpg": destVolcanoes,
  "destination-rwanda.jpg": destRwanda,
  "akagerapark.jpg": akageraPark,
  "karongilakekivu.jpg": karongiLakeKivu,
  "gishwatiforest.jpg": gishwatiForest,
  "huye.jpg": huye,
  "lakemuhazi.jpg": lakeMuhazi,
  "nyanzaroyalpalace.jpg": nyanzaRoyalPalace,
  "coffee.jpg": coffee,
  "congoniletrail.jpg": congoNileTrail,
  "rusizi.jpg": rusizi,
  "twinlakes.jpeg": twinLakes,
  "genocidememorial.jpeg": genocideMemorial,
  "ndabawaterfalls.jpg": ndabaWaterfalls,
  "rusiziriver.jpg": rusiziRiver,
  "akanyaruriver.jpg": akanyaruRiver,
  "mukungwariver.jpg": mukungwaRiver,
  "nyabarongoriver.jpg": nyabarongoRiver,
  "sebayariver.jpeg": sebayaRiver,
  "nilebasin.jpg": nileBasin,
  "hiking.jpeg": hiking,
};

// Destination-specific galleries - maps destination ID to array of images
const destinationGalleries: Record<string, { src: string; alt: string }[]> = {
  "1": [
    { src: destKgl, alt: "Kigali City View" },
    { src: genocideMemorial, alt: "Kigali Genocide Memorial" },
  ],
  "2": [
    { src: destKivu, alt: "Lake Kivu Beach" },
    { src: karongiLakeKivu, alt: "Karongi Lake Kivu Shores" },
  ],
  "3": [
    { src: destNyungwe, alt: "Nyungwe Forest Canopy" },
    { src: nyungwePark, alt: "Nyungwe National Park" },
  ],
  "4": [
    { src: destVolcanoes, alt: "Volcanoes National Park" },
    { src: volcanoesNP, alt: "Mountain Gorilla Habitat" },
  ],
  "5": [
    { src: akageraPark, alt: "Akagera Savannah" },
    { src: akageraNationalPark, alt: "Akagera Wildlife" },
    { src: big5Animals, alt: "Big Five Animals" },
    { src: lakeMuhazi, alt: "Lake Muhazi" },
  ],
  "6": [
    { src: karongiLakeKivu, alt: "Karongi Lake Kivu" },
  ],
  "7": [
    { src: huye, alt: "Huye Museum" },
    { src: nyanzaRoyalPalace, alt: "Nyanza Royal Palace" },
  ],
  "8": [
    { src: gishwatiForest, alt: "Gishwati Forest" },
    { src: gishwatiPark, alt: "Gishwati-Mukura Park" },
  ],
  "9": [
    { src: rusizi, alt: "Rusizi District" },
  ],
  "10": [
    { src: congoNileTrail, alt: "Congo Nile Trail" },
    { src: karongiLakeKivu, alt: "Lake Kivu Shores" },
  ],
  "11": [
    { src: lakeMuhazi, alt: "Lake Muhazi" },
  ],
  "12": [
    { src: nyanzaRoyalPalace, alt: "Nyanza Royal Palace" },
  ],
  "13": [
    { src: coffee, alt: "Coffee Plantation" },
  ],
  "14": [
    { src: twinLakes, alt: "Twin Lakes Burera & Ruhondo" },
  ],
  "15": [
    { src: genocideMemorial, alt: "Kigali Genocide Memorial" },
  ],
  "16": [
    { src: ndabaWaterfalls, alt: "Ndaba Waterfalls" },
    { src: ndabaRocksWaterfalls, alt: "Ndaba Rocks Waterfalls" },
  ],
  "17": [
    { src: rusiziRiver, alt: "Rusizi River" },
    { src: rusiziRiver1, alt: "Rusizi River Views" },
    { src: rusiziRiver2, alt: "Rusizi River Landscape" },
  ],
  "18": [
    { src: akanyaruRiver, alt: "Akanyaru River" },
  ],
  "19": [
    { src: mukungwaRiver, alt: "Mukungwa River" },
    { src: mukungwaRiver1, alt: "Mukungwa River Valley" },
  ],
  "20": [
    { src: nyabarongoRiver, alt: "Nyabarongo River" },
    { src: nyabarongoRiver1, alt: "Nyabarongo River Views" },
  ],
  "21": [
    { src: sebayaRiver, alt: "Sebaya River" },
  ],
  "22": [
    { src: nileBasin, alt: "Nile Basin Connection" },
  ],
  "23": [
    { src: hiking, alt: "Mountain Hiking in Rwanda" },
  ],
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Check if user came from AllDestinations page
  const fromAllDestinations = location.state?.from === '/destinations';

  // Get gallery for current destination
  const destinationGallery = id ? destinationGalleries[id] || [] : [];
  const hasGallery = destinationGallery.length > 1;

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
        title={`${destination.name} Tour Package - Rwanda Tours | Brotherhood Company`}
        description={`Explore ${destination.name} in ${destination.location}. ${destination.description} Book your Rwanda tour package today with Brotherhood Company. ${destination.highlights.slice(0, 3).join(", ")}.`}
        keywords={`${destination.name} tours, ${destination.location} Rwanda, ${destination.category.toLowerCase()} Rwanda, ${destination.highlights.join(", ")}, Rwanda tour packages, ${destination.name.toLowerCase()} guide, best ${destination.name.toLowerCase()} tours, ${destination.location} travel, Rwanda ${destination.category.toLowerCase()}, Brotherhood Company Rwanda`}
        url={`https://brohoodtravel-tour.netlify.app/destination/${destination.id}`}
        image={(() => {
          const parts = destination.image_url.split("/");
          const file = parts[parts.length - 1];
          const localImage = imageAssetMap[file];
          return localImage ? `https://brohoodtravel-tour.netlify.app${destination.image_url}` : destination.image_url;
        })()}
        type="article"
        breadcrumbs={[
          { name: "Home", url: "https://brohoodtravel-tour.netlify.app/" },
          { name: "Destinations", url: "https://brohoodtravel-tour.netlify.app/destinations" },
          { name: destination.name, url: `https://brohoodtravel-tour.netlify.app/destination/${destination.id}` }
        ]}
        article={{
          publishedTime: "2024-01-01T00:00:00Z",
          modifiedTime: new Date().toISOString(),
          section: "Travel Destinations",
          tags: [destination.location, "Rwanda", "Travel", "Tourism", ...destination.highlights.slice(0, 3)]
        }}
        product={{
          name: destination.name,
          price: destination.price_per_person?.replace("$", "").replace(",", "") || "150",
          currency: "USD",
          availability: "https://schema.org/InStock",
          rating: 4.8,
          reviewCount: 25
        }}
        touristDestination={{
          name: destination.name,
          location: destination.location,
          description: destination.description,
          category: destination.category,
          highlights: destination.highlights,
          duration: destination.duration,
          priceRange: destination.price_range
        }}
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

                    {/* Image Gallery Section */}
                    {hasGallery && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-4 flex items-center">
                          <Camera className="h-6 w-6 mr-2" />
                          Photo Gallery
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {destinationGallery.map((image, index) => (
                            <div
                              key={index}
                              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                              onClick={() => setSelectedImageIndex(index)}
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Camera className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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

      {/* Image Viewer Dialog */}
      {selectedImageIndex !== null && (
        <Dialog open={true} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Arrows */}
            {destinationGallery.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev === null ? 0 : (prev - 1 + destinationGallery.length) % destinationGallery.length
                    );
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev === null ? 0 : (prev + 1) % destinationGallery.length
                    );
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            <div className="relative">
              <img
                src={destinationGallery[selectedImageIndex]?.src}
                alt={destinationGallery[selectedImageIndex]?.alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-center text-lg font-semibold">
                  {destinationGallery[selectedImageIndex]?.alt}
                </p>
                <p className="text-white/70 text-center text-sm">
                  {selectedImageIndex + 1} / {destinationGallery.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default DestinationDetails;
