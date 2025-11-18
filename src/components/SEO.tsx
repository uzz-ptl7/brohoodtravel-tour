import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
}

const SEO = ({
    title = "Brotherhood Company - Travel & Tours in Rwanda",
    description = "Experience the best of Rwanda with Brotherhood Company. Professional travel, tours, VIP transportation, airport transfers, hotel reservations, and car rental services. TIN: 121686474",
    keywords = "Rwanda travel, Rwanda tours, Kigali tours, Volcanoes National Park, gorilla trekking, Lake Kivu, Nyungwe Forest, Rwanda safari, car rental Rwanda, airport transfer Kigali, travel Rwanda, Brotherhood Company",
    image = "https://brohoodtravel-tour.netlify.app/og-image.jpg",
    url = "https://brohoodtravel-tour.netlify.app",
    type = "website",
    author = "Brotherhood Company"
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
            <meta name="robots" content="index, follow" />
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

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Brotherhood Company" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Structured Data - Local Business */}
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
                        "target": "https://brohoodtravel-tour.netlify.app/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
