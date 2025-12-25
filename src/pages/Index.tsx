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
        title="Rwanda | Visit Rwanda - Complete Tourism & Travel Guide | Gorilla Trekking & Safari Tours"
        description="Discover Rwanda - Land of a Thousand Hills. Complete Rwanda travel guide by #1 tour operator: gorilla trekking, safaris, Lake Kivu, culture, hotels. Visit Rwanda today! Licensed Rwanda tourism company (TIN: 121686474). Explore Rwanda's mountains, wildlife, beaches & cities. Book authentic Rwanda experiences with expert guides & 24/7 support."
        keywords="Rwanda, Rwanda tourism, Visit Rwanda, Rwanda travel, Rwanda Africa, travel to Rwanda, Rwanda country, Rwanda vacation, Rwanda holiday, things to do in Rwanda, Rwanda travel guide, Rwanda destinations, Rwanda tourist attractions, explore Rwanda, discover Rwanda, experience Rwanda, Rwanda tours, Rwanda trip, Rwanda safari, gorilla trekking Rwanda, Rwanda wildlife, Volcanoes National Park, mountain gorillas Rwanda, Lake Kivu Rwanda, Akagera National Park, Nyungwe Forest, Kigali Rwanda, Rwanda tour operator, Rwanda travel agency, Rwanda tour company, Rwanda tour packages, Rwanda travel packages, Rwanda vacation packages, Rwanda holiday packages, Rwanda safari packages, Rwanda adventure tours, Rwanda cultural tours, Rwanda nature tours, Rwanda photography tours, Rwanda honeymoon, Rwanda family vacation, Rwanda group tours, Rwanda private tours, Rwanda hotels, Rwanda transport, Rwanda car rental, Rwanda airport transfer, Rwanda tour guide, Rwanda itinerary, best time visit Rwanda, Rwanda weather, Rwanda culture, Rwanda history, Rwanda genocide memorial, Rwanda coffee tours, Rwanda tea plantations, Rwanda mountains, Rwanda beaches, Rwanda lakes, Rwanda parks, Rwanda trekking, Rwanda hiking, Rwanda birdwatching, East Africa travel, Rwanda and Uganda, Rwanda gorilla permits, authentic Rwanda, Rwanda travel tips, plan Rwanda trip, book Rwanda tour"
        url="https://brohoodtravel-tour.netlify.app"
        faq={[
          { question: "Why visit Rwanda? What makes Rwanda special?", answer: "Rwanda, the 'Land of a Thousand Hills', offers unique experiences: mountain gorilla trekking (one of only 3 countries), stunning landscapes, clean and safe cities, rich culture, Big Five safaris, beautiful Lake Kivu beaches, and remarkable post-genocide recovery story. Rwanda combines wildlife, nature, culture, and modern infrastructure making it Africa's premier destination." },
          { question: "What are the top tourist attractions in Rwanda?", answer: "Top Rwanda attractions: 1) Volcanoes National Park - mountain gorilla trekking, 2) Lake Kivu - beaches and water sports, 3) Akagera National Park - Big Five safari, 4) Nyungwe Forest - chimpanzee trekking and canopy walkway, 5) Kigali - clean modern city with genocide memorial, 6) Cultural villages, 7) Twin Lakes, 8) Rwanda's mountains and hiking trails." },
          { question: "When is the best time to visit Rwanda?", answer: "Rwanda is a year-round destination with pleasant weather. Best time for gorilla trekking: June-September and December-February (dry seasons). Rainy seasons (March-May, October-November) offer lush landscapes and fewer tourists. Rwanda's high altitude means comfortable temperatures year-round (15-27°C). Book gorilla permits 3-6 months in advance regardless of season." },
          { question: "Is Rwanda safe for tourists? What about traveling to Rwanda?", answer: "Yes! Rwanda is one of Africa's safest countries for tourists. It has low crime rates, clean cities, good infrastructure, and tourist-friendly policies. Kigali is ranked Africa's safest capital. Rwanda welcomes 1.5+ million tourists annually. Brotherhood Company provides 24/7 support, licensed guides, and ensures safe, comfortable travel throughout Rwanda." },
          { question: "What are the best Rwanda tours offered by Brotherhood Company?", answer: "Brotherhood Company offers the best Rwanda tours including mountain gorilla trekking in Volcanoes National Park, Big Five safari in Akagera National Park, Lake Kivu beach tours in Gisenyi, chimpanzee trekking in Nyungwe Forest, Kigali city tours, cultural experiences, and adventure activities. All tours include expert guides, comfortable transportation, and can be customized to your preferences." },
          { question: "How much does it cost to travel to Rwanda? Rwanda vacation cost?", answer: "Rwanda travel costs vary: Budget travelers: $50-100/day, Mid-range: $150-300/day, Luxury: $500+/day. Major costs: Gorilla permit ($1,500), safari parks ($50-100), hotels ($30-300/night), internal transport. Brotherhood Company offers packages from $150/person (city tours) to $2,500+ (gorilla trekking). Customizable to any budget." },
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
