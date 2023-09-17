"use client";
import { useContext, useEffect, useRef, useState } from "react";
import PlanCard from "./cards/planCard";
import { PricingScrollPositionContext } from "../lib/context";

const monthlyPlans = [
  {
    title: "Starter Plan",
    price: "14,99",
    type: "month",
    features: [
      "Appointment scheduling",
      "Patient notification",
      "Create up to one office",
      "appointment Tagging System",
      "Appointment status updates",
      "Appointment history tracking and filtering",
    ],
    disabled: false,
  },
  {
    title: "Office+ Plan",
    price: "24,99",
    type: "month",
    features: [
      "Everything in the starter Plan",
      "Create multiple offices",
      "Add colleagues to appointment, auto-notify them.",
      "Exporting data",
    ],
    disabled: true,
  },
  {
    title: "Enterprise Plan",
    price: "**,**",
    type: "month",
    features: ["currently being planned"],
    disabled: true,
  },
];
const yearlyPlans = [
  {
    title: "Starter Plan",
    price: "142,99",
    type: "year",
    features: [
      "Appointment scheduling",
      "Patient notification",
      "Create up to one office",
      "appointment Tagging System",
      "Appointment status updates",
      "Appointment history tracking and filtering",
    ],
    disabled: false,
  },
  {
    title: "Office+ Plan",
    price: "238,99",
    type: "year",
    features: [
      "Everything in the starter Plan",
      "Create multiple offices",
      "Add colleagues to appointment, auto-notify them.",
      "Exporting data",
    ],
    disabled: true,
  },
  {
    title: "Enterprise Plan",
    price: "**,**",
    type: "year",
    features: ["currently being planned"],
    disabled: true,
  },
];

function RenderCards(planType: string) {
  if (planType === "yearly") {
    return yearlyPlans.map((plan, index) => (
      <PlanCard key={index} content={plan} />
    ));
  }
  return monthlyPlans.map((plan, index) => (
    <PlanCard key={index} content={plan} />
  ));
}

export default function PaymentOptions() {
  const [pantType, setPlanType] = useState("monthly");
  const pricingRef = useRef<HTMLDivElement>(null);
  const {priceScroll, setPriceScroll} = useContext<any>(PricingScrollPositionContext);

  useEffect(() => {
    setPriceScroll(pricingRef.current?.clientHeight as number)
  },[setPriceScroll])

  console.log(pricingRef)

  return (
    <div
      className="max-w-7xl m-auto flex flex-col items-center px-3 xl:px-6 2xl:px-0 pt-24 pb-32 sm:pt-36"
      id="pricing"
      ref={pricingRef}
    >
      <div className="text-4xl sm:text-5xl text-center font-bold capitalize mb-9 tracking-[-0.016em]">
        Choose you&apos;re subscription plan
      </div>
      <div className="mb-7 flex sm:justify-center">
        <div className="relative mr-4">
          <button
            className={`absolute top-0 left-0 ${
              pantType !== "monthly" && "-translate-x-1 -translate-y-1"
            } duration-75 border-black border-2 py-2 px-5 font-bold text-black text-lg rounded-lg z-10 bg-white`}
            onClick={() => setPlanType("monthly")}
          >
            Monthy
          </button>
          <div className="border-black border-2 py-2 px-5 font-bold text-black text-lg rounded-lg bg-black">
            Monthy
          </div>
        </div>
        <div className="relative">
          <button
            className={`absolute top-0 left-0 ${
              pantType !== "yearly" && "-translate-x-1 -translate-y-1"
            } duration-75 border-black border-2 py-2 px-6 font-bold text-black text-lg rounded-lg z-10 bg-white`}
            onClick={() => setPlanType("yearly")}
          >
            Yearly
          </button>
          <div className="border-black border-2 py-2 px-6 font-bold text-black text-lg rounded-lg bg-black relative">
            Yearly
            <svg
              className="absolute -right-7 sm:-right-1/4 top-5 sm:-top-5 -rotate-12"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10H13C15.1217 10 17.1566 10.8429 18.6569 12.3431C20.1571 13.8434 21 15.8783 21 18V20M3 10L9 16M3 10L9 4"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-xl sm:text-2xl font-bold absolute truncate -right-10 sm:-right-28 -bottom-7 sm:bottom-1/4">
              20% OFF
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col gap-4 xl:gap-0 w-full overflow-y-auto p-1">
        {RenderCards(pantType)}
      </div>
      {/* <div className="pt-5 font-bold capitalize px-2 text-center max-w-[370px]">
        displayed subscription plan pricing structure is subject to change prior
        launch date.
      </div> */}
    </div>
  );
}
