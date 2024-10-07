import { CardArticle } from "@/components/card-article.tsx";
import { Card } from "@/components/card.tsx";
import { View } from "@/types/interface.ts";
import { allProjects } from "contentlayer/generated";
import React from "react";

export const DisplayTab = ({
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
              <CardArticle project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sorted
          .filter((_, i) => i % 3 === 1)
          .map((project) => (
            <Card key={project.slug}>
              <CardArticle project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sorted
          .filter((_, i) => i % 3 === 2)
          .map((project) => (
            <Card key={project.slug}>
              <CardArticle project={project} views={views[project.slug] ?? 0} />
            </Card>
          ))}
      </div>
    </div>
  );
};
