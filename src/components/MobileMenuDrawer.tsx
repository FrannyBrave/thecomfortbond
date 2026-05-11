import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PRIMARY_LINKS = [
  {
    label: "Shop",
    description: "Browse The Connection Season and the Comfort Bond Collection",
    href: "/shop",
    icon: ShoppingBag,
  },
  {
    label: "Our Story",
    description: "The founder's story behind The Comfort Bond",
    href: "/about",
    icon: Heart,
  },
] as const;

const SECONDARY_LINKS: { label: string; href: string }[] = [];

interface MobileMenuDrawerProps {
  /** Optional className for the trigger button (positioning, color overrides). */
  triggerClassName?: string;
  /** Aria label for trigger. */
  ariaLabel?: string;
}

export const MobileMenuDrawer = ({
  triggerClassName = "",
  ariaLabel = "Open navigation menu",
}: MobileMenuDrawerProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (href: string) => {
    navigate(href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={`mobile-menu-trigger inline-flex items-center justify-center p-2 rounded-md text-forest hover:text-terracotta hover:bg-sage/10 transition-colors ${triggerClassName}`}
          aria-label={ariaLabel}
          type="button"
        >
          <Menu size={26} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] sm:w-[420px] bg-cream border-l border-sage/20 p-0 flex flex-col"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-sage/15 text-left">
          <SheetTitle className="font-serif text-xl text-forest">
            Where would you like to go?
          </SheetTitle>
          <p className="font-sans text-sm text-forest/60 mt-1">
            Pick the path that fits your visit today.
          </p>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-2">
            {PRIMARY_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="group w-full text-left flex items-start gap-3 rounded-lg px-3 py-3 hover:bg-sage/10 transition-colors"
                    type="button"
                  >
                    <span className="shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-serif text-base font-semibold text-forest">
                          {link.label}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-forest/30 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all"
                        />
                      </span>
                      <span className="block font-sans text-[13px] text-forest/60 leading-snug mt-0.5">
                        {link.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-sage/15 px-1">
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-forest/40 mb-2 px-2">
              More
            </p>
            <ul className="flex flex-col">
              {SECONDARY_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="w-full text-left font-sans text-sm text-forest/80 hover:text-terracotta transition-colors px-2 py-2"
                    type="button"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="border-t border-sage/15 p-4 bg-cream">
          <Button
            variant="cta"
            size="lg"
            className="w-full"
            onClick={() => go("/kits")}
          >
            Shop Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuDrawer;
