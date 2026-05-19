import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Review = {
  id: string;
  product_slug: string;
  reviewer_name: string;
  rating: number;
  title: string;
  body: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

export default function AdminReviews() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [filter, setFilter] = useState<"pending" | "approved" | "rejected" | "all">("pending");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate("/admin/login", { replace: true });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sess.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!roles);
      setChecking(false);
    };
    init();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      if (!s) navigate("/admin/login", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const load = useCallback(async () => {
    if (!isAdmin) return;
    setLoading(true);
    let q = supabase.from("reviews").select("*").order("created_at", { ascending: false });
    if (filter !== "all") q = q.eq("status", filter);
    const { data, error } = await q;
    setLoading(false);
    if (error) return toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setReviews((data ?? []) as Review[]);
  }, [filter, isAdmin]);

  useEffect(() => {
    load();
  }, [load]);

  const updateStatus = async (id: string, status: "approved" | "rejected" | "pending") => {
    const { error } = await supabase.from("reviews").update({ status }).eq("id", id);
    if (error) return toast({ title: "Update failed", description: error.message, variant: "destructive" });
    toast({ title: `Marked ${status}` });
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this review permanently?")) return;
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    load();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  if (checking) return <main style={{ padding: 40 }}>Loading…</main>;

  if (!isAdmin) {
    return (
      <main style={{ padding: 40, maxWidth: 600, margin: "0 auto", fontFamily: "var(--font-sans)" }}>
        <h1 style={{ fontFamily: "var(--font-serif)" }}>Access denied</h1>
        <p>Your account exists, but it doesn't have admin access yet. Ask another admin to grant access in the database.</p>
        <button onClick={signOut} style={{ marginTop: 16, padding: "8px 16px", borderRadius: 999, border: "1px solid var(--border)", background: "#fff", cursor: "pointer" }}>
          Sign out
        </button>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "2rem 1.5rem", fontFamily: "var(--font-sans)" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <h1 style={{ fontFamily: "var(--font-serif)", color: "var(--forest-dark)", margin: 0, fontSize: "1.8rem" }}>
          Review moderation
        </h1>
        <button onClick={signOut} style={{ padding: "8px 16px", borderRadius: 999, border: "1px solid var(--border)", background: "#fff", cursor: "pointer" }}>
          Sign out
        </button>
      </header>

      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {(["pending", "approved", "rejected", "all"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: filter === f ? "var(--forest-dark)" : "#fff",
              color: filter === f ? "#fff" : "var(--forest-dark)",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : reviews.length === 0 ? (
        <p style={{ color: "var(--text-mid)" }}>No reviews in this view.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {reviews.map((r) => (
            <article key={r.id} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6, fontSize: 12, color: "var(--text-mid)" }}>
                <span><strong>{r.product_slug}</strong> · {r.reviewer_name} · {"★".repeat(r.rating)}</span>
                <span>{new Date(r.created_at).toLocaleString()} · <em>{r.status}</em></span>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", margin: "6px 0", color: "var(--forest-dark)", fontSize: "1.05rem" }}>
                {r.title}
              </h3>
              <p style={{ margin: "0 0 12px", lineHeight: 1.6, color: "var(--text-mid)" }}>{r.body}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {r.status !== "approved" && (
                  <button onClick={() => updateStatus(r.id, "approved")} style={btn("var(--forest-dark)", "#fff")}>
                    Approve
                  </button>
                )}
                {r.status !== "rejected" && (
                  <button onClick={() => updateStatus(r.id, "rejected")} style={btn("#fff", "var(--forest-dark)", true)}>
                    Reject
                  </button>
                )}
                {r.status !== "pending" && (
                  <button onClick={() => updateStatus(r.id, "pending")} style={btn("#fff", "var(--text-mid)", true)}>
                    Back to pending
                  </button>
                )}
                <button onClick={() => remove(r.id)} style={btn("#fff", "#a33", true)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function btn(bg: string, color: string, outline = false): React.CSSProperties {
  return {
    padding: "6px 14px",
    borderRadius: 999,
    border: outline ? `1px solid ${color}` : 0,
    background: bg,
    color,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  };
}
