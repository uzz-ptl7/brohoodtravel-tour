import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

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
              className="w-[50px] h-[50px] rounded-full object-cover"
            />

            <div>
              <h1 className="text-xl font-bold text-foreground">
                Brotherhood United
              </h1>
              <p className="text-sm text-muted-foreground">
                Company LTD
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="/#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="/#destinations"
              onClick={(e) => handleNavClick(e, '#destinations')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Destinations
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
                setMobileMenuOpen(false);
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Book Now button - desktop */}
          <div className="hidden lg:block">
            <Button
              variant="travel"
              size="lg"
              onClick={() => (window.location.href = "/destinations")}
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
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="/#destinations"
              onClick={(e) => handleNavClick(e, '#destinations')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Destinations
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
            <Button
              variant="travel"
              size="lg"
              className="w-full"
              onClick={() => (window.location.href = "/destinations")}
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
