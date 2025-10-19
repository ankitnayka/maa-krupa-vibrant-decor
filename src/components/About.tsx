import { Award, Heart, Sparkles, TrendingUp } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Quality Products",
      description: "Carefully curated decoration items and home essentials"
    },
    {
      icon: Award,
      title: "Trusted Since Years",
      description: "Serving customers with dedication and excellence"
    },
    {
      icon: Sparkles,
      title: "Festival Specialist",
      description: "Complete range of celebration and festival decor"
    },
    {
      icon: TrendingUp,
      title: "Best Value",
      description: "Premium quality at competitive prices"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">MAA KRUPA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-festive mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MAA KRUPA DECORATION MALL is your one-stop destination for all decoration items, festival decor, 
              home essentials, and gift articles. We pride ourselves on offering a comprehensive range of 
              high-quality products that bring joy and celebration to your homes and special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-festive transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-festive mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
