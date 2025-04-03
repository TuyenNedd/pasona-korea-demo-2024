import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import JobHakuSection from "@/components/JobHakuSection";
import PasonaGroupSection from "@/components/PasonaGroupSection";
import CEOMessageSection from "@/components/CEOMessageSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <JobHakuSection />
      <PasonaGroupSection />
      <CEOMessageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}