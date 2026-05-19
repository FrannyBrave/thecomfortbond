import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

// Map Gumroad product slug -> display name + (optional) detail page slug on our site.
// To attach a review to a product page, the `siteSlug` must match the `productSlug`
// used by <ReviewsSection /> on that page.
const PRODUCT_MAP: Record<string, { name: string; siteSlug: string }> = {
  "remember-when": { name: "Remember When Kit", siteSlug: "remember-when" },
  "kitchen-table-memories": { name: "Kitchen Table Memories Kit", siteSlug: "kitchen-table-memories" },
  "garden-memories": { name: "Garden Memories Kit", siteSlug: "garden-memories" },
  "places-weve-been": { name: "Places We've Been Kit", siteSlug: "places-weve-been" },
  "hands-that-made-it": { name: "Hands That Made It Kit", siteSlug: "hands-that-made-it" },
  "collection": { name: "The Comfort Bond Collection", siteSlug: "collection" },
  "connection-season-summer": { name: "The Connection Season: Summer Edition", siteSlug: "connection-season-summer" },
};

const C = {
  forest: "#2D4A3E",
  clay: "#C67B5C",
  cream: "#FAF7F2",
  border: "rgba(45,74,62,0.12)",
  textMid: "rgba(45,74,62,0.75)",
};

export default function ThankYou() {
  const [params] = useSearchParams();
  const productParam = (params.get("product") || "").toLowerCase().trim();
  const product = PRODUCT_MAP[productParam];
  const productName = product?.name || "your kit";
  const productSlug = product?.siteSlug || productParam || "comfort-bond";

  useEffect(() => {
    const prev = document.title;
    document.title = "Thank you — Your kit is on its way | The Comfort Bond™";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = prev;
      if (meta.parentNode) document.head.removeChild(meta);
    };
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: C.cream, padding: "clamp(2rem,6vw,4rem) 1.25rem" }}>
      <main style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            background: "rgba(198,123,92,0.12)",
            color: C.clay,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 999,
            marginBottom: 20,
          }}
        >
          ✓ Purchase Confirmed
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: C.clay,
            fontWeight: 600,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.1,
            margin: "0 0 1.25rem",
          }}
        >
          Thank you — your kit is on its way 🤍
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            color: C.forest,
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 1.25rem",
          }}
        >
          Your secure download link for <strong>{productName}</strong> is on its way to the
          email you entered at checkout. It should arrive within a few minutes.
        </p>

        <div
          style={{
            background: "rgba(198,123,92,0.08)",
            border: "1px solid rgba(198,123,92,0.18)",
            borderRadius: 14,
            padding: "1rem 1.25rem",
            maxWidth: 520,
            margin: "0 auto 2.5rem",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: C.forest,
              fontSize: 14,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            <strong style={{ color: C.clay }}>Don't see it yet?</strong> Check your spam,
            promotions, or junk folder — and add{" "}
            <strong>francesca@thecomfortbond.com</strong> to your contacts so future emails
            land safely.
          </p>
        </div>

        {/* Review CTA */}
        <section
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            borderRadius: 18,
            padding: "clamp(1.5rem, 4vw, 2.25rem)",
            textAlign: "center",
          }}
        >
          {submitted ? (
            <>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: C.forest,
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  margin: "0 0 0.5rem",
                }}
              >
                Thank you for sharing 🤍
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  color: C.textMid,
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Your review has been received and will appear publicly after a quick check.
              </p>
            </>
          ) : !showForm ? (
            <>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: C.forest,
                  fontWeight: 600,
                  fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
                  margin: "0 0 0.65rem",
                }}
              >
                Would you share a few words?
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  color: C.textMid,
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: "0 auto 1.5rem",
                  maxWidth: 460,
                }}
              >
                Your honest review helps other families decide if {productName} is right for
                them. It only takes a minute.
              </p>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                style={{
                  background: C.clay,
                  color: "#fff",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "12px 28px",
                  borderRadius: 999,
                  border: 0,
                  cursor: "pointer",
                }}
              >
                Leave a review
              </button>
            </>
          ) : (
            <ReviewForm
              productSlug={productSlug}
              onSubmitted={() => {
                setSubmitted(true);
                toast({
                  title: "Thank you",
                  description: "Your review was submitted and will appear after a quick check.",
                });
              }}
              onCancel={() => setShowForm(false)}
            />
          )}
        </section>

        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            color: C.textMid,
            fontSize: 13,
            marginTop: "2rem",
          }}
        >
          Questions? Email{" "}
          <a href="mailto:francesca@thecomfortbond.com" style={{ color: C.clay, fontWeight: 600 }}>
            francesca@thecomfortbond.com
          </a>
          {" · "}
          <Link to="/" style={{ color: C.clay, fontWeight: 600 }}>
            Return home
          </Link>
        </p>
      </main>
    </div>
  );
}

function ReviewForm({
  productSlug,
  onSubmitted,
  onCancel,
}: {
  productSlug: string;
  onSubmitted: () => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !title.trim() || !body.trim() || rating < 1) {
      toast({ title: "Please fill out every field", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("reviews").insert({
      product_slug: productSlug,
      reviewer_name: name.trim().slice(0, 80),
      rating,
      title: title.trim().slice(0, 120),
      body: body.trim().slice(0, 2000),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Couldn't submit", description: error.message, variant: "destructive" });
      return;
    }
    onSubmitted();
  };

  const input: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "10px 12px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: 15,
    color: C.forest,
  };
  const label: React.CSSProperties = {
    display: "block",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: C.forest,
    marginBottom: 6,
    textAlign: "left",
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 520, margin: "0 auto", display: "grid", gap: "0.85rem" }}>
      <div>
        <label style={label}>Your name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} style={input} required />
      </div>
      <div style={{ textAlign: "left" }}>
        <label style={label}>Rating</label>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
              style={{
                background: "transparent",
                border: 0,
                cursor: "pointer",
                fontSize: 28,
                lineHeight: 1,
                color: n <= rating ? C.clay : "rgba(45,74,62,0.25)",
                padding: 0,
              }}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div>
        <label style={label}>Headline</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} style={input} required />
      </div>
      <div>
        <label style={label}>Your review</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} maxLength={2000} rows={5} style={{ ...input, resize: "vertical" }} required />
      </div>
      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: "transparent",
            border: 0,
            color: C.textMid,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            padding: "10px 16px",
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: C.forest,
            color: "#fff",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: 999,
            border: 0,
            cursor: submitting ? "wait" : "pointer",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Submitting…" : "Submit review"}
        </button>
      </div>
      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 12, color: C.textMid, margin: 0, textAlign: "center" }}>
        Reviews are moderated before they appear publicly.
      </p>
    </form>
  );
}
