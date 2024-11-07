import { AssistantLogoSVG } from "@assets/branding/assistant/assistant.logo.svg";
import { TotemGPTLogoSVG } from "@assets/branding/totem-gpt/totem-gpt.logo.svg";
import EvalAILogo from "@assets/branding/eval-ai.png";
import PokettoLogo from "@assets/branding/poketto/Your-Sole-Poketto.png";
import ThinkowLogo from "@assets/branding/sokka-ai.png";
import totemGPTPackageJson from "@cs-magic/totem-gpt-web/package.json";

export enum AppStatus {
  stable,
  experimental,
  archived,
}

export interface IAppCard {
  title: string;
  description: string;
  Icon: string;
  version: string;
  lastUpdated: Date;
  status?: AppStatus;
  tags: { url: string; text: string; public?: boolean }[];
}

export const apps: IAppCard[] = [
  {
    title: "你的图腾",
    description: "一键生成你姓名的图形化解释",
    icon: TotemGPTLogoSVG,
    version: totemGPTPackageJson.version,
    lastUpdated: new Date(),
    status: AppStatus.stable,

    tags: [
      { url: "https://totem-gpt.cs-magic.cn", text: "Web", public: true },
      {
        url: "https://docs.cs-magic.cn/docs/products/totem-gpt",
        text: "Doc",
        public: true,
      },
      {
        url: "https://github.com/cs-magic/totem-gpt-web",
        text: "Source",
        public: false,
      },
    ],
  },
  {
    title: "飞脑助手",
    description: "更像真人的 AI 社交助理",
    icon: AssistantLogoSVG,
    version: "0.8.969",
    lastUpdated: new Date(2024, 4, 1),
    status: AppStatus.stable,
    tags: [
      { url: "https://assistant.cs-magic.cn", text: "Web", public: true },
      {
        url: "https://docs.cs-magic.cn/docs/products/assistant",
        text: "Doc",
        public: true,
      },
      {
        url: "https://github.com/cs-magic/assistant-web",
        text: "Source",
        public: false,
      },
    ],
  },
  {
    title: "Poketto",
    description: "简单好用的智能体平台",
    icon: PokettoLogo.src,
    version: "0.1.0",
    lastUpdated: new Date(2023, 7, 31),
    status: AppStatus.archived,
    tags: [
      { url: "https://poketto.cs-magic.cn", text: "Web", public: false },
      {
        url: "https://github.com/cs-magic/poketto",
        text: "Source",
        public: true,
      },
    ],
  },
  {
    title: "Eval AI",
    description: "非常好用的大模型评测平台",
    icon: EvalAILogo.src,
    version: "0.1.0",
    lastUpdated: new Date(2024, 3, 30),
    status: AppStatus.experimental,
    tags: [
      { url: "https://eval-ai.cs-magic.cn", text: "Web", public: false },
      {
        url: "https://github.com/cs-magic/eval-ai",
        text: "Source",
        public: true,
      },
    ],
  },
  {
    title: "Thinkow",
    description: "会思考的大模型工作流",
    icon: ThinkowLogo.src,
    version: "0.1.0",
    lastUpdated: new Date(2024, 2, 31),
    status: AppStatus.experimental,
    tags: [
      { url: "https://thinkow.cs-magic.cn", text: "Web", public: false },
      {
        url: "https://github.com/cs-magic/thinkow",
        text: "Source",
        public: true,
      },
    ],
  },
];
