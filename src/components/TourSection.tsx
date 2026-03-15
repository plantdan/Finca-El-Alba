import { motion } from "framer-motion";
import { Clock, Users, TreePine, MapPin } from "lucide-react";
import farmTour from "@/assets/farm-tour.jpg";
import CacaoDivider from "@/components/CacaoDivider";

const TourSection = () => {
  return (
    <section id="tour" className="py-28 md:py-36 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-10 h-px bg-sunrise mb-8" />
            <p className="font-body text-[11px] tracking-[0.5em] uppercase text-sunrise font-medium mb-5">
              Visit the Farm
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary leading-[1.1] mb-8">
              Walk Through
              <br />
              <span className="italic">a Living Forest</span>
            </h2>
            <p className="font-body font-light leading-[1.85] text-[15px] text-muted-foreground mb-10">
              Experience the beauty and science of regenerative cacao farming firsthand. Guided by 
              Daniel himself, you'll walk through the multi-layered agroforestry system, taste fresh 
              cacao fruit, learn the art of post-harvest processing, and discover how tropical 
              agriculture can heal the land.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: TreePine, text: "Agroforestry walk" },
                { icon: Clock, text: "Half-day experience" },
                { icon: Users, text: "Small groups" },
                { icon: MapPin, text: "Cutris, San Carlos" },
              ].map((d) => (
                <div key={d.text} className="flex items-center gap-3">
                  <d.icon size={18} className="text-sunrise" strokeWidth={1.5} />
                  <span className="font-body text-[13px] font-light text-foreground">{d.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-sunrise text-earth font-body text-[12px] font-medium tracking-[0.2em] uppercase px-10 py-4 hover:brightness-110 transition-all duration-300"
            >
              Inquire About Tours
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <img
              src={farmTour}
              alt="Guided farm tour through cacao trees at Finca El Alba"
              className="w-full object-cover aspect-[3/4] shadow-[var(--shadow-elevated)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
