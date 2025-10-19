import { ProductCard } from "./ProductCard";
import disposableImage from "@/assets/disposable-items.jpg";
import tissueImage from "@/assets/tissue-packing.jpg";

export const HomeTools = () => {
  const homeItems = [
    {
      image: disposableImage,
      title: "Trending Items",
      description: "Latest trending decorations, viral showpieces, and popular gift items"
    },
    {
      image: tissueImage,
      title: "Festival Specials",
      description: "Seasonal decorations, festival essentials, and celebration items"
    },
    {
      image: disposableImage,
      title: "Home Accessories",
      description: "Stylish home decor accessories, organizers, and lifestyle products"
    },
    {
      image: tissueImage,
      title: "Party Essentials",
      description: "Complete party supplies, event decorations, and celebration materials"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-secondary">Trending</span> & Special Items
          </h2>
          <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest trends, seasonal specials, and must-have celebration essentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {homeItems.map((item, index) => (
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
