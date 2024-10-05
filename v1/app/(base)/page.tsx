import { AppCards } from "@/components/app-cards";

import { Part0Light } from "@/components/home_0_light";
import CSMagicCover from "@assets/branding/neurora/2024-09-one-pager.jpg";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { cn } from "@cs-magic/shadcn/lib/utils";
import Image from "next/image";

export default function HomePage() {
  return (
    <FlexContainer orientation={"vertical"} className={cn("mt-16")}>
      <Part0Light />

      <div
        className={
          "w-full max-w-[1080px] mx-auto h-full flex flex-col py-4 md:py-8 lg:py-16 gap-28 xl:gap-32"
        }
      >
        <Image src={CSMagicCover} alt={"cs-magic cover"} />

        <AppCards />

        {/*<Part4Community />*/}
      </div>
    </FlexContainer>
  );
}
