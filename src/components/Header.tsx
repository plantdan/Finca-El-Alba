import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "The Forest", href: "#forest" },
  { label: "Our Cacao", href: "#cacao" },
  { label: "Farm Tour", href: "#tour" },
  { label: "Contact", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex flex-col">
          <span
            className={`font-display text-2xl md:text-3xl font-light tracking-[0.15em] transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Finca El Alba
          </span>
          <span
            className={`font-body text-[9px] tracking-[0.5em] uppercase font-light transition-colors duration-500 ${
              scrolled ? "text-clay" : "text-primary-foreground/60"
            }`}
          >
            Regenerative Cacao · Costa Rica
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-[13px] tracking-[0.15em] uppercase font-light transition-colors duration-300 hover:text-sunrise ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
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
            <nav className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-[13px] tracking-[0.15em] uppercase font-light text-foreground hover:text-sunrise transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
