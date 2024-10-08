import Particles from "@/components/particles";
import { navs } from "@/config/common.config.ts";
import BannerSVG from "@assets/branding/neurora/neurora-banner-current-trans.svg";
import { ButtonLink } from "@cs-magic/react/components/button-link";
import { cn } from "@cs-magic/shadcn/lib/utils";
import _ from "lodash";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4 sm:p-8 md:p-16">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-0 sm:gap-4">
          {navs.map((nav) => (
            <ButtonLink
              key={nav.href}
              variant={"link"}
              href={nav.href}
              className={cn(
                "text-sm",
                nav.active
                  ? "text-zinc-500 hover:text-zinc-300 duration-500"
                  : "cursor-not-allowed text-zinc-700",
              )}
              disabled={!nav.active}
            >
              {_.words(_.toLower(nav.name))}
            </ButtonLink>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <BannerSVG className="py-3.5 px-1 w-full max-w-screen-md z-10 cursor-default duration-100 animate-title text-white" />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, I'm Mark , An Indie Hacker passionate about building COOL things
          🚀 🚀 🚀
        </h2>
      </div>
    </div>
  );
}
