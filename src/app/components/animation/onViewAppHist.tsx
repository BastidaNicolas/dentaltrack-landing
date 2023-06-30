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
      delay: 0.5,
      type: "just",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const blinkAnim: Variants = {};

export default function OnViewAppHist() {
  return (
    // <motion.div
    //   variants={cardAnim}
    //   initial="offscreen"
    //   whileInView="onscreen"
    //   viewport={{once:true, amount: 0.2 }}
    <div className="overflow-hidden w-full flex flex-col items-center">
      <div className="bg-white border-2 border-black rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mt-10 mb-4">
        <div className="flex truncate">
          <div className=" text-lg sm:text-2xl truncate">Samantha Joh</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
              // times: [0, 0.2, 0.5, 0.8, 1],
              duration:.5,
              repeat: Infinity,
              repeatDelay: .5,
            }}
            className=" text-lg sm:text-2xl truncate"
          >
            |
          </motion.div>
        </div>
        <div className="font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <motion.div
        variants={cardAnim}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white border-2 border-orange-500 rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mb-4"
      >
        <div className="truncate">
          <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
            Samantha Johnson
          </div>
          <div className="bottom-[130px] left-28 sm:text-xl font-bold text-neutral-700 truncate  bg-white rounded-md px-2 w-fit">
            Root Canal
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">12:30</div>
      </motion.div>
      <motion.div
        variants={cardAnim}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white border-2 border-green-500 rounded-lg flex w-11/12 sm:w-full max-w-[300px] sm:max-w-[400px] items-center justify-between p-2 sm:p-3 ml-2 mr-3 drop-shadow-[4px_4px_0px_#000000] mb-4"
      >
        <div className="truncate">
          <div className="font-bold text-lg sm:text-2xl truncate mb-0 sm:mb-2">
            Samantha Johnson
          </div>
          <div className="bottom-[130px] left-28 sm:text-xl font-bold text-neutral-700 truncate rounded-md px-2 w-fit">
            Checkup
          </div>
        </div>
        <div className="font-bold text-2xl sm:text-4xl pr-2 sm:px-4">15:30</div>
      </motion.div>
    </div>
    // </motion.div>
  );
}
