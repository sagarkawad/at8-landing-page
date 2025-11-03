import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialsSection from "@/components/sections/SocialsSection";
import WorkShowcase from "@/components/sections/WorkShowcase";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import AbstractBackground from "@/components/ui-custom/AbstractBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AbstractBackground />
      <Navbar />
      <HeroSection />
      <WorkShowcase />
      <ServicesSection />
      <ClientLogos />
      <SocialsSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
