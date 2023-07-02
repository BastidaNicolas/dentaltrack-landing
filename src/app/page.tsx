'use client'
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";
import TwoColSection from "./components/twoColSection";
import XlCard from "./components/cards/xlCard";
import QueryClientComponent from "./components/queryClientComponent";
import { useContext, useEffect, useRef, useState } from "react";
import { MainHeightContext } from "./lib/context";

export default function Home() {

  const mainRef = useRef<HTMLDivElement>(null)
  const {mainHeight, setMainHeight} = useContext<any>(MainHeightContext)
  const heroRef = useRef<any>(null)

  useEffect(() => {
    if(mainRef){
      setMainHeight(mainRef.current?.clientHeight)
    }
  },[mainRef])

  return (
    <main ref={mainRef} style={{ top: `-${heroRef.current?.clientHeight * 0.9}px`, position: "sticky" }}>
      <Hero heroRef={heroRef} />
      <GridSection />
      <div className="max-w-7xl m-auto mb-12 md:mb-24 px-3 xl:px-6 2xl:px-0">
        <XlCard
          content={{
            title: "Efficient Appointment Management",
            description:
              "Say goodbye to confusing schedules and missed appointments! Dentists can schedule and reschedule appointments, mark them as completed, and track cancellations and no-shows, all in one place.",
          }}
          image={"appointment-list.svg"}
          reverse={false}
        />
        <XlCard
          content={{
            title: "Customizable Office Setup",
            description:
              "DentalTrack is designed to adapt to the unique needs of each dental practice. Dentists can easily create custom offices and organize appointments based on location. This makes it easy to keep track of appoint-ments and ensure that everyone is on the same page.",
          }}
          image={"office-list.svg"}
          reverse={true}
        />
      </div>
      <TwoColSection />
      <PaymentOptions />
      <QueryClientComponent>
        <Form />
      </QueryClientComponent>
      <Footer />
    </main>
  );
}
