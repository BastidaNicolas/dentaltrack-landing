"use client";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      // delay:5,
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const childrenVar: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

export default function OnViewLeftMessage({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className={`w-full ${style}`}
    >
      <motion.div
        variants={childrenVar}
        className="absolute z-10 md:-left-60 bottom-80 bg-green-400 text-base border-black border-2 rounded-lg max-w-[300px] py-2 px-4 "
      >
        HELP!!! I BROKE MY TOOTH!!!
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-neutral-100 border-black border-2 rounded-lg max-w-[300px] py-2 px-4 left-8 md:-left-40 bottom-60"
      >
        Hi, I only have space tomorrow at 13
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-green-400 border-black border-2 rounded-lg max-w-[300px] py-2 px-4  md:-left-60 bottom-44"
      >
        13 sounds good! 👍
      </motion.div>
      <motion.div
        variants={childrenVar}
        className="absolute z-10 bg-neutral-100 border-black border-2 rounded-lg max-w-[300px] py-2 px-4 left-8 md:-left-40 bottom-6"
      >
        You have scheduled an opointment for tooth fixing with Dr.Peter for
        Monday 26, January 2023 at 13:00 hs.
        <br />- DentalTrack
      </motion.div>
    </motion.div>
  );
}
