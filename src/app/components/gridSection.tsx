"use client";
import { motion, useTransform } from "framer-motion";
import { useContext, useEffect } from "react";
import { ScrollYProgressContext } from "../lib/context";

export default function GridSection() {
  const { scrollYProgress } = useContext<any>(ScrollYProgressContext);

  const titleOpacityA = useTransform(
    scrollYProgress,
    [0, 0.01, 0.09, 0.1],
    [0.6, 1, 1, 0.6]
  );
  const scaleA = useTransform(
    scrollYProgress,
    [0, 0.01, 0.09, 0.1],
    [0, 1, 1, 0],
    { clamp: false }
  );

  const titleOpacityB = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.19, 0.2],
    [0.6, 1, 1, 0.6]
  );
  const titleTranslateYB = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.19, 0.2],
    [50, -40, -40, -50]
  );
  const paragraphOpacityB = useTransform(
    scrollYProgress,
    [0.105, 0.11, 0.19, 0.2],
    [0, 1, 1, 0]
  );
  const paragraphTranslateYB = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.19, 0.2],
    [0, -40, -40, -50]
  );

  const titleOpacityC = useTransform(
    scrollYProgress,
    [0.2, 0.21, 0.29, 0.3],
    [0.6, 1, 1, 1]
  );
  const titleTranslateYC = useTransform(
    scrollYProgress,
    [0.2, 0.21, 0.29, 0.3],
    [0, -120, -120, -130]
  );
  const paragraphOpacityC = useTransform(
    scrollYProgress,
    [0.205, 0.21, 0.29, 0.3],
    [0, 1, 1, 1]
  );
  const paragraphTranslateYC = useTransform(
    scrollYProgress,
    [0.2, 0.21, 0.29, 0.3],
    [0, -120, -120, -130]
  );

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div
      className="px-3 xl:px-6 2xl:px-0 pt-24 pb-24 md:pb-48 lg:px-0 "
      id="features"
    >
      <div className="max-w-7xl m-auto border-2 border-black rounded-2xl bg-neutral-100 p-9 pb-0 drop-shadow-[8px_8px_0px_#000000]">
        <div className="font-bold text-7xl max-w-4xl mb-6">
          Here’s what DentalTrack can do for you!
        </div>
        <motion.div className="">
          <motion.div
            style={{ opacity: titleOpacityA }}
            className="font-bold text-3xl mb-1 capitalize"
          >
            Manage Appointments
          </motion.div>
          <motion.p
            style={{ translateY: scaleA, opacity: scaleA }}
            className="text-lg max-w-lg"
          >
            Keep track of all your appointments in one place, create "offices"
            for each location and filter by status, date and patient name.
          </motion.p>
        </motion.div>
        <motion.div className="">
          <motion.div
            style={{ opacity: titleOpacityB, translateY: titleTranslateYB }}
            className="font-bold text-3xl mb-1 capitalize"
          >
            Automate Reminders
          </motion.div>
          <motion.p
            style={{ translateY: paragraphTranslateYB, opacity: paragraphOpacityB }}
            className="text-lg max-w-lg"
          >
            Never forget an appointment again! Automatically sends reminders to
            your patients via WhatsApp, saving you the hassle of manual
            reminders.
          </motion.p>
        </motion.div>
        <div className="">
          <motion.div
            style={{ opacity: titleOpacityC, translateY: titleTranslateYC }}
            className="font-bold text-3xl mb-1 capitalize"
          >
            Improve Productivity
          </motion.div>
          <motion.p
            style={{ translateY: paragraphTranslateYC, opacity: paragraphOpacityC }}
            className="text-lg max-w-lg"
          >
            By reducing missed appointments and sending timely reminders, you'll
            increase patient loyalty and referrals.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
