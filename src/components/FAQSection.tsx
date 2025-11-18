import { useState } from "react";
import { Search, MessageSquarePlus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

const FAQSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Services");

    const faqs: FAQ[] = [
        {
            id: "1",
            question: "What services does Brotherhood Company offer?",
            answer: "We offer comprehensive travel services including tours across Rwanda and neighboring countries, VIP transportation, airport pickup and drop-off, hotel reservations, car rental services, and access to expert drivers who know the region intimately.",
            category: "Services"
        },
        {
            id: "2",
            question: "How do I book a tour with Brotherhood Company?",
            answer: "You can book a tour by filling out our booking form on the website, calling us at +250 786 425 200, emailing brotherhoodcompany200@gmail.com, or chatting with us directly on WhatsApp. Our team will respond promptly to confirm your booking.",
            category: "Booking"
        },
        {
            id: "3",
            question: "What is your cancellation policy?",
            answer: "Cancellations made 7+ days before the tour receive a full refund. Cancellations 3-6 days before receive 50% refund. Cancellations within 48 hours are non-refundable. Special circumstances are considered on a case-by-case basis.",
            category: "Booking"
        },
        {
            id: "4",
            question: "Do you provide airport transfer services?",
            answer: "Yes! We offer reliable airport pickup and drop-off services from Kigali International Airport. Our drivers track your flight and provide meet-and-greet service with luggage assistance. We guarantee on-time service.",
            category: "Transportation"
        },
        {
            id: "5",
            question: "What types of vehicles do you have?",
            answer: "Our modern fleet includes sedans, SUVs, minivans, and tour buses. All vehicles are well-maintained, air-conditioned, and come with experienced professional drivers. We can accommodate groups of any size.",
            category: "Transportation"
        },
        {
            id: "6",
            question: "Can I rent a car for self-drive?",
            answer: "Yes, we offer both self-drive and chauffeur-driven car rental options. Self-drive rentals include insurance, GPS navigation, and 24/7 roadside assistance. A valid driver's license is required.",
            category: "Transportation"
        },
        {
            id: "7",
            question: "What destinations do you cover?",
            answer: "We cover all major destinations in Rwanda including Kigali, Volcanoes National Park (gorilla trekking), Lake Kivu, Nyungwe Forest, Akagera National Park, and more. We also organize tours to neighboring countries like Uganda, Tanzania, Burundi, and DRC.",
            category: "Destinations"
        },
        {
            id: "8",
            question: "How much does a gorilla trekking tour cost?",
            answer: "Gorilla trekking permit costs vary but typically range from $1,500 per person. Our tour packages include transport, accommodation, guide services, and the permit. Contact us for current rates and package details.",
            category: "Pricing"
        },
        {
            id: "9",
            question: "Do you offer group discounts?",
            answer: "Yes! We offer attractive discounts for groups of 5 or more people. The discount percentage increases with group size. Contact us with your group details for a customized quote.",
            category: "Pricing"
        },
        {
            id: "10",
            question: "What payment methods do you accept?",
            answer: "We accept cash (RWF and USD), mobile money (MTN and Airtel), and bank transfers. For advance bookings, we typically require a 30% deposit with the balance due before the tour starts.",
            category: "Payment"
        },
        {
            id: "11",
            question: "Are your drivers licensed and experienced?",
            answer: "Absolutely! All our drivers are professionally licensed, have clean driving records, and undergo regular training. They have extensive knowledge of Rwanda's roads, destinations, and culture. Many speak multiple languages.",
            category: "Safety"
        },
        {
            id: "12",
            question: "What should I pack for a Rwanda tour?",
            answer: "Pack comfortable clothing, good walking shoes, sunscreen, insect repellent, a hat, and a light jacket for evenings. For gorilla trekking, bring waterproof hiking boots, long pants, and gloves. We'll provide a detailed packing list upon booking.",
            category: "Travel Tips"
        },
        {
            id: "13",
            question: "Is Rwanda safe for tourists?",
            answer: "Yes, Rwanda is one of the safest countries in Africa for tourists. It has low crime rates, clean cities, and a welcoming population. Our professional guides ensure your safety throughout your journey.",
            category: "Safety"
        },
        {
            id: "14",
            question: "Do I need a visa to visit Rwanda?",
            answer: "Many nationalities can obtain a visa on arrival at Kigali International Airport or apply for an e-visa online before travel. The East African Tourist Visa allows travel to Rwanda, Kenya, and Uganda. Check current requirements for your nationality.",
            category: "Travel Tips"
        },
        {
            id: "15",
            question: "What is the best time to visit Rwanda?",
            answer: "Rwanda can be visited year-round. The dry seasons (June-September and December-February) are ideal for gorilla trekking and wildlife viewing. The rainy seasons offer lush landscapes and fewer tourists. Each season has its unique appeal.",
            category: "Travel Tips"
        },
        {
            id: "16",
            question: "Can you help with hotel bookings?",
            answer: "Yes! We partner with hotels across all price ranges in Rwanda. Whether you need budget lodges, mid-range hotels, or luxury resorts, we'll find the perfect accommodation for your needs and budget.",
            category: "Services"
        },
        {
            id: "17",
            question: "How far in advance should I book?",
            answer: "For gorilla trekking, book at least 3-6 months in advance as permits are limited. For other tours, 2-4 weeks advance booking is recommended, especially during peak season (June-September). Last-minute bookings may be accommodated based on availability.",
            category: "Booking"
        },
        {
            id: "18",
            question: "Do you provide tour guides?",
            answer: "Yes, all our tours include experienced, knowledgeable guides who speak English and other languages. They provide insights into Rwanda's history, culture, wildlife, and attractions, making your experience educational and memorable.",
            category: "Services"
        }
    ];

    const categories = ["Services", "Booking", "Transportation", "Destinations", "Pricing", "Payment", "Safety", "Travel Tips"];

    const filteredFAQs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleAskQuestion = () => {
        const whatsappUrl = `https://wa.me/250786425200?text=${encodeURIComponent("Hi! I have a question about your services.")}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Find answers to common questions about our services, booking process, and travel in Rwanda.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="max-w-4xl mx-auto mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-12"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "travel" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="transition-all"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    {filteredFAQs.length > 0 ? (
                        <Accordion type="single" collapsible className="space-y-4">
                            {filteredFAQs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6 bg-card shadow-sm">
                                    <AccordionTrigger className="text-left hover:no-underline py-4">
                                        <span className="font-semibold text-foreground">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ) : (
                        <Card className="text-center py-12">
                            <CardContent>
                                <p className="text-muted-foreground mb-4">No questions found matching your search.</p>
                                <Button variant="travel" onClick={() => setSearchQuery("")}>
                                    Clear Search
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Ask a Question CTA */}
                <Card className="max-w-4xl mx-auto mt-12 border-primary/20 bg-primary/5">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
                        <CardDescription>
                            Can't find what you're looking for? Our team is here to help!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="travel" size="lg" onClick={handleAskQuestion} className="gap-2">
                            <MessageSquarePlus className="h-5 w-5" />
                            Ask on WhatsApp
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="tel:+250786425200">Call +250 786 425 200</a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FAQSection;
