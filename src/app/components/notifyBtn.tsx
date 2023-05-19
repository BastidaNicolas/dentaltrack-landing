"use client";
import Link from "next/link";

type notifyBtnType = {
  text: string;
};

export default function NotifyBtn({ text }: notifyBtnType) {
  return (
    <Link
      className="relative font-bold text-lg sm:text-base capitalize group block w-fit"
      href={"/#form"}
      scroll={false}
    >
      <div className="z-10 absolute top-0 left-0 group-active:translate-x-0 group-active:translate-y-0 -translate-x-1 -translate-y-1 duration-100 bg-white font-bold text-lg sm:text-base capitalize border-2 border-black rounded-lg py-2 px-5 truncate ">
        {text}
      </div>
      <div className="z-0 bg-black font-bold text-lg sm:text-base capitalize border-2 border-black rounded-lg py-2 px-5 truncate ">
        {text}
      </div>
    </Link>
  );
}
