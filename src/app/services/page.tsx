import ServicePillars from "../components/BenefitsSection/ServicePillars";
import ClientInsights from "../components/ClientInsights/ClientInsights";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ServicesHero from "../components/ServicesHero/ServicesHero";
import VisionStatement from "../components/VisionStatement/VisionStatement";
import Layout from "../layout";

const Services: React.FC = () => (
  <Layout>
    <Navbar />
    <ServicesHero />
    <ServicePillars />
    <ClientInsights />
    <VisionStatement />
    <ContactForm />
    <Footer />
  </Layout>
);

export default Services;
