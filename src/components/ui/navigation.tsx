"use client";

import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { getAirbnbUrl } from "@/lib/links";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const airbnbUrl = getAirbnbUrl("navigation-bar");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary">
                Luxembourg Hiking Haven
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              <Link href="/#listing">
                <button className="nav-link">📸 Listing</button>
              </Link>
              <Link href="/#hiking">
                <button className="nav-link">🥾 Hiking</button>
              </Link>
              <Link href="/#grevenmacher">
                <button className="nav-link">🏛️ Grevenmacher</button>
              </Link>
              <Link href="/#about">
                <button className="nav-link">ℹ️ About</button>
              </Link>
              <Link href="/#contact">
                <button className="nav-link">✉️ Contact</button>
              </Link>
              <Link href="/photo-tour">
                <button className="text-foreground hover:text-primary transition-colors duration-200 font-semibold">
                  🖼️ Photos
                </button>
              </Link>
              <button
                onClick={() => window.open(airbnbUrl, "_blank")}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-semibold"
              >
                Reserve
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link href="/#listing">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  📸 Listing
                </button>
              </Link>
              <Link href="/#hiking">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  🥾 Hiking
                </button>
              </Link>
              <Link href="/#grevenmacher">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  🏛️ Grevenmacher
                </button>
              </Link>
              <Link href="/#about">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  ℹ️ About
                </button>
              </Link>
              <Link href="/#contact">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  ✉️ Contact
                </button>
              </Link>
              <Link href="/photo-tour">
                <button className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left">
                  🖼️ Photos
                </button>
              </Link>
              <button
                onClick={() => window.open(airbnbUrl, "_blank")}
                className="block px-3 py-2 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors duration-200 w-full text-center mt-2"
              >
                Reserve
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
