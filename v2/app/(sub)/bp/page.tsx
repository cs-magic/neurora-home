"use client";

import { SubpageLayout } from "@/app/components/subpage.layout.tsx";
import bp01 from "@assets/bp/v2/01-intro_core.png";
import bp02 from "@assets/bp/v2/02-framework.png";
import bp03 from "@assets/bp/v2/03-workflow.png";
import d from "@cs-magic/common/datetime";
import { LabelLine } from "@cs-magic/react/components/label-line";
import { HoverCard, HoverCardTrigger } from "@cs-magic/shadcn/ui/hover-card";
import { Progress } from "@cs-magic/shadcn/ui/progress";
import _ from "lodash";
import Image from "next/image";
import { useState } from "react";

// ref: https://yet-another-react-lightbox.com/
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const invstors = [
  { name: "zbb", amount: 10000, date: "2024-07-08" },
  {
    name: "xym",
    amount: 50000,
    date: "2024-07-12",
  },
  { name: "wyp", amount: 1000, date: "2024-09-14" },
  { name: "wjq", amount: 1000, date: "2024-09-25" },
  {
    name: "sy",
    amount: 10000,
    date: "2024-09-26",
  },
  { name: "hyl", amount: 10000, date: "2024-09-26" },
  { name: "zwz", amount: 10000, date: "2024-09-26" },
  {
    name: "cxp",
    amount: 20000,
    date: "2024-09-27",
  },
];

const targetAmount = 100;
const currentAmount = Math.floor(_.sumBy(invstors, "amount") / 1e4);
const latestDate = _.maxBy(invstors, "date")?.date;

console.log({ currentAmount, targetAmount });
const maskName = (name: string) => {
  return name[0] + name.slice(1).replace(/\w/g, "*");
};

const slides = [bp01, bp02, bp03];
const mainSlide = slides[0];
const ratio = mainSlide.width / mainSlide.height;

export default function BPPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // console.log({ slides });

  return (
    <SubpageLayout
      title={"Business Plan"}
      description={
        "As a solo developer crafting a suite of products, I'm seeking a ￥100W angel investment."
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

        <LabelLine title={"Progress: "}>
          <div className={" h-6 relative"}>
            <Progress
              value={currentAmount}
              className={"invert w-full h-full"}
            />

            <HoverCard openDelay={0}>
              <HoverCardTrigger>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 text-sm mx-2`}
                  style={{ left: (currentAmount / targetAmount) * 100 + "%" }}
                >
                  {`${(currentAmount / targetAmount) * 100}% (until ${d(latestDate).format("MMM DD, YYYY")})`}
                </div>
              </HoverCardTrigger>

              {/*<HoverCardContent>*/}
              {/*  <div>*/}
              {/*    {invstors.map((investor, index) => (*/}
              {/*      <div key={index}>*/}
              {/*        {maskName(investor.name)} {investor.amount}*/}
              {/*      </div>*/}
              {/*    ))}*/}
              {/*  </div>*/}
              {/*</HoverCardContent>*/}
            </HoverCard>
          </div>
        </LabelLine>

        <LabelLine title={"Base: "}>
          北京中关村智造大街（人工智能产业集聚区）
        </LabelLine>
      </div>
    </SubpageLayout>
  );
}
