import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Brotherhood United Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Brotherhood United</h3>
                <p className="text-primary-foreground/80">Transport & Travel Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Your trusted partner for safe, reliable, and comfortable transportation 
              services across Rwanda and beyond. Experience the difference with our 
              professional travel solutions.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">TIN:</span> 121686474
              </p>
              <p className="text-sm">
                <span className="font-semibold">Licensed:</span> Rwanda Transport Authority
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div className="text-sm">
                  <p>+250 786 425 200</p>
                  <p>+250 788 553 614</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <p className="text-sm">brotherhoodcompany<br />200@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <p className="text-sm">Gasabo - Kicukiro, Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex lg:flex-row flex-col justify-between border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Brotherhood United Company Ltd. All rights reserved.
          </p>
                      
          <p className="text-gray-400 text-sm">
            Made in Rwanda by the{" "}
            <a 
              href="https://www.sitecraftersz.co/" 
              className="underline hover:text-white transition-colors duration-500" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Sitecrafters Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;