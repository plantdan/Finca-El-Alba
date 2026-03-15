import { motion } from "framer-motion";
import CacaoDivider from "@/components/CacaoDivider";

const VisionSection = () => {
  return (
    <section className="py-28 md:py-36 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-10 h-px bg-sunrise mx-auto mb-8" />
          <p className="font-body text-[11px] tracking-[0.5em] uppercase text-sunrise font-medium mb-8">
            Our Vision
          </p>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.25] mb-10 text-secondary-foreground/90">
            "Finca El Alba is more than a farm — it is a long-term vision for how tropical 
            agriculture can restore landscapes while producing extraordinary food."
          </blockquote>
          <div className="w-8 h-px bg-secondary-foreground/20 mx-auto mb-6" />
          <p className="font-body text-[13px] font-light text-secondary-foreground/60 tracking-wider">
            Daniel Batalla · Founder & Agroforestry Designer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
