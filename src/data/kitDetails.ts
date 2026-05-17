// Product detail page data — Batches 1 & 2.
// Copy is CMO-approved. Do not edit without flagging.

import kitRememberWhen from "@/assets/remember-when-kit-conversation-cards-grandparents-family-memories.jpg";
import rememberWhenHero from "@/assets/remember-when-kit-hero-vintage-conversation-cards.jpg";
import rememberWhenHero800Avif from "@/assets/remember-when-kit-hero-vintage-conversation-cards-800.avif";
import rememberWhenHero1200Avif from "@/assets/remember-when-kit-hero-vintage-conversation-cards-1200.avif";
import rememberWhenHero1600Avif from "@/assets/remember-when-kit-hero-vintage-conversation-cards-1600.avif";
import rememberWhenHero800Webp from "@/assets/remember-when-kit-hero-vintage-conversation-cards-800.webp";
import rememberWhenHero1200Webp from "@/assets/remember-when-kit-hero-vintage-conversation-cards-1200.webp";
import rememberWhenHero1600Webp from "@/assets/remember-when-kit-hero-vintage-conversation-cards-1600.webp";
import rememberWhenGames from "@/assets/remember-when-kit-games-trivia-bingo-word-link.jpg";
import rememberWhenCard from "@/assets/remember-when-kit-conversation-card-television.jpg";
import rememberWhenBingo from "@/assets/remember-when-kit-bingo-board-illustrations.jpg";
import rememberWhenScene from "@/assets/remember-when-kit-grandmother-conversation-cards-tea.jpg";
import kitKitchenTable from "@/assets/kitchen-table-memories-kit-family-recipes-conversation-starters.jpg";
import kitGardenMemories from "@/assets/garden-memories-kit-conversation-cards-grandparents-yard-stories.jpg";
import kitPlacesWeveBeen from "@/assets/places-weve-been-kit-family-travel-stories-aging-parents.jpg";
import kitHandsThatMadeIt from "@/assets/hands-that-made-it-kit-family-recipes-heirloom-stories.jpg";
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
  // optional gallery
  gallery?: { src: string; alt: string }[];
  // checkout
  priceId?: string;
  externalCheckoutHref?: string;
};

const COLLECTION_PRICE_ID = "pri_01kpafqz2tc4pfc262j1dnh531";
const REMEMBER_WHEN_PRICE_ID = "pri_01kpafx84h0z9z11fwc5m84dam";
const KITCHEN_TABLE_PRICE_ID = "pri_01kpafxq9xrqg0qhqfttzdjswf";
const GARDEN_MEMORIES_PRICE_ID = "pri_01kpafvx3erd68458p4em99141";
const PLACES_WEVE_BEEN_PRICE_ID = "pri_01kpafwqs0wwzatbs5721cyfmk";
const HANDS_THAT_MADE_IT_PRICE_ID = "pri_01kpafv0r50q149ctgje0dmn0q";
const SUMMER_EDITION_PRICE_ID = "pri_01kpagj5jtaxcnkbtjctq616k4";

// Cross-sell tiles (kept here so the page can reference them safely)
export const CROSS = {
  collection: {
    title: "The Comfort Bond Collection",
    blurb:
      "If you love this kit, the full library is $57 less than buying every kit separately.",
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
      "Gardens and kitchens often shared the same hands — two doors into the same year.",
    href: "/kits/garden-memories",
    image: kitGardenMemories,
  } as CrossSell,
  placesWeveBeen: {
    title: "The Places We've Been Kit",
    blurb:
      "Era and map together — the two doorways most families end up owning.",
    href: "/kits/places-weve-been",
    image: kitPlacesWeveBeen,
  } as CrossSell,
  handsThatMadeIt: {
    title: "The Hands That Made It Kit",
    blurb:
      "If the garden was theirs to tend, the workbench was often theirs to fix.",
    href: "/kits/hands-that-made-it",
    image: kitHandsThatMadeIt,
  } as CrossSell,
  summerEdition: {
    title: "The Connection Season: Summer Edition",
    blurb:
      "For the family ready to turn a single afternoon into a whole season of warmer Sundays.",
    href: "/kits/connection-season-summer",
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
    tags: ["Best-Seller", "Story Starters", "Gentle Games", "Start Here"],
    price: "$34",
    ctaText: "Bring the Decades Home",
    stickyCta: "Bring the Decades Home — $34",
    heroImage: rememberWhenHero,
    heroWidth: 1456,
    heroHeight: 1092,
    heroObjectFit: "cover",
    gallery: [
      { src: rememberWhenGames, alt: "Remember When Kit printed games — Trivia Time, Word Link, BINGO and Conversation Cards" },
      { src: rememberWhenCard, alt: "Remember When Kit Conversation Card — 1950s–1980s pop culture prompt" },
      { src: rememberWhenBingo, alt: "Remember When Kit BINGO board with 24 hand-drawn vintage illustrations" },
      { src: rememberWhenScene, alt: "Grandmother and daughter using the Remember When Kit conversation cards over tea" },
    ],
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
    tags: ["Founder's Favorite", "Family Gatherings", "Family Stories", "Slow Visits"],
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
    tags: ["Best Value", "Heirloom Gift", "Family Gatherings"],
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

  "garden-memories": {
    slug: "garden-memories",
    name: "The Garden Memories Kit",
    tagline: "For the people whose memory lives outside.",
    tags: ["Picture Prompts", "Slow Visits", "Gentle Favorite"],
    price: "$34",
    ctaText: "Step Into the Garden",
    stickyCta: "Step Into the Garden — $34",
    heroImage: kitGardenMemories,
    heroWidth: 1200,
    heroHeight: 1500,
    heroObjectFit: "cover",
    description:
      "For the people whose hands were always in the dirt — who knew when the tomatoes were ready by smell, who could name every neighbor's roses. The Garden Memories Kit gathers prompts, pictures, and quiet games around the gardens, seasons, and outdoor rituals that shaped a life. Bring it to a porch on a warm afternoon and let your grandmother tell you what she planted the year you were born.",
    bullets: [
      "15 conversation prompts on gardens, tools & time outside",
      "10 illustrated Visual Spark Cards",
      "20 trivia questions on flowers, vegetables & garden wisdom",
      "Picture & Word Memory BINGO with watering cans, wheelbarrows & sunflowers",
      "Musical memory featuring \"You Are My Sunshine\" & more",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What did the yard at your childhood home smell like in summer?",
      "Who taught you what a weed was — and what they got wrong?",
      "What did you grow that you were proudest of, even if nobody else noticed?",
    ],
    faqs: [
      {
        q: "My mom hasn't gardened in years. Will this still resonate?",
        a: "Yes — and often more than you'd expect. The prompts aren't about gardening now. They're about the porch she sat on, the lilacs that grew by her grandmother's back door, the year the tomatoes were impossible. Hands stop. Gardens stay.",
      },
      {
        q: "My dad gardened more than my mom. Is this kit just for mothers?",
        a: "No. Some of our most-loved prompts come from buyers using this kit with fathers and grandfathers who built their identity around the yard, the toolshed, the lawn. It's a kit for anyone whose memory lives outside.",
      },
      {
        q: "My grandparents lived in apartments — they didn't garden. Will this work?",
        a: "There are prompts about parks, neighborhood trees, window boxes, and what they grew when they finally had space. The kit reaches further than vegetable beds.",
      },
      {
        q: "Are the picture prompts seasonal?",
        a: "The Visual Spark Cards and Picture BINGO grid include seeds, blooms, harvest scenes, autumn leaves, and snow on a porch — so the kit works year-round, but it lights up most warmly in spring and summer.",
      },
      {
        q: "Can my kids do this kit with their grandparent in the garden?",
        a: "This is one of the most kid-friendly kits we make. The picture prompts give younger grandchildren a way to participate — point, name, ask. Grandparent teaches, kid learns, you sit quietly nearby and write down what you hear.",
      },
    ],
    bestFor:
      "Best for the loved one who lit up around plants, porches, and weather. Best for the spring or summer visit when you can actually go outside together. Best for a daughter who never got the names of her mother's flowers before.",
    pairsWith: [CROSS.kitchenTable, CROSS.handsThatMadeIt],
    priceId: GARDEN_MEMORIES_PRICE_ID,
  },

  "places-weve-been": {
    slug: "places-weve-been",
    name: "The Places We've Been Kit",
    tagline: "Some people remember in places.",
    tags: ["Long-Distance Friendly", "Story Starters", "Picture Prompts"],
    price: "$34",
    ctaText: "Follow the Road",
    stickyCta: "Follow the Road — $34",
    heroImage: kitPlacesWeveBeen,
    heroWidth: 1200,
    heroHeight: 1500,
    heroObjectFit: "cover",
    description:
      "Some people remember in places. The Sunday drive, the neighborhood they grew up in, the road trip with the bad map, the town they left and the town they finally stayed in. The Places We've Been Kit follows that thread — prompts and picture cards built around the geography of a life. It's also the most phone-friendly kit, which matters if you live a long way away.",
    bullets: [
      "15 conversation prompts on road trips & vacations",
      "10 retro Visual Spark Cards",
      "20 trivia questions on Route 66, Mount Rushmore & more",
      "Picture & Word Memory BINGO with station wagons, motel pools & postcards",
      "Musical memory featuring Nat King Cole & The Beach Boys",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "Where were you living when you first felt like a grown-up?",
      "Tell me about a place you took me when I was small that I probably don't remember.",
      "What's the road trip that didn't go the way you planned?",
    ],
    faqs: [
      {
        q: "My grandfather doesn't travel anymore. Will this kit feel sad?",
        a: "No. The kit doesn't ask where he wants to go. It asks where he's been. Where he was the day a particular thing happened. The towns he passed through, the neighborhoods he knew the corners of. The reverence is for the places he has, not the ones he can't reach now.",
      },
      {
        q: "Is this kit usable over the phone?",
        a: "Yes — better than any other kit. The conversation cards work without needing to be in the same room. We hear from long-distance daughters who use this kit on Sunday calls and finally feel like the call is doing something.",
      },
      {
        q: "My parents weren't big travelers. Most of their life happened within fifty miles. Will this work?",
        a: "Yes. Many of the kit's most-loved prompts are about home places, not faraway ones — the street they grew up on, the place their grandmother lived, the corner where they met their best friend. The kit favors specificity over distance.",
      },
      {
        q: "Is there a road-trip-with-the-grandkids angle?",
        a: "Yes. The Picture BINGO grid was hand-drawn to be usable in a car. Buyers tell us they bring it on summer drives — the grandkids find pictures, the grandparent tells the stories the pictures unlock.",
      },
      {
        q: "How does this kit differ from The Remember When Kit?",
        a: "Remember When asks about an era. Places We've Been asks about a map. Same conversation, different doorway. Many families end up owning both.",
      },
    ],
    bestFor:
      "Best for the father, grandfather, or aunt with a strong sense of geography. Best for the long-distance daughter who calls every Sunday and runs out of things to say by the fifth minute. Best for the summer when somebody is finally driving up for a real visit.",
    pairsWith: [CROSS.rememberWhen, CROSS.handsThatMadeIt],
    priceId: PLACES_WEVE_BEEN_PRICE_ID,
  },

  "hands-that-made-it": {
    slug: "hands-that-made-it",
    name: "The Hands That Made It Kit",
    tagline: "For the people who built things.",
    tags: ["Story Starters", "Keepsake Friendly", "Heirloom Gift"],
    price: "$34",
    ctaText: "Honor the Hands That Made It",
    stickyCta: "Honor the Hands That Made It — $34",
    heroImage: kitHandsThatMadeIt,
    heroWidth: 1200,
    heroHeight: 1500,
    heroObjectFit: "cover",
    description:
      "This kit is for the people who built things. Who could mend a hem, refinish a chair, fix a faucet, knit a scarf, replace a fan belt, throw a pot. The Hands That Made It Kit gathers conversation cards, picture prompts, and quiet games around a life lived with hands. Bring it to the father or grandmother who taught you that a real fix takes time.",
    bullets: [
      "20 conversation prompts on workbenches, sewing & craft",
      "10 illustrated Visual Spark Cards",
      "20 trivia questions on tools, stitches & American know-how",
      "Picture & Word Memory BINGO with thimbles, hammers & sewing machines",
      "Musical memory featuring Dolly Parton, Tennessee Ernie Ford & more",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What's the first thing you ever made that worked?",
      "Who taught you how to use that tool — and what did they say while they were teaching?",
      "What did you fix once that you're still secretly proud of?",
    ],
    faqs: [
      {
        q: "My dad wasn't handy. But he had a craft — woodworking, painting, fishing. Does this fit?",
        a: "Yes. The kit is for hands, not just hardware. Woodworkers, painters, fly-tiers, mechanics, knitters, bakers, fishermen — anyone who learned a skill with their hands is in this kit's territory.",
      },
      {
        q: "My mom was the maker in our family. Is this not for her?",
        a: "It absolutely is. The kit covers sewing, knitting, mending, quilting, embroidery, refinishing, and homemaking crafts as much as workshop crafts. The imagery favors a broad palette of skills, not just shop tools.",
      },
      {
        q: "What if their hands don't work the way they used to?",
        a: "The kit doesn't ask them to make anything. It asks them to remember making something. The prompts are designed for someone who used to build, sew, fix, or carve — even if today they're sitting still. Skills don't leave; the muscle of remembering them is still warm.",
      },
      {
        q: "Is there anything in this kit they could actually do with their hands?",
        a: "The Picture BINGO grid is meant to be touched — you can mark squares with pennies, beans, or buttons. Several buyers tell us their loved one will reach for the picture cards and turn them over slowly. That's part of the design.",
      },
      {
        q: "Is this kit a good Father's Day gift?",
        a: "Yes, and it's one of our two most-given Father's Day kits (alongside Places We've Been). It pairs beautifully with a small physical object — a tape measure, a pair of garden gloves, a thimble — depending on the maker in your life.",
      },
    ],
    bestFor:
      "Best for the father, grandfather, aunt, or uncle who made or fixed things. Best for the daughter who watched her dad in the garage and never asked half the questions she wanted to. Best for Father's Day, retirement, or any visit where you'd like the conversation to start with a tool in someone's hand.",
    pairsWith: [CROSS.placesWeveBeen, CROSS.collection],
    priceId: HANDS_THAT_MADE_IT_PRICE_ID,
  },

  "connection-season-summer": {
    slug: "connection-season-summer",
    name: "The Connection Season: Summer Edition",
    tagline: "This isn't a single visit. It's a season.",
    tags: ["Weekly Rhythm", "Seasonal Favorite", "Family Gatherings"],
    price: "$34",
    ctaText: "Step Into the Season",
    stickyCta: "Step Into the Season — $34",
    heroImage: "/lcp/summer-edition-1100.webp",
    heroPictureSources: [
      {
        type: "image/avif",
        srcSet:
          "/lcp/summer-edition-480.avif 480w, /lcp/summer-edition-768.avif 768w, /lcp/summer-edition-1100.avif 1100w",
        sizes: "(max-width: 768px) 100vw, 50vw",
      },
      {
        type: "image/webp",
        srcSet:
          "/lcp/summer-edition-480.webp 480w, /lcp/summer-edition-768.webp 768w, /lcp/summer-edition-1100.webp 1100w",
        sizes: "(max-width: 768px) 100vw, 50vw",
      },
    ],
    heroWidth: 1100,
    heroHeight: 1467,
    heroObjectFit: "contain",
    description:
      "This isn't a single visit. It's a season. The Connection Season: Summer Edition is our premium 41-page guide for families who want to use the whole summer with intention — built around the Six Dimensions of Bonding and a weekly rhythm that holds the season together. It's the kit families come back to.",
    bullets: [
      "13 themed weeks across 26 paired pages (theme + planning)",
      "A letter from Francesca",
      "The Six Dimensions of Bonding compass",
      "Seasonal Conversation Cards, Visual Spark Cards & Picture & Word BINGO",
      "6 \"What They Told Me\" legacy-capture pages",
      "Kit pairing notes for every week",
    ],
    promptsHeadline: "A taste of what's inside",
    prompts: [
      "What's a sound from a summer you want to tell me about — the screen door, the radio, the cicadas, the ice in the glass?",
      "Who taught you how to be still in the heat?",
      "Tell me about a summer night you couldn't fall asleep — and you didn't want to.",
    ],
    faqs: [
      {
        q: "How is this different from the single $34 Connection Kits?",
        a: "The single Connection Kits are themed (Garden, Kitchen, Places, Hands, Remember When). The Connection Season is seasonal — organized around a rhythm of weeks, with deeper reflection pages, the Six Dimensions of Bonding wheel, and generous space for notes. Think of the single kits as Saturday afternoons; this is the whole season.",
      },
      {
        q: "Do I have to use it every week?",
        a: "No. The weekly structure is a frame, not a prescription. Many families use one section per visit, even if visits are months apart. Skipping weeks doesn't break anything.",
      },
      {
        q: "What are the Six Dimensions of Bonding?",
        a: "Cognitive (the mind), emotional (the heart), sensory (the body's memory), social (the family thread), creative (the hands), and spiritual (whatever the loved one means by that word). Every week's prompts touch a different dimension so the season doesn't live in only one register.",
      },
      {
        q: "Are there autumn, winter, and spring editions coming?",
        a: "Yes — they're on the roadmap. Summer is the first because most families have more time together in summer than at any other season. The next edition will arrive ahead of the autumn equinox.",
      },
      {
        q: "Does the Connection Season include conversation cards and games like the Connection Kits?",
        a: "Yes — and more reflection room. You'll find Conversation Cards, Visual Spark Cards, Picture & Word BINGO, and seasonal Trivia, plus longer reflection and notes pages that the single kits don't have. It's the most generous product we make.",
      },
    ],
    bestFor:
      "Best for the family that wants the whole summer to feel different — not just one good Saturday. Best for the daughter or son already familiar with our work who is ready for something more substantial. Best for a milestone summer — a meaningful birthday, a first summer after a hard year, a summer everyone is finally home.",
    pairsWith: [CROSS.collection, CROSS.kitchenTable],
    priceId: SUMMER_EDITION_PRICE_ID,
  },
};

export {
  COLLECTION_PRICE_ID,
  REMEMBER_WHEN_PRICE_ID,
  KITCHEN_TABLE_PRICE_ID,
  GARDEN_MEMORIES_PRICE_ID,
  PLACES_WEVE_BEEN_PRICE_ID,
  HANDS_THAT_MADE_IT_PRICE_ID,
  SUMMER_EDITION_PRICE_ID,
};
