import FactsSection from "../components/AboutFactSection/AboutFactSection";
import AboutHero from "../components/AboutHero/AboutHero";
import ServicePillars from "../components/BenefitsSection/ServicePillars";
import Layout from "../layout";

const About: React.FC = () => (
  <Layout>
    <AboutHero />
    <FactsSection />
    <ServicePillars />
  </Layout>
);

export default About;
