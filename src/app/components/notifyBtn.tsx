"use client";
import { usePathname, useRouter } from "next/navigation";

type notifyBtnType = {
  text: string;
  style: string
};

export default function NotifyBtn({ text, style }: notifyBtnType) {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`relative font-bold text-lg sm:text-base capitalize group block w-fit hover:cursor-pointer ${style}`}
      // href={"/#form"}
      // scroll={false}
      onClick={() => {
          router.push("/404")
      }}
    >
      <div className={`z-10 absolute top-0 left-0 group-active:translate-x-0 group-active:translate-y-0 -translate-x-0.5 -translate-y-0.5 duration-100 bg-white font-bold text-base sm:text-base capitalize border-2 border-black rounded-lg py-2 px-6 truncate ${style}`}>
        {text}
      </div>
      <div className={`z-0 bg-black font-bold text-base sm:text-base capitalize border-2 border-black rounded-lg py-2 px-6 truncate ${style}`}>
        {text}
      </div>
    </div>
  );
}
