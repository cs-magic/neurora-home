"use client";

import MapboxNative from "@/app/(sub)/bp/maps/mapbox/native/mapbox-native.tsx";
import TheMap from "@/app/(sub)/bp/maps/mapbox/react/map.tsx";
import { SubpageLayout } from "@/components/subpage.layout.tsx";
import { investment } from "@/config/common.config.ts";
import bp01 from "@assets/bp/v2/01-intro_core.png";
import bp02 from "@assets/bp/v2/02-framework.png";
import bp03 from "@assets/bp/v2/03-workflow.png";
import d from "@cs-magic/common/datetime";
import { LabelLine } from "@cs-magic/react/components/label-line";
import { cn } from "@cs-magic/shadcn/lib/utils";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import _ from "lodash";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const { investors, targetAmount } = investment;
const currentAmount = Math.floor(_.sumBy(investors, "amount") / 1e4);
const latestDate = _.maxBy(investors, "date")?.date;

console.log({ currentAmount, targetAmount });

const slides = [bp01, bp02, bp03];

export default function BPPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // console.log({ slides });

  return (
    <SubpageLayout
      title={"Business Plan"}
      description={
        <div className={"space-y-2"}>
          <div>
            As a solo developer crafting a suite of products, I'm seeking a
            <em className={"text-primary-foreground font-bold mx-2"}>￥100W</em>
            Angel Investment.
          </div>

          <LabelLine title={"Progress: "}>
            <div className={" h-4 relative"}>
              <ProgressPrimitive.Root
                className={cn(
                  "relative h-4 w-full overflow-hidden rounded-full bg-primary border border-gray-500/25",
                )}
              >
                <ProgressPrimitive.Indicator
                  className="h-full w-full flex-1 bg-primary-foreground transition-all"
                  style={{
                    transform: `translateX(-${100 - (currentAmount || 0)}%)`,
                  }}
                />
              </ProgressPrimitive.Root>

              <div
                className={`absolute top-1/2 -translate-y-1/2 text-sm mx-2`}
                style={{ left: (currentAmount / targetAmount) * 100 + "%" }}
              >
                {`${(currentAmount / targetAmount) * 100}% (until ${d(latestDate).format("MMM DD, YYYY")})`}
              </div>
            </div>
          </LabelLine>

          <LabelLine title={"Email: "}>
            <a href={"mailto:founder@cs-magic.com"} className={"underline"}>
              founder@cs-magic.com
            </a>
          </LabelLine>

          <LabelLine title={"Office: "}>北京海淀中关村智造大街</LabelLine>
        </div>
      }
    >
      <div className={"flex flex-col gap-4 sm:gap-8"}>
        <Image
          src={slides[0]}
          alt={"slide"}
          width={1920}
          height={1080}
          priority
          className={"cursor-pointer"}
          onClick={() => {
            setIsOpen(true);
          }}
        />
        <Lightbox
          open={isOpen}
          index={index}
          close={() => setIsOpen(false)}
          slides={slides}
          controller={{
            closeOnBackdropClick: true,
          }}
        />

        {/*<TheMap />*/}
        {/*<BeijingMap />*/}
        <MapboxNative />
      </div>
    </SubpageLayout>
  );
}
