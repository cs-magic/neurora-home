import { cn } from "@cs-magic/shadcn/lib/utils";

export const Part0Light = () => (
  // 添加左上角的光晕，否则界面太灰了
  <div
    id={"top-left-light"}
    className={cn(
      "absolute z-1 bg-pink-500/20",
      // 在顶部打光
      "-top-[200px]",
      // 小屏在正上方，中大屏在左上方
      "sm:-left-0 md:-left-[200px]",
      // 高度不变
      "h-[600px]",
      // 中屏的时候因为双列，所以宽度要小
      "sm:w-[600px] md:w-[400px] lg:w-[600px]",
      // blur 不变
      "blur-[150px]",
    )}
  />
);
