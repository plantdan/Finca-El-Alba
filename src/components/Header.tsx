import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Farm Tours", href: "#tours" },
  { label: "Chocolate", href: "#chocolate" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Visit", href: "#visit" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex flex-col items-center">
          <span className={`font-display text-2xl font-bold tracking-wider transition-colors duration-500 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            LYDGATE FARMS
          </span>
          <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${scrolled ? "text-secondary" : "text-primary-foreground/80"}`}>
            Kauai Chocolate
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://fareharbor.com/embeds/book/steelgrass/items/30528/?flow=1010919"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground font-body text-sm font-bold tracking-wider uppercase px-6 py-2.5 rounded-sm hover:brightness-110 transition-all"
          >
            Book My Tour
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://fareharbor.com/embeds/book/steelgrass/items/30528/?flow=1010919"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground font-body text-sm font-bold tracking-wider uppercase px-8 py-3 rounded-sm"
              >
                Book My Tour
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
