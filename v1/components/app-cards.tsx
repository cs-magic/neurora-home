import { apps, AppStatus } from "@/apps.config";
import { AppCard } from "@/components/app-card";
import TotemGPTLogo from "@assets/branding/totem-gpt/totem-gpt-logo.svg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cs-magic/shadcn/ui/tabs";

console.log({ TotemGPTLogo, type: typeof TotemGPTLogo });

export const AppCards = () => {
  return (
    <Tabs defaultValue="serving">
      <TabsList>
        <TabsTrigger value="serving">正在服务</TabsTrigger>
        <TabsTrigger value="others">历史服务</TabsTrigger>
      </TabsList>
      <TabsContent
        value="serving"
        className={
          "w-full max-w-[1080px] mx-auto grid sm:grid-cols-2 gap-8 p-2"
        }
      >
        {apps
          .filter((app) => app.status === AppStatus.stable)
          .map((appCard) => (
            <AppCard {...appCard} key={appCard.title} />
          ))}
      </TabsContent>

      <TabsContent
        value="others"
        className={
          "w-full max-w-[1080px] mx-auto grid sm:grid-cols-2 gap-8 p-2"
        }
      >
        {apps
          .filter((app) => app.status !== AppStatus.stable)
          .map((appCard) => (
            <AppCard {...appCard} key={appCard.title} />
          ))}
      </TabsContent>
    </Tabs>
  );
};
