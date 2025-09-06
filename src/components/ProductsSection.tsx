const ServicesSection = () => {
  const services = [
    {
      icon: "🧪",
      title: "Análise Química",
      description: "Análise completa da água com teste de pH, cloro, alcalinidade e outros parâmetros essenciais."
    },
    {
      icon: "🧹",
      title: "Limpeza Profunda",
      description: "Limpeza completa da piscina, incluindo paredes, fundo, filtros e sistema de circulação."
    },
    {
      icon: "⚡",
      title: "Manutenção Preventiva",
      description: "Manutenção regular dos equipamentos para garantir o funcionamento perfeito da sua piscina."
    }
  ];

  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços completos para manter sua piscina sempre limpa, segura e pronta para uso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary/20"
            >
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Atendimento em Açailândia e região • Orçamento gratuito • Profissional qualificado
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;