import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { articles } from "@/data/articles";
import mothersDayHero from "@/assets/blog-mothers-day-memory-care-hero.jpg";

const categories = ["ALL", "STAFFING & PREP", "MEMORY CARE", "PROGRAMMING"];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = "Free Guides & Activity Ideas for Senior Living Professionals | The Comfort Bond™";
    document.title = title;
    const desc = "Free guides and strategies for activity directors in senior living and memory care. Zero-prep ideas, programming tips, and engagement resources.";
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", desc);
    setMeta("property", "og:description", desc);
    setMeta("name", "twitter:description", desc);
    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "senior living activities, memory care activities, activity director resources, senior engagement kits, printable activities for elderly");
    }
  }, []);

  const filteredArticles = activeFilter === "ALL"
    ? articles
    : articles.filter(a => a.category === activeFilter);

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navigation />

      {/* Hero */}
      <section style={{
        paddingTop: "clamp(7rem, 12vw, 10rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        textAlign: "center",
        background: "var(--cream)",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "var(--clay)",
            marginBottom: "1.5rem",
          }}>
            <span style={{ width: 24, height: 2, background: "var(--clay)", display: "inline-block" }} />
            RESOURCES
          </div>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            color: "var(--text-dark)",
            margin: "0 0 1rem",
          }}>
            Activity Director Resources & Insights
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            fontWeight: 300,
            color: "var(--text-mid)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Practical guides, zero-prep activity ideas, and strategies for Senior Living and Memory Care professionals.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1.5rem 2rem",
        display: "flex",
        flexWrap: "wrap" as const,
        gap: 10,
        justifyContent: "center",
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.06em",
              padding: "8px 20px",
              borderRadius: 100,
              border: activeFilter === cat ? "none" : "1px solid var(--border)",
              background: activeFilter === cat ? "var(--forest)" : "#fff",
              color: activeFilter === cat ? "#fff" : "var(--text-dark)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article — Mother's Day */}
      {activeFilter === "ALL" && (
        <section style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem 2.5rem",
        }}>
          <Link
            to="/blog/mothers-day-memory-care-family-guide"
            style={{ textDecoration: "none", display: "block" }}
          >
            <article
              className="featured-article"
              style={{
                background: "var(--forest)",
                borderRadius: 20,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
                minHeight: 320,
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 8px 28px rgba(45,74,62,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(45,74,62,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(45,74,62,0.12)";
              }}
            >
              <div style={{
                background: `url(${mothersDayHero}) center/cover`,
                minHeight: 240,
              }} />
              <div style={{
                padding: "clamp(2rem, 4vw, 3rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#fff",
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--sand)",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-sans)",
                }}>
                  <span style={{ width: 18, height: 2, background: "var(--sand)", display: "inline-block" }} />
                  Featured · For Families
                </span>
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "#fff",
                  margin: "0 0 1rem",
                  letterSpacing: "-0.005em",
                }}>
                  Mother's Day in Memory Care: A Family Caregiver's Guide
                </h2>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.65,
                  margin: "0 0 1.5rem",
                  fontWeight: 400,
                }}>
                  A working document for the visits we do not know how to prepare for —
                  what to bring, what to say, and what to release before you walk in.
                </p>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "var(--sand)",
                }}>
                  Read the guide →
                </span>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Article Grid */}
      <section style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1.5rem clamp(4rem, 8vw, 6rem)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}>
          {filteredArticles.map((article) => {
            const blogSlugs = ["13-week-memory-care-activity-calendar", "sensory-rich-reminiscence-therapy-dementia-care"];
            const href = blogSlugs.includes(article.slug) ? `/blog/${article.slug}` : `/resources/${article.slug}`;
            return (
            <Link
              key={article.slug}
              to={href}
              style={{ textDecoration: "none", display: "flex" }}
            >
              <article style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column" as const,
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
                width: "100%",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(45,74,62,0.1)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Color Block Header */}
                <div style={{
                  background: article.headerDark ? "var(--forest)" : "var(--clay-pale)",
                  padding: "2rem 1.75rem 1.75rem",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: article.headerDark ? "var(--sand)" : "var(--clay)",
                    background: article.headerDark ? "rgba(232,201,154,0.15)" : "rgba(196,122,90,0.12)",
                    padding: "4px 12px",
                    borderRadius: 100,
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 32 }}>{article.icon}</span>
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.5rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" as const }}>
                  <h2 style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    lineHeight: 1.3,
                    margin: "0 0 0.75rem",
                  }}>
                    {article.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 300,
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                    margin: "0 0 1.25rem",
                    flex: 1,
                  }}>
                    {article.excerpt}
                  </p>
                  <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 0 1rem" }} />
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--clay)",
                    transition: "opacity 0.2s",
                  }}>
                    Read article →
                  </span>
                </div>
              </article>
            </Link>
          );})}
        </div>
      </section>

      <FooterSection />

      <style>{`
        @media (max-width: 720px) {
          .featured-article {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resources;
