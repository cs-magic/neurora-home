"use client";
import { navs } from "@/app.config.ts";
import { ButtonLink } from "@cs-magic/react/components/button-link";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Button } from "@cs-magic/shadcn/ui/button";
import _ from "lodash";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-0 sm:gap-4 md:gap-8">
            {navs.map((nav) => (
              <ButtonLink
                key={nav.name}
                href={nav.href}
                className={cn(
                  nav.active
                    ? "duration-200 text-zinc-400 hover:text-zinc-100"
                    : "cursor-not-allowed text-zinc-700",
                )}
                disabled={!nav.active}
              >
                {_.upperFirst(nav.name)}
              </ButtonLink>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
