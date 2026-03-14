import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ToursSection from "@/components/ToursSection";
import ChocolateSection from "@/components/ChocolateSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ToursSection />
        <ChocolateSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
