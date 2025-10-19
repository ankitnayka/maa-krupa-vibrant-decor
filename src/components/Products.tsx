import { ProductCard } from "./ProductCard";
import raincoatImage from "@/assets/raincoat-umbrella.jpg";
import carpetImage from "@/assets/carpet-net.jpg";
import acrylicImage from "@/assets/acrylic-lace.jpg";
import giftImage from "@/assets/gift-hampers.jpg";

export const Products = () => {
  const decorationItems = [
    {
      image: acrylicImage,
      title: "Handicraft Items",
      description: "Exquisite handmade crafts, traditional art pieces, and artisan creations"
    },
    {
      image: carpetImage,
      title: "Decoration Items",
      description: "Beautiful home & event decorations, wall hangings, and festive decor"
    },
    {
      image: giftImage,
      title: "Gift Articles",
      description: "Premium gift hampers, presents, and special occasion gift sets"
    },
    {
      image: raincoatImage,
      title: "Unique Showpieces",
      description: "Distinctive showpieces, collectibles, and statement decor items"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Premium Collection</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handicrafts, decorations, gifts, and unique showpieces for every celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {decorationItems.map((item, index) => (
            <div 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
