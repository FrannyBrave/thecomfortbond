import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Are these products safe for residents with dementia?",
  answer: "Yes, all products are designed with safety as the top priority. Materials are non-toxic, there are no small parts, and each item is tested for durability. We recommend supervision as with any engagement activity."
}, {
  question: "Can products be cleaned and sanitized?",
  answer: "Absolutely. All products feature removable, machine-washable covers or can be wiped down with standard facility cleaning solutions. We provide detailed care instructions with every order."
}, {
  question: "Do you offer bulk pricing for communities?",
  answer: "Yes, we offer tiered pricing for orders of 10+ items and work directly with purchasing departments. Contact us at orders@thecomfortbond.com for a customized quote."
}, {
  question: "What is your return policy?",
  answer: "We stand behind our products with a 30-day satisfaction guarantee. If a product doesn't meet your expectations, we'll work with you to make it right or provide a full refund."
}, {
  question: "How quickly do orders ship?",
  answer: "Standard orders ship within 2-3 business days. We also offer expedited shipping options. Bulk orders may require additional processing time—we'll provide a timeline when you place your order."
}];
export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return;
};