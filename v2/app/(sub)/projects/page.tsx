import { Badge } from "@cs-magic/shadcn/ui/badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@cs-magic/shadcn/ui/tabs";
import { Redis } from "@upstash/redis";
import { allProjects } from "contentlayer/generated";
import _ from "lodash";
import { Eye, Tag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "app/components/card.tsx";
import { Navigation } from "app/components/nav.tsx";
import { Article, Badges } from "app/(sub)/projects/article.tsx";

const redis = Redis.fromEnv();

type View = Record<string, number>;

const DisplayTab = ({
  sorted,
  views,
}: {
  sorted: typeof allProjects;
  views: View;
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
      <div className="grid grid-cols-1 gap-4">
        {sorted
          .filter((_, i) => i % 3 === 0)
          .map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sorted
          .filter((_, i) => i % 3 === 1)
          .map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sorted
          .filter((_, i) => i % 3 === 2)
          .map((project) => (
            <Card key={project.slug}>
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>
    </div>
  );
};

const Top1Card = ({
  project,
  views,
}: {
  project: (typeof allProjects)[number];
  views: View;
}) => {
  return (
    <Card>
      <Link href={`/projects/${project.slug}`}>
        <article className="relative w-full h-full p-4 md:p-8">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-100">
              {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(project.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views[project.slug] ?? 0,
              )}
            </span>
          </div>

          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
          >
            {project.title}
          </h2>

          <Badges project={project} />

          <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
            {project.description}
          </p>

          <div className="absolute bottom-4 md:bottom-8">
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as View);

  const tops = ["neurora-assistant", "awesome-prompts", "neurora-playground"];

  const featuredProjects = tops.map(
    (top) => allProjects.find((p) => p.slug === top)!,
  );

  const otherProjects = allProjects
    .filter((p) => p.published && !tops.includes(p.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const groups = ["apps", "plugins", "cases"];

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
              <Article project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
        </div>
      </div>

      <div className="hidden w-full h-px md:block bg-zinc-800" />

      <Tabs defaultValue={groups[0]} className={"w-full"}>
        <TabsList
          className={"flex justify-start items-center gap-4 text-5xl w-full"}
        >
          {groups.map((group) => (
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

        {groups.map((group) => (
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
