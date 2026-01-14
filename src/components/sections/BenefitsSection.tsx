import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Hand, Shield, Sparkles } from "lucide-react";
const benefits = [{
  icon: Heart,
  title: "Emotional Regulation",
  description: "Gentle sensory input helps reduce anxiety and agitation, promoting a sense of safety and calm."
}, {
  icon: Hand,
  title: "Tactile Engagement",
  description: "Familiar textures and weights provide grounding comfort that transcends verbal communication."
}, {
  icon: Shield,
  title: "Care Team Support",
  description: "Easy-to-implement tools that help staff redirect behaviors and create positive moments."
}, {
  icon: Sparkles,
  title: "Meaningful Connection",
  description: "Products designed to facilitate bonding between residents, families, and caregivers."
}];
export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return;
};