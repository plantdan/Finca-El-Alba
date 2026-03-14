import { motion } from "framer-motion";
import chocolateBars from "@/assets/chocolate-bars.jpg";

const ChocolateSection = () => {
  return (
    <section id="chocolate" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={chocolateBars}
              alt="Lydgate Farms artisan chocolate bars"
              className="w-full rounded-sm shadow-[var(--shadow-elevated)] object-cover aspect-square"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-bold mb-4">
              Farm to Bar
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-8 leading-tight">
              Award-Winning Hawaiian Chocolate
            </h2>
            <div className="space-y-5 text-secondary-foreground/80 font-body leading-relaxed">
              <p>
                Every product we sell is special to us because we sell all of them directly to 
                you — our farm <em>ohana</em> (family). All of our products are naturally grown with 
                lots of Kauai sunshine and rainwater, hand-harvested, and processed in small batches 
                with skill and aloha.
              </p>
              <p>
                Experience our award-winning single origin Hawaiian chocolate, vanilla beans, 
                and farm honey. Check out our multi-bar tasting packs and product groupings — 
                perfect gifts for the special people in your lives.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://lydgatefarms.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-accent text-accent-foreground font-body text-sm font-bold tracking-wider uppercase px-10 py-4 rounded-sm hover:brightness-110 transition-all"
              >
                Shop Online
              </a>
              <div className="text-center sm:text-left">
                <p className="font-display text-sm font-semibold text-secondary-foreground">
                  Tasting Room Open
                </p>
                <p className="font-body text-xs text-secondary-foreground/60">
                  Downtown Kapaa · Mon–Fri, 10am–4pm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChocolateSection;
