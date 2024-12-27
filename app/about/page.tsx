"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

function About() {
  return (
    <MaxWidthWrapper className="h-screen py-10 px-6 sm:px-4 max-w-xl">
      <div className=" flex flex-col gap-3 text-center text-pretty antialiased">
        <h1 className="text-4xl font-bold">About Me</h1>
        <div className="flex flex-col gap-3 py-5">
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Hi, I&apos;m Druavh, a passionate web developer with a love for
            creating elegant and functional applications.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Have a question or want to collaborate? Feel free to reach out!
            I&apos;d love to connect.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Link
            href="mailto:heydruavh@gmail.com"
            className="text-slate-900 dark:text-slate-400 font-mono font-semibold hover:underline text-sm"
          >
            heydruavh@gmail.com
          </Link>
          <Link
            href="https://www.x.com/druxvh"
            target="_blank"
            className="text-slate-900 dark:text-slate-400 font-mono font-semibold hover:underline text-sm"
          >
            tw: @druxvh
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default About;
