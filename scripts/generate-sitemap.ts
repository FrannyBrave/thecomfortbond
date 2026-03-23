import { articles } from "../src/data/articles";

const BASE = "https://thecomfortbond.com";

interface SitemapEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

const staticPages: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/resources", changefreq: "weekly", priority: "0.8" },
  { loc: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
];

const articlePages: SitemapEntry[] = articles.map((a) => ({
  loc: `/resources/${a.slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const allPages = [...staticPages, ...articlePages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.loc === "/" ? "/" : p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

export default xml;
