"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, TrendingUp, Camera, ExternalLink } from "lucide-react";
import Image from "next/image";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";
import trail4 from "@/assets/trail-4.jpg";
import trail5 from "@/assets/trail-5.jpg";

const hikingTrails = [
  {
    id: 1,
    name: "Müllerthal Trail Route 1",
    description:
      "Explore the 'Little Switzerland' region with stunning rock formations, moss-covered boulders, and enchanting forest paths.",
    difficulty: "Moderate",
    length: "12 km",
    duration: "4-5 hours",
    image: trail1,
    highlights: ["Rock formations", "Ancient forests", "Photography spots"],
    pdfMap: "/hiking-maps/chemin-de-la-moselle-map.pdf",
    gpsCoords: "49.6805, 6.4406",
    officialUrl: "https://www.mullerthal-trail.lu/en",
  },
  {
    id: 2,
    name: "Vianden Castle Circuit",
    description:
      "A scenic hike leading to Luxembourg's most famous castle with panoramic views of the Our Valley.",
    difficulty: "Easy",
    length: "8 km",
    duration: "3 hours",
    image: trail2,
    highlights: ["Historic castle", "Valley views", "Riverside path"],
    pdfMap: "/hiking-maps/sentier-des-passionnés-map.pdf",
    gpsCoords: "49.6822, 6.4445",
    officialUrl: "https://www.visitluxembourg.com/place/vianden-castle",
  },
  {
    id: 3,
    name: "Echternach Lake Loop",
    description:
      "A peaceful lakeside walk through pristine nature, perfect for bird watching and tranquil moments.",
    difficulty: "Easy",
    length: "6 km",
    duration: "2 hours",
    image: trail3,
    highlights: ["Lake views", "Wildlife", "Peaceful paths"],
    pdfMap: "/hiking-maps/circuit-nature-map.pdf",
    gpsCoords: "49.6789, 6.4567",
    officialUrl:
      "https://www.alltrails.com/trail/luxembourg/echternach/rund-um-den-echternacher-see",
  },
  {
    id: 4,
    name: "Beaufort Castle Ruins",
    description:
      "Discover medieval history while hiking through ancient woodlands to impressive castle ruins.",
    difficulty: "Moderate",
    length: "10 km",
    duration: "4 hours",
    image: trail4,
    highlights: ["Medieval ruins", "Forest trails", "Historical sites"],
    pdfMap: "/hiking-maps/hiking-trail-beaufort-vianden-en.pdf",
    gpsCoords: "49.6805, 6.4406",
    officialUrl:
      "https://www.outdooractive.com/en/hikes/beaufort/hikes-in-beaufort/6020964/",
  },
  {
    id: 5,
    name: "Kneiff Summit Trail",
    description:
      "Reach Luxembourg's highest point at 560m for breathtaking panoramic views of the Ardennes.",
    difficulty: "Challenging",
    length: "15 km",
    duration: "6 hours",
    image: trail5,
    highlights: ["Highest peak", "Panoramic views", "Challenging terrain"],
    pdfMap: "/hiking-maps/kneff.pdf",
    gpsCoords: "49.6822, 6.4445",
    officialUrl: "https://www.summitpost.org/kneiff/994436",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-primary/10 text-primary border-primary/20";
    case "moderate":
      return "bg-accent/10 text-accent-foreground border-accent/20";
    case "challenging":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const HikingGuide = () => {
  return (
    <section id="hiking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="section-title text-foreground mb-4">
            Hiking in Luxembourg: Complete Trail Guide with Maps
          </h1>
          <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
            Discover Luxembourg's best hiking trails. From scenic riverside
            walks to challenging mountain paths, explore the natural beauty of
            Luxembourg starting from our perfectly located apartment in
            Grevenmacher.
          </p>
        </header>

        {/* Hiking Trails Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="hiking-maps"
        >
          {hikingTrails.map((trail, index) => (
            <article key={trail.id}>
              <Card
                className="group overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={trail.image}
                      alt={`${trail.name} hiking trail in Luxembourg - ${trail.difficulty} difficulty, ${trail.length} distance`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className={getDifficultyColor(trail.difficulty)}>
                      {trail.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Camera className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    {trail.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {trail.description}
                  </p>

                  {/* Trail Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{trail.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{trail.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trail.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        window.open(trail.officialUrl ?? trail.pdfMap, "_blank")
                      }
                      className="flex items-center gap-2 text-xs"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Visit Official Site
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Ready to explore these amazing trails?
          </p>
          <div className="bg-gradient-forest text-white rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Perfect Location</h3>
            <p className="text-sm opacity-90">
              Our apartment is strategically located with easy access to all
              these hiking destinations via public transport or car.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HikingGuide;
