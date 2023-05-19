import Link from "next/link";
import NotifyBtn from "./notifyBtn";
import OnLoadFadeIn from "./animation/onLoadFadeIn";

export default function Header() {
  return (
    <div className="border-b-2 border-b-black px-3 py-3 lg:px-0">
      <OnLoadFadeIn>
        <div className="max-w-4xl m-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto max-w-[2rem] mr-2"
            >
              <rect
                x="12.5"
                y="12.5"
                width="487"
                height="487"
                rx="77.5"
                fill="#3B82F6"
                stroke="black"
                stroke-width="25"
              />
              <rect
                x="105.5"
                y="105.5"
                width="340"
                height="340"
                rx="47.5"
                fill="black"
                stroke="black"
                stroke-width="25"
              />
              <rect
                x="65.5"
                y="65.5"
                width="340"
                height="340"
                rx="47.5"
                fill="white"
                stroke="black"
                stroke-width="25"
              />
              <path
                d="M235 151.667V318.333M318.333 235H151.667"
                stroke="black"
                stroke-width="40"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="font-bold text-xl">DentalTrack</div>
          </div>
          <div className="flex items-center">
            <Link
              href={"/#features"}
              className="hidden sm:block font-bold mr-6 border-b border-white hover:border-black text-base"
            >
              Features
            </Link>
            <Link
              href={"/#pricing"}
              className="hidden sm:block font-bold mr-6 border-b border-white hover:border-black text-base"
            >
              Pricing
            </Link>
            <NotifyBtn text={"get notified"} />
          </div>
        </div>
      </OnLoadFadeIn>
    </div>
  );
}
