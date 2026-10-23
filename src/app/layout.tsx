import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const siteUrl = "https://www.emilyrosetearoom.co.uk";
const ogImage = "/images/FB_IMG_1792480381489.jpg";
const phone = "+441375768400";
const phoneDisplay = "01375 768400";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emily Rose Tearoom | Corringham, Essex",
    template: "%s | Emily Rose Tearoom",
  },
  description:
    "Emily Rose Tearoom in Corringham, Essex. Hearty cooked breakfasts, homemade cakes and afternoon teas. Dog friendly, free WiFi. Open Tuesday to Saturday 9:30am-4pm. 5-star rated. Naughty Corner and tiger wallpaper.",
  keywords: [
    "Emily Rose Tearoom",
    "tea room Corringham",
    "afternoon tea Essex",
    "afternoon tea Corringham",
    "breakfast Corringham",
    "cafe Stanford-le-Hope",
    "tearoom near Grays",
    "tearoom Thurrock",
    "dog friendly cafe Thurrock",
    "tea room SS17",
    "Naughty Corner tearoom",
    "private hire Corringham",
    "baby shower venue Corringham",
  ],
  openGraph: {
    title: "Emily Rose Tearoom | Corringham, Essex",
    description: "Hearty breakfasts, homemade cakes and afternoon teas. Dog friendly tea room in Corringham with the Naughty Corner. Open Tue-Sat 9:30am-4pm.",
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Emily Rose Tearoom",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Afternoon tea at Emily Rose Tearoom, Corringham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Rose Tearoom | Corringham, Essex",
    description: "Hearty breakfasts, homemade cakes and afternoon teas in Corringham.",
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/#business`,
    name: "Emily Rose Tearoom",
    image: `${siteUrl}/images/FB_IMG_1792480381489.jpg`,
    logo: `${siteUrl}/images/FB_IMG_1792480381489.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Fobbing Road",
      addressLocality: "Corringham",
      addressRegion: "Essex",
      postalCode: "SS17 9BG",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.526,
      longitude: 0.466,
    },
    url: siteUrl,
    telephone: phone,
    servesCuisine: ["British", "Cafe", "Afternoon Tea"],
    priceRange: "££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "38",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "16:00",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Dog Friendly" },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Family Friendly" },
      { "@type": "LocationFeatureSpecification", name: "Takeaway" },
    ],
    hasMap: "https://maps.app.goo.gl/uQRgxaiZ3BDZ55g18",
  };

  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-stone-50 text-slate-800 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
