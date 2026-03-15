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
import serenityImage from "@/assets/serenity-hero.png";
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

  price: "$95",
  originalPrice: "$104",
  badge: "Best Value",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/56346027-500a-4647-bd93-2e23e56288c5"
};

const products = [
{
  id: 1,
  name: "Road Trip Kit",
  anchorId: "road-trip-kit",
  badge: "Great for group sessions",
  description: "Hit the open road through decades of American travel memories, from Route 66 to family road trips. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$26",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/9c02a875-b45a-44f2-84ec-7c74180b6ce7",
  image: roadTripImage
},
{
  id: 2,
  name: "Nostalgia Kit",
  anchorId: "nostalgia-kit",
  badge: "Memory care favorite",
  description: "A walk down memory lane from the 1950s through the 1990s, sparking stories, smiles, and sing-alongs. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$26",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/9c1fbff1-5613-4ff0-bf18-f6e3922b73fd",
  image: nostalgiaImage
},
{
  id: 3,
  name: "Kitchen & Comfort Food Kit",
  anchorId: "kitchen-comfort-kit",
  badge: "Great for 1:1 & group",
  description: "Celebrate the kitchen, comfort food, and family mealtime memories that bring warmth to any room. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$26.99",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/69add6a1-065f-45f2-9577-25c331865cb5",
  image: kitchenImage
},
{
  id: 4,
  name: "Holiday Traditions Kit",
  anchorId: "holiday-traditions-kit",
  badge: "Runs year-round",
  description: "Spanning holidays across the entire year, from New Year's to Christmas and everything in between. 20+ pages of print-ready activities including BINGO, trivia, word links, conversation cards, and musical memory games.",
  price: "$26.99",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/dbed51fb-307d-49fe-8df7-03755de0d989",
  image: holidayImage
},
{
  id: 5,
  name: "Serenity Video Suite",
  anchorId: "serenity-video-suite",
  description: "Designed to ease sundowning restlessness and calm the room between activities. Calming nature videos that provide gentle resets during quiet moments or help wind down a session naturally.",
  price: "$35",
  checkoutUrl:
  "https://shop.thecomfortbond.com/checkout/buy/29a93e42-c874-4066-82f8-57b21aecaf4f",
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
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$26.99</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/9c02a875-b45a-44f2-84ec-7c74180b6ce7"
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
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$26.99</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/9c1fbff1-5613-4ff0-bf18-f6e3922b73fd"
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
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$26.99</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/69add6a1-065f-45f2-9577-25c331865cb5"
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
                  <span style={{ fontSize: "36px", fontWeight: 700, color: "#2C3E2D", fontFamily: "Georgia, serif" }}>$26.99</span>
                </div>

                <a
                  href="https://shop.thecomfortbond.com/checkout/buy/dbed51fb-307d-49fe-8df7-03755de0d989"
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
            {/* Hero Image */}
            <div style={{ width: "100%", height: "0", paddingBottom: "55%", position: "relative", overflow: "hidden" }}>
              <img
                src={serenityImage}
                alt="The Serenity Video Suite"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
              />
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
                href="https://shop.thecomfortbond.com/checkout/buy/29a93e42-c874-4066-82f8-57b21aecaf4f"
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