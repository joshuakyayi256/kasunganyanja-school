// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://kasunganyanjaprimary.org';

// Define your static routes here
const routes = [
  '',
  '/about',
  '/academics',
  '/admissions',
  '/donate',
  '/sponsor',
  '/impact',
  '/news',
  '/gallery',
  '/contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${SITE_URL}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();