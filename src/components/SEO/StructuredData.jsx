import { Helmet } from 'react-helmet-async';

function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DNC Arquitetura - Jair Correa',
    description: 'Portfólio profissional de arquitetura com projetos inovadores e criativos',
    url: 'https://dnc-arq-jair-d.vercel.app',
    logo: 'https://dnc-arq-jair-d.vercel.app/logo.png',
    image: 'https://dnc-arq-jair-d.vercel.app/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    sameAs: [
      // Add social media links here when available
      // 'https://www.facebook.com/dncarquitetura',
      // 'https://www.instagram.com/dncaquitetura',
      // 'https://www.linkedin.com/in/jair-correa'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Portuguese', 'English'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

export default StructuredData;
