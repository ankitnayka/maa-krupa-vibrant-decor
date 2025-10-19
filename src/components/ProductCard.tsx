import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export const ProductCard = ({ image, title, description, className }: ProductCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-festive transition-all duration-300 hover:scale-105 hover:-translate-y-1",
      className
    )}>
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
