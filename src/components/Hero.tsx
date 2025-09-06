import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-headphones.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Produtos
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-4">
                Premium
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Descubra nossa coleção exclusiva de tecnologia de ponta. 
              Qualidade superior e design inovador em cada produto.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explorar Produtos
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Headphones premium com design moderno"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;