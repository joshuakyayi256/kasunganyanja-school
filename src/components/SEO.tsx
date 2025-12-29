import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

export default function SEO({ title, description, path }: SEOProps) {
  const fullTitle = `${title} | Kasunganyanja Parents Primary School`;
  const url = `https://your-school-domain.vercel.app${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}