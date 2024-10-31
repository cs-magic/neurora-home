"use client";

import { Button } from "@/components/ui/button";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function AuthPage() {
  return (
    <FlexContainer className={""}>
      <FlexContainer
        orientation={"vertical"}
        className={"max-w-[320px] mx-auto"}
      >
        {/*<Button*/}
        {/*  className={"w-full text-white bg-green-500"}*/}
        {/*  onClick={async () => {*/}
        {/*    await signIn("wechat");*/}
        {/*  }}*/}
        {/*>*/}
        {/*  微信登录*/}
        {/*</Button>*/}

        <Button
          className={"w-full text-white bg-[#DB4437]"}
          onClick={async () => {
            await signIn("google");
          }}
        >
          Google
        </Button>

        <Button
          className={"w-full text-white bg-blue-500"}
          onClick={async () => {
            await signIn("discord");
          }}
        >
          Discord
        </Button>

        <div className="text-center text-sm text-blue-300 mt-8">
          {/*<p>登录即表示您同意飞脑科技的</p>*/}
          <p className={"inline-flex gap-4"}>
            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300 underline">
              Terms Of Service
            </span>

            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300 underline">
              Privacy
            </span>
          </p>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
}
