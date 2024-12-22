"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import navLinks from "@/constants/navLinks";

interface HamburgerMenuProps {
  className: string;
}

function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // handles state to open/close sheet
  const handleClick = (): void => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className={cn("size-8", className)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="w-full mt-8 flex flex-col gap-4 font-bold text-xl">
          {navLinks.map(
            (link: { label: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                onClick={handleClick}
                className="py-3 hover:underline hover:text-slate-500 dark:hover:text-gray-300"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerMenu;
