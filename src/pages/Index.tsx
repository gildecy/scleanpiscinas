import Hero from "@/components/Hero";
import ServicesSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <ServicesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
