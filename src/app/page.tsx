import MissionStatement from "./components/AboutFactSection/MissionStatement";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicePillars from "./components/BenefitsSection/ServicePillars";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import LandingHero from "./components/LandingHero/LandingHero";
import Navbar from "./components/Navbar/Navbar";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import VisionStatement from "./components/VisionStatement/VisionStatement";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <LandingHero />
      <MissionStatement />
      <AboutSection />
      <VisionStatement />
      <ServicePillars />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </Layout>
  );
}
