// Product detail page data — Batch 1: Remember When, Kitchen Table Memories, Comfort Bond Collection.
// Copy is CMO-approved. Do not edit without flagging.

import kitRememberWhen from "@/assets/remember-when-kit-conversation-cards-grandparents-family-memories.jpg";
import kitKitchenTable from "@/assets/kitchen-table-memories-kit-family-recipes-conversation-starters.jpg";
import kitGardenMemories from "@/assets/garden-memories-kit-conversation-cards-grandparents-yard-stories.jpg";
import coffeeSampler from "@/assets/coffee-connection-sampler-free-conversation-starters-aging-parents.png";

export type CrossSell = {
  title: string;
  blurb: string;
  href: string;
  image: string;
};

export type KitDetail = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  price: string;
  priceCompare?: string;
  priceSavings?: string;
  ctaText: string;
  stickyCta: string;
  // hero
  heroImage: string;
  // optional <picture> sources for the hero (used by Collection)
  heroPictureSources?: { type: "image/avif" | "image/webp"; srcSet: string; sizes: string }[];
  heroWidth: number;
  heroHeight: number;
  heroObjectFit?: "cover" | "contain";
  // body
  description: string;
  bullets: string[];
  promptsHeadline: string;
  prompts: string[];
  faqs: { q: string; a: string }[];
  bestFor: string;
  pairsWith: CrossSell[];
  // checkout
  priceId?: string;
  externalCheckoutHref?: string;
};

const COLLECTION_PRICE_ID = "pri_01kpafqz2tc4pfc262j1dnh531";
const REMEMBER_WHEN_PRICE_ID = "pri_01kpafx84h0z9z11fwc5m84dam";
const KITCHEN_TABLE_PRICE_ID = "pri_01kpafxq9xrqg0qhqfttzdjswf";
const SUMMER_EDITION_PRICE_ID = "pri_01kpagj5jtaxcnkbtjctq616k4";

// Cross-sell tiles (kept here so the page can reference them safely)
export const CROSS = {
  collection: {
    title: "The Comfort Bond Collection",
    blurb:
      "If you love this kit, the full library is $77 less than buying every kit separately.",
    href: "/kits/collection",
    image: "/lcp/collection-768.webp",
  } as CrossSell,
  kitchenTable: {
    title: "The Kitchen Table Memories Kit",
    blurb:
      "The natural next step if your loved one lights up around food and family.",
    href: "/kits/kitchen-table-memories",
    image: kitKitchenTable,
  } as CrossSell,
  rememberWhen: {
    title: "The Remember When Kit",
    blurb:
      "The widest entry point — the easiest visit to start with.",
    href: "/kits/remember-when",
    image: kitRememberWhen,
  } as CrossSell,
  gardenMemories: {
    title: "The Garden Memories Kit",
    blurb:
      "If meals and gardens were both her territory, the two kits unlock related stories from different doorways.",
    href: "/shop#garden-memories-kit",
    image: kitGardenMemories,
  } as CrossSell,
  summerEdition: {
    title: "The Connection Season: Summer Edition",
    blurb:
      "For the family ready to turn a single afternoon into a whole season of warmer Sundays.",
    href: "/shop#featured",
    image: "/lcp/summer-edition-768.webp",
  } as CrossSell,
  coffeeSampler: {
    title: "The Coffee & Connection Sampler (Free)",
    blurb:
      "If a friend or family member is curious about your kits, send them the free Sampler first.",
    href: "https://the-comfort-bond-2.kit.com/392c82fa32",
    image: coffeeSampler,
  } as CrossSell,
};

export const KIT_DETAILS: Record<string, KitDetail> = {
  "remember-when": {
    slug: "remember-when",
    name: "The Remember When Kit",
    tagline: "The easiest place to start.",
    tags: [
      "Best-Seller",
      "Start Here",
      "For Mom",
      "For Dad",
      "For Grandma",
      "For Grandpa",
      "Story Starters",
      "Gentle Games",
    ],
    price: "$34",
    ctaText: "Bring the Decades Home",
    stickyCta: "Bring the Decades Home — $34",
    heroImage: kitRememberWhen,
    heroWidth: 1200,
    heroHeight: 1500,
    heroObjectFit: "cover",
    description:
      "The Remember When Kit is the widest entry point. Trivia, a Word Link Game, four sets of conversation cards, picture prompts, and a Musical Memory section — all built around the decades that shaped the people who raised us, from the 1940s through the 1980s. Hand it to your mom or grandfather on a Sunday afternoon and watch them become the smartest person in the room — because they are.",
    bullets: [
      "15 conversation prompts across 5 themes",
      "10 vintage Visual Spark Cards",
      "20 trivia questions across four decades",
      "Picture & Word Memory BINGO (two boards)",
      "Musical Memory: Finish-the-Lyric + Name-That-Tune",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What song was always on the radio in the car when you were learning to drive?",
      "Which TV show did everyone in your house stop to watch — and who got to pick?",
      "What was your dad always wearing in your favorite memory of him?",
    ],
    faqs: [
      {
        q: "What if my parent doesn't remember a lot from those decades?",
        a: "That's exactly what this kit is built for. Every prompt is designed around recognition — the song, the face, the dish — not recall. There are no wrong answers. If they don't remember a specific year, they'll often remember a feeling, a smell, a Sunday morning. That's the whole point.",
      },
      {
        q: "Which decades are most heavily represented?",
        a: "The 1950s and 60s land most often — those are the years most of the people who raised us came of age — but the kit also reaches into the 40s (the war years) and the 80s (when many of them were raising us).",
      },
      {
        q: "How long does each game take?",
        a: "Each game is built for short sessions. Trivia Time is roughly twenty minutes if you do all twenty questions back to back, but you can stop after three. The Word Link Game is closer to ten minutes. The conversation cards have no clock at all — one card can carry an afternoon.",
      },
      {
        q: "What if my mom isn't the sentimental type?",
        a: "A lot of buyers tell us this and are surprised. The kit doesn't ask for sentiment. It asks about songs, headlines, neighborhoods, what kind of car was in the driveway. The feeling shows up sideways — through specifics, not declarations.",
      },
      {
        q: "Can my kids do this with their grandparents?",
        a: "Yes. The Remember When Kit is the most kid-friendly entry point because the trivia and picture prompts give younger family members a way in. Grandkids ask, grandparent answers, kids learn things they couldn't get anywhere else.",
      },
    ],
    bestFor:
      "Best for the first visit you want to feel different. If you're not sure which kit to start with — or your loved one had a wide range of interests rather than one particular passion — this is the one. It's also the easiest kit to bring along when grandchildren are in the room.",
    pairsWith: [CROSS.collection, CROSS.kitchenTable],
    priceId: REMEMBER_WHEN_PRICE_ID,
  },

  "kitchen-table-memories": {
    slug: "kitchen-table-memories",
    name: "The Kitchen Table Memories Kit",
    tagline: "For the families that ran on the kitchen table.",
    tags: [
      "For Mom",
      "For Grandma",
      "For Family Gatherings",
      "Family Stories",
      "Slow Visits",
    ],
    price: "$34",
    ctaText: "Pull Up a Chair",
    stickyCta: "Pull Up a Chair — $34",
    heroImage: kitKitchenTable,
    heroWidth: 1200,
    heroHeight: 1500,
    heroObjectFit: "cover",
    description:
      "Some families ran on the kitchen table. The recipes, the holiday meals, the small daily rituals — the dishes that meant Sunday, the cookies that meant Christmas, the smell of bread proofing on the counter. The Kitchen Table Memories Kit is built for those families. Bring it to your mother or grandmother and let her teach you something you've already eaten a hundred times.",
    bullets: [
      "15 conversation prompts on family meals & comfort food",
      "10 warm kitchen Visual Spark Cards",
      "20 trivia questions on classic foods, brands & traditions",
      "Picture & Word Memory BINGO with cookie jars, mixing bowls & gravy boats",
      "Musical memory featuring Dean Martin, Doris Day & more",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What dish did your mother make that nobody else could get right?",
      "Who sat at the head of the table when you were small — and what changed when they were gone?",
      "Tell me about the first meal you ever cooked for someone who mattered.",
    ],
    faqs: [
      {
        q: "What if she doesn't cook anymore?",
        a: "The kit is for the table, not the stove. You don't need to cook anything to use it. The prompts ask about meals she's had, taught, watched, and eaten — not meals she's making now.",
      },
      {
        q: "Are there actual recipes in this kit?",
        a: "There are recipe-themed prompts, picture cards of iconic dishes, and a Visual Spark section with kitchen imagery — but the kit is conversation-first, not a cookbook. The recipes that come out of using it are the ones in her head, written down in your handwriting, on the Notes pages.",
      },
      {
        q: "My family was never the cook-from-scratch kind. Will this kit still work?",
        a: "Yes. Every family has a kitchen table. The kit's prompts ask about Sundays, holidays, who sat where, who showed up, what was in the freezer — not just whether anyone made stock from a chicken. Convenience-food families have just as many stories. Sometimes more.",
      },
      {
        q: "Is this good for a holiday visit specifically?",
        a: "Yes — Thanksgiving, Christmas, Easter, Passover, any holiday where the kitchen is the center of the house. Many buyers gift this kit before a holiday so the family has a structured way to be together without it feeling structured.",
      },
      {
        q: "Will it work with grandchildren in the room?",
        a: "Beautifully. The picture cards and BINGO grid give younger family members something to point at and ask about. Grandparent teaches, grandkid listens, you sit quietly nearby and write things down.",
      },
    ],
    bestFor:
      "Best for the mother, grandmother, or aunt who fed everyone she loved. Best for the family that wants the holidays to feel like more than the meal. Best for the daughter who wishes she'd written down the recipe before nobody could find it.",
    pairsWith: [CROSS.gardenMemories, CROSS.summerEdition],
    priceId: KITCHEN_TABLE_PRICE_ID,
  },

  collection: {
    slug: "collection",
    name: "The Comfort Bond Collection",
    tagline: "Everything, in one place.",
    tags: [
      "Best Value",
      "Heirloom Gift",
      "For Mom",
      "For Dad",
      "For Grandma",
      "For Grandpa",
      "For Family Gatherings",
    ],
    price: "$147",
    priceCompare: "$204",
    priceSavings: "Save $57",
    ctaText: "Get the Collection",
    stickyCta: "Get the Collection — $147",
    heroImage: "/lcp/collection-1100.webp",
    heroPictureSources: [
      {
        type: "image/avif",
        srcSet:
          "/lcp/collection-480.avif 480w, /lcp/collection-768.avif 768w, /lcp/collection-1100.avif 1100w",
        sizes: "(max-width: 768px) 100vw, 50vw",
      },
      {
        type: "image/webp",
        srcSet:
          "/lcp/collection-480.webp 480w, /lcp/collection-768.webp 768w, /lcp/collection-1100.webp 1100w",
        sizes: "(max-width: 768px) 100vw, 50vw",
      },
    ],
    heroWidth: 1100,
    heroHeight: 825,
    heroObjectFit: "contain",
    description:
      "The Collection is everything, in one place. All five Connection Kits — Remember When, Kitchen Table Memories, Garden Memories, Places We've Been, and Hands That Made It — and The Connection Season: Summer Edition, gathered as a single library for your family. It's how you give a year of presence, not just a Saturday.",
    bullets: [
      "The Remember When Kit",
      "The Kitchen Table Memories Kit",
      "The Garden Memories Kit",
      "The Places We've Been Kit",
      "The Hands That Made It Kit",
      "The Connection Season: Summer Edition (41-page seasonal planner)",
      "Total: 6 products, $204 individual value",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What's a question I've never asked you that you've always wanted me to?",
      "What did your mother say when she was proud of you?",
      "If you could sit down with the version of yourself who was thirty, what would you tell her you're glad about?",
    ],
    faqs: [
      {
        q: "Do I save money by buying the Collection vs. the kits individually?",
        a: "Yes. Five Connection Kits at $34 each are $170. Add The Connection Season at $34 and the individual total is $204. The Collection is $127 — roughly $77 in savings. The real value, though, is having every kit on hand so you can match the kit to the day.",
      },
      {
        q: "Which kit should we open first?",
        a: "We recommend starting with The Remember When Kit. It's the widest entry point and the easiest kit to bring into a first visit. From there, follow your loved one — whichever kit makes them light up tells you where the rest of the family stories live.",
      },
      {
        q: "Is this a good gift for an older parent themselves, or only for the family member doing the visiting?",
        a: "Both. Many buyers gift the Collection to themselves before a long visit. Many others give it to a sibling, a co-caregiver, or a grandchild who is about to visit. It's also one of our most-given milestone-birthday gifts — particularly 70th, 80th, and 90th birthdays.",
      },
      {
        q: "Will we use all of it?",
        a: "Most families don't use every page — and we built it that way. The Collection is a library, not a curriculum. A family that opens three kits and treasures the conversations they got from them has used the Collection well.",
      },
      {
        q: "Can the Collection be split across siblings or used in different households?",
        a: "Yes. Each kit is a self-contained PDF, so siblings can take a kit each, families in different cities can each work from a different volume, and grandchildren can be sent a kit that matches their grandparent's particular thread. We hear from many families using it that way.",
      },
    ],
    bestFor:
      "Best for the milestone gift you want to feel substantial. Best for the family that's already loved one of our kits and is ready for the rest. Best for the daughter or son who knows their time with a parent is precious and wants the whole catalog ready, not a single Saturday.",
    pairsWith: [CROSS.coffeeSampler],
    priceId: COLLECTION_PRICE_ID,
  },
};

export { COLLECTION_PRICE_ID, REMEMBER_WHEN_PRICE_ID, KITCHEN_TABLE_PRICE_ID, SUMMER_EDITION_PRICE_ID };
