import { useEffect, useState } from "react";
import logoImg from "@/assets/the-comfort-bond-logo.webp";
import kitRememberWhen from "@/assets/remember-when-kit-conversation-cards-grandparents-family-memories.jpg";
import kitKitchenTable from "@/assets/kitchen-table-memories-kit-family-recipes-conversation-starters.jpg";
import kitPlacesWeveBeen from "@/assets/places-weve-been-kit-family-travel-stories-aging-parents.jpg";
import kitGardenMemories from "@/assets/garden-memories-kit-conversation-cards-grandparents-yard-stories.jpg";
import kitHandsThatMadeIt from "@/assets/hands-that-made-it-kit-family-recipes-heirloom-stories.jpg";
import connectionSeasonSummerMockup from "@/assets/connection-season-summer-edition-family-memory-kit-grandparents.png";
import comfortBondCollectionMockup from "@/assets/comfort-bond-collection-conversation-cards-memory-kits-bundle.png";
import shopHeroImage from "@/assets/shop-hero-garden-memories.png";
import { CookieConsent } from "@/components/CookieConsent";
import { MobileMenuDrawer } from "@/components/MobileMenuDrawer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { openPaddleCheckout } from "@/lib/paddle";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocation } from "react-router-dom";

const B2C_KEYWORDS = "conversation cards for aging parents, conversation cards for grandparents, conversation starters for elderly parents, questions to ask your grandparents, meaningful gifts for aging parents, family memory keepsake, legacy interview questions, family conversation starters, Mother's Day gift for elderly mom, Father's Day gift for aging dad, Grandparents Day gift ideas";
const SHARED_DESCRIPTION = "Gentle conversation cards, picture prompts, and connection kits for families, children and grandchildren who want deeper calls and visits with the people who raised them.";

const SUMMER_EDITION_PRICE_ID = "pri_01kpagj5jtaxcnkbtjctq616k4";
const COLLECTION_PRICE_ID = "pri_01kpafqz2tc4pfc262j1dnh531";

const ArrowSvg = ({ color = "#fff" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const C = {
  forest: "var(--forest)",
  forestDark: "var(--forest-dark)",
  clay: "var(--clay)",
  sand: "var(--sand)",
  sandPale: "var(--sand-pale)",
  cream: "var(--cream)",
  creamDark: "var(--cream-dark, #EDE8E0)",
  textMid: "var(--text-mid)",
  border: "var(--border)",
};

type Kit = {
  id: string;
  name: string;
  tags: string[];
  desc: string;
  bullets: string[];
  cta: string;
  image: string;
  priceId: string;
};

const TERRACOTTA_TAGS = new Set(["Start Here", "Best Value", "Heirloom Gift", "Best-Seller", "Founder's Favorite"]);
const SOLID_CLAY_TAGS = new Set(["Best-Seller", "Founder's Favorite"]);

const WhatsInside = ({ bullets }: { bullets: string[] }) => {
  const [open, setOpen] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setOpen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div style={{ margin: "0 0 1.25rem", borderTop: `1px solid ${C.border}`, paddingTop: "0.85rem" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "transparent",
          border: 0,
          padding: 0,
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(45,74,62,0.7)",
        }}
      >
        <span>What's inside</span>
        <span
          aria-hidden="true"
          style={{
            color: C.clay,
            fontSize: 16,
            fontWeight: 400,
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "none",
          }}
        >
          ⌄
        </span>
      </button>
      {open && (
        <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0", display: "grid", gap: "0.4rem" }}>
          {bullets.map((b, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: C.textMid,
                lineHeight: 1.55,
              }}
            >
              <span style={{ color: C.clay, fontWeight: 700, flexShrink: 0 }}>✓</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const TagPills = ({ tags, light = false }: { tags: string[]; light?: boolean }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "0 0 0.85rem" }}>
    {tags.map((t) => {
      const isSolid = SOLID_CLAY_TAGS.has(t);
      const terracotta = TERRACOTTA_TAGS.has(t);
      const bg = isSolid
        ? "#C67B5C"
        : terracotta
        ? "rgba(198,123,92,0.14)"
        : light
        ? "rgba(232,201,154,0.18)"
        : "rgba(139,157,131,0.16)";
      const color = isSolid
        ? "#FFF8EE"
        : terracotta
        ? "var(--clay)"
        : light
        ? "var(--sand)"
        : "#4a6741";
      const border = isSolid
        ? "1px solid #B86A4B"
        : terracotta
        ? "1px solid rgba(198,123,92,0.32)"
        : light
        ? "1px solid rgba(232,201,154,0.32)"
        : "1px solid rgba(139,157,131,0.32)";
      const label = t === "Best-Seller" ? "★ Best-Seller" : t === "Founder's Favorite" ? "♥ Founder's Favorite" : t;
      return (
        <span
          key={t}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            fontWeight: isSolid ? 700 : 600,
            letterSpacing: "0.04em",
            padding: "4px 10px",
            borderRadius: 999,
            background: bg,
            color,
            border,
            whiteSpace: "nowrap",
            boxShadow: isSolid ? "0 1px 2px rgba(198,123,92,0.25)" : undefined,
            textTransform: isSolid ? "uppercase" : undefined,
          }}
        >
          {label}
        </span>
      );
    })}
  </div>
);

const KITS: Kit[] = [
  {
    id: "remember-when-kit",
    priceId: "pri_01kpafx84h0z9z11fwc5m84dam",
    name: "The Remember When Kit",
    tags: ["Best-Seller", "Story Starters", "Gentle Games", "Start Here"],
    desc: "The Beatles on the Ed Sullivan Show, sock hops in the gym, TV dinners on folding trays, the jukebox at the diner. This kit unlocks the songs, movies, and everyday moments your loved one carries from the 1950s through the 1980s — and tells you exactly what to ask to hear them.",
    bullets: [
      "15 conversation prompts across 5 themes",
      "10 vintage Visual Spark Cards",
      "20 trivia questions across four decades",
      "Picture & Word Memory BINGO (two boards)",
      "Musical memory: Finish-the-Lyric + Name-That-Tune",
    ],
    cta: "Bring the Decades Home",
    image: kitRememberWhen,
  },
  {
    id: "kitchen-table-memories-kit",
    priceId: "pri_01kpafxq9xrqg0qhqfttzdjswf",
    name: "The Kitchen Table Memories Kit",
    tags: ["Founder's Favorite", "Family Gatherings", "Family Stories", "Slow Visits"],
    desc: "Every family had a kitchen table. It's where homework happened, recipes were passed by hand, and Sunday dinners ran long. This kit invites your loved one back to the smells, the sounds, and the people of the kitchen they remember best.",
    bullets: [
      "15 conversation prompts on family meals & comfort food",
      "10 warm kitchen Visual Spark Cards",
      "20 trivia questions on classic foods, brands & traditions",
      "Picture & Word Memory BINGO with cookie jars, mixing bowls & gravy boats",
      "Musical memory featuring Dean Martin, Doris Day & more",
    ],
    cta: "Pull Up a Chair",
    image: kitKitchenTable,
  },
  {
    id: "garden-memories-kit",
    priceId: "pri_01kpafvx3erd68458p4em99141",
    name: "The Garden Memories Kit",
    tags: ["Picture Prompts", "Slow Visits", "Gentle Favorite"],
    desc: "A tomato still warm from the vine. The smell of soil after a good rain. The lilac bush by the front porch. This kit honors the patience and pride of a generation that grew things — and gives you the prompts to hear about the garden they remember.",
    bullets: [
      "15 conversation prompts on gardens, tools & time outside",
      "10 illustrated Visual Spark Cards",
      "20 trivia questions on flowers, vegetables & garden wisdom",
      "Picture & Word Memory BINGO with watering cans, wheelbarrows & sunflowers",
      'Musical memory featuring "You Are My Sunshine" & more',
    ],
    cta: "Step Into the Garden",
    image: kitGardenMemories,
  },
  {
    id: "places-weve-been-kit",
    priceId: "pri_01kpafwqs0wwzatbs5721cyfmk",
    name: "The Places We've Been Kit",
    tags: ["Long-Distance Friendly", "Story Starters", "Picture Prompts"],
    desc: "Before GPS and direct flights, there were Sunday drives, station wagons full of cousins, and roads people remembered by heart. This kit pulls up alongside the family trips your loved one took — the destinations, the diners, the souvenirs that made it home.",
    bullets: [
      "15 conversation prompts on road trips & vacations",
      "10 retro Visual Spark Cards",
      "20 trivia questions on Route 66, Mount Rushmore & more",
      "Picture & Word Memory BINGO with station wagons, motel pools & postcards",
      "Musical memory featuring Willie Nelson, Nat King Cole & The Beach Boys",
    ],
    cta: "Hit the Open Road",
    image: kitPlacesWeveBeen,
  },
  {
    id: "hands-that-made-it-kit",
    priceId: "pri_01kpafv0r50q149ctgje0dmn0q",
    name: "The Hands That Made It Kit",
    tags: ["Story Starters", "Keepsake Friendly", "Heirloom Gift"],
    desc: "There was a time when fixing something wasn't a phone call — it was a Saturday. This kit honors the workbench, the sewing basket, the toolbox, and the skills your loved one built over a lifetime. It's an invitation to ask about what they made and how they made it.",
    bullets: [
      "20 conversation prompts on workbenches, sewing & craft",
      "10 illustrated Visual Spark Cards",
      "20 trivia questions on tools, stitches & American know-how",
      "Picture & Word Memory BINGO with thimbles, hammers & sewing machines",
      "Musical memory featuring Dolly Parton, Tennessee Ernie Ford & more",
    ],
    cta: "Honor the Hands That Made It",
    image: kitHandsThatMadeIt,
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Which kit should I buy first?",
    a: "Start with the theme that already feels true to your loved one. If your grandmother always had something baking, the Kitchen Table Memories Kit will land first. If your father drove every back road in the county, start with The Places We've Been Kit. If you're not sure, The Remember When Kit (pop culture across four decades) is the gentlest doorway in — there's something in it for everyone.",
  },
  {
    q: "How are the kits delivered? Are they physical or digital?",
    a: "Each kit is delivered as a beautifully designed digital PDF you can use two ways. View them on your tablet or phone during a video call or visit — or print them at home and bring the printed cards with you. Both work. The kit format is built for either.",
  },
  {
    q: "Will my loved one feel patronized by this?",
    a: "No. Every kit was designed for adults, not children. The questions are written to treat your loved one as the expert on their own life — the historian, the storyteller, the one who knows. There is no \"right answer.\" There is no test. There is only space for them to share what they want to share, in the way that feels most natural.",
  },
  {
    q: "Are these for someone with dementia or memory loss?",
    a: "They're designed to work for anyone — including loved ones experiencing cognitive decline — but they're not only for memory loss. The kits use a \"recognition over recall\" approach: visual cards, familiar themes, and prompts that meet your loved one where they are. They work just as well for a parent who's still independent as for a grandparent in memory care.",
  },
  {
    q: "What's the difference between a kit and The Connection Season?",
    a: "A kit is a themed library of content — conversation prompts, games, music — that you can dip into for any call or visit. The Connection Season is a 13-week planner that helps you build a rhythm of connection across a whole quarter. They work beautifully together: the planner tells you when to use a kit, and the kits give the planner its content.",
  },
  {
    q: "Do I need all five kits?",
    a: "You don't need all five. One kit, used well, can carry months of meaningful conversations. The Collection is for the family who knows they want to commit to this work over a longer period of time — or who wants the freedom to pull out a different theme depending on the day and the mood.",
  },
  {
    q: "Can I use these for a phone call, or only in person?",
    a: "Both. The kits were built specifically to work across distance. Visual cards can be sent by text. Conversation prompts work on a phone call. Music prompts can be played over speakerphone. If your relationship lives mostly on the phone, these are built for that.",
  },
  {
    q: "What if it isn't right for us?",
    a: "Reach out within 14 days of purchase and we'll make it right. The Comfort Bond was built for families — not for transactions — and if something isn't landing the way it should, we'd rather hear from you.",
  },
];

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div
    style={{
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: light ? C.sand : C.clay,
      marginBottom: 10,
    }}
  >
    {children}
  </div>
);

const Shop = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { pathname } = useLocation();
  const isKits = pathname === "/kits";
  usePageMeta({
    title: isKits
      ? "Themed Connection Kits, Seasonal Planner | The Comfort Bond™"
      : "Shop The Comfort Bond™ — Family Connection Kits, Conversation Cards & Seasonal Planners",
    description: SHARED_DESCRIPTION,
    keywords: B2C_KEYWORDS,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faqpage", "shop");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      {/* NAV */}
      <header>
        <nav className="tcb-nav">
          <a href="/" className="nav-logo">
            <img
              src={logoImg}
              alt="The Comfort Bond logo — meaningful family connection with aging parents and grandparents"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
            />
            <div className="nav-brand">
              <span className="nav-brand-name">The Comfort Bond™</span>
              <span className="nav-brand-tag">Nurturing Comfort, Inspiring Connection</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="#kits">Connection Kits</a></li>
            <li><a href="/shop" className="nav-cta">Shop</a></li>
          </ul>
          <MobileMenuDrawer />
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section style={{ background: C.forestDark, color: "#fff", padding: "clamp(3.5rem,11vw,9rem) clamp(1.5rem,5vw,4rem) clamp(2rem,6vw,5rem)" }}>
          <div className="shop-hero-grid" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(1.5rem,5vw,4rem)", alignItems: "center" }}>
            <div>
              <Eyebrow light>The Shop</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,4.5vw,3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#fff", margin: "0 0 1rem" }}>
                <em>Choose how you'll start the next conversation.</em>
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "0 0 1.5rem" }}>
                Every kit is a quiet way to feel closer to the people you love — across the country, across the room, and the time you still have together.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.25rem" }}>
                {[
                  { label: "Summer Edition", href: "#featured" },
                  { label: "The 5 Kits", href: "#kits" },
                  { label: "The Collection", href: "#collection" },
                ].map((c) => (
                  <a key={c.href} href={c.href} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: C.forestDark, background: C.sand, border: `1px solid ${C.sand}`, padding: "7px 16px", borderRadius: 999, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}>
                    {c.label}
                  </a>
                ))}
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em" }}>
                Instant digital download · Yours forever
              </div>
            </div>
            <div className="shop-hero-image" style={{ aspectRatio: "4 / 5", borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.45)" }}>
              <img
                src={shopHeroImage}
                alt="A daughter and her aging mother sharing a tender moment with The Garden Memories Kit conversation cards in a sunlit family room"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* FEATURED — Connection Season Summer Edition */}
        <section id="featured" style={{ background: C.cream, padding: "clamp(2rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div className="shop-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }}>
            <div style={{ aspectRatio: "3 / 4", borderRadius: 12, overflow: "hidden", background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={connectionSeasonSummerMockup} alt="The Connection Season: Summer Edition — printable 13-week summer family connection planner for staying close to aging parents and grandparents" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} loading="eager" />
            </div>
            <div>
              <Eyebrow>Featured · Now available</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0 0 0.65rem" }}>
                The Connection Season — <em style={{ color: C.clay }}>Summer Edition</em>
              </h2>
              <TagPills tags={["Weekly Rhythm", "Seasonal Favorite", "Family Gatherings"]} />
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: C.clay, fontWeight: 600, marginBottom: "1rem" }}>$34</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: C.textMid, margin: "0 0 1rem" }}>
                Turn July through September into a gentle rhythm of meaningful calls, visits, and shared memories.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.75, color: C.textMid, margin: "0 0 1.25rem" }}>
                Made for the daughter, son, or grandchild who wants the next conversation to feel deeper than &ldquo;How are you?&rdquo; — for phone calls, video calls, or in-person visits.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "grid", gap: "0.5rem" }}>
                {[
                  "13 themed weeks of summer bonding prompts",
                  "Weekly planning pages for calls, visits, and shared moments",
                  "\"What They Told Me\" — legacy pages for the recipes, sayings, and stories worth keeping",
                ].map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 14.5, color: C.textMid, lineHeight: 1.6 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(198,123,92,0.12)", color: C.clay, fontSize: 11, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <button type="button" className="btn-primary" style={{ border: 0, cursor: "pointer" }} onClick={() => void openPaddleCheckout(SUMMER_EDITION_PRICE_ID)}>
                Get the Summer Edition <ArrowSvg />
              </button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: C.textMid, margin: "0.75rem 0 0", opacity: 0.85 }}>
                Instant download · Use it printed, on a tablet, or right from your phone
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, color: C.textMid, margin: "0.85rem 0 0" }}>
                Pair it with a <a href="#kits" style={{ color: C.clay, textDecoration: "none", borderBottom: `1px solid ${C.clay}`, fontWeight: 500 }}>Connection Kit</a> for themed weeks →
              </p>
            </div>
          </div>
        </section>

        {/* THE FIVE KITS — INTRO */}
        <section id="kits" style={{ background: C.creamDark, padding: "clamp(2rem,6vw,4rem) clamp(1.5rem,5vw,4rem) clamp(1rem,3vw,2rem)" }}>
          <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: "0 0 1rem" }}>
              <em>Five themed kits, one to fit the person you love.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: C.textMid, margin: "0 auto", maxWidth: 720 }}>
              Each Comfort Bond Connection Kit is built around a theme your loved one may already know in their bones — kitchens, gardens, road trips, music, and more so the next call or visit can feel less awkward, more personal, and more worth remembering.
            </p>
          </div>
        </section>

        {/* KIT CARDS — alternating cream */}
        <section style={{ background: C.creamDark, padding: "0 clamp(1.5rem,5vw,4rem) clamp(2rem,6vw,5rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: "1.5rem" }}>
            {KITS.map((kit, i) => {
              const bg = i % 2 === 0 ? "#fff" : "var(--sand-pale, #F5EFE3)";
              return (
                <article
                  key={kit.id}
                  id={kit.id}
                  className="shop-kit-card"
                  style={{
                    background: bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 18,
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 320px) minmax(0, 1fr)",
                    gap: 0,
                  }}
                >
                  <div style={{ background: C.creamDark }}>
                    <img
                      src={kit.image}
                      alt={`${kit.name} — printable conversation cards, reminiscence prompts, trivia and memory BINGO for connecting with an aging parent or grandparent`}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 240 }}
                    />
                  </div>
                  <div style={{ padding: "clamp(1.5rem,3vw,2.25rem)", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem,2.4vw,1.65rem)", fontWeight: 600, color: C.forestDark, margin: "0 0 0.55rem", lineHeight: 1.25 }}>
                      {kit.name}
                    </h3>
                    <TagPills tags={kit.tags} />
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: C.forestDark, fontWeight: 600, marginBottom: "0.9rem" }}>$34</div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: C.textMid, margin: "0 0 1rem" }}>
                      {kit.desc}
                    </p>
                    <WhatsInside bullets={kit.bullets} />
                    <button type="button" className="btn-primary" style={{ alignSelf: "flex-start", border: 0, cursor: "pointer" }} onClick={() => void openPaddleCheckout(kit.priceId)}>
                      {kit.cta} <ArrowSvg />
                    </button>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: C.textMid, margin: "0.6rem 0 0", opacity: 0.8 }}>
                      Instant download · Use it printed, on a tablet, or right from your phone
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* THE COMFORT BOND COLLECTION */}
        <section id="collection" style={{ background: C.forestDark, color: "#fff", padding: "clamp(2rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div className="shop-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)", gap: "clamp(1.5rem,4vw,3rem)", alignItems: "center" }}>
            <div style={{ aspectRatio: "4 / 5", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={comfortBondCollectionMockup} alt="The Comfort Bond Collection — complete bundle of all five printable family connection kits: Remember When, Kitchen Table Memories, Garden Memories, Places We've Been, and Hands That Made It" style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
            </div>
            <div>
              <Eyebrow light>The Complete Collection</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: "#fff", margin: "0 0 0.75rem" }}>
                <em>All five kits. One library. Every story worth saving.</em>
              </h2>
              <TagPills tags={["Best Value", "Heirloom Gift", "Family Gatherings"]} light />
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: C.sand, fontWeight: 600 }}>$127</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", textDecoration: "line-through" }}>$170</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: C.sand, fontWeight: 600, letterSpacing: "0.02em" }}>Save $43</span>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", margin: "0 0 1.25rem" }}>
                The complete Connection Kits library — every theme, every era, every conversation worth having, in one place. For the family ready to commit to a full season of meaningful moments together, and for anyone who wants the option to bring the right kit to any call, any visit, or any quiet Sunday afternoon.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "grid", gap: "0.5rem" }}>
                {[
                  "All five Comfort Bond Connection Kits",
                  "Every era of their life, in one library",
                  "Works for phone calls, video calls, and in-person visits",
                ].map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 14.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                    <span style={{ color: C.sand, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.sand, color: C.forestDark, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, padding: "12px 24px", borderRadius: 999, border: 0, cursor: "pointer", boxShadow: "0 4px 14px rgba(0,0,0,0.22)" }} onClick={() => void openPaddleCheckout(COLLECTION_PRICE_ID)}>
                Get the Collection <ArrowSvg color={C.forestDark} />
              </button>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0.75rem 0 0" }}>
                Instant download · Use it printed, on a tablet, or right from your phone
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: C.cream, padding: "clamp(2rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Eyebrow>Good Questions</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 600, lineHeight: 1.2, color: C.forestDark, margin: 0 }}>
                <em>Things people ask before they buy.</em>
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.textMid, margin: "1rem auto 0", maxWidth: 540, lineHeight: 1.6 }}>
                Quick answers to the things people ask before they buy. Still unsure? Email <a href="mailto:hello@thecomfortbond.com" style={{ color: C.clay }}>hello@thecomfortbond.com</a> — we read every note.
              </p>
            </div>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "transparent",
                        border: 0,
                        padding: "1.1rem 1.25rem",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: C.forestDark,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span>{f.q}</span>
                      <span aria-hidden="true" style={{ color: C.clay, fontSize: 20, fontWeight: 400, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "none", flexShrink: 0 }}>+</span>
                    </button>
                    {open && (
                      <div style={{ padding: "0 1.25rem 1.25rem", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.75, color: C.textMid, whiteSpace: "pre-line" }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section style={{ background: C.sandPale, padding: "clamp(2rem,6vw,5rem) clamp(1.5rem,5vw,4rem)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.55rem,3.2vw,2.3rem)", fontWeight: 600, lineHeight: 1.25, color: C.forestDark, margin: "0 0 1.25rem" }}>
              <em>The bond grows on purpose, not by accident.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: C.textMid, margin: "0 0 1rem" }}>
              Whatever you choose — a single kit, the full collection, the seasonal planner — the work isn't in the buying. It's in the calling. The asking. The writing down. The phone in your hand on a Tuesday afternoon when you weren't planning to call, but you did anyway.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: C.textMid, margin: "0 0 2rem" }}>
              If this resonates, start where you are. One kit. One question. One conversation.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button type="button" className="btn-primary" style={{ border: 0, cursor: "pointer" }} onClick={() => void openPaddleCheckout(COLLECTION_PRICE_ID)}>
                Get the Collection — $127 <ArrowSvg />
              </button>
              <a href="https://the-comfort-bond-2.kit.com/3dfe0171af" target="_blank" rel="noopener noreferrer nofollow" style={{ alignSelf: "center", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: C.clay, textDecoration: "none", borderBottom: `1px solid ${C.clay}`, paddingBottom: 2 }}>
                Or start with a free sampler →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tcb-footer">
        <div className="footer-inner footer-inner-3col">
          <div className="footer-brand">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "#fff", fontWeight: 600 }}>The Comfort Bond™</div>
            <p>Nurturing Comfort, Inspiring Connection.</p>
          </div>
          <div className="footer-col">
            <h4>Start free</h4>
            <ul>
              <li><a href="https://the-comfort-bond-2.kit.com/de78d818c7" target="_blank" rel="noopener noreferrer">Free Connection Companion</a></li>
              <li><a href="https://the-comfort-bond-2.kit.com/3dfe0171af" target="_blank" rel="noopener noreferrer">Free Coffee & Connection Sampler</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="/shop#featured">The Connection Season: Summer Edition</a></li>
              <li><a href="/shop#kits">The Comfort Bond Connection Kits</a></li>
              <li><a href="/shop#collection">The Comfort Bond Collection</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="mailto:hello@thecomfortbond.com">hello@thecomfortbond.com</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "18px 0 6px", borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 8 }}>
          <span style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Secure checkout</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { slug: "visa", alt: "Visa" },
              { slug: "mastercard", alt: "Mastercard" },
              { slug: "amex", alt: "American Express" },
              { slug: "paypal", alt: "PayPal" },
            ].map((p) => (
              <img
                key={p.slug}
                src={`https://cdn.jsdelivr.net/gh/aaronfagan/svg-credit-card-payment-icons@main/flat/${p.slug}.svg`}
                alt={p.alt}
                loading="lazy"
                width={38}
                height={24}
                style={{ height: 24, width: "auto", borderRadius: 3, background: "#fff", padding: 1 }}
              />
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 The Comfort Bond™ · Made with care in Texas 🤍 ·</span>
          <a href="mailto:hello@thecomfortbond.com" className="footer-email">hello@thecomfortbond.com</a>
        </div>
      </footer>
      <CookieConsent />
      <StickyMobileCTA href="#featured" label="Get the Summer Edition" showAfter={600} />

      <style>{`
        @media (max-width: 820px) {
          .shop-grid { grid-template-columns: 1fr !important; }
          .shop-kit-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Shop;
