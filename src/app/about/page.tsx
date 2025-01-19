import AboutHero from "../components/AboutHero/AboutHero";
import ServicePillars from "../components/BenefitsSection/ServicePillars";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import FullStory from "../components/FullStory/FullStory";
import Navbar from "../components/Navbar/Navbar";
import PersonalStatement from "../components/PersonalStatement/PersonalStatement";

import Layout from "../layout";

const About: React.FC = () => (
  <Layout>
    <Navbar />
    <AboutHero />
    <FullStory />
    <PersonalStatement />
    <ServicePillars />
    <ContactForm />
    <Footer />
  </Layout>
);

export default About;
