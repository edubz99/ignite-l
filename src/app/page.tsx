"use client";
import dynamic from "next/dynamic";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicePillars from "./components/BenefitsSection/ServicePillars";
import ContactForm from "./components/ContactForm/ContactForm";
import LandingHero from "./components/LandingHero/LandingHero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import VisionStatement from "./components/VisionStatement/VisionStatement";

export default function Home() {
  const NoSSRLayout = dynamic(() => import("./layout"), { ssr: false });

  return (
    <NoSSRLayout>
      <LandingHero />
      <ServicePillars />
      <VisionStatement />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
    </NoSSRLayout>
  );
}
