"use client";
import { Variants, motion } from "framer-motion";

const cardAnim: Variants = {
  offscreen: {
    y: 50,
    // opacity: 0,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    // opacity: 1,
    transition: {
      //staggerChildren: 1,
      type: "just",
      bounce: 0,
      duration: 0.3,
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
      delay: 0.7,
      type: "spring",
      bounce: 0.6,
      duration: 0.6,
    },
  },
};

export default function OnViewTaggin() {
  return (
    // <motion.div
    //   variants={cardAnim}
    //   initial="offscreen"
    //   whileInView="onscreen"
    //   viewport={{once:true, amount: 0.2 }}
    <div className="overflow-hidden w-full flex flex-col items-center">
      <motion.div
        variants={cardAnim}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="opacity-20 bg-white border-2 border-black rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mb-4"
      >
        <div className="truncate">
          <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
            Marcus Anderson
          </div>
          <div className="bottom-[130px] left-28 sm:text-xl font-bold text-neutral-700 truncate border-2 border-black bg-white rounded-md px-2 w-fit">
            Checkup
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">14:30</div>
      </motion.div>
      <motion.div
        variants={cardAnim}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white border-2 border-black rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mb-4"
      >
        <div className="truncate">
          <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
            Samantha Johnson
          </div>
          <motion.div
            variants={tagAnim}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 1 }}
            className="bottom-[130px] left-28 sm:text-xl font-bold text-neutral-700 truncate border-2 border-black bg-white rounded-md px-2 w-fit"
          >
            Root Canal
          </motion.div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">15:30</div>
      </motion.div>
      <motion.div
        variants={cardAnim}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="opacity-20 bg-white border-2 border-black rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mb-4"
      >
        <div className="truncate">
          <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
            Isabella Martinez
          </div>
          <div className="bottom-[130px] left-28 sm:text-xl font-bold text-white truncate border-2 border-white bg-white rounded-md px-2 w-fit">
            Root Canal
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">18:30</div>
      </motion.div>
    </div>
    // </motion.div>
  );
}
