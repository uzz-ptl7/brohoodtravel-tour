import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Shield, Star } from "lucide-react";
import heroImage from "@/assets/home-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Brown overlay tint */}
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Journey
            <span className="block text-white/90">Starts Here</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional transport, unforgettable travel packages, and guided tours 
            across beautiful destinations. Safe, reliable, and comfortable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary CTA */}
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Book Transport
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* Secondary CTA */}
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              View Packages
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-white/90">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-white" />
              <span className="text-white/90">5-Star Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6 text-white" />
              <span className="text-white/90">Rwanda & Beyond</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
