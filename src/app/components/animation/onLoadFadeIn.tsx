"use client";
import { motion } from "framer-motion";

export default function OnLoadFadeIn({ children }: any) {
  return (
    <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
