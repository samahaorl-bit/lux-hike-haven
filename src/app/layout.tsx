import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";

// ✅ Multi-device viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // allow pinch zoom for accessibility
  userScalable: true,
  themeColor: "#0f766e", // Tailwind teal-700
};

export const metadata: Metadata = {
  metadataBase: new URL("https://luxembourghikinghaven.com"),
  title:
    "Hiking in Luxembourg | Best Trails Guide + Accommodation | Luxembourg Hiking Haven",
  description:
    "Discover the best hiking trails in Luxembourg with downloadable maps. Stay in our Grevenmacher apartment – the perfect base for your outdoor adventure.",
  authors: [{ name: "Luxembourg Hiking Haven" }],
  keywords: [
    "hiking in Luxembourg",
    "Luxembourg hiking trails",
    "hiking accommodation Luxembourg",
    "Grevenmacher apartment",
    "Luxembourg nature trails",
    "hiking maps Luxembourg",
    "outdoor adventure Luxembourg",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://luxembourghikinghaven.com",
  },
  openGraph: {
    title:
      "Hiking in Luxembourg | Best Trails Guide + Accommodation | Luxembourg Hiking Haven",
    description:
      "Your ultimate guide to hiking in Luxembourg with trail maps, local tips, and accommodation in Grevenmacher.",
    url: "https://luxembourghikinghaven.com",
    siteName: "Luxembourg Hiking Haven",
    images: [
      {
        url: "/images/og-hiking.jpg",
        width: 1200,
        height: 630,
        alt: "Scenic hiking trail in Luxembourg with lush green forest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@luxhiking",
    title:
      "Hiking in Luxembourg | Best Trails Guide + Accommodation | Luxembourg Hiking Haven",
    description:
      "Plan your hiking trip in Luxembourg with our trail maps and stay in Grevenmacher for the perfect outdoor adventure.",
    images: ["/images/og-hiking.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Local SEO meta */}
        <meta name="geo.region" content="LU" />
        <meta name="geo.placename" content="Grevenmacher, Luxembourg" />
        <meta name="geo.position" content="49.6805;6.4406" />
        <meta name="ICBM" content="49.6805, 6.4406" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["TouristAttraction", "LodgingBusiness"],
                name: "Luxembourg Hiking Haven",
                description:
                  "Premium apartment accommodation and hiking guide service in Grevenmacher, Luxembourg. Perfect base for exploring Luxembourg's best hiking trails.",
                url: "https://luxembourghikinghaven.com",
                image: "https://luxembourghikinghaven.com/images/og-hiking.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Grevenmacher",
                  addressCountry: "LU",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "49.6805",
                  longitude: "6.4406",
                },
                touristType: ["Hikers", "Nature Lovers", "Outdoor Enthusiasts"],
              },
            ]),
          }}
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
