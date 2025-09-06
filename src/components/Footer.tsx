const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Gildecy de Jesus Sá</h3>
            <p className="text-muted-foreground">
              Especialista em tratamento de piscinas em Açailândia - MA.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>📞 Consulte disponibilidade</li>
              <li>📍 Açailândia - MA</li>
              <li>🕒 Segunda a Sábado</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Análise química da água</li>
              <li>Limpeza profunda</li>
              <li>Manutenção preventiva</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Gildecy de Jesus Sá - Tratador de Piscinas. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Açailândia - MA | Profissional Qualificado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;