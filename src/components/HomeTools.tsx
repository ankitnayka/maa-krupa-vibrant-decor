import { ProductCard } from "./ProductCard";
import disposableImage from "@/assets/disposable-items.jpg";
import tissueImage from "@/assets/tissue-packing.jpg";

export const HomeTools = () => {
  const homeItems = [
    {
      image: disposableImage,
      title: "Disposable Items",
      description: "Disposable glass, dish, dabba, container, and fiber glass dishes"
    },
    {
      image: tissueImage,
      title: "Tissue & Packing",
      description: "Kitchen, toilet, hotel tissue and packing materials"
    },
    {
      image: disposableImage,
      title: "Plastic Essentials",
      description: "Quality plastic packing materials for all your needs"
    },
    {
      image: tissueImage,
      title: "Event Materials",
      description: "Marriage and festival packing materials in bulk"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-secondary">Home</span> Essentials
          </h2>
          <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality home tools and essentials for everyday use
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
