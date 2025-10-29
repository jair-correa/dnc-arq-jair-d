import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function SEO({
  title = 'DNC Arquitetura - Jair Correa | Portfólio de Arquitetura',
  description = 'Portfólio profissional de arquitetura com projetos inovadores e criativos. Conheça nosso trabalho em design arquitetônico, projetos residenciais e comerciais.',
  keywords = 'arquitetura, design, projetos, portfolio, arquiteto, design de interiores, projetos residenciais, projetos comerciais',
  image = '/og-image.jpg',
  author = 'Jair Correa',
  type = 'website',
}) {
  const location = useLocation();
  const siteUrl = 'https://dnc-arq-jair-d.vercel.app';
  const currentUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="DNC Arquitetura - Jair Correa" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}

export default SEO;
