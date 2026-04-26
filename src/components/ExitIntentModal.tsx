import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FamilyVisitEmailCapture } from "@/components/FamilyVisitEmailCapture";

/**
 * Exit-intent capture for /family-visits.
 *
 * Triggers (whichever fires first, once per session):
 *  - Desktop: cursor leaves the top of the viewport (mouse heading to tab bar)
 *  - Mobile: user has scrolled past 50% of the page
 *
 * Suppression rules:
 *  - Once dismissed or shown, won't reappear in the same browser session.
 *  - Won't trigger for the first 8 seconds (avoid annoying immediate exiters).
 *  - Won't trigger if the user already scrolled to the FAQ/footer (engaged).
 */

const SESSION_KEY = "fv-exit-intent-shown";
const ARM_DELAY_MS = 8000;

export const ExitIntentModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    const trigger = () => {
      if (!armed) return;
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
      cleanup();
    };

    // Desktop: mouse leaving through the top of the viewport
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      if (e.clientY > 0) return;
      trigger();
    };

    // Mobile: scroll past 50% of page
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total > 0.5) {
        trigger();
      }
    };

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    function cleanup() {
      window.clearTimeout(armTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }

    return cleanup;
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md bg-cream border-[1.5px] border-terracotta/30 p-7 md:p-9 rounded-md">
        <div className="text-center">
          <div className="font-sans text-[10px] uppercase tracking-[0.32em] text-terracotta mb-4">
            Before you go
          </div>
          <DialogTitle className="font-serif text-forest text-[26px] md:text-[30px] leading-[1.15] tracking-tight">
            Take the free guide with you.
          </DialogTitle>
          <DialogDescription className="mt-3 font-sans text-sm md:text-base text-foreground/75 leading-relaxed">
            A 7-day plan to help you arrive calm and ready for your visit with
            mom — even when words feel hard.
          </DialogDescription>
        </div>
        <div className="mt-5">
          <FamilyVisitEmailCapture variant="light" source="exit-intent" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;
