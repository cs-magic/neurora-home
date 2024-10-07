import { SubpageLayout } from "@/components/subpage.layout.tsx";
import InternImage from "@assets/career/intern.png";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import Image from "next/image";

export default function CareerPage() {
  return (
    <SubpageLayout
      title={"Career"}
      description={"I'm eager to welcome onsite interns to our team."}
    >
      <FlexContainer className={"sm:justify-start"}>
        <Image src={InternImage} alt={"intern"} width={480} height={1920} />
      </FlexContainer>
    </SubpageLayout>
  );
}
