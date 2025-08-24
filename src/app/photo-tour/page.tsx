"use client";

import React from "react";
import Image from "next/image";
import { getAirbnbGalleryUrl } from "@/lib/links";
import Link from "next/link";

type Category = { id: number; title: string; image: string };

// Direct mapping to public folder images (spaces preserved)
const categories: Category[] = [
  { id: 1, title: "Living room", image: "/Photo tour/living-room.avif" },
  { id: 2, title: "Full kitchen", image: "/Photo tour/Full kitchen.avif" },
  { id: 3, title: "Dining area", image: "/Photo tour/Dining area.avif" },
  { id: 4, title: "Bedroom 1", image: "/Photo tour/Bedroom 1.avif" },
  { id: 5, title: "Bedroom 2", image: "/Photo tour/Bedroom 2.avif" },
  { id: 6, title: "Bedroom 3", image: "/Photo tour/Bedroom 3.avif" },
  {
    id: 7,
    title: "Full bathroom 1",
    image: "/Photo tour/Full bathroom 1.avif",
  },
  {
    id: 8,
    title: "Full bathroom 2",
    image: "/Photo tour/Full bathroom 2.avif",
  },
  { id: 9, title: "Workspace", image: "/Photo tour/Workspace.avif" },
  { id: 10, title: "Laundry area", image: "/Photo tour/Laundry area.avif" },
  { id: 11, title: "Garage", image: "/Photo tour/Garage.avif" },
  { id: 12, title: "Exterior", image: "/Photo tour/Exterior.avif" },
  {
    id: 13,
    title: "Additional photos",
    image: "/Photo tour/Additional photos.avif",
  },
];

export default function PhotoTourPage() {
  const airbnbGalleryUrl = getAirbnbGalleryUrl("photo-tour-page");

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Photo tour</h1>

      <section className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((c) => (
            <div
              key={c.id}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border shadow-sm"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width:1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-left text-[11px] sm:text-xs font-medium text-white drop-shadow">
                {c.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link
          href={airbnbGalleryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
        >
          See more photos on Airbnb
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
