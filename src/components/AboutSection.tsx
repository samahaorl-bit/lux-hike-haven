import { Card, CardContent } from "./ui/card";
import { Heart, Home, Mountain, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title text-foreground mb-4">
              About Your Hosts & Our Story
            </h2>
            <p className="section-subtitle text-muted-foreground max-w-2xl mx-auto">
              Passionate about Luxembourg's natural beauty, we created this
              space for fellow adventurers and nature lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <div className="animate-slide-up">
              <div className="bg-gradient-forest rounded-lg p-8 text-white mb-8">
                <Heart className="h-8 w-8 mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-4">
                  Our Passion for Luxembourg
                </h3>
                <p className="opacity-90 leading-relaxed">
                  "After living in Luxembourg for over 10 years, we've explored
                  every hiking trail, hidden waterfall, and scenic viewpoint
                  this beautiful country has to offer. We wanted to share this
                  incredible experience with fellow nature enthusiasts."
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our apartment has been thoughtfully designed as the perfect
                  base for hiking adventures. Located in the heart of Luxembourg
                  City, you'll have easy access to both urban amenities and
                  natural wonders.
                </p>
                <p className="text-muted-foreground">
                  We provide detailed hiking maps, local recommendations, and
                  insider tips to help you discover the best trails Luxembourg
                  has to offer. From the mystical Müllerthal region to the
                  dramatic castles of the north, we'll help you plan
                  unforgettable adventures.
                </p>
              </div>
            </div>

            {/* Why Choose Us Cards */}
            <div
              className="grid grid-cols-1 gap-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mountain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Local Hiking Expertise
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Years of exploring Luxembourg's trails means we know the
                        best routes, hidden gems, and perfect timing for each
                        hike.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-lg p-3">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Thoughtful Amenities
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Everything a hiker needs: gear storage, washing
                        facilities, maps, and recommendations for the perfect
                        post-hike meal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <Users className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Personal Touch
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We're always available to help plan your itinerary and
                        share our favorite secret spots that only locals know
                        about.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Guest Testimonial */}
          {/* Removed testimonial block */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
