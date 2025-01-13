import AboutSection from "./components/AboutSection/AboutSection";
import ServicePillars from "./components/BenefitsSection/ServicePillars";
import ContactForm from "./components/ContactForm/ContactForm";
import LandingHero from "./components/LandingHero/LandingHero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import VisionStatement from "./components/VisionStatement/VisionStatement";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <LandingHero />
      <ServicePillars />
      <VisionStatement />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
    </Layout>
  );
}
