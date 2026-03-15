import { motion } from "framer-motion";
import heroImage from "@/assets/hero-alba.jpg";
import titleImage from "@/assets/finca-el-alba-title.png";
import CacaoDivider from "@/components/CacaoDivider";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunrise over the regenerative cacao forest at Finca El Alba, Costa Rica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth/60 via-earth/25 to-earth/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <CacaoDivider inverted className="mx-auto" />
          <p className="font-body text-[11px] tracking-[0.6em] uppercase text-primary-foreground/60 font-light">
            Cutris · San Carlos · Costa Rica
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-primary-foreground leading-[0.9] mb-6 tracking-wide"
        >
          Finca
          <br />
          <span className="italic">El Alba</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-body text-[13px] tracking-[0.3em] uppercase text-primary-foreground/70 font-light mb-12"
        >
          Regenerative Cacao · Fine Flavor · Agroforestry
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#story"
            className="bg-sunrise/90 text-earth font-body text-[12px] font-medium tracking-[0.2em] uppercase px-10 py-4 hover:bg-sunrise transition-all duration-300"
          >
            Discover Our Farm
          </a>
          <a
            href="#tour"
            className="border border-primary-foreground/30 text-primary-foreground font-body text-[12px] tracking-[0.2em] uppercase px-10 py-4 hover:border-primary-foreground/60 transition-all duration-300"
          >
            Book a Tour
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-primary-foreground/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
