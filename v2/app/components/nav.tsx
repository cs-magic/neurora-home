"use client";
import { navs } from "@/config/common.config.ts";
import LogoSVG from "@assets/branding/neurora/neurora_logo_white_trans_1280.svg";
import { ButtonLink } from "@cs-magic/react/components/button-link";
import { cn } from "@cs-magic/shadcn/lib/utils";
import _ from "lodash";
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
        className={cn(
          `fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b`,
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 ",
        )}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto max-w-7xl">
          <div className="flex justify-between gap-0 sm:gap-4 md:gap-8">
            {navs.map((nav) => (
              <ButtonLink
                variant="link"
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
            <LogoSVG width={32} height={32} />
          </Link>
        </div>
      </div>
    </header>
  );
};
