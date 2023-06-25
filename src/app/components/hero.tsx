import Image from "next/image";
import NotifyBtn from "./notifyBtn";
import MobileApp from "/public/mobile-app.webp";
import OnLoadDownToUp from "./animation/onLoadDownToUp";

export default function Hero() {
  return (
    <div className="border-b-2 border-b-black bg-blue-600 pt-12 md:pt-16 pb-8 md:pb-14 px-3 lg:px-0">
      <OnLoadDownToUp>
        <div className="max-w-5xl m-auto flex flex-wrap md:flex-nowrap items-center justify-end md:justify-between">
          <div className="mb-8">
            <div className="text-5xl lg:text-7xl font-bold text-white mb-8 md:max-w-xl capitalize">
              Simplify patient appointment management.
            </div>
            <p className="text-white mb-5 text-base md:max-w-lg">
              DentalTrack helps dental practices efficiently manage their
              appointments and send reminders to patients, reducing missed
              appointments and increasing productivity.
            </p>
            <div className="font-bold text-white mb-5 text-base md:max-w-lg">
              Want to be notified when DentalTrack is available?
            </div>
            <NotifyBtn text={"Get Notified"} />
          </div>
          <div className="relative w-auto min-h-[576px] min-w-[90%] sm:min-w-[328px]">
            <Image
              src={MobileApp}
              alt="mobile app view"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              priority={true}
              quality={75}
            />
          </div>
        </div>
      </OnLoadDownToUp>
    </div>
  );
}
