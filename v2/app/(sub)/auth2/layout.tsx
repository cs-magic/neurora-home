import BaseLayout from "@cs-magic/react/components/base.layout";
import { Footer } from "@cs-magic/react/components/footer";
import { Main } from "@cs-magic/react/components/main";
import { Navbar } from "@cs-magic/react/components/navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <BaseLayout>
      <Navbar productBanner={null} />

      <Main>{children}</Main>

      {/*<Footer />*/}
    </BaseLayout>
  );
}
