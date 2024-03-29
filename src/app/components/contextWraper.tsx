"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { IsMenuOpenContext, ScrollYProgressContext, MainHeightContext, PricingScrollPositionContext } from "../lib/context";
import { motion, useScroll } from "framer-motion";

import GoogleAnalytics from "./GoogleAnalytics";
import { Roboto } from "next/font/google";
import { usePathname, useParams, useRouter, useSearchParams} from 'next/navigation'


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function ContextWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const param = useParams()
  const router = useRouter()
  const serch = useSearchParams()

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenMemo: any = useMemo(
    () => ({ menuOpen, setMenuOpen }),
    [menuOpen]
  );
  const [mainHeight, setMainHeight] = useState(0);
  const mainHeightMemo: any = useMemo(
    () => ({ mainHeight, setMainHeight }),
    [mainHeight]
  );
  const [priceScroll, setPriceScroll] = useState(0);
  const priceScrollMemo:any = useMemo(() => ({priceScroll, setPriceScroll}), [priceScroll])

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scrollYProgressMemo: any = useMemo(
    () => ({ scrollYProgress }),
    [scrollYProgress]
  );

  useEffect(() =>{
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    }
  },[])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false)
      }
      if (window.innerWidth < 1024) {
        setIsMobile(true)
      }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    });
    return window.removeEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false)
      }
      if (window.innerWidth < 1024) {
        setIsMobile(true)
      }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
        setIsMobile(true)
      }
    });
  }, []);

  // useEffect(() => {
  //   if(param == '#form'){
  //     window.scrollTo(0, 200000)
  //   }
  // },[param])

  console.log(serch)

  return (
    <IsMenuOpenContext.Provider value={menuOpenMemo}>
      <MainHeightContext.Provider value={mainHeightMemo}>
        <ScrollYProgressContext.Provider value={scrollYProgressMemo}>
          <PricingScrollPositionContext.Provider value={priceScrollMemo}>
          <html lang="en" className={`${menuOpen ? "overflow-y-hidden" : ""}`}>
            <head>
              <meta
                property="og:image"
                content="https://i.imgur.com/92i627y.jpg"
              />
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
            <motion.body
              className={`${roboto.className}`}
              style={isMobile || pathname == '/blog' ? { height: `auto` }  : { height: `${mainHeight * 1.5}px` }}
              ref={targetRef}
            >
              {children}
            </motion.body>
          </html>
          </PricingScrollPositionContext.Provider>
        </ScrollYProgressContext.Provider>
      </MainHeightContext.Provider>
    </IsMenuOpenContext.Provider>
  );
}
