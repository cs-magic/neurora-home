"use client";
import { navs } from "@/config/common.config.ts";
import LogoSVG from "@assets/branding/neurora/neurora_logo_white_trans_1280.svg";
import { ButtonLink } from "@cs-magic/react/components/button-link";
import { cn } from "@cs-magic/shadcn/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@cs-magic/shadcn/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@cs-magic/shadcn/ui/sheet";
import _ from "lodash";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { HTMLProps, useEffect, useRef, useState } from "react";

const Menus = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  const pathname = usePathname();

  return (
    <div className={cn("", className)} {...props}>
      {navs.map((nav) => (
        <ButtonLink
          variant="link"
          key={nav.name}
          href={nav.href}
          className={cn(
            nav.active
              ? "duration-200 text-zinc-400 hover:text-zinc-100"
              : "cursor-not-allowed text-zinc-700",
            pathname === nav.href && "underline text-zinc-100",
          )}
          disabled={!nav.active}
        >
          {_.upperFirst(nav.name)}
        </ButtonLink>
      ))}
    </div>
  );
};

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
          {/* <= sm */}
          <Sheet>
            <SheetTrigger className={"sm:hidden"}>
              <Menu />
            </SheetTrigger>
            <SheetContent
              className={
                "w-fit dark border-none "
                // "h-screen w-[50vw] overflow-auto ml-auto rounded-none bg-gray-950 border-none flex flex-col justify-center"
                // "fixed right-0 top-0 bottom-0 fixed z-10 flex outline-none"
              }
            >
              <Menus className={"sm:hidden flex flex-col gap-2"} />
            </SheetContent>
          </Sheet>

          {/* > sm */}
          <Menus className={"hidden sm:flex gap-4 lg:gap-8"} />

          <Link
            href="/apps/neurora_home/v2/public"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <LogoSVG width={32} height={32} />
          </Link>
        </div>
      </div>
    </header>
  );
};
