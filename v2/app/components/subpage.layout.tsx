import _ from "lodash";
import React, { PropsWithChildren } from "react";

export const SubpageLayout = (
  props: { title: string; description: string } & PropsWithChildren,
) => {
  return (
    <div className="pt-4 mx-auto space-y-4 md:space-y-8 w-full">
      <div className="mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {_.startCase(_.upperFirst(props.title))}
        </h2>
        <p className="mt-4 text-zinc-400 italic">{props.description}</p>
      </div>

      <div className="w-full h-px bg-zinc-800" />

      {props.children}
    </div>
  );
};
