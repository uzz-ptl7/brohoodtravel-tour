import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
// TravelTips and FAQSection removed per request
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Brotherhood Company - Travel & Tours in Rwanda"
        description="Experience the best of Rwanda with Brotherhood Company. Professional travel, tours, VIP transportation, airport transfers, hotel reservations, and car rental services across Rwanda and neighboring countries."
        keywords="Rwanda travel, Rwanda tours, Kigali tours, Volcanoes National Park, gorilla trekking, Lake Kivu, Nyungwe Forest, Rwanda safari, car rental Rwanda, airport transfer Kigali, travel Rwanda, Brotherhood Company, VIP transportation Rwanda"
        url="https://brohoodtravel-tour.netlify.app"
      />
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
