import Image from "next/image";
import NotifyBtn from "./notifyBtn";
import MobileApp from "/public/mobile-app.webp";
import Header from "./header";
import OnViewChat from "./animation/onViewChat";

export default function Hero({heroRef}:any) {

  return (
    <div ref={heroRef} >
      <Header />
      <div className="border-b-2 border-b-black bg-blue-600 pt-6 md:pt-16 pb-8 md:pb-16 px-3 lg:px-0">
        <div className="relative w-full max-w-7xl m-auto flex flex-wrap md:px-3 xl:px-6 2xl:px-0 md:flex-nowrap justify-end md:justify-between">
          <div className="mb-10 sm:mb-16 w-full z-20">
            <div className="leading-none max-w-2xl text-[clamp(48px,_13vw,_96px)] md:text-[clamp(72px,_7.8vw,_96px)] font-extrabold drop-shadow-[0_4px_0_#141414] sm:drop-shadow-[0_4px_0_#141414] tracking-[-0.016em] text-white mb-8 text-outline">
              Simplify patient appointment management.
            </div>
            <p className="text-white md:font-medium mb-4 text-xl md:max-w-xl">
              DentalTrack helps dental practices efficiently manage their
              appointments and send reminders to patients, reducing missed
              appointments and increasing productivity.
            </p>
            {/* <div className="md:font-bold text-white mb-1 text-xl md:max-w-xl">
                Want to be notified when DentalTrack is available?
              </div> */}
            <NotifyBtn text={"Get Started"} style="" />
          </div>
          <div className="relative md:absolute md:right-0 md:top-0 h-[clamp(400px,_100vw,_576px)] md:h-full w-[500px] md:w-[clamp(72px,_28vw,_328px)]">
            <OnViewChat style="absolute z-10 bottom-6 md:hidden lg:block"/>
            <div className="h-[clamp(400px,_100vw,_576px)] md:h-full w-[clamp(72px,_50vw,_328px)] md:w-[clamp(72px,_28vw,_328px)]">
              <Image
                src={MobileApp}
                alt="mobile app view"
                className="object-contain z-0"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                priority={true}
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
