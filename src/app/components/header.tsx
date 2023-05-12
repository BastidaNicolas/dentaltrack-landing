import Link from "next/link";
import NotifyBtn from "./notifyBtn";

export default function Header() {
  return (
    <div className="border-b-2 border-b-black px-3 py-3 lg:px-0">
      <div className="max-w-4xl m-auto flex flex-wrap justify-between items-center">
        <div className="font-bold text-xl">DentalTrack</div>
        <div className="flex items-center" >
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
    </div>
  );
}
