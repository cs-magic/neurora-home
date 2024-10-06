import { Badge } from "@cs-magic/shadcn/ui/badge";
import type { Project } from "contentlayer/generated";
import _ from "lodash";
import React from "react";

export const CardBadges = ({ project }: { project: Project }) => {
  return (
    <div className={"flex items-center gap-2 text-white mt-4 w-full flex-wrap"}>
      {project.tags?.map((tag) => (
        <Badge
          key={tag}
          variant={"outline"}
          className={"border-gray-500/30 shrink-0 text-gray-100"}
        >
          {_.startCase(_.camelCase(tag))}
        </Badge>
      ))}
    </div>
  );
};
