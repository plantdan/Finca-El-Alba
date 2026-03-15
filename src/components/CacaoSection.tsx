import { motion } from "framer-motion";
import fermentation from "@/assets/fermentation.jpg";
import dryingBeds from "@/assets/drying-beds.jpg";
import CacaoDivider from "@/components/CacaoDivider";

const CacaoSection = () => {
  return (
    <section id="cacao" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <CacaoDivider />
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-sunrise font-medium mb-5">
            Fine Flavor Cacao
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-[1.1] mb-8">
            From Pod to
            <br />
            <span className="italic">Exceptional Bean</span>
          </h2>
          <p className="font-body font-light leading-[1.85] text-[15px] text-muted-foreground">
            Each lot is handled with meticulous attention to detail and full traceability — allowing 
            chocolate makers to connect directly with the land and the people behind the cacao.
          </p>
        </motion.div>

        {/* Process grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fermentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden"
          >
            <img
              src={fermentation}
              alt="Cacao fermentation boxes at Finca El Alba"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-sunrise font-medium mb-2">
                01
              </p>
              <h3 className="font-display text-2xl font-light text-primary-foreground mb-2">
                Fermentation
              </h3>
              <p className="font-body text-[13px] font-light text-primary-foreground/70 leading-relaxed">
                Carefully managed fermentation protocols develop complex flavor profiles unique 
                to our terroir in the San Carlos lowlands.
              </p>
            </div>
          </motion.div>

          {/* Drying */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative overflow-hidden"
          >
            <img
              src={dryingBeds}
              alt="Cacao drying beds at Finca El Alba"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-sunrise font-medium mb-2">
                02
              </p>
              <h3 className="font-display text-2xl font-light text-primary-foreground mb-2">
                Solar Drying
              </h3>
              <p className="font-body text-[13px] font-light text-primary-foreground/70 leading-relaxed">
                Beans are sun-dried on raised beds with constant monitoring to reach optimal 
                moisture levels for fine chocolate production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* USPs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-border pt-16"
        >
          {[
            { label: "Full Traceability", desc: "Every lot tracked from tree to export" },
            { label: "Fine Flavor", desc: "Complex, distinctive flavor profiles" },
            { label: "Direct Trade", desc: "Connecting makers to origin" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <h4 className="font-display text-xl font-medium text-secondary mb-2">{item.label}</h4>
              <p className="font-body text-[13px] font-light text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CacaoSection;
