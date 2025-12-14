import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
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
        faq={[
          { question: "What services does Brotherhood Company offer?", answer: "We offer comprehensive travel services including guided tours, VIP transportation, ordinary transportation, airport transfers, car rentals, hotel reservations, expert drivers, and event organizing across Rwanda and neighboring countries." },
          { question: "Where is Brotherhood Company located?", answer: "Brotherhood Company is based in Kigali, Rwanda. We operate throughout Rwanda and offer tours to neighboring countries." },
          { question: "How can I book a tour with Brotherhood Company?", answer: "You can book a tour by browsing our destinations, clicking on your preferred destination, and filling out the booking form. Alternatively, contact us via WhatsApp at +250786425200 or email at brotherhoodcompany200@gmail.com." },
          { question: "Do you offer gorilla trekking tours?", answer: "Yes, we offer gorilla trekking tours in Volcanoes National Park. Our packages include permits, professional guides, transportation, and accommodation." },
          { question: "What is included in your tour packages?", answer: "Our tour packages typically include professional guides, comfortable transportation, entrance fees, and can be customized to include accommodation, meals, and additional activities based on your preferences." }
        ]}
      />
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
