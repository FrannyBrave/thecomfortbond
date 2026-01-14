import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
const testimonials = [{
  quote: "The weighted wrap has become an essential tool for our memory care unit. It helps residents transition through sundowning with much less distress.",
  author: "Sarah Mitchell",
  role: "Activity Director",
  organization: "Sunrise Memory Care"
}, {
  quote: "We've seen remarkable moments of calm and connection. One resident who rarely engages now reaches for her comfort companion every afternoon.",
  author: "Dr. James Chen",
  role: "Medical Director",
  organization: "Harmony Senior Living"
}, {
  quote: "Finally, products that actually work. My team no longer struggles to find meaningful engagement tools—these do exactly what they promise.",
  author: "Maria Santos",
  role: "Life Enrichment Manager",
  organization: "Golden Years Community"
}];
export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return;
};