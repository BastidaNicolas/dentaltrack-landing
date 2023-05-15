"use client";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    scale:0,
  },
  onscreen: {
    scale: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export default function OnViewPopIn({ children }: any) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}