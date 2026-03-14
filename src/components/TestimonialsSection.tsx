import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "This has to be one of our favorite tours of all the islands and we have been to them all!! The guide was fantastic in his knowledge and desire to educate us on the history and production of the great Lydgate Farms products!",
    author: "Jerry & Karen",
    source: "TripAdvisor",
  },
  {
    text: "What a delightful deep dive into mindful experiences of both tasting chocolate and the fully engaged regenerative farming process. Lydgate Farm tour opened my eyes to the 'food of the Gods.'",
    author: "Steven D.",
    source: "TripAdvisor",
  },
  {
    text: "Sorry but this should be 10 STARS! Place was fabulous. We learned a lot about chocolate that we never knew before. Our guide was funny and incredibly informative. Highly recommend!",
    author: "SKCYCLES",
    source: "TripAdvisor",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-bold mb-4">
            What Guests Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            #1 Rated Tour on Kauaʻi
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-muted rounded-sm p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-sm font-bold text-secondary">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground">{t.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
