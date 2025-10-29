import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const ProductCard = ({ title, description, image, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 h-auto min-h-[550px]">
      <div className="relative overflow-hidden aspect-square bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-none">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

