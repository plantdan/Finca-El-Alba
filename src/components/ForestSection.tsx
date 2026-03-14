import { motion } from "framer-motion";
import { Leaf, Droplets, TreePine, Shield } from "lucide-react";
import agroforestry from "@/assets/agroforestry.jpg";

const principles = [
  {
    icon: TreePine,
    title: "Multi-Layered Canopy",
    text: "Cacao grows beneath a diverse forest canopy alongside fruit trees, timber species, and native forest.",
  },
  {
    icon: Leaf,
    title: "Soil Regeneration",
    text: "Agroforestry design rebuilds soil health, sequesters carbon, and restores degraded tropical landscapes.",
  },
  {
    icon: Shield,
    title: "Biodiversity Protection",
    text: "Dozens of plant species create habitat corridors for wildlife and strengthen ecosystem resilience.",
  },
  {
    icon: Droplets,
    title: "Water Retention",
    text: "Forest cover improves water cycles, reduces erosion, and protects local watersheds.",
  },
];

const ForestSection = () => {
  return (
    <section id="forest" className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={agroforestry}
              alt="Multi-layered agroforestry food forest at Finca El Alba"
              className="w-full object-cover aspect-[4/5] shadow-[var(--shadow-elevated)]"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="w-10 h-px bg-sunrise mb-8" />
            <p className="font-body text-[11px] tracking-[0.5em] uppercase text-sunrise font-medium mb-5">
              The Living Forest
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-8">
              Not a Plantation.
              <br />
              <span className="italic">An Ecosystem.</span>
            </h2>
            <p className="font-body font-light leading-[1.85] text-[15px] text-primary-foreground/75 mb-12">
              Finca El Alba is designed as a living agroforestry ecosystem. Rather than stripping the 
              land for monoculture, we build resilient farming systems that produce exceptional cacao 
              while restoring the land.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p.icon size={22} className="text-sunrise mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-medium mb-2">{p.title}</h3>
                  <p className="font-body text-[13px] font-light leading-relaxed text-primary-foreground/60">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForestSection;
