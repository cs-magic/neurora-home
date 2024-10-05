import { baseOptions } from "@/app/layout.config";
import { source } from "@/app/source";
import { AssistantLogoSVG } from "@assets/branding/assistant/assistant.logo.svg";
import { TotemGPTLogoSVG } from "@assets/branding/totem-gpt/totem-gpt.logo.svg";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { DocsLayout } from "fumadocs-ui/layout";
import { RootProvider } from "fumadocs-ui/provider";
import { BookOpen } from "lucide-react";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pageTree = source.pageTree;
  // console.log(JSON.stringify(pageTree, null, 2));

  return (
    <RootProvider>
      <DocsLayout
        tree={pageTree}
        sidebar={{
          banner: (
            <RootToggle
              options={[
                {
                  title: "TotemGPT",
                  description: "Generate your LIFE TOTEM in seconds.",
                  url: "/docs/products/totem-gpt",
                  icon: (
                    <TotemGPTLogoSVG width={32} height={32} className={"p-1"} />
                  ),
                },
                {
                  title: "Neurora Assistant",
                  description: "Your All-in-one AIGC Assistant",
                  url: "/docs/products/assistant",
                  icon: <AssistantLogoSVG width={32} height={32} />,
                },
                {
                  title: "Business Planning",
                  description: "For potential investors.",
                  url: "/docs/bp",
                  icon: <BookOpen width={32} height={32} className={"p-1"} />,
                },
              ]}
            />
          ),
        }}
        {...baseOptions}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
