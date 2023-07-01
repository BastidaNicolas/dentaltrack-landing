"use client";

import { useEffect, useMemo, useState } from "react";
import { IsMenuOpenContext } from "../lib/context";

export default function ContextWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuOpenMemo: any = useMemo(
    () => ({ menuOpen, setMenuOpen }),
    [menuOpen]
  );

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMenuOpen(true);
      setIsMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
        setIsMobile(false);
      }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
        setIsMobile(true);
      }
    });
    return window.removeEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
        setIsMobile(false);
      }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
        setIsMobile(true);
      }
    });
  }, []);

  return (
    <IsMenuOpenContext.Provider value={menuOpenMemo}>
      <html lang="en" className={`${menuOpen && isMobile ? "overflow-y-hidden" : ""}`}>
        {children}
      </html>
    </IsMenuOpenContext.Provider>
  );
}
