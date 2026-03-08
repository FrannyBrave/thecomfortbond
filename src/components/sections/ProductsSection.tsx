import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import roadTripImage from "@/assets/road-trip-kit.png";
import { FullBundleDisplay } from "./FullBundleDisplay";
import { RoadTripKitDisplay } from "./RoadTripKitDisplay";
import { NostalgiaKitDisplay } from "./NostalgiaKitDisplay";
import { KitchenKitDisplay } from "./KitchenKitDisplay";
import { HolidayKitDisplay } from "./HolidayKitDisplay";
import nostalgiaImage from "@/assets/nostalgia-kit.png";
import kitchenImage from "@/assets/kitchen-kit.png";
import holidayImage from "@/assets/holiday-kit.png";
import serenityImage from "@/assets/serenity-video-suite.png";
import { Button } from "@/components/ui/button";


const featuredProduct = {
  id: "bundle",
  name: "The Full Kit Bundle",
  description:
  "Four themed kits. One complete engagement library. Ready to run from morning session to the 4 o'clock hour.",
  includes: [
  "Road Trip Kit",
  "Nostalgia Kit",
  "Kitchen & Comfort Food Kit",
  "Holiday Traditions Kit"],

  price: "$97",
  originalPrice: "$116",
  badge: "Best Value",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/9ffc59b7-0a7f-4717-9a45-3d3000a960fc"
};

const products = [
{
  id: 1,
  name: "Road Trip Kit",
  anchorId: "road-trip-kit",
  badge: "Great for group sessions",
  description: "Hit the open road through decades of American travel memories, from Route 66 to family road trips. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/db7c2f22-538e-43d3-a777-5b4f3b2eda05",
  image: roadTripImage
},
{
  id: 2,
  name: "Nostalgia Kit",
  anchorId: "nostalgia-kit",
  badge: "Memory care favorite",
  description: "A walk down memory lane from the 1950s through the 1990s, sparking stories, smiles, and sing-alongs. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/0bd6f264-108d-4f37-8330-8440f8cb0d29",
  image: nostalgiaImage
},
{
  id: 3,
  name: "Kitchen & Comfort Food Kit",
  anchorId: "kitchen-comfort-kit",
  badge: "Great for 1:1 & group",
  description: "Celebrate the kitchen, comfort food, and family mealtime memories that bring warmth to any room. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/92c9c8a3-a532-4760-b27a-4a0907d55f45",
  image: kitchenImage
},
{
  id: 4,
  name: "Holiday Traditions Kit",
  anchorId: "holiday-traditions-kit",
  badge: "Runs year-round",
  description: "Spanning holidays across the entire year, from New Year's to Christmas and everything in between. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$29",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/3eff87c2-37b0-4acb-ae78-cf9289e5238d",
  image: holidayImage
},
{
  id: 5,
  name: "Serenity Video Suite",
  anchorId: "serenity-video-suite",
  description: "Designed to ease sundowning restlessness and calm the room between activities. Calming nature videos that provide gentle resets during quiet moments or help wind down a session naturally.",
  price: "$35",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/fe7a8bab-e2f4-433f-a73b-358742e54530",
  image: serenityImage
}];


export const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding pb-6 md:pb-8 lg:pb-10 bg-cream" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="heading-lg text-forest mb-4">
            Choose Your Kit
          </h2>
          <p className="body-md text-forest/70 max-w-2xl mx-auto">
            Each kit is a complete, themed engagement session — print, gather, and begin.
          </p>
        </motion.div>

        {/* Featured Product - Full Ecosystem Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12">

          <div id="full-ecosystem-bundle" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)", display: "grid", gridTemplateColumns: "1fr" }}>
            <style>{`@media (min-width: 768px) { .bundle-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="bundle-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "stretch", minHeight: "560px" }}>
              {/* Left — Animated Display */}
              <div style={{ height: "100%" }}>
                <FullBundleDisplay />
              </div>

              {/* Right — Product Info */}
              <div style={{ background: "#FDFAF5", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                  THE COMFORT BOND™
                </div>

                <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C3E2D", marginBottom: "12px", fontWeight: 700 }}>
                  The{" "}
                  <span style={{ color: "#C1714F", fontStyle: "italic" }}>Full Kit</span>{" "}
                  Bundle
                </h2>

                <p style={{ fontSize: "17px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.4, marginBottom: "8px" }}>
                  Four themed kits. One complete engagement library.
                </p>

                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                  Everything you need for weeks of meaningful engagement — 80+ pages of print-ready activities and 20 themed sessions.
                </p>

                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                  WHAT'S INSIDE
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { emoji: "🍳", bg: "#C1714F", title: "Kitchen & Comfort Food Kit", subtitle: "Recipes, food memories & more" },
                    { emoji: "🎄", bg: "#3D5A47", title: "Holiday Traditions Kit", subtitle: "Seasonal stories & celebrations" },
                    { emoji: "🚗", bg: "#8B7355", title: "Road Trip Kit", subtitle: "Travel memories & adventures" },
                    { emoji: "📸", bg: "#8B9E8F", title: "Nostalgia Kit", subtitle: "Then & now, life stories" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.3 }}>{item.title}</div>
                        <div style={{ fontSize: "12px", color: "#8B9E8F", lineHeight: 1.3 }}>{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$97</span>
                  <span style={{ fontSize: "18px", color: "#A0A0A0", textDecoration: "line-through", fontFamily: "Georgia, serif" }}>$116</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#3D5A47", background: "rgba(61,90,71,0.1)", padding: "3px 10px", borderRadius: "20px" }}>Save $19</span>
                </div>

                <a
                  href={featuredProduct.checkoutUrl}
                  className="lemonsqueezy-button"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#C1714F",
                    color: "#FDFAF5",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                  }}
                >
                  Buy Full Bundle
                </a>

                <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center" }}>
                  Instant digital download · Print as many copies as you need
                </p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Road Trip Kit — Featured Two-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12">

          <div id="road-trip-kit" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)" }}>
            <style>{`@media (min-width: 768px) { .roadtrip-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="roadtrip-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "stretch", minHeight: "560px" }}>
              <div style={{ height: "100%" }}>
                <RoadTripKitDisplay />
              </div>

              <div style={{ background: "#FDFAF5", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                  THE COMFORT BOND™
                </div>

                <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C3E2D", marginBottom: "12px", fontWeight: 700 }}>
                  The{" "}
                  <span style={{ color: "#C1714F", fontStyle: "italic" }}>Road Trip</span>{" "}
                  Kit
                </h2>

                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                  Hit the open road through decades of American travel memories — from Route 66 to family road trips. 20+ pages of print-ready activities.
                </p>

                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                  WHAT'S INSIDE
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { emoji: "🗺️", bg: "#C1714F", title: "Conversation Cards", subtitle: "The Great American Road Trip · 4 pages" },
                    { emoji: "❓", bg: "#3D5A47", title: "Trivia Time", subtitle: "Famous highways, state nicknames & more · 5 pages" },
                    { emoji: "🔗", bg: "#8B7355", title: "Word Link Game", subtitle: "Find the bridge word · 3 pages" },
                    { emoji: "🎱", bg: "#8B9E8F", title: "BINGO", subtitle: "State Nickname Bingo · 3 pages" },
                    { emoji: "🎵", bg: "#C1714F", title: "Musical Memory Games", subtitle: "Finish the lyric & name that tune · 5 pages" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.3 }}>{item.title}</div>
                        <div style={{ fontSize: "12px", color: "#8B9E8F", lineHeight: 1.3 }}>{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$29</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/db7c2f22-538e-43d3-a777-5b4f3b2eda05"
                  className="lemonsqueezy-button"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#C1714F",
                    color: "#FDFAF5",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                  }}
                >
                  Purchase Kit
                </a>

                <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center" }}>
                  Instant digital download · Print as many copies as you need
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nostalgia Kit — Featured Two-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12">

          <div id="nostalgia-kit" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)" }}>
            <style>{`@media (min-width: 768px) { .nostalgia-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="nostalgia-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "stretch", minHeight: "560px" }}>
              <div style={{ height: "100%" }}>
                <NostalgiaKitDisplay />
              </div>

              <div style={{ background: "#FDFAF5", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                  THE COMFORT BOND™
                </div>

                <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C3E2D", marginBottom: "12px", fontWeight: 700 }}>
                  The{" "}
                  <span style={{ color: "#C1714F", fontStyle: "italic" }}>Nostalgia</span>{" "}
                  Kit
                </h2>

                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                  Travel back through the decades — from sock hops and Sputnik to disco balls and dial-up. 23+ pages of print-ready activities spanning the 1950s through the 1990s.
                </p>

                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                  WHAT'S INSIDE
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { emoji: "🕰️", bg: "#C1714F", title: "Conversation Cards", subtitle: "Memory Lane: 1950s–1990s · 5 pages" },
                    { emoji: "❓", bg: "#3D5A47", title: "Trivia Time", subtitle: "Historical moments, fashion & household items · 5 pages" },
                    { emoji: "🔗", bg: "#8B7355", title: "Word Link Game", subtitle: "Flashback word links · 4 pages" },
                    { emoji: "🎱", bg: "#8B9E8F", title: "BINGO", subtitle: "Memory Lane 'Guess the Item' game · 4 pages" },
                    { emoji: "🎵", bg: "#C1714F", title: "Musical Memory", subtitle: "Finish the lyric & name the artist · 5 pages" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.3 }}>{item.title}</div>
                        <div style={{ fontSize: "12px", color: "#8B9E8F", lineHeight: 1.3 }}>{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$29</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/0bd6f264-108d-4f37-8330-8440f8cb0d29"
                  className="lemonsqueezy-button"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#C1714F",
                    color: "#FDFAF5",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                  }}
                >
                  Purchase Kit
                </a>

                <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center" }}>
                  Instant digital download · Print as many copies as you need
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kitchen & Comfort Kit — Featured Two-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12">

          <div id="kitchen-comfort-kit" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)" }}>
            <style>{`@media (min-width: 768px) { .kitchen-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="kitchen-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "stretch", minHeight: "560px" }}>
              <div style={{ height: "100%" }}>
                <KitchenKitDisplay />
              </div>

              <div style={{ background: "#FDFAF5", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                  THE COMFORT BOND™
                </div>

                <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C3E2D", marginBottom: "12px", fontWeight: 700 }}>
                  The{" "}
                  <span style={{ color: "#C1714F", fontStyle: "italic" }}>Kitchen</span>{" "}
                  & Comfort Kit
                </h2>

                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                  Pull up a chair and cook up some memories. 20+ pages of print-ready activities centered on family meals, comfort food traditions, and the heart of the American home.
                </p>

                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                  WHAT'S INSIDE
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { emoji: "🍽️", bg: "#C1714F", title: "Conversation Cards", subtitle: "The Heart of the Home · 4 pages" },
                    { emoji: "❓", bg: "#3D5A47", title: "Trivia Time", subtitle: "Food brands, comfort food history & recipes · 4 pages" },
                    { emoji: "🔗", bg: "#8B7355", title: "Word Link Game", subtitle: "Pantry word links · 4 pages" },
                    { emoji: "🎱", bg: "#8B9E8F", title: "BINGO", subtitle: "Kitchen & Comfort Food Bingo · 3 pages" },
                    { emoji: "🎵", bg: "#C1714F", title: "Musical Memory", subtitle: "Finish the lyric & Sweet Tooth humming game · 5 pages" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.3 }}>{item.title}</div>
                        <div style={{ fontSize: "12px", color: "#8B9E8F", lineHeight: 1.3 }}>{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$29</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/92c9c8a3-a532-4760-b27a-4a0907d55f45"
                  className="lemonsqueezy-button"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#C1714F",
                    color: "#FDFAF5",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                  }}
                >
                  Purchase Kit
                </a>

                <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center" }}>
                  Instant digital download · Print as many copies as you need
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Holiday Traditions Kit — Featured Two-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12">

          <div id="holiday-traditions-kit" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)" }}>
            <style>{`@media (min-width: 768px) { .holiday-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
            <div className="holiday-grid" style={{ display: "grid", gridTemplateColumns: "1fr", alignItems: "stretch", minHeight: "560px" }}>
              <div style={{ height: "100%" }}>
                <HolidayKitDisplay />
              </div>

              <div style={{ background: "#FDFAF5", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Georgia, serif" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                  THE COMFORT BOND™
                </div>

                <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C3E2D", marginBottom: "12px", fontWeight: 700 }}>
                  The{" "}
                  <span style={{ color: "#C1714F", fontStyle: "italic" }}>Holiday Traditions</span>{" "}
                  Kit
                </h2>

                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                  Deck the halls with meaningful memories. 24+ pages of print-ready activities celebrating holiday traditions, festive trivia, and the warmth of every season.
                </p>

                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                  WHAT'S INSIDE
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { emoji: "🎄", bg: "#C1714F", title: "Conversation Cards", subtitle: "The Year of Celebration · 5 pages" },
                    { emoji: "❓", bg: "#3D5A47", title: "Trivia Time", subtitle: "Holiday traditions & celebrations · 7 pages" },
                    { emoji: "🔗", bg: "#8B7355", title: "Word Link Game", subtitle: "Celebration word links · 4 pages" },
                    { emoji: "🎱", bg: "#7A9485", title: "BINGO", subtitle: "Holiday Parade Bingo · 3 pages" },
                    { emoji: "🎵", bg: "#C1714F", title: "Musical Memory", subtitle: "Finish the lyric & name the holiday · 5 pages" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#2C3E2D", lineHeight: 1.3 }}>{item.title}</div>
                        <div style={{ fontSize: "12px", color: "#8B9E8F", lineHeight: 1.3 }}>{item.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$29</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/3eff87c2-37b0-4acb-ae78-cf9289e5238d"
                  className="lemonsqueezy-button"
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    background: "#C1714F",
                    color: "#FDFAF5",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 28px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                  }}
                >
                  Purchase Kit
                </a>

                <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center" }}>
                  Instant digital download · Print as many copies as you need
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Serenity Video Suite — Single-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div id="serenity-video-suite" className="max-w-5xl mx-auto" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)", background: "#FDFAF5" }}>
            {/* Illustrated Nature Scene */}
            <div style={{ width: "100%", height: "230px", position: "relative", overflow: "hidden", borderRadius: "24px 24px 0 0" }}>
              {/* Sky gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #FDFAF5 0%, #E8C9A8 50%, #D4956A 85%)" }} />

              {/* Large translucent circle for depth */}
              <div style={{ position: "absolute", top: "-60px", right: "-40px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(212,149,106,0.12)" }} />
              <div style={{ position: "absolute", bottom: "-30px", left: "-20px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(61,90,71,0.08)" }} />

              {/* Sun/moon */}
              <div style={{ position: "absolute", top: "55px", left: "38%", width: "40px", height: "40px", borderRadius: "50%", background: "radial-gradient(circle, #FDFAF5 30%, rgba(212,149,106,0.4) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", top: "45px", left: "36%", width: "60px", height: "60px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,149,106,0.25) 0%, transparent 70%)" }} />

              {/* Distant treeline row 1 (furthest, faded) */}
              <svg style={{ position: "absolute", bottom: "75px", left: 0, width: "100%", height: "60px", opacity: 0.4 }} viewBox="0 0 1000 60" preserveAspectRatio="none">
                <path d="M0,60 L0,45 Q25,10 50,45 Q75,5 100,42 Q130,12 160,45 Q185,8 210,42 Q240,15 270,45 Q295,5 320,43 Q350,10 380,45 Q405,8 430,42 Q460,12 490,45 Q515,5 540,43 Q570,10 600,45 Q625,8 650,42 Q680,15 710,45 Q735,5 760,42 Q790,10 820,45 Q845,8 870,42 Q900,12 930,45 Q955,5 980,42 L1000,45 L1000,60 Z" fill="#3D5A47" />
              </svg>

              {/* Distant treeline row 2 (medium) */}
              <svg style={{ position: "absolute", bottom: "65px", left: 0, width: "100%", height: "65px", opacity: 0.65 }} viewBox="0 0 1000 65" preserveAspectRatio="none">
                <path d="M0,65 L0,48 Q30,15 60,48 Q90,8 120,46 Q150,18 180,48 Q210,10 240,46 Q270,20 300,48 Q330,12 360,46 Q390,18 420,48 Q450,8 480,46 Q510,15 540,48 Q570,10 600,46 Q630,18 660,48 Q690,8 720,46 Q750,15 780,48 Q810,10 840,46 Q870,18 900,48 Q930,8 960,46 L1000,48 L1000,65 Z" fill="#3D5A47" />
              </svg>

              {/* Front treeline (full opacity) */}
              <svg style={{ position: "absolute", bottom: "55px", left: 0, width: "100%", height: "70px" }} viewBox="0 0 1000 70" preserveAspectRatio="none">
                <path d="M0,70 L0,50 Q20,12 40,48 Q60,5 80,46 Q105,15 130,50 Q155,8 180,48 Q200,18 220,50 Q245,5 270,48 Q295,15 320,50 Q340,8 360,46 Q385,18 410,50 Q430,5 450,48 Q475,15 500,50 Q520,8 540,46 Q565,18 590,50 Q610,5 630,48 Q655,12 680,50 Q700,8 720,46 Q745,18 770,50 Q790,5 810,48 Q835,15 860,50 Q880,8 900,46 Q925,18 950,50 Q975,5 1000,48 L1000,70 Z" fill="#3D5A47" />
              </svg>

              {/* Horizon glow line */}
              <div style={{ position: "absolute", bottom: "54px", left: 0, width: "100%", height: "3px", background: "linear-gradient(90deg, transparent 5%, rgba(193,113,79,0.5) 30%, rgba(193,113,79,0.6) 50%, rgba(193,113,79,0.5) 70%, transparent 95%)" }} />

              {/* Water / lake */}
              <div style={{ position: "absolute", bottom: "12px", left: 0, width: "100%", height: "45px", background: "linear-gradient(180deg, #7A9E8E 0%, #6B8F7F 100%)" }}>
                {/* Water reflection */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "20px", background: "linear-gradient(180deg, rgba(61,90,71,0.3) 0%, rgba(212,149,106,0.15) 100%)", filter: "blur(2px)" }} />
                {/* Ripple lines */}
                <div style={{ position: "absolute", top: "10px", left: "10%", width: "80%", height: "1px", background: "rgba(253,250,245,0.15)" }} />
                <div style={{ position: "absolute", top: "18px", left: "15%", width: "70%", height: "1px", background: "rgba(253,250,245,0.1)" }} />
                <div style={{ position: "absolute", top: "26px", left: "20%", width: "55%", height: "1px", background: "rgba(253,250,245,0.08)" }} />
                <div style={{ position: "absolute", top: "33px", left: "25%", width: "45%", height: "1px", background: "rgba(253,250,245,0.06)" }} />
              </div>

              {/* Foreground bank */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "14px", background: "#2C4235" }} />

              {/* Typography overlay */}
              <div style={{ position: "absolute", bottom: "20px", left: "24px", fontSize: "9px", fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "0.12em", color: "#FDFAF5", opacity: 0.75, textTransform: "uppercase" as const }}>
                A COMFORT FLOW™ VIDEO EXPERIENCE
              </div>
            </div>

            {/* Product Info */}
            <div style={{ padding: "40px 36px", fontFamily: "Georgia, serif" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#3D5A47", marginBottom: "12px" }}>
                THE COMFORT BOND™
              </div>

              <h2 style={{ fontSize: "32px", lineHeight: 1.2, color: "#2C4235", marginBottom: "12px", fontWeight: 700 }}>
                The{" "}
                <span style={{ color: "#C1714F", fontStyle: "italic" }}>Serenity</span>{" "}
                Video Suite
              </h2>

              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#5C6B5D", marginBottom: "28px" }}>
                Designed to ease sundowning restlessness and calm the room between activities. Calming nature videos that provide gentle resets during quiet moments or help wind down a session naturally.
              </p>

              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C1714F", marginBottom: "14px" }}>
                WHAT'S INSIDE
              </div>

              {/* Stat Pills */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
                {[
                  { number: "10", label: "NATURE SCENES" },
                  { number: "89", label: "TOTAL MINUTES" },
                  { number: "∞", label: "CONTINUOUS LOOP" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "#2C4235",
                      color: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "12px 20px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    <span style={{ fontSize: "22px", fontWeight: 700 }}>{stat.number}</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", opacity: 0.8 }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
                <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C4235", fontFamily: "Georgia, serif" }}>$35</span>
              </div>

              <a
                href="https://shop.thecomfortbond.com/checkout/buy/fe7a8bab-e2f4-433f-a73b-358742e54530"
                className="lemonsqueezy-button"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#C1714F",
                  color: "#FDFAF5",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 14px rgba(193,113,79,0.3)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,113,79,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(193,113,79,0.3)";
                }}
              >
                Purchase Suite
              </a>

              <p style={{ fontSize: "11px", color: "#8B9E8F", marginTop: "12px", textAlign: "center", fontStyle: "italic" }}>
                Instant digital download.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};