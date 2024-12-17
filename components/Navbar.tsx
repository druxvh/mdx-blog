"use client"

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="h-16 flex justify-between bg-background/60 sticky top-0 border-b px-8 backdrop-blur">
      <div className="flex items-center text-xl font-bold">drx</div>
      <ul className="flex items-center gap-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li className="buttons flex gap-4">
          <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
            Login
          </Link>
          <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
