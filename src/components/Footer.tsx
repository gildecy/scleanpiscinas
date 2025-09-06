const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">TechStore</h3>
            <p className="text-muted-foreground">
              Sua loja de tecnologia premium com os melhores produtos e preços.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contato@techstore.com</li>
              <li>(11) 9999-9999</li>
              <li>Segunda a Sexta: 9h às 18h</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Segurança</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Pagamento via MercadoPago</li>
              <li>Entrega expressa</li>
              <li>Garantia estendida</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 TechStore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;