import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { articles } from "@/data/articles";

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: "var(--text-dark)", fontWeight: 600 }}>{part}</strong>
      : <span key={i}>{part}</span>
  );
}

function renderHtmlContent(html: string) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} — The Comfort Bond™`;
    }
  }, [article]);

  if (!article) {
    return (
      <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <Navigation />
        <div style={{ textAlign: "center", padding: "10rem 2rem" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "var(--text-dark)" }}>Article not found</h1>
          <Link to="/resources" style={{ color: "var(--clay)", marginTop: "1rem", display: "inline-block" }}>
            ← Back to Resources
          </Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navigation />

      {/* Hero Banner */}
      <header style={{
        background: "var(--forest)",
        paddingTop: "clamp(7rem, 12vw, 10rem)",
        paddingBottom: "clamp(3rem, 6vw, 4.5rem)",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "var(--forest)",
            background: "var(--sand)",
            padding: "4px 14px",
            borderRadius: 100,
            marginBottom: "1.5rem",
          }}>
            {article.category}
          </span>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#fff",
            margin: "0 0 1rem",
          }}>
            {article.title}
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            fontWeight: 300,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            margin: "0 0 1.25rem",
            maxWidth: 600,
          }}>
            {article.subtitle}
          </p>
          <span style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--sand)",
          }}>
            {article.readTime}
          </span>
        </div>
      </header>

      {/* Article Body */}
      <main style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "clamp(2.5rem, 5vw, 4rem) 1.5rem",
      }}>
        {article.content.map((section, i) => {
          if (section.type === "heading") {
            return (
              <h3 key={i} style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "var(--text-dark)",
                margin: "2.5rem 0 1rem",
                paddingLeft: 16,
                borderLeft: "3px solid var(--clay)",
                lineHeight: 1.3,
              }}>
                {section.text}
              </h3>
            );
          }

          if (section.type === "callout") {
            return (
              <div key={i} style={{
                background: "var(--forest)",
                color: "var(--sand)",
                borderRadius: 12,
                padding: "1.5rem 2rem",
                margin: "2rem 0",
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.7,
              }}>
                {renderHtmlContent(section.text || "")}
              </div>
            );
          }

          return (
            <p key={i} style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              fontWeight: 400,
              color: "var(--text-dark)",
              lineHeight: 1.8,
              margin: "0 0 1.25rem",
            }}>
              {renderBoldText(section.text || "")}
            </p>
          );
        })}
      </main>

      {/* CTA Banner */}
      <section style={{
        background: "var(--clay)",
        padding: "clamp(3rem, 6vw, 4.5rem) 1.5rem",
        textAlign: "center" as const,
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 600,
            color: "#fff",
            margin: "0 0 0.75rem",
          }}>
            Ready to try it for free?
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 300,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            margin: "0 0 2rem",
          }}>
            Download The Founder's Sampler — 16 print-ready pages, no sign-up required.
          </p>
          <a
            href="https://thecomfortbond.gumroad.com/l/foundersampler?wanted=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--forest)",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              padding: "14px 32px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--forest-light)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--forest)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get the free kit →
          </a>
          <div style={{ marginTop: "1.5rem" }}>
            <Link
              to="/resources"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ArticleDetail;
