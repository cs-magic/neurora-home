"use client";
import { SubpageLayout } from "@/app/components/subpage.layout.tsx";
import MarkWechatQrcodeSVG from "@assets/branding/mark/mark-wechat-qrcode.svg";
import GZHSVG from "@assets/branding/third-parties/wechat/公众号.svg";
import JikeLogoPNMG from "@assets/branding/third-parties/即刻-logo.png";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Card } from "app/components/card.tsx";
import { Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";

const socials = [
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

  {
    icon: <FaXTwitter size={20} />,
    href: "https://x.com/mark_neurora",
    label: "X",
    handle: "@mark_neurora",
  },

  {
    icon: (
      <Image
        src={JikeLogoPNMG}
        width={20}
        height={20}
        alt={"即刻"}
        className={"saturate-0 group-hover:saturate-100"}
      />
    ),
    href: "https://okjk.co/lEOfXD",
    label: "即刻",
    handle: "Mark 南川",
  },

  {
    icon: <IoLogoWechat size={20} className={"group-hover:text-[#09B83E]"} />,
    label: "微信个人号",
    handle: "@youshouldspeakhow", // href: "https://u.wechat.com/MIJ3DUFz7e-Oyb5Jc2_BIuM",
    qrcode: (
      <MarkWechatQrcodeSVG
        className={"opacity-0 group-hover:opacity-100 h-[72px]"}
      />
    ),
  },

  {
    icon: <GZHSVG width={24} className={"group-hover:text-[#07C160]"} />,
    label: "微信公众号",
    handle: "@南川随笔", // href: "https://u.wechat.com/MIJ3DUFz7e-Oyb5Jc2_BIuM",
  },
];

export default function Example() {
  return (
    <SubpageLayout
      title={"Contact Me"}
      description={
        "If you encounter any technical challenges or personal concerns."
      }
    >
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
    </SubpageLayout>
  );
}
