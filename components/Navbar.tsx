"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import HamburgerMenu from "./Hamburger-Menu";


function Navbar() {
  return (
    <nav className="h-16 flex justify-between bg-background/60 sticky top-0 border-b px-8 backdrop-blur">
      <div className="flex items-center text-xl font-bold">drx</div>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
              Login
            </Link>
          </li>
          <li>
            <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
              Sign Up
            </Link>
          </li>
        </ul>
        <ModeToggle />
        <HamburgerMenu className="flex md:hidden " />
      </div>
    </nav>
  );
}

export default Navbar;
