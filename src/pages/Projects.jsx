import { useContext } from 'react';
import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ProjectsList from '@components/ProjectsList/ProjectsList';
import SEO from '@components/SEO/SEO';

//CONTEXT
import { AppContext } from '../contexts/AppContext';

function Projects() {
  const appContext = useContext(AppContext);
  const { language, languages } = appContext || {};

  return (
    <>
      <SEO
        title="Projetos - DNC Arquitetura | Portfólio de Projetos"
        description="Explore nosso portfólio completo de projetos arquitetônicos. Design inovador, sustentabilidade e funcionalidade em cada projeto."
        keywords="projetos, portfolio, obras, arquitetura moderna, design residencial, design comercial"
      />
      <Header />
      <Banner title={languages?.[language]?.menu?.projects || 'Projects'} image='projects.jpg' />
      <div className='container'>
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
