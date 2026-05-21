import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export default function AdminResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Supabase parses the recovery token from the URL hash automatically
    // and emits a PASSWORD_RECOVERY event.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) return toast({ title: "Password too short", description: "Use at least 8 characters.", variant: "destructive" });
    if (password !== confirm) return toast({ title: "Passwords don't match", variant: "destructive" });
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return toast({ title: "Update failed", description: error.message, variant: "destructive" });
    toast({ title: "Password updated", description: "You're now signed in." });
    navigate("/admin/reviews", { replace: true });
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 420, background: "#fff", border: "1px solid var(--border)", borderRadius: 14, padding: "2rem", display: "grid", gap: "1rem" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--forest-dark)", margin: 0 }}>
          Set a new password
        </h1>
        {!ready && (
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-mid)" }}>
            Open this page from the reset link in your email. If you got here directly, request a new reset link first.
          </p>
        )}
        <input
          type="password"
          placeholder="New password (min 8 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", fontSize: 15 }}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          minLength={8}
          autoComplete="new-password"
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", fontSize: 15 }}
        />
        <button
          type="submit"
          disabled={busy || !ready}
          style={{ background: "var(--forest-dark)", color: "#fff", padding: "10px 16px", borderRadius: 999, border: 0, fontFamily: "var(--font-sans)", fontWeight: 600, cursor: busy || !ready ? "not-allowed" : "pointer", opacity: busy || !ready ? 0.6 : 1 }}
        >
          {busy ? "Updating…" : "Update password"}
        </button>
      </form>
    </main>
  );
}
