"use client";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useState, useEffect } from "react";
import OnLoadDownToUp from "./animation/onLoadDownToUp";

export default function CookieModal() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

  }, [cookieConsent]);

  return (
    <div
      className={`${
        cookieConsent != null && "hidden"
      } z-50 fixed bottom-2 w-full flex justify-center px-3 sm:px-0`}
    >
      <OnLoadDownToUp>
        <div className="flex items-center flex-col sm:flex-row bg-white border-2 border-black rounded-lg capitalize px-4 py-2">
          <div className="sm:mr-10 text-lg mb-2 text-center sm:text-left sm:mb-0">
            cookies for google analytics & to save your preference
          </div>
          <div>
            <button
              className="capitalize underline text-base mr-4"
              onClick={() => setCookieConsent(false)}
            >
              decline
            </button>
            <button
              className="capitalize border-2 border-black rounded-lg px-4 py-1 font-bold text-base "
              onClick={() => setCookieConsent(true)}
            >
              accept
            </button>
          </div>
        </div>
      </OnLoadDownToUp>
    </div>
  );
}
