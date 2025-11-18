import { Lightbulb, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TravelTipsProps {
    destinationId?: string;
}

const TravelTips = ({ destinationId }: TravelTipsProps) => {
    const generalTips = [
        {
            icon: CheckCircle,
            title: "Visa Requirements",
            tip: "Most nationalities can get a visa on arrival or apply for an e-visa online. The process is quick and straightforward.",
            importance: "high"
        },
        {
            icon: AlertCircle,
            title: "Currency",
            tip: "The Rwandan Franc (RWF) is the local currency. US Dollars are widely accepted. ATMs are available in major cities.",
            importance: "medium"
        },
        {
            icon: Lightbulb,
            title: "Language",
            tip: "Kinyarwanda is the local language, but English and French are widely spoken, especially in tourist areas.",
            importance: "low"
        },
        {
            icon: CheckCircle,
            title: "Safety",
            tip: "Rwanda is one of the safest countries in Africa. Crime rates are low, and the country is very clean and organized.",
            importance: "high"
        },
        {
            icon: AlertCircle,
            title: "Plastic Bags",
            tip: "Plastic bags are banned in Rwanda. Use reusable bags or paper bags. This is strictly enforced at the airport.",
            importance: "high"
        },
        {
            icon: Lightbulb,
            title: "Dress Code",
            tip: "Dress modestly, especially when visiting local communities. Light, breathable clothing is recommended year-round.",
            importance: "medium"
        }
    ];

    const destinationSpecificTips: Record<string, any[]> = {
        "1": [ // Kigali
            {
                icon: Lightbulb,
                title: "Getting Around Kigali",
                tip: "Use moto-taxis for quick travel or our car rental service for comfort. The city is well-organized with clean streets.",
                importance: "medium"
            },
            {
                icon: CheckCircle,
                title: "Must-Visit Sites",
                tip: "Don't miss the Genocide Memorial, Kimironko Market, and Inema Arts Center. Each offers unique insights into Rwandan culture.",
                importance: "high"
            },
            {
                icon: AlertCircle,
                title: "Best Time to Visit",
                tip: "Kigali is pleasant year-round. The dry season (June-September) is ideal for outdoor activities.",
                importance: "low"
            }
        ],
        "2": [ // Lake Kivu
            {
                icon: Lightbulb,
                title: "Water Activities",
                tip: "Lake Kivu is bilharzia-free and safe for swimming. Bring sunscreen and swimwear for beach activities.",
                importance: "high"
            },
            {
                icon: CheckCircle,
                title: "Coffee Tours",
                tip: "Don't miss the coffee plantation tours. Rwanda's coffee is world-renowned, and tastings are included.",
                importance: "medium"
            },
            {
                icon: AlertCircle,
                title: "Evening Weather",
                tip: "Evenings can be cool by the lake. Pack a light jacket for sunset boat cruises.",
                importance: "medium"
            }
        ],
        "3": [ // Nyungwe Forest
            {
                icon: CheckCircle,
                title: "Hiking Preparation",
                tip: "Wear sturdy hiking boots and long pants. The forest trails can be muddy, especially in rainy season.",
                importance: "high"
            },
            {
                icon: AlertCircle,
                title: "Canopy Walk",
                tip: "The canopy walk is 60m high. Not recommended for those with fear of heights. Advance booking required.",
                importance: "high"
            },
            {
                icon: Lightbulb,
                title: "Wildlife Viewing",
                tip: "Early morning is best for chimpanzee trekking and bird watching. Bring binoculars and a camera with good zoom.",
                importance: "medium"
            },
            {
                icon: AlertCircle,
                title: "Weather",
                tip: "Nyungwe can be cold and rainy. Pack waterproof gear and warm layers even in dry season.",
                importance: "high"
            }
        ],
        "4": [ // Volcanoes
            {
                icon: CheckCircle,
                title: "Gorilla Trekking Prep",
                tip: "Book permits 3-6 months in advance. Wear waterproof hiking boots, long pants, and garden gloves. Bring rain gear.",
                importance: "high"
            },
            {
                icon: AlertCircle,
                title: "Physical Fitness",
                tip: "Trekking can take 1-8 hours depending on gorilla location. Moderate fitness level required. Porters available.",
                importance: "high"
            },
            {
                icon: Lightbulb,
                title: "Photography",
                tip: "No flash photography allowed near gorillas. Bring a good camera with fast shutter speed for action shots.",
                importance: "medium"
            },
            {
                icon: CheckCircle,
                title: "Altitude",
                tip: "Volcanoes area is at high altitude. Stay hydrated and take it easy if you feel altitude effects.",
                importance: "medium"
            }
        ]
    };

    const tipsToShow = destinationId && destinationSpecificTips[destinationId]
        ? [...destinationSpecificTips[destinationId], ...generalTips.slice(0, 3)]
        : generalTips;

    const getImportanceColor = (importance: string) => {
        switch (importance) {
            case "high":
                return "bg-red-100 text-red-800 border-red-200";
            case "medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "low":
                return "bg-blue-100 text-blue-800 border-blue-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {destinationId ? "Travel Tips for This Destination" : "Essential Travel Tips"}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Important information to help you prepare for your journey to Rwanda
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {tipsToShow.map((tip, index) => (
                        <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <tip.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <Badge className={`${getImportanceColor(tip.importance)} text-xs`}>
                                        {tip.importance === "high" ? "Important" : tip.importance === "medium" ? "Recommended" : "Good to Know"}
                                    </Badge>
                                </div>
                                <CardTitle className="text-lg">{tip.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                        <CardContent className="p-6">
                            <Lightbulb className="h-8 w-8 text-primary mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground">
                                <strong>Pro Tip:</strong> Contact our team for personalized travel advice and detailed packing lists
                                based on your specific itinerary. We're here to ensure you have the best experience possible!
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default TravelTips;
