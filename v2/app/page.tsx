import { NeuroraBannerSVG } from "@assets/branding/neurora/neurora-banner-svg";
// import NeuroraBannerSVG from "@assets/branding/neurora/neurora-banner.svg";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <NeuroraBannerSVG className="py-3.5 px-1 w-full max-w-screen-md z-10 cursor-default duration-100 animate-title text-white" />
      {/*<h1 className="py-3.5 px-0.5 z-10 cursor-default duration-100 animate-title text-4xl text-transparent bg-white text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">*/}
      {/*  <p>NEURORA</p>*/}
      {/*  /!*<p className={"text-6xl"}>飞脑科技</p>*!/*/}
      {/*</h1>*/}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hi, I'm{" "}
          <Link
            href="https://github.com/markshawn2020"
            target="_blank"
            className="underline duration-500 hover:text-zinc-300"
          >
            Mark
          </Link>
          , An Indie Hacker passionate about building cooool things 🚀 🚀 🚀
        </h2>
      </div>
    </div>
  );
}
