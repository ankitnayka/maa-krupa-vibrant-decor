import { ProductCard } from "./ProductCard";
import raincoatImage from "@/assets/raincoat-umbrella.jpg";
import carpetImage from "@/assets/carpet-net.jpg";
import acrylicImage from "@/assets/acrylic-lace.jpg";
import giftImage from "@/assets/gift-hampers.jpg";

export const Products = () => {
  const decorationItems = [
    {
      image: raincoatImage,
      title: "Raincoat & Umbrella",
      description: "Colorful raincoats, umbrellas, and tadpatri for all seasons"
    },
    {
      image: carpetImage,
      title: "Carpets & Green Net",
      description: "Premium carpets, green nets, and car & bike covers"
    },
    {
      image: acrylicImage,
      title: "Acrylic & Lace Items",
      description: "Beautiful acrylic items, lace, latkaniya, and decorative moti"
    },
    {
      image: giftImage,
      title: "Gift Hampers",
      description: "Elegant gift articles, hampers, and festival decoration items"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Decoration Items</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of decoration items perfect for every occasion
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
