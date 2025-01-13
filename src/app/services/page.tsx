import ServicePillars from "../components/BenefitsSection/ServicePillars";
import ServicesHero from "../components/ServicesHero/ServicesHero";
import VisionStatement from "../components/VisionStatement/VisionStatement";
import Layout from "../layout";

const Services: React.FC = () => (
  <Layout>
    <ServicesHero />
    <ServicePillars />
    <VisionStatement />
  </Layout>
);

export default Services;
