"use client";
import { MarkWechatQrcodeSVG } from "@assets/branding/mark/mark-wechat-qrcode-svg.ts";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Github, Mail, Twitter } from "lucide-react";
import { IoLogoWechat } from "react-icons/io5";
import Link from "next/link";
import { Card } from "app/components/card.tsx";
import { Navigation } from "app/components/nav.tsx";

const socials = [
  {
    icon: <IoLogoWechat size={20} />,
    label: "WeChat",
    handle: "@youshouldspeakhow",
    // href: "https://u.wechat.com/MIJ3DUFz7e-Oyb5Jc2_BIuM",
    qrcode: (
      <MarkWechatQrcodeSVG
        className={"opacity-0 group-hover:opacity-100 h-[72px]"}
      />
    ),
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/mark_neurora",
    label: "Twitter",
    handle: "@mark_neurora",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:mark@cs-magic.com",
    label: "Email",
    handle: "mark@cs-magic.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/markshawn2020",
    label: "Github",
    handle: "@markshawn2020",
  },
];

export default function Example() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto gap-8 ">
      {/*<div className={"text-white text-2xl"}>Connect boring me via:</div>*/}

      <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
        {socials.map((s) => {
          const Inner = () => (
            <div
              className={
                "relative flex flex-col items-center gap-4 duration-700 group md:gap-8 py-4 md:py-16 lg:py-24 "
              }
            >
              <span
                className={cn(
                  "relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange",
                )}
              >
                {s.icon}
              </span>
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent sm:opacity-0 sm:group-hover:opacity-100"
                aria-hidden="true"
              />{" "}
              <div className="z-10 flex flex-col items-center sm:opacity-0 sm:group-hover:opacity-100">
                {/*{s.qrcode ? (*/}
                {/*  s.qrcode*/}
                {/*) : (*/}
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {s.handle}
                </span>
                {/*)}*/}
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {s.label}
                </span>
              </div>
            </div>
          );

          return (
            <div className={"group"} key={s.label}>
              <Card>
                {s.href ? (
                  <Link href={s.href} target="_blank">
                    <Inner />
                  </Link>
                ) : (
                  <Inner />
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
