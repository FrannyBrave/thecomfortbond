import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    generateBundle() {
      const BASE = "https://thecomfortbond.com";
      const pages = [
        { loc: "/", changefreq: "weekly", priority: "1.0" },
        { loc: "/shop", changefreq: "weekly", priority: "0.9" },
        { loc: "/refund-policy", changefreq: "yearly", priority: "0.3" },
        { loc: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
        { loc: "/terms", changefreq: "yearly", priority: "0.3" },
      ];
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: xml,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      // Headers are applied globally in dev; production headers need deployment config
    },
  },
  plugins: [react(), sitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
