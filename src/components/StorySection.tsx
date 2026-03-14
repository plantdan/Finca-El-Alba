import { motion } from "framer-motion";
import cacaoPod from "@/assets/cacao-pod.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-bold mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              We Love Chocolate
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-base">
              <p>
                Our family has been farming in the islands since the days of the Hawaiian kingdom. 
                Recognized three times as producing the best cacao beans in the world by Cocoa of 
                Excellence in Paris, France — we are pioneers of cacao farming on Kauai.
              </p>
              <p>
                In Hawaiian, the phrase <em className="text-secondary font-semibold">Malama ʻAina</em> means 
                to care for the land so it can sustain life for future generations. As a fifth-generation 
                family in Hawaii, we are honored to be stewards of both the land and local culture since 1865.
              </p>
              <p>
                We are proud to continue our family's legacy through the experience of small-scale 
                sustainable cacao farming, exquisitely crafted chocolate, and educational farm tours 
                on our historically-rich property.
              </p>
            </div>

            {/* Award badge */}
            <div className="mt-10 inline-flex items-center gap-3 bg-muted rounded-sm px-6 py-4">
              <span className="text-accent text-2xl">★</span>
              <div>
                <p className="font-display text-sm font-bold text-secondary">
                  Cacao of Excellence — Paris, France
                </p>
                <p className="font-body text-xs text-muted-foreground tracking-wider">
                  WORLD'S BEST CACAO BEANS · 2017, 2021, 2023
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={cacaoPod}
              alt="Fresh cacao pod from Lydgate Farms"
              className="w-full rounded-sm shadow-[var(--shadow-elevated)] object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-5 rounded-sm shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-bold">1865</p>
              <p className="font-body text-xs tracking-widest uppercase">Farming on Kauaʻi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
