import ServicePillars from "../components/BenefitsSection/ServicePillars";
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
    <VisionStatement />
    <ContactForm />
    <Footer />
  </Layout>
);

export default Services;
