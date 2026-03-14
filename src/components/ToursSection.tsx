import { motion } from "framer-motion";
import { Clock, Users, Calendar, MapPin } from "lucide-react";
import farmTour from "@/assets/farm-tour.jpg";
import honeyTour from "@/assets/honey-tour.jpg";

const tours = [
  {
    title: "Chocolate Farm Tour",
    subtitle: "Kauai's #1 Rated Activity",
    price: "From $145",
    image: farmTour,
    alt: "Guided chocolate farm tour at Lydgate Farms",
    description:
      "Your three-hour guided tour begins with a stroll through our botanical gardens, where you sample our award-winning honey, experience vanilla beans, and enjoy an extensive tropical fruit tasting. Learn all about Theobroma Cacao and taste its ripe fruit.",
    details: [
      { icon: Clock, text: "3 Hours" },
      { icon: Users, text: "Ages 7+" },
      { icon: Calendar, text: "Mon–Fri" },
      { icon: MapPin, text: "9am, 10am, 11am, 12pm" },
    ],
    bookUrl: "https://fareharbor.com/embeds/book/steelgrass/items/30528/?flow=1010919",
    learnUrl: "https://lydgatefarms.com/chocolate-farm-tour/",
  },
  {
    title: "Honey & Bee Tour",
    subtitle: "Inside the Hive",
    price: "From $115",
    image: honeyTour,
    alt: "Honey bee tour at Lydgate Farms",
    description:
      "Get the inside scoop from our friendly beekeepers. Put on bee suits and see inside an active beehive on this comfortable, illuminating, and fun family activity. Harvest and taste fresh honey straight from the comb.",
    details: [
      { icon: Clock, text: "2 Hours" },
      { icon: Users, text: "Ages 7+" },
      { icon: Calendar, text: "Mon, Wed, Fri" },
      { icon: MapPin, text: "9:30am" },
    ],
    bookUrl: "https://fareharbor.com/embeds/book/steelgrass/items/586295/?full-items=yes&flow=1010919",
    learnUrl: "https://lydgatefarms.com/inside-the-hive-honey-bee-tour/",
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-accent font-bold mb-4">
            Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Kauai Farm Tours
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Immerse yourself in the art of Hawaiian chocolate and honey on our historic family farm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background rounded-sm shadow-[var(--shadow-card)] overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-body text-sm font-bold px-4 py-2 rounded-sm">
                  {tour.price}
                </div>
              </div>

              <div className="p-8">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-bold mb-2">
                  {tour.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold text-secondary mb-4">
                  {tour.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {tour.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {tour.details.map((d) => (
                    <div key={d.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <d.icon size={16} className="text-primary" />
                      <span className="font-body">{d.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={tour.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-accent text-accent-foreground font-body text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-sm hover:brightness-110 transition-all"
                  >
                    Book Now
                  </a>
                  <a
                    href={tour.learnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-secondary text-secondary font-body text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-secondary hover:text-secondary-foreground transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
