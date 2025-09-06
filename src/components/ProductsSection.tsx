import ProductCard from "./ProductCard";
import smartwatchImage from "@/assets/product-smartwatch.jpg";
import smartphoneImage from "@/assets/product-smartphone.jpg";
import earbudsImage from "@/assets/product-earbuds.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "SmartWatch Pro",
      price: "R$ 299,90",
      originalPrice: "R$ 399,90",
      image: smartwatchImage,
      description: "Smartwatch com GPS, monitoramento cardíaco e bateria de longa duração. Perfeito para seu estilo de vida ativo.",
      mercadoPagoUrl: "https://www.mercadopago.com.br/checkout/v1/redirect"
    },
    {
      title: "Smartphone Elite",
      price: "R$ 1.299,90",
      originalPrice: "R$ 1.599,90",
      image: smartphoneImage,
      description: "Smartphone premium com câmera de 108MP, processador octa-core e 256GB de armazenamento interno.",
      mercadoPagoUrl: "https://www.mercadopago.com.br/checkout/v1/redirect"
    },
    {
      title: "AirBuds Ultra",
      price: "R$ 199,90",
      originalPrice: "R$ 299,90",
      image: earbudsImage,
      description: "Fones sem fio com cancelamento de ruído ativo, som Hi-Fi e até 30h de bateria com o estojo.",
      mercadoPagoUrl: "https://www.mercadopago.com.br/checkout/v1/redirect"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Produtos em 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Destaque
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores produtos com tecnologia de ponta e preços especiais para você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              description={product.description}
              mercadoPagoUrl={product.mercadoPagoUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Pagamento seguro via MercadoPago • Entrega rápida • Garantia estendida
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;