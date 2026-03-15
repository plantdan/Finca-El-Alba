import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-earth text-primary-foreground">
      {/* Contact section */}
      <div className="py-20 border-b border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <div className="w-10 h-px bg-sunrise mb-8" />
              <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-6">
                Get in <span className="italic">Touch</span>
              </h2>
              <p className="font-body text-[15px] font-light text-primary-foreground/60 leading-[1.85] max-w-md">
                Whether you're a chocolate maker looking for exceptional single-origin cacao, 
                a visitor wanting to experience our farm, or someone who shares our vision for 
                regenerative agriculture — we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-body text-[10px] tracking-[0.5em] uppercase text-sunrise font-medium mb-3">
                  Location
                </h4>
                <p className="font-body text-[15px] font-light text-primary-foreground/70">
                  Cutris, San Carlos
                  <br />
                  Northern Lowlands, Costa Rica
                </p>
              </div>
              <div>
                <h4 className="font-body text-[10px] tracking-[0.5em] uppercase text-sunrise font-medium mb-3">
                  Inquiries
                </h4>
                <a
                  href="mailto:info@fincaelalba.com"
                  className="font-body text-[15px] font-light text-primary-foreground/70 hover:text-sunrise transition-colors"
                >
                  info@fincaelalba.com
                </a>
              </div>
              <div>
                <h4 className="font-body text-[10px] tracking-[0.5em] uppercase text-sunrise font-medium mb-3">
                  For Chocolate Makers
                </h4>
                <p className="font-body text-[15px] font-light text-primary-foreground/70">
                  We welcome direct trade partnerships.
                  <br />
                  Sample lots and traceability data available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img src={logo} alt="Finca El Alba" className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="font-body text-[11px] text-primary-foreground/30 tracking-wider">
            © {new Date().getFullYear()} Finca El Alba · Cutris, San Carlos, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
