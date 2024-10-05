"use client";

import { LoginButton, LoginButtonProps } from "@/components/login-button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NeuroraSVG } from "@assets/branding/neurora/neurora.svg";
import { getWechatAuthorizationUrl } from "@cs-magic/common/auth/providers/wechat/utils";
import { isMobileBrowser } from "@cs-magic/common/env/is-mobile-browser";
import { isWechatBrowser } from "@cs-magic/common/env/is-wechat-browser";
import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { ChevronLeft, Globe } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";
import { FaSms } from "react-icons/fa";
import {
  SiApple,
  SiBilibili,
  SiBytedance,
  SiDiscord,
  SiGithub,
  SiGoogle,
  SiTelegram,
  SiWechat,
  SiX,
} from "react-icons/si";
import { toast } from "sonner";

const WechatLoginPopover = () => {
  const authorizationUrl = getWechatAuthorizationUrl();
  console.log({ authorizationUrl });
  return (
    <FlexContainer>
      <QRCodeSVG value={authorizationUrl} />
    </FlexContainer>
  );
};

const LoginInterface = () => {
  const [isChina, setIsChina] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  const { data: session } = useSession();

  const toggleRegion = () => {
    setIsChina(!isChina);
    setAnimationClass("animate-pulse");
    setTimeout(() => setAnimationClass(""), 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("animate-pulse");
      setTimeout(() => setAnimationClass(""), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const chinaLoginOptions: LoginButtonProps[] = [
    {
      icon: <SiWechat />,
      text: "微信登录",
      className: "bg-green-500 hover:bg-green-600",
      onClick: async (event) => {
        // event.preventDefault();

        if (
          // 手机端微信浏览器内直接唤起微信登录
          isMobileBrowser &&
          // todo: 其实在手机端非微信浏览器内也能跳转微信登录，但需要第三方的一些接口
          isWechatBrowser
        ) {
          // 阻止触发上层的 popover
          event.preventDefault();

          const result = await signIn("wechat");
          console.log({ result });
        }
      },
      popoverContent: <WechatLoginPopover />,
    },
    {
      icon: <FaSms />,
      text: "短信登录",
      className: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: <SiApple />,
      text: "Apple登录",
      className: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: <SiBytedance />,
      text: "抖音登录",
      className: "bg-black hover:bg-gray-900",
    },
    {
      icon: <SiBilibili />,
      text: "B站登录",
      className: "bg-pink-500 hover:bg-pink-600",
    },
  ];

  const globalLoginOptions = [
    {
      icon: <SiGoogle />,
      text: "Google登录",
      className: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: <FaSms />,
      text: "短信登录",
      className: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: <SiApple />,
      text: "Apple登录",
      className: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: <SiGithub />,
      text: "GitHub登录",
      className: "bg-gray-700 hover:bg-gray-600",
    },
    {
      icon: <SiDiscord />,
      text: "Discord登录",
      className: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      icon: <SiTelegram />,
      text: "Telegram登录",
      className: "bg-blue-400 hover:bg-blue-500",
    },
    {
      icon: <SiX />,
      text: "Twitter登录",
      className: "bg-sky-400 hover:bg-sky-500",
    },
  ];

  const n = 2;

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-50 rounded-3xl shadow-2xl border border-blue-500 backdrop-filter backdrop-blur-lg">
        <div className="flex items-center justify-between mb-8">
          <ChevronLeft className="h-6 w-6 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300" />
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-400" />
            <Switch
              checked={!isChina}
              onCheckedChange={toggleRegion}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-10">
          {/*<NeuroraSVG width={128} height={128} />*/}

          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            飞脑科技
          </h2>
          <p className="text-blue-300">下一秒，你就是超级个体</p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="main">主要登录</TabsTrigger>
            <TabsTrigger value="other">其他方式</TabsTrigger>
          </TabsList>
          <TabsContent value="main">
            <div className="space-y-4">
              {(isChina ? chinaLoginOptions : globalLoginOptions)
                .slice(0, n)
                .map((option, index) => (
                  <LoginButton key={index} {...option} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="grid grid-cols-2 gap-4">
              {(isChina ? chinaLoginOptions : globalLoginOptions)
                .slice(n)
                .map((option, index) => (
                  <LoginButton
                    key={index}
                    {...option}
                    className={`${option.className} text-sm`}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

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
      </div>
    </div>
  );
};

export default LoginInterface;
