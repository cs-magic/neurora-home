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
        <Button
          className={"w-full text-white bg-green-500"}
          onClick={async () => {
            await signIn("wechat");
          }}
        >
          微信登录
        </Button>

        <div className="text-center text-sm text-blue-300 mt-8">
          <p>登录即表示您同意飞脑科技的</p>
          <p>
            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300">
              用户协议
            </span>{" "}
            和{" "}
            <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300">
              隐私政策
            </span>
          </p>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
}
