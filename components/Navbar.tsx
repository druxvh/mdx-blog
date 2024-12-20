"use client";

import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import HamburgerMenu from "./Hamburger-Menu";
import MaxWidthWrapper from "./MaxWidthWrapper";
import navLinks from "@/constants/navLinks";

function Navbar() {
  return (
    <nav className="h-16 flex bg-background/60 sticky top-0 border-b backdrop-blur">
      <MaxWidthWrapper className="flex justify-between px-4">
        <Link
          href={"/"}
          className="flex items-center text-xl font-mono font-bold"
        >
          drx
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map(
              (link: { label: string; href: string }, index: number) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
          <ModeToggle />
          <HamburgerMenu className="flex md:hidden" />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
