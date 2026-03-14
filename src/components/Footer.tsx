const Footer = () => {
  return (
    <footer id="visit" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Lydgate Farms</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Fifth-generation Hawaiian farm family. Award-winning cacao, honey & chocolate 
              since 1865.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-4">
              Visit Us
            </h4>
            <div className="space-y-2 font-body text-sm text-primary-foreground/70">
              <p>Chocolate Tasting Room</p>
              <p>Downtown Kapaa, Kauaʻi</p>
              <p>Monday – Friday, 10am – 4pm</p>
              <a
                href="https://maps.app.goo.gl/dSNLF2Wk3iD6aBnz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-accent hover:brightness-110 transition-all"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 font-body text-sm text-primary-foreground/70">
              <a href="https://lydgatefarms.com/chocolate-farm-tour/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Farm Tours</a>
              <a href="https://lydgatefarms.shop/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Shop Chocolate</a>
              <a href="https://lydgatefarms.com/our-story/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Our Story</a>
              <a href="https://lydgatefarms.com/contact/" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wider">
            © {new Date().getFullYear()} Lydgate Farms · Kauaʻi, Hawaiʻi · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
