import ServicePillars from "../components/BenefitsSection/ServicePillars";
import ContactForm from "../components/ContactForm/ContactForm";
import ServicesHero from "../components/ServicesHero/ServicesHero";
import VisionStatement from "../components/VisionStatement/VisionStatement";
import Layout from "../layout";

const Services: React.FC = () => (
  <Layout>
    <ServicesHero />
    <ServicePillars />
    <VisionStatement />
    <ContactForm />
  </Layout>
);

export default Services;
