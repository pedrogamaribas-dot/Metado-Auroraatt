import AuroraHero from "@/components/AuroraHero";
import MethodCarousel from "@/components/MethodCarousel";
import AboutLarissa from "@/components/AboutLarissa";
import Testimonials from "@/components/Testimonials";
import MainCTA from "@/components/MainCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AuroraHero />
      
      {/* Method Discovery Section */}
      <MethodCarousel />
      
      {/* About Larissa Section */}
      <AboutLarissa />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Main CTA Section */}
      <MainCTA />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
