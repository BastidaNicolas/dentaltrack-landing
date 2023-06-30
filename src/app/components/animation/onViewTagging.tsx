"use client";
import { Variants, motion } from "framer-motion";

const cardAnim: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      //staggerChildren: 1,
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const tagAnim: Variants = {
  offscreen: {
    y: -10,
    x: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    x: 0,
    // rotate: -10,
    opacity: 1,
    transition: {
      delay: 0.6,
      type: "spring",
      bounce: 0.6,
      duration: 0.6,
    },
  },
};

export default function OnViewTaggin() {
  return (
    <motion.div
      variants={cardAnim}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true, amount: 0.2 }}
      className="bg-white border-2 border-black rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000]"
    >
      <div className="truncate">
        <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
          Samantha Johnson
        </div>
        <motion.div
          variants={tagAnim}
          className="bottom-[130px] left-28 sm:text-xl font-bold text-neutral-700 truncate border-2 border-black bg-white rounded-md px-2 w-fit"
        >
          Root Canal
        </motion.div>
      </div>
      <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">15:30</div>
    </motion.div>
  );
}
