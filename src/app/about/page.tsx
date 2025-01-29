import AboutHero from "../components/AboutHero/AboutHero";
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
    <ContactForm />
    <Footer />
  </Layout>
);

export default About;
