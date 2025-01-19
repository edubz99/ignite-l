import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../layout";

const Contact: React.FC = () => (
  <Layout>
    <Navbar />
    <ContactForm />
    <Footer />
  </Layout>
);

export default Contact;
