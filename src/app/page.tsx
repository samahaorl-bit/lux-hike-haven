// app/page.tsx
"use client";

import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/HeroSection";
import HikingGuide from "@/components/HikingGuide";
import ListingDetailSection from "@/components/ListingDetailSection";
import SleepSection from "@/components/SleepSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GrevenmacherSection from "@/components/GrevenmacherSection";
import CtaReserveSection from "@/components/CtaReserveSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <section className="py-16">
          <ListingDetailSection />
        </section>
        <section className="py-16 bg-white">
          <SleepSection />
        </section>
        <section className="py-16">
          <AmenitiesSection />
        </section>
        <section className="py-16 bg-gray-100">
          <HikingGuide />
        </section>
        <section className="py-16">
          <GrevenmacherSection />
        </section>
        <section className="py-16 bg-primary text-primary-foreground">
          <CtaReserveSection />
        </section>
        <section className="py-16">
          <AboutSection />
        </section>
        <section className="py-16 bg-gray-100">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
