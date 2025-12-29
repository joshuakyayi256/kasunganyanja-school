import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  path: string;
};

export default function SEO({ title, description, path }: SEOProps) {
  const fullTitle = `${title} | Kasunganyanja Parents Primary School`;
  const siteUrl = "https://kasunganyanjaprimary.org"; // Update with your actual URL
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Social Media (Open Graph) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}