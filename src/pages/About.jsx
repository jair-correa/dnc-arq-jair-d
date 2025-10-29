import { useContext } from 'react';
import AboutText from '../components/AboutText/AboutText';
import Banner from '../components/Banner/Banner';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SEO from '@components/SEO/SEO';

//CONTEXT
import { AppContext } from '../contexts/AppContext';

function About() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <>
      <SEO
        title="Sobre - DNC Arquitetura | Nossa História e Filosofia"
        description="Conheça mais sobre a DNC Arquitetura, nossa história, filosofia de trabalho e equipe. Saiba como transformamos espaços em experiências únicas."
        keywords="sobre, arquitetura, história, equipe, filosofia, missão, valores"
      />
      <Header />
      <Banner title={languages?.[language]?.menu?.about || 'About'} image='about.png' />
      <div className='container'>
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
