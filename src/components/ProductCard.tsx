import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  mercadoPagoUrl: string;
}

const ProductCard = ({ title, price, originalPrice, image, description, mercadoPagoUrl }: ProductCardProps) => {
  const handleCheckout = () => {
    window.open(mercadoPagoUrl, '_blank');
  };

  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${title} - Produto premium`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
        
        <Button 
          variant="checkout" 
          className="w-full" 
          onClick={handleCheckout}
        >
          Comprar Agora
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;