import { motion } from "framer-motion";
import cacaoPods from "@/assets/cacao-pods-alba.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="w-10 h-px bg-sunrise mb-8" />
            <p className="font-body text-[11px] tracking-[0.5em] uppercase text-sunrise font-medium mb-5">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-[1.1] mb-8">
              A New Dawn for
              <br />
              <span className="italic">Tropical Agriculture</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body font-light leading-[1.85] text-[15px]">
              <p>
                <em className="text-foreground font-normal">El Alba</em> — meaning <em>the dawn</em> — 
                represents a new beginning: the restoration of degraded land into vibrant, productive 
                ecosystems in the lush northern lowlands of Costa Rica.
              </p>
              <p>
                The project was developed by <strong className="text-foreground font-medium">Daniel Batalla</strong>, 
                a second-generation tropical botanist, agroforestry designer, and cacao producer who has spent 
                his life studying tropical plants and regenerative food systems.
              </p>
              <p>
                Finca El Alba builds on decades of family experience working with tropical crops while 
                integrating modern agroecological design principles — creating a model for how agriculture 
                can restore landscapes while producing extraordinary food.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img
              src={cacaoPods}
              alt="Colorful cacao pods growing on a tree trunk at Finca El Alba"
              className="w-full object-cover aspect-[3/4] shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground px-8 py-6">
              <p className="font-display text-3xl font-light italic">El Alba</p>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase font-light mt-1">
                The Dawn
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
