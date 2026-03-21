import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CookieConsent = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-sage/20 bg-cream shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-4 sm:flex-row sm:gap-5">
        <p className="flex-1 text-center text-sm leading-relaxed text-forest/80 sm:text-left" style={{ fontFamily: "var(--font-sans)" }}>
          We use essential cookies and third-party services to operate this site. By continuing to browse, you accept our use of cookies.{" "}
          <Link to="/privacy-policy" className="underline text-forest hover:text-terracotta transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-[10px] border border-forest/20 bg-transparent px-5 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest/5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded-[10px] bg-forest px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-forest/90"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
});
CookieConsent.displayName = "CookieConsent";
