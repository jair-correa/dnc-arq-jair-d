import { useContext } from 'react';
import ContactForm from '@components/ContactForm/ContactForm';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import SEO from '@components/SEO/SEO';

//CONTEXT
import { AppContext } from '../contexts/AppContext';

function Contact() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <>
      <SEO
        title="Contato - DNC Arquitetura | Entre em Contato"
        description="Entre em contato com a DNC Arquitetura. Tire suas dúvidas, solicite um orçamento ou agende uma reunião para discutir seu projeto."
        keywords="contato, orçamento, consultoria, arquitetura, atendimento, email, telefone"
      />
      <Header />
      <Banner title={languages?.[language]?.menu?.contact || 'Contact'} image='contact.jpg' />
      <div className='container'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
