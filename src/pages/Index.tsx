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
        title="Rwanda Tours & Travel | #1 Gorilla Trekking, Safari & Lake Kivu Tours - Brotherhood Company"
        description="Book authentic Rwanda tours with Brotherhood Company - #1 licensed tour operator. Gorilla trekking Volcanoes National Park, Akagera Big Five safari, Lake Kivu beach tours, Nyungwe chimpanzee trekking, Kigali city tours, VIP car rental & airport transfers. TIN: 121686474. 24/7 support, expert guides, best prices."
        keywords="Rwanda tours, Rwanda travel, gorilla trekking Rwanda, Volcanoes National Park tours, mountain gorilla tours, Akagera National Park safari, Lake Kivu tours, Nyungwe Forest tours, Kigali city tours, Rwanda tour operator, Rwanda safari packages, gorilla trekking permit, Rwanda wildlife tours, Lake Kivu beach, Gisenyi tours, Rubavu tours, Musanze tours, Rwanda adventure tours, Kigali car rental, Rwanda airport transfer, VIP transport Rwanda, Rwanda tour guide, chimpanzee trekking Rwanda, Rwanda cultural tours, East Africa tours, Rwanda vacation packages, best Rwanda tours, Rwanda tour company, Rwanda travel agency, Big Five safari Rwanda, Rwanda holiday packages, canopy walkway Nyungwe, Rwanda travel packages, Kigali genocide memorial, Rwanda photography tours, Rwanda honeymoon packages"
        url="https://brohoodtravel-tour.netlify.app"
        faq={[
          { question: "What are the best Rwanda tours offered by Brotherhood Company?", answer: "Brotherhood Company offers the best Rwanda tours including mountain gorilla trekking in Volcanoes National Park, Big Five safari in Akagera National Park, Lake Kivu beach tours in Gisenyi, chimpanzee trekking in Nyungwe Forest, Kigali city tours, cultural experiences, and adventure activities. All tours include expert guides, comfortable transportation, and can be customized to your preferences." },
          { question: "How much does gorilla trekking cost in Rwanda?", answer: "Gorilla trekking in Rwanda's Volcanoes National Park costs from $2,500 per person, which includes the $1,500 gorilla permit, professional guide, transportation, and accommodation. Brotherhood Company offers comprehensive gorilla trekking packages with the best prices and 24/7 support. Book in advance as permits are limited." },
          { question: "What services does Brotherhood Company Rwanda provide?", answer: "Brotherhood Company is a licensed Rwanda tour operator (TIN: 121686474) offering comprehensive travel services: guided tours to all Rwanda destinations, gorilla trekking permits, VIP and ordinary transportation, airport transfers, car rentals with driver, hotel reservations, event organizing, and custom tour packages across Rwanda and neighboring countries." },
          { question: "Where is Brotherhood Company located in Rwanda?", answer: "Brotherhood Company is based in Kigali, Rwanda's capital. We operate throughout Rwanda including Volcanoes National Park (Musanze), Akagera National Park, Lake Kivu (Gisenyi/Rubavu, Karongi), Nyungwe Forest, and all major tourist destinations. Contact us at +250786425200 or brotherhoodcompany200@gmail.com." },
          { question: "How can I book Rwanda tours with Brotherhood Company?", answer: "Booking Rwanda tours is easy: 1) Browse our destinations and select your preferred tour, 2) Fill out the online booking form with your details, 3) Contact us via WhatsApp (+250786425200), email (brotherhoodcompany200@gmail.com), or phone. We offer flexible payment options and can customize any package to match your budget and interests." },
          { question: "What is included in Rwanda tour packages?", answer: "Our Rwanda tour packages include professional licensed guides, comfortable transportation (4x4 safari vehicles), park entrance fees, activities, and can include gorilla/chimpanzee permits, accommodation (budget to luxury), meals, airport transfers, and travel insurance. Every package is customizable to your needs and budget." },
          { question: "When is the best time to visit Rwanda for gorilla trekking?", answer: "Rwanda offers year-round gorilla trekking, but the best time is during dry seasons: June-September and December-February. Brotherhood Company operates gorilla trekking tours throughout the year with experienced guides. Book 3-6 months in advance to secure permits, especially during peak season." },
          { question: "Does Brotherhood Company offer Lake Kivu tours?", answer: "Yes! We offer comprehensive Lake Kivu tours including beach activities in Gisenyi (Rubavu), Karongi island tours, water sports, kayaking, boat cruises, coffee plantation tours, and the Congo Nile Trail. Lake Kivu packages range from 1-3 days and can be combined with other Rwanda destinations." },
          { question: "What makes Brotherhood Company the best Rwanda tour operator?", answer: "Brotherhood Company is Rwanda's trusted tour operator since 2014 with TIN: 121686474. We offer: licensed professional guides, modern vehicle fleet, 24/7 customer support, best prices, flexible customization, authentic experiences, excellent safety record, positive reviews, and comprehensive knowledge of all Rwanda destinations." },
          { question: "Can Brotherhood Company arrange Akagera National Park safari?", answer: "Yes! Brotherhood Company offers Akagera National Park safari packages (2-4 days) featuring Big Five game drives (lions, elephants, rhinos, buffalos, leopards), boat safari on Lake Ihema, bird watching, night drives, and bush camping. Includes park fees, professional guide, safari vehicle, and accommodation options." }
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
