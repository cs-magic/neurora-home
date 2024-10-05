import { AppStatus, IAppCard } from "@/apps.config";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { AspectRatio } from "@cs-magic/shadcn/ui/aspect-ratio";
import { Badge } from "@cs-magic/shadcn/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const AppCard = ({
  tags,
  Icon,
  description,
  title,
  version,
  lastUpdated,
  status,
}: IAppCard) => {
  return (
    <div
      className={
        "w-full flex items-center gap-2 sm:gap-4 p-4 border hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl group relative overflow-hidden hover:text-primary-foreground"
      }
    >
      {status !== undefined && (
        <div
          className={cn(
            "absolute -right-20 top-4 rotate-[30deg] w-[240px] text-center bg-muted text-muted-foreground",
            // status === AppStatus.stable && "bg-green-800",
            // status === AppStatus.experimental && "bg-cyan-800",
            // status === AppStatus.archived && "bg-gray-800",
          )}
        >
          {AppStatus[status]}
        </div>
      )}

      <div className={"w-[120px]"}>
        <AspectRatio ratio={1}>
          {typeof Icon === "function" ? ( // @ts-ignore // SVG Component
            <Icon />
          ) : (
            <Image src={Icon} alt={title} fill />
          )}
        </AspectRatio>
      </div>

      <div className={"flex flex-col gap-2"}>
        <h1 className={"text-3xl font-bold"}>{title}</h1>

        <p>{description}</p>

        <div className={"text-sm text-gray-500"}>
          V{version} @ {lastUpdated.toDateString()}
        </div>

        <div className={"flex items-center gap-2"}>
          {tags
            .filter((tag) => tag.public)
            .map((tag) => (
              <Link href={tag.url} key={tag.text}>
                <Badge variant={"secondary"}>{tag.text}</Badge>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
