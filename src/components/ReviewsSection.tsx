import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const C = {
  forest: "var(--forest)",
  forestDark: "var(--forest-dark)",
  clay: "var(--clay)",
  sand: "var(--sand)",
  cream: "var(--cream)",
  creamDark: "var(--cream-dark, #EDE8E0)",
  textMid: "var(--text-mid)",
  border: "var(--border)",
};

type Review = {
  id: string;
  reviewer_name: string;
  rating: number;
  title: string;
  body: string;
  created_at: string;
};

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span aria-label={`${value} out of 5 stars`} style={{ color: C.clay, fontSize: size, letterSpacing: 1 }}>
      {"★★★★★".slice(0, value)}
      <span style={{ opacity: 0.25 }}>{"★★★★★".slice(value)}</span>
    </span>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            fontSize: 28,
            lineHeight: 1,
            color: n <= value ? "var(--clay)" : "rgba(45,74,62,0.25)",
            padding: 0,
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewsSection({
  productSlug,
  productName,
}: {
  productSlug: string;
  productName: string;
}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("id, reviewer_name, rating, title, body, created_at")
      .eq("product_slug", productSlug)
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  }, [productSlug]);

  useEffect(() => {
    load();
  }, [load]);

  // Schema: AggregateRating + Review
  useEffect(() => {
    if (reviews.length === 0) return;
    const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-reviews", productSlug);
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avg.toFixed(1),
        reviewCount: reviews.length,
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.slice(0, 20).map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.reviewer_name },
        datePublished: r.created_at.slice(0, 10),
        reviewBody: r.body,
        name: r.title,
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(r.rating),
          bestRating: "5",
          worstRating: "1",
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [reviews, productSlug, productName]);

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length)
    : 0;

  return (
    <section
      id="reviews"
      style={{
        background: C.creamDark,
        padding: "clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: C.clay,
              marginBottom: 10,
            }}
          >
            From families
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.45rem,3vw,2rem)",
              fontWeight: 600,
              color: C.forestDark,
              margin: 0,
            }}
          >
            <em>Reviews</em>
          </h2>
          {reviews.length > 0 && (
            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <Stars value={Math.round(avg)} size={20} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.textMid }}>
                {avg.toFixed(1)} · {reviews.length} review{reviews.length === 1 ? "" : "s"}
              </span>
            </div>
          )}
        </div>

        {loading ? (
          <p style={{ textAlign: "center", color: C.textMid, fontFamily: "var(--font-sans)" }}>Loading…</p>
        ) : reviews.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: C.textMid,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              margin: "0 0 1.5rem",
            }}
          >
            No reviews yet — yours could be the first.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
            {reviews.map((r) => (
              <article
                key={r.id}
                style={{
                  background: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                  <Stars value={r.rating} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: C.textMid }}>
                    {new Date(r.created_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: C.forestDark,
                    margin: "0 0 0.4rem",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65, color: C.textMid, margin: "0 0 0.5rem" }}>
                  {r.body}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.forest, margin: 0, fontWeight: 600 }}>
                  — {r.reviewer_name}
                </p>
              </article>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center" }}>
          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: C.forestDark,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 600,
                padding: "10px 22px",
                borderRadius: 999,
                border: `1.5px solid ${C.forestDark}`,
                cursor: "pointer",
              }}
            >
              Write a review
            </button>
          ) : (
            <ReviewForm
              productSlug={productSlug}
              onSubmitted={() => {
                setShowForm(false);
                toast({
                  title: "Thank you",
                  description: "Your review was submitted and will appear after a quick review.",
                });
              }}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>
      </div>
    </section>
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "10px 12px",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: C.forestDark,
  };

  return (
    <form onSubmit={submit} style={{ textAlign: "left", maxWidth: 560, margin: "0 auto", display: "grid", gap: "0.85rem" }}>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.forestDark, marginBottom: 6 }}>
          Your name
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} style={inputStyle} required />
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.forestDark, marginBottom: 6 }}>
          Rating
        </label>
        <StarPicker value={rating} onChange={setRating} />
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.forestDark, marginBottom: 6 }}>
          Headline
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} style={inputStyle} required />
      </div>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.forestDark, marginBottom: 6 }}>
          Your review
        </label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} maxLength={2000} rows={5} style={{ ...inputStyle, resize: "vertical" }} required />
      </div>
      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: "transparent",
            border: 0,
            color: C.textMid,
            fontFamily: "var(--font-sans)",
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
            background: "var(--forest-dark)",
            color: "#fff",
            fontFamily: "var(--font-sans)",
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
    </form>
  );
}
