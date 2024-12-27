"use client";

import navLinks from "@/constants/navLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 sm:py-10 px-10 font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Link
              href={"/"}
              className="font-mono font-semibold text-sm sm:text-base"
            >
              drx
            </Link>
          </div>

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            {navLinks.map(
              (link: { label: string; href: string }, index: number) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-900 dark:text-gray-300 hover:underline text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <hr className="my-4 sm:my-8 border-gray-500" />

        <p className="text-center text-slate-900 dark:text-gray-300 text-xs sm:text-sm font-medium">
          © drx. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
