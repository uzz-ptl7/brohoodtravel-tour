import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Brotherhood United Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Brotherhood United
              </h1>
              <p className="text-sm text-muted-foreground">
                Transport & Travel
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="/#destinations"
              className="text-foreground hover:text-primary transition-colors"
            >
              Destinations
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Book Now button - desktop */}
          <div className="hidden lg:block">
            <Button
              variant="travel"
              size="lg"
              onClick={() => (window.location.href = "/#contact")}
            >
              Book Now
            </Button>
          </div>

          {/* Hamburger Menu - mobile */}
          <button
            className="lg:hidden p-2 rounded hover:bg-accent transition"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4">
            <a
              href="/#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="/#destinations"
              className="text-foreground hover:text-primary transition-colors"
            >
              Destinations
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button
              variant="travel"
              size="lg"
              className="w-full"
              onClick={() => (window.location.href = "/#contact")}
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
