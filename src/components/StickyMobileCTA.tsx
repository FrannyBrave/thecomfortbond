import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface StickyMobileCTAProps {
  /** Pixels scrolled before the bar appears. Default: 400 (past the hero). */
  showAfter?: number;
  href?: string;
  label?: string;
  /** When provided, renders a <button> that calls this instead of a link. Takes precedence over href. */
  onClick?: () => void;
}

/**
 * Mobile-only sticky CTA bar pinned to the bottom of the viewport.
 * Appears once the user has scrolled past the hero. Hidden on lg+ screens.
 */
export const StickyMobileCTA = ({
  showAfter = 400,
  href = "/free-sampler",
  label = "Get the Free Coffee Sampler",
  onClick,
}: StickyMobileCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const isHashLink = href.startsWith("#");
  const isExternal = /^https?:\/\//.test(href);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHashLink) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const buttonClasses =
    "flex items-center justify-center gap-2 w-full bg-terracotta text-cream font-sans font-medium text-[15px] rounded-md h-12 shadow-[0_8px_24px_-6px_rgba(198,123,92,0.5)] active:scale-[0.98] transition-transform";

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{
        background:
          "linear-gradient(to top, hsl(var(--cream)) 0%, hsl(var(--cream)) 70%, hsl(var(--cream) / 0) 100%)",
      }}
    >
      {onClick ? (
        <button type="button" onClick={onClick} className={buttonClasses}>
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </button>
      ) : isHashLink ? (
        <a href={href} onClick={handleHashClick} className={buttonClasses}>
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </a>
      ) : isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer nofollow" className={buttonClasses}>
          <span aria-hidden="true">☕</span>
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </a>
      ) : (
        <Link to={href} className={buttonClasses}>
          <span aria-hidden="true">🌸</span>
          <span>{label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
};
