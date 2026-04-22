import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a monthly subscription?",
    answer:
      "No. All of our engagement kits, activity resources, and the Full Comfort Bundle are one-time purchases. There are no hidden fees or recurring charges. Once you buy a kit, it's yours to use forever.",
  },
  {
    question: "Is this appropriate for memory care residents?",
    answer:
      "Yes. The Comfort Bond™ kits are specifically designed with memory care in mind. Activities are gentle, themed around long-term memory (music, food, travel, holidays), and structured to reduce confusion while sparking participation. The Comfort Flow™ sequence moves from gentle warm-up to peak engagement to a calm close — supporting residents at every cognitive level.",
  },
  {
    question: "What file format will I receive?",
    answer: `Both items are instant digital downloads. The Free 7-Day Plan is a single PDF file, while the full Mother's Day Connection Kit is delivered as a .zip file containing all 5 premium PDFs.

You can print everything at home on standard 8.5x11" paper—no special supplies needed. For the Conversation and Visual Spark cards, we recommend printing on heavy cream cardstock for a beautiful, lasting feel.

Prefer not to print? The guides and visual cards are perfectly optimized to offer a beautiful, crisp experience when viewed directly on an iPad or tablet. You can easily save the files and bring your device right into the room with you.`,
  },
  {
    question: "Can I print these materials?",
    answer:
      "Yes! The kits are specifically designed to be printer-friendly on standard 8.5\" x 11\" paper. You can print BINGO cards, Trivia sheets, and Conversation prompts to hand out directly to residents.",
  },
  {
    question: "Are these kits reusable?",
    answer:
      "Yes. Because these are digital downloads, you can print the materials as many times as you need. You can revisit the activities year after year.",
  },
  {
    question: "How quickly will I get access?",
    answer:
      "Instantly. As soon as checkout is complete, you'll receive an email with a download link. You can purchase a kit and be playing with your group five minutes later.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-10 md:py-14 bg-sage/15" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold font-sans text-sm uppercase tracking-widest mb-4">
            Questions & Answers
          </span>
          <h2 className="heading-lg text-forest mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-md text-forest/70">
            Everything you need to know before you buy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-sage/20 px-6 data-[state=open]:border-gold/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-forest hover:text-terracotta hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-md text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
