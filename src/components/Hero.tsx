import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Gildecy de Jesus Sá
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tratador de Piscinas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg flex items-center">
              📍 Açailândia - MA
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Especialista em manutenção e tratamento de piscinas. 
              Garantindo água cristalina e segura para você e sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://drive.google.com/file/d/1MU-9GtEBhzmwDefniAGSkQ5I-4N4ohOq/view?usp=drive_link">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Conheça Nossos Planos
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Fale Direto pelo Link
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full h-96 bg-gradient-primary rounded-2xl shadow-2xl flex items-center justify-center text-6xl">
              🏊‍♂️
            </div>
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
