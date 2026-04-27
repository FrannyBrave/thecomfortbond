import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { articles } from "@/data/articles";
import { FreeSamplerCTA } from "@/components/FreeSamplerCTA";
import { FreeBlueprintCTA } from "@/components/FreeBlueprintCTA";
import { RecommendedKit, type RecommendedKitData } from "@/components/RecommendedKit";

const BLUEPRINT_CTA_SLUGS = new Set([
  "beyond-bingo-for-seniors",
  "13-week-memory-care-activity-calendar",
]);

/**
 * Per-article "Recommended kit" map.
 *
 * Each entry routes a finished reader to the kit/bundle/blueprint most
 * topically aligned with the article they just read. Anchor text is kept
 * descriptive (kit name + outcome) for SEO weight to the destination.
 */
const RECOMMENDED_KIT_BY_SLUG: Record<string, RecommendedKitData> = {
  "zero-prep-senior-living-activities": {
    eyebrow: "Recommended next step",
    title: "The Comfort Bond™ 5-Kit Bundle",
    description:
      "Five themed, facilitator-ready engagement kits — printable and built specifically to retire the Sunday-night Pinterest scroll. Open the bundle, choose a kit, run the session.",
    href: "/kits",
    ctaLabel: "Explore the 5-Kit Bundle",
  },
  "memory-care-activities-that-work": {
    eyebrow: "Built for memory care",
    title: "The Nostalgia Kit — sensory-rich, decade-anchored reminiscence",
    description:
      "A complete session built around a specific lived decade rather than vague nostalgia — designed for the consistency and thematic echo that residents in memory care actually respond to.",
    href: "/kits",
    ctaLabel: "See the Nostalgia Kit",
  },
  "beyond-bingo-for-seniors": {
    eyebrow: "For weekend handoffs",
    title: "Hand a weekend aide a kit, not a binder",
    description:
      "Each Comfort Bond kit ships with read-aloud prompts, a natural activity arc, and zero training required — the same standard you set, delivered without you in the room.",
    href: "/kits",
    ctaLabel: "Browse the Engagement Kits",
  },
  "13-week-memory-care-activity-calendar": {
    eyebrow: "Skip the spreadsheet",
    title: "The Programming Blueprint™ Pro — a complete 13-week curriculum",
    description:
      "A full quarter of memory care programming, mapped across all six wellness dimensions and anchored to the national calendar — copy it straight into your planning template.",
    href: "/blueprint-pro",
    ctaLabel: "See what's inside the Blueprint Pro",
  },
  "sensory-rich-reminiscence-therapy-dementia-care": {
    eyebrow: "Recommended next step",
    title: "The Comfort Bond™ 5-Kit Bundle — including the Nostalgia, Heirloom Garden & Makers & Menders kits",
    description:
      "The complete sensory-rich reminiscence system referenced throughout this guide — three signature kits plus two more, built to replace the surface-level reminiscence hour with something residents and families can actually feel.",
    href: "/kits",
    ctaLabel: "Explore the 5-Kit Bundle",
  },
};

/* ---------- helpers ---------- */

function renderInlineHtml(text: string) {
  // Convert **bold** markdown to <strong> while preserving inline HTML (e.g. <a>, <br/>, <strong>).
  const html = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong style="color: var(--forest); font-weight: 600;">$1</strong>',
  );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderHtml(html: string) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/* ---------- component ---------- */

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  // Build TOC entries from heading sections.
  const toc = useMemo(() => {
    if (!article) return [] as { id: string; text: string }[];
    return article.content
      .filter((s) => s.type === "heading" && s.text)
      .map((s) => ({ id: slugify(s.text || ""), text: (s.text || "").replace(/<[^>]*>/g, "") }));
  }, [article]);

  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!article) return;

    document.title = `${article.title} — The Comfort Bond™`;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", article.metaDescription);
    setMeta("property", "og:description", article.metaDescription);
    setMeta("name", "twitter:description", article.metaDescription);
    setMeta("property", "og:title", `${article.title} — The Comfort Bond™`);
    setMeta("name", "twitter:title", `${article.title} — The Comfort Bond™`);

    // Build absolute URLs that respect the actual route the user is on
    // (/resources/:slug or /blog/:slug) so schema mainEntityOfPage matches
    // the canonical page URL.
    const SITE = "https://thecomfortbond.com";
    const pathname = typeof window !== "undefined" ? window.location.pathname : `/resources/${article.slug}`;
    const canonicalUrl = `${SITE}${pathname}`;
    const heroAbsolute = article.heroImage?.startsWith("http")
      ? article.heroImage
      : `${SITE}${article.heroImage}`;

    // Update og:image + og:url to match this specific article (not the
    // generic site-wide image set elsewhere).
    setMeta("property", "og:image", heroAbsolute);
    setMeta("name", "twitter:image", heroAbsolute);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "article");

    // BlogPosting + BreadcrumbList JSON-LD (combined @graph for cleaner DOM)
    const ldId = "article-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.metaDescription,
          author: {
            "@type": "Person",
            name: "Francesca",
            url: `${SITE}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: "The Comfort Bond",
            logo: {
              "@type": "ImageObject",
              url: `${SITE}/logo.png`,
            },
          },
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          mainEntityOfPage: canonicalUrl,
          url: canonicalUrl,
          image: {
            "@type": "ImageObject",
            url: heroAbsolute,
            width: 1280,
            height: 720,
          },
          articleSection: article.category,
          inLanguage: "en-US",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE}/resources` },
            { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
          ],
        },
      ],
    });

    return () => {
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [article]);

  // Scroll-spy for TOC active state.
  useEffect(() => {
    if (!toc.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          // Pick the topmost visible heading.
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  if (!article) {
    return (
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <Navigation />
        <div style={{ textAlign: "center", padding: "10rem 2rem" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "var(--forest)" }}>Article not found</h1>
          <Link to="/resources" style={{ color: "var(--clay)", marginTop: "1rem", display: "inline-block" }}>
            ← Back to Resources
          </Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  /* ---------- render ---------- */

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navigation />

      {/* Scoped responsive styles */}
      <style>{`
        .article-shell {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: clamp(2rem, 5vw, 4rem);
          max-width: 1180px;
          margin: 0 auto;
          padding: clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 6vw, 5rem);
        }
        .article-toc {
          position: sticky;
          top: 96px;
          align-self: start;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .article-toc-title {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--clay);
          font-weight: 600;
          margin: 0 0 1rem;
        }
        .article-toc-link {
          display: block;
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(45,74,62,0.65);
          text-decoration: none;
          padding: 8px 0 8px 14px;
          border-left: 2px solid rgba(45,74,62,0.1);
          transition: color 0.15s, border-color 0.15s;
        }
        .article-toc-link:hover { color: var(--forest); }
        .article-toc-link.is-active {
          color: var(--forest);
          font-weight: 600;
          border-left-color: var(--clay);
        }
        .article-body { min-width: 0; max-width: 720px; }
        .article-body p {
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 400;
          color: #1f2d28;
          line-height: 1.8;
          margin: 0 0 1.25rem;
        }
        .article-body p a, .article-body li a {
          color: var(--clay);
          text-decoration: none;
          border-bottom: 1px solid rgba(198,123,92,0.35);
          transition: border-color 0.15s, color 0.15s;
        }
        .article-body p a:hover, .article-body li a:hover {
          border-bottom-color: var(--clay);
          color: var(--forest);
        }
        .article-body h2.section-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 2.6vw, 1.85rem);
          font-weight: 600;
          color: var(--forest);
          line-height: 1.25;
          margin: 3rem 0 1.25rem;
          letter-spacing: -0.01em;
          scroll-margin-top: 96px;
        }
        .article-body h2.section-heading::before {
          content: "";
          display: block;
          width: 36px;
          height: 3px;
          background: var(--clay);
          margin-bottom: 14px;
          border-radius: 2px;
        }
        .article-figure {
          margin: 2.5rem 0;
        }
        .article-figure img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(45,74,62,0.08);
          display: block;
        }
        .article-figure figcaption {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(45,74,62,0.6);
          margin-top: 10px;
          text-align: center;
          font-style: italic;
        }
        .article-callout {
          background: #f6f4ef;
          border-left: 4px solid var(--clay);
          color: var(--forest);
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.7;
        }
        .article-callout a { color: var(--clay); font-weight: 600; text-decoration: underline; }

        .article-hero {
          background: linear-gradient(180deg, #f8f8f5 0%, #ffffff 100%);
          border-bottom: 1px solid rgba(45,74,62,0.08);
        }
        .article-hero-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: clamp(5.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2.5rem) clamp(2.5rem, 4vw, 3.5rem);
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .article-hero-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--clay);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .article-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4.2vw, 3.1rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--forest);
          margin: 0 0 1rem;
          letter-spacing: -0.015em;
        }
        .article-hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(16px, 1.6vw, 18px);
          font-weight: 400;
          color: rgba(45,74,62,0.75);
          line-height: 1.6;
          margin: 0 0 1.5rem;
          max-width: 520px;
        }
        .article-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 0.75rem;
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(45,74,62,0.55);
        }
        .article-hero-meta .dot { opacity: 0.4; }
        .article-hero-image img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 10px 40px rgba(45,74,62,0.18);
          display: block;
        }

        @media (max-width: 960px) {
          .article-hero-inner { grid-template-columns: 1fr; }
          .article-hero-image { order: -1; }
          .article-shell { grid-template-columns: 1fr; }
          .article-toc { display: none; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "5.5rem 1.5rem 0",
        }}
      >
        <Link
          to="/resources"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(45,74,62,0.6)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          ← Back to Resources
        </Link>
      </div>

      {/* Hero */}
      <header className="article-hero">
        <div className="article-hero-inner">
          <div>
            <span className="article-hero-eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-hero-subtitle">{article.subtitle}</p>
            <div className="article-hero-meta">
              <span>{article.readTime}</span>
              <span className="dot">·</span>
              <span>
                Updated{" "}
                {new Date(article.dateModified).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          {article.heroImage && (
            <div className="article-hero-image">
              <img src={article.heroImage} alt={article.heroAlt} width={1280} height={720} />
            </div>
          )}
        </div>
      </header>

      {/* Body + TOC */}
      <div className="article-shell">
        <aside className="article-toc" aria-label="Table of contents">
          <p className="article-toc-title">In this article</p>
          <nav>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`article-toc-link${activeId === item.id ? " is-active" : ""}`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </aside>

        <main className="article-body">
          {article.content.map((section, i) => {
            if (section.type === "image") {
              return (
                <figure key={i} className="article-figure">
                  <img
                    src={section.src}
                    alt={section.alt}
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  {section.alt && <figcaption>{section.alt}</figcaption>}
                </figure>
              );
            }

            if (section.type === "heading") {
              const id = slugify(section.text || "");
              return (
                <h2 key={i} id={id} className="section-heading">
                  {section.text}
                </h2>
              );
            }

            if (section.type === "callout") {
              return (
                <div key={i} className="article-callout">
                  {renderHtml(section.text || "")}
                </div>
              );
            }

            return <p key={i}>{renderInlineHtml(section.text || "")}</p>;
          })}

          {/* Related Articles */}
          {(() => {
            const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
            return (
              <section
                style={{
                  marginTop: "3.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(45,74,62,0.12)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--clay)",
                    margin: "0 0 1.25rem",
                  }}
                >
                  Continue reading
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/resources/${r.slug}`}
                      style={{
                        display: "block",
                        padding: "1.25rem",
                        background: "#fafaf7",
                        border: "1px solid rgba(45,74,62,0.08)",
                        borderRadius: 10,
                        textDecoration: "none",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--clay)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(45,74,62,0.08)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--clay)",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {r.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--forest)",
                          lineHeight: 1.35,
                          display: "block",
                        }}
                      >
                        {r.title}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          color: "rgba(45,74,62,0.5)",
                          marginTop: 8,
                        }}
                      >
                        {r.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })()}
        </main>
      </div>

      {/* Lead-magnet CTA — Blueprint for select articles, Sampler otherwise */}
      {BLUEPRINT_CTA_SLUGS.has(article.slug) ? <FreeBlueprintCTA /> : <FreeSamplerCTA />}

      {/* CTA Banner */}
      <section
        style={{
          background: "var(--forest)",
          padding: "clamp(3.5rem, 6vw, 5rem) 1.5rem",
          textAlign: "center" as const,
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "var(--sand)",
              marginBottom: "1rem",
            }}
          >
            For Activity Directors
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 600,
              color: "#fff",
              margin: "0 0 0.85rem",
              lineHeight: 1.2,
            }}
          >
            Ready to retire DIY activity prep?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              margin: "0 0 2rem",
            }}
          >
            Five themed engagement kits — printable, facilitator-ready, designed specifically for senior living. Built to be opened and used the same day.
          </p>
          <Link
            to="/#products"
            style={{
              display: "inline-block",
              background: "var(--clay)",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#b56c4f";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--clay)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Explore the Engagement Kits →
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ArticleDetail;
