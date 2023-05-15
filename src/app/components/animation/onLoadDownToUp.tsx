"use client";
import { motion } from "framer-motion";

export default function OnLoadDownToUp({ children }: any) {
  return (
    <motion.div
        initial={{ opacity: 0, y:50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
