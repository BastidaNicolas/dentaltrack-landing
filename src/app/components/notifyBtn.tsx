"use client";
import Link from "next/link";

type notifyBtnType = {
  text: string;
  style: string
};

export default function NotifyBtn({ text, style }: notifyBtnType) {
  return (
    <div
      className={`relative font-bold text-lg sm:text-base capitalize group block w-fit hover:cursor-pointer ${style}`}
      // href={"/#form"}
      // scroll={false}
      onClick={() => window.scrollTo(0, 200000)}
    >
      <div className={`z-10 absolute top-0 left-0 group-active:translate-x-0 group-active:translate-y-0 -translate-x-0.5 -translate-y-0.5 duration-100 bg-white font-bold text-base sm:text-base capitalize border-2 border-black rounded-lg py-3 px-8 truncate ${style}`}>
        {text}
      </div>
      <div className={`z-0 bg-black font-bold text-base sm:text-base capitalize border-2 border-black rounded-lg py-3 px-8 truncate ${style}`}>
        {text}
      </div>
    </div>
  );
}
