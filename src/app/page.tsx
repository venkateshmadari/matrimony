import AboutSection from "@/components/AboutSection";
import CardCaroursalDemo from "@/components/CardCaroursalDemo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Testimonial from "@/components/Testimonial";
import WaveBanner from "@/components/WaveBanner";
import WelcomeSection from "@/components/WelcomeSection";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <WelcomeSection />
      <WaveBanner />
      <AboutSection />
      <ServicesSection />
      <CardCaroursalDemo />
      <Testimonial />
      <Footer />
    </div>
  );
}
