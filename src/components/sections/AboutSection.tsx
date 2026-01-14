import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return;
};