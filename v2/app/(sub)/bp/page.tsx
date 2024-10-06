"use client";

import bp01 from "@assets/bp/v2/01-intro.jpg";
import bp02 from "@assets/bp/v2/02-framework.png";
import bp03 from "@assets/bp/v2/03-workflow.png";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { useState } from "react";

// ref: https://yet-another-react-lightbox.com/
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";

export default function BPPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [bp01, bp02, bp03];
  // console.log({ slides });

  return (
    <FlexContainer>
      <FlexContainer
        orientation={"vertical"}
        className={"gap-4 sm:gap-8 max-w-screen-sm"}
      >
        <div className={"italic flex flex-col gap-2"}>
          <div>
            As a solo developer crafting a suite of products, I'm seeking a
            <span className={"text-indigo-500 mx-2"}>$1 Million</span>
            angel investment.
          </div>

          <div>
            Potential investors, please ensure you have a comprehensive
            understanding of my project vision and product roadmap before
            reaching out.
          </div>
        </div>

        <Lightbox
          index={index}
          slides={slides}
          plugins={[Inline]}
          on={{
            view: (view) => setIndex(view.index),
            click: () => setIsOpen(true),
          }}
          carousel={{
            padding: 0,
            spacing: 0,
            imageFit: "cover",
          }}
          inline={{
            style: {
              width: "100%",
              aspectRatio: "16/9",
              cursor: "pointer",
            },
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
      </FlexContainer>
    </FlexContainer>
  );
}
