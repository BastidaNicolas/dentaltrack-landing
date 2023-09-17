"use client"
import Link from "next/link";
import ScrollToTop from "./scrollToTop";
import { usePathname } from "next/navigation";

export default function Footer() {

  const pathname = usePathname();

  return (
    <div className="bg-blue-600 border-t-2 border-black px-3 xl:px-6 2xl:px-0 sm:py-6 pt-8 pb-4 text-white text-base">
      <div className="max-w-7xl m-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <ul className="sm:flex sm:items-center">
          <li>
            <ScrollToTop/>
          </li>
          <li>
            <Link
              href={"/#features"}
              className="block capitalize font-bold  mb-6 sm:mb-0 sm:mr-6"
              scroll
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href={"/#pricing"}
              className="block capitalize font-bold  mb-6 sm:mb-0 sm:mr-6"
              scroll
            >
              pricing
            </Link>
          </li>
          <li>
            {pathname == "/blog" ?
              <Link
              href={"/"}
              className="block capitalize font-bold  mb-6 sm:mb-0 sm:mr-6"
              scroll
            >
              home
            </Link>:
            <Link
              href={"/blog"}
              className="block capitalize font-bold  mb-6 sm:mb-0 sm:mr-6"
              scroll
            >
              blog
            </Link>}
          </li>
        </ul>
        <div className="mt-24 sm:mt-0">
          Developed by{" "}
          <Link
            href={"https://nicolas.bastida.dev/"}
            target="_blank"
            className="font-bold"
          >
            Nicolas Bastida
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
