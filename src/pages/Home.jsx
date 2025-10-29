import Hero from '@components/Hero/Hero';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ProjectsList from '@components/ProjectsList/ProjectsList';
import SEO from '@components/SEO/SEO';
import StructuredData from '@components/SEO/StructuredData';

function Home() {
  return (
    <>
      <SEO
        title="DNC Arquitetura - Jair Correa | Portfólio de Arquitetura"
        description="Portfólio profissional de arquitetura com projetos inovadores e criativos. Conheça nosso trabalho em design arquitetônico, projetos residenciais e comerciais."
        keywords="arquitetura, design, projetos, portfolio, arquiteto, design de interiores, projetos residenciais"
      />
      <StructuredData />
      <Header />
      <div className='container'>
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
