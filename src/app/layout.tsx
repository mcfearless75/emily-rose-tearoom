import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Emily Rose Tearoom | Corringham, Essex",
    template: "%s | Emily Rose Tearoom",
  },
  description:
    "Warm welcoming tea room in Corringham, Essex. Hearty cooked breakfasts, fresh sandwiches, homemade cakes and indulgent afternoon teas. Dog friendly, free WiFi. Book for birthdays and celebrations.",
  keywords: [
    "Emily Rose Tearoom",
    "tea room Corringham",
    "afternoon tea Essex",
    "breakfast Corringham",
    "cafe Stanford-le-Hope",
    "dog friendly cafe Thurrock",
  ],
  openGraph: {
    title: "Emily Rose Tearoom | Corringham",
    description: "Hearty breakfasts, homemade cakes and afternoon teas in Corringham.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Emily Rose Tearoom",
    image: "https://emily-rose-tearoom.vercel.app/images/Lujia.jpg",
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
    url: "https://emily-rose-tearoom.vercel.app",
    telephone: "+447564840771",
    servesCuisine: ["British", "Cafe", "Afternoon Tea"],
    priceRange: "££",
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
  };

  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-rose-50 text-stone-800 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
