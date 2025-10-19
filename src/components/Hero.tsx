import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { Sparkles, ShoppingBag } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 animate-float">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Your Celebration Destination</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground drop-shadow-2xl">
            MAA KRUPA
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              DECORATION MALL
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-lg">
            Everything You Need for Home & Celebrations!
          </p>

          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Discover a world of vibrant decorations, festive essentials, and home accessories to make every moment special
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProducts}
              className="gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={scrollToContact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
