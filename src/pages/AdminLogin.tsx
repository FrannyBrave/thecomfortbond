import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin/reviews", { replace: true });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "forgot") {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });
      setBusy(false);
      if (error) return toast({ title: "Reset failed", description: error.message, variant: "destructive" });
      toast({ title: "Check your email", description: "We sent a reset link if an account exists for that email." });
      setMode("signin");
      return;
    }
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
      navigate("/admin/reviews", { replace: true });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/reviews` },
      });
      setBusy(false);
      if (error) return toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
      toast({
        title: "Account created",
        description: "Check your email to confirm, then sign in. An admin must grant access.",
      });
      setMode("signin");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: 14,
          padding: "2rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--forest-dark)", margin: 0 }}>
          Admin {mode === "signin" ? "Sign In" : mode === "signup" ? "Sign Up" : "Reset Password"}
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", fontSize: 15 }}
        />
        {mode !== "forgot" && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", fontSize: 15 }}
          />
        )}
        <button
          type="submit"
          disabled={busy}
          style={{
            background: "var(--forest-dark)",
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 999,
            border: 0,
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            cursor: busy ? "wait" : "pointer",
          }}
        >
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}
        </button>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            style={{ background: "transparent", border: 0, color: "var(--clay)", fontSize: 13, cursor: "pointer", padding: 0 }}
          >
            {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
          </button>
          {mode !== "forgot" ? (
            <button
              type="button"
              onClick={() => setMode("forgot")}
              style={{ background: "transparent", border: 0, color: "var(--clay)", fontSize: 13, cursor: "pointer", padding: 0 }}
            >
              Forgot password?
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setMode("signin")}
              style={{ background: "transparent", border: 0, color: "var(--clay)", fontSize: 13, cursor: "pointer", padding: 0 }}
            >
              Back to sign in
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
