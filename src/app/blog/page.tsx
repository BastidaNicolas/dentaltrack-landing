"use client"
import { useContext, useEffect, useRef } from "react";
import PaymentOptions from "../components/paymentOptions";
import { MainHeightContext } from "../lib/context";

export default function Page() {

  const mainRef = useRef<HTMLDivElement>(null)
  const {mainHeight, setMainHeight} = useContext<any>(MainHeightContext)

  useEffect(() => {
    setMainHeight(mainRef.current?.clientHeight)
  },[mainRef, setMainHeight])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMainHeight(mainRef.current?.clientHeight)

    });
    return window.removeEventListener("resize", () => {
      setMainHeight(mainRef.current?.clientHeight)
    });
  }, [setMainHeight])

    return (
      <main ref={mainRef}>
        <div className="p-5 border-2 mt-4 mx-3 text-center min-h-[80vh] flex items-center justify-center">
          No blogs at this moment
        </div>
        <PaymentOptions />
      </main>
    );
  }