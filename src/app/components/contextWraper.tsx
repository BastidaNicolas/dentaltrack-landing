"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { IsMenuOpenContext, ScrollYProgressContext } from "../lib/context";
import {motion, useScroll} from "framer-motion";

import GoogleAnalytics from "./GoogleAnalytics";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function ContextWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenMemo: any = useMemo(
    () => ({ menuOpen, setMenuOpen }),
    [menuOpen]
  );

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scrollYProgressMemo: any = useMemo(
    () => ({ scrollYProgress }),
    [scrollYProgress]
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    });
    return window.removeEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <IsMenuOpenContext.Provider value={menuOpenMemo}>
      <ScrollYProgressContext.Provider value={scrollYProgressMemo}>
      <html lang="en" className={`${menuOpen ? "overflow-y-hidden" : ""}`}>
        <head>
          <meta property="og:image" content="https://i.imgur.com/92i627y.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta
            property="og:title"
            content="DentalTrack - Simplify Your Dental Appointment Scheduling"
          />
          <meta
            property="og:description"
            content="DentalTrack simplifies dental appointments scheduling & reminders, empowering dentists to manage their practice with ease. Sign up now for customizable schedules, automated reminders & secure patient records. Elevate your dental practice with DentalTrack."
          />
          <meta property="og:url" content="https://www.dentaltrack.ar/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            property="og:site_name"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:image:alt"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:title"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="og:title"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:text:title"
            content="DentalTrack simplifies dental appointments scheduling and patient reminders, making it easy for dentists to manage their practice and provide top-notch patient care. Our cloud-based software enables dentists to create customizable appointment schedules, automate appointment reminders and securely store patient records. Sign up today and take your dental practice to the next level with DentalTrack."
          />
          <GoogleAnalytics GA_MEASUREMENT_ID="G-SMWYVD359M" />
        </head>
        <motion.body className={`${roboto.className}`} style={{ height: "30000px" }} ref={targetRef}>
          {children}
        </motion.body>
      </html>
      </ScrollYProgressContext.Provider>
    </IsMenuOpenContext.Provider>
  );
}
