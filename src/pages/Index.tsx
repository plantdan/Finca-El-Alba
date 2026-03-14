import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ForestSection from "@/components/ForestSection";
import CacaoSection from "@/components/CacaoSection";
import TourSection from "@/components/TourSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ForestSection />
        <CacaoSection />
        <TourSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
