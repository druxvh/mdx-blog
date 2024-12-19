"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({
  className,
  htmlContent,
}: {
  className: string;
  htmlContent: string;
}) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;
    const headings = temp.querySelectorAll("h2");

    const generatedLinks: LinkType[] = [];
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText,
      });
      setLinks(generatedLinks);
    });
  }, [htmlContent]);

  return (
    <div className={cn("hidden md:block w-[40%] min-w-[20%]", className)}>
      <div className="sticky top-16">
        <h2 className="font-sans text-lg font-bold mb-2">On this page</h2>
        <ul>
          {links &&
            links.map((link) => {
              return (
                <li key={link.id} className="p-1 leading-none">
                  <a
                    href={`#${link.id}`}
                    className="text-xs text-gray-900 tracking-tight font-sans font-medium"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
