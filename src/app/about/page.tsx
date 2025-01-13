import FactsSection from "../components/AboutFactSection/AboutFactSection";
import AboutHero from "../components/AboutHero/AboutHero";
import ServicePillars from "../components/BenefitsSection/ServicePillars";
import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../layout";

const About: React.FC = () => (
  <Layout>
    <AboutHero />
    <FactsSection />
    <ServicePillars />
    <ContactForm />
  </Layout>
);

export default About;
