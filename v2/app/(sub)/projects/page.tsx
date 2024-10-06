import { docGroups, topDocs } from "@/app/common.config.ts";
import { DisplayTab } from "@/app/components/cards.tsx";
import { Top1Card } from "@/app/components/card-top1.tsx";
import { redis } from "@/app/server.config.ts";
import { View } from "@/types/interface.ts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@cs-magic/shadcn/ui/tabs";
import { CardArticle } from "@/app/components/card-article.tsx";
import { Card } from "app/components/card.tsx";
import { allProjects } from "contentlayer/generated";
import _ from "lodash";
import React from "react";

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as View);

  const featuredProjects = topDocs.map(
    (top) => allProjects.find((p) => p.slug === top)!,
  );

  const otherProjects = allProjects
    .filter((p) => p.published && !topDocs.includes(p.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-zinc-400">
          Most projects are out of my own interest and open-source, some would
          be commercial.
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        <Top1Card project={featuredProjects[0]} views={views} />

        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          {featuredProjects.slice(1).map((project) => (
            <Card key={project.slug}>
              <CardArticle project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
      </div>

      <div className="hidden w-full h-px md:block bg-zinc-800" />

      <Tabs defaultValue={docGroups[0]} className={"w-full"}>
        <TabsList
          className={"flex justify-start items-center gap-4 text-5xl w-full"}
        >
          {docGroups.map((group) => (
            <TabsTrigger
              value={group}
              key={group}
              className={
                "text-xl hover:underline text-white/50 data-[state=active]:text-white"
              }
            >
              {_.capitalize(group)}
            </TabsTrigger>
          ))}
        </TabsList>

        {docGroups.map((group) => (
          <TabsContent value={group} key={group}>
            <DisplayTab
              sorted={otherProjects.filter((s) => s.group === group)}
              views={views}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
