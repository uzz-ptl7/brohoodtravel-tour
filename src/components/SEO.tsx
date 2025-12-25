import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    article?: {
        publishedTime?: string;
        modifiedTime?: string;
        author?: string;
        section?: string;
        tags?: string[];
    };
    faq?: Array<{ question: string; answer: string }>;
    product?: {
        name?: string;
        price?: string;
        currency?: string;
        availability?: string;
        rating?: number;
        reviewCount?: number;
    };
    touristDestination?: {
        name?: string;
        location?: string;
        description?: string;
        category?: string;
        highlights?: string[];
        duration?: string;
        priceRange?: string;
    };
}

const SEO = ({
    title = "Brotherhood Company - Rwanda Travel & Tours | Gorilla Trekking, Safari & Lake Kivu Tours",
    description = "#1 Rwanda tour operator offering gorilla trekking Volcanoes National Park, Akagera safari, Lake Kivu tours, Nyungwe Forest adventures, Kigali city tours, car rental & VIP transport. Licensed TIN: 121686474. Book authentic Rwanda experiences.",
    keywords = "Rwanda tours, Rwanda travel, gorilla trekking Rwanda, Volcanoes National Park tours, Akagera National Park safari, Lake Kivu tours, Nyungwe Forest Rwanda, Kigali city tours, Rwanda tour operator, Rwanda safari packages, mountain gorilla trekking, Rwanda wildlife tours, Lake Kivu beach, Rwanda adventure tours, Kigali car rental, Rwanda airport transfer, Gisenyi tours, Musanze tours, Rwanda tour company, East Africa tours, Rwanda vacation packages, chimpanzee trekking Rwanda, Rwanda cultural tours, Rwanda tour guide",
    image = "https://brohoodtravel-tour.netlify.app/og-image.jpg",
    url = "https://brohoodtravel-tour.netlify.app",
    type = "website",
    author = "Brotherhood Company",
    breadcrumbs,
    article,
    faq,
    product,
    touristDestination
}: SEOProps) => {
    const siteTitle = title.includes("Brotherhood") ? title : `${title} | Brotherhood Company`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Geographic Tags */}
            <meta name="geo.region" content="RW" />
            <meta name="geo.placename" content="Kigali, Rwanda" />
            <meta name="geo.position" content="-1.9441;30.0619" />
            <meta name="ICBM" content="-1.9441, 30.0619" />

            {/* Business Info */}
            <meta name="contact" content="brotherhoodcompany200@gmail.com" />
            <meta name="phone" content="+250786425200" />
            <meta name="rating" content="4.8" />
            <meta name="distribution" content="global" />
            <meta name="coverage" content="Rwanda, East Africa" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={siteTitle} />
            <meta property="og:site_name" content="Brotherhood Company" />
            <meta property="og:locale" content="en_US" />

            {/* Article specific OG tags */}
            {article && (
                <>
                    {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
                    {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
                    {article.author && <meta property="article:author" content={article.author} />}
                    {article.section && <meta property="article:section" content={article.section} />}
                    {article.tags && article.tags.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={siteTitle} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data - Local Business / Travel Agency */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TravelAgency",
                    "name": "Brotherhood Company",
                    "alternateName": "Brotherhood Travel & Tours",
                    "description": description,
                    "url": "https://brohoodtravel-tour.netlify.app",
                    "logo": "https://brohoodtravel-tour.netlify.app/logo.png",
                    "image": image,
                    "telephone": "+250786425200",
                    "email": "brotherhoodcompany200@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Kigali",
                        "addressLocality": "Kigali",
                        "addressRegion": "Kigali City",
                        "addressCountry": "RW"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "-1.9441",
                        "longitude": "30.0619"
                    },
                    "areaServed": {
                        "@type": "Country",
                        "name": "Rwanda"
                    },
                    "priceRange": "$$",
                    "paymentAccepted": "Cash, Mobile Money",
                    "currenciesAccepted": "RWF, USD",
                    "openingHours": "Mo-Su 00:00-23:59",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "127",
                        "bestRating": "5",
                        "worstRating": "1"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Rwanda Tours & Travel Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Gorilla Trekking Tours",
                                    "description": "Mountain gorilla trekking in Volcanoes National Park"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Lake Kivu Tours",
                                    "description": "Beach and water sports at Lake Kivu"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Akagera Safari",
                                    "description": "Big Five game drives in Akagera National Park"
                                }
                            }
                        ]
                    },
                    "knowsAbout": [
                        "Gorilla Trekking",
                        "Wildlife Safari",
                        "Cultural Tours",
                        "Adventure Travel",
                        "Lake Kivu",
                        "Volcanoes National Park",
                        "Akagera National Park",
                        "Nyungwe Forest"
                    ],
                    "sameAs": [
                        "https://www.facebook.com/brotherhoodcompany",
                        "https://www.instagram.com/brotherhoodcompany"
                    ],
                    "taxID": "121686474"
                })}
            </script>

            {/* Structured Data - Website */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Brotherhood Company",
                    "url": "https://brohoodtravel-tour.netlify.app",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://brohoodtravel-tour.netlify.app/destinations?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                })}
            </script>

            {/* Structured Data - Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Brotherhood Company",
                    "url": "https://brohoodtravel-tour.netlify.app",
                    "logo": "https://brohoodtravel-tour.netlify.app/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+250786425200",
                        "contactType": "customer service",
                        "email": "brotherhoodcompany200@gmail.com",
                        "areaServed": "RW",
                        "availableLanguage": ["en", "fr", "rw"]
                    },
                    "sameAs": [
                        "https://www.facebook.com/brotherhoodcompany",
                        "https://www.instagram.com/brotherhoodcompany"
                    ]
                })}
            </script>

            {/* Breadcrumbs Structured Data */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((crumb, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": crumb.name,
                            "item": crumb.url
                        }))
                    })}
                </script>
            )}

            {/* FAQ Structured Data */}
            {faq && faq.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faq.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })}
                </script>
            )}

            {/* Product Structured Data */}
            {product && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": product.name,
                        "image": image,
                        "description": description,
                        "offers": {
                            "@type": "Offer",
                            "url": url,
                            "priceCurrency": product.currency || "USD",
                            "price": product.price,
                            "availability": product.availability || "https://schema.org/InStock"
                        },
                        ...(product.rating && product.reviewCount ? {
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": product.rating,
                                "reviewCount": product.reviewCount
                            }
                        } : {})
                    })}
                </script>
            )}

            {/* Tourist Destination Structured Data */}
            {touristDestination && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TouristDestination",
                        "name": touristDestination.name,
                        "description": touristDestination.description,
                        "image": image,
                        "url": url,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": touristDestination.location,
                            "addressCountry": "RW"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "-1.9441",
                            "longitude": "30.0619"
                        },
                        "touristType": [
                            "Adventure Seekers",
                            "Nature Lovers",
                            "Wildlife Enthusiasts",
                            "Cultural Explorers"
                        ],
                        "includesAttraction": touristDestination.highlights?.map(highlight => ({
                            "@type": "TouristAttraction",
                            "name": highlight
                        })) || [],
                        "isAccessibleForFree": false,
                        "publicAccess": true
                    })}
                </script>
            )}

            {/* Tour Package Structured Data */}
            {touristDestination && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TouristTrip",
                        "name": `${touristDestination.name} Tour Package`,
                        "description": touristDestination.description,
                        "image": image,
                        "touristType": touristDestination.category,
                        "itinerary": {
                            "@type": "ItemList",
                            "itemListElement": touristDestination.highlights?.map((highlight, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "name": highlight
                            })) || []
                        },
                        "provider": {
                            "@type": "TravelAgency",
                            "name": "Brotherhood Company",
                            "url": "https://brohoodtravel-tour.netlify.app"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
