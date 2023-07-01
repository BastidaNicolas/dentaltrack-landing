"use client";

import { useEffect, useMemo, useState } from "react";
import { IsMenuOpenContext } from "../lib/context";

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

  useEffect(() => {
    // if (window.innerWidth >= 768) {
    //   setMenuOpen(true);
    // }
    window.addEventListener("resize", () => {
      // if (window.innerWidth >= 768) {
      //   setMenuOpen(true);
      // }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    });
    return window.removeEventListener("resize", () => {
      // if (window.innerWidth >= 768) {
      //   setMenuOpen(true);
      // }
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <IsMenuOpenContext.Provider value={menuOpenMemo}>
      <html lang="en" className={`${menuOpen ? "overflow-y-hidden" : ""}`}>
        {children}
      </html>
    </IsMenuOpenContext.Provider>
  );
}
