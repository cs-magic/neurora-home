import { Button, ButtonProps } from "@cs-magic/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@cs-magic/shadcn/ui/popover";
import React, { ReactNode } from "react";

export type LoginButtonProps = ButtonProps & {
  icon: ReactNode;
  text: string;
  popoverContent?: ReactNode;
};

export const LoginButton = ({
  icon,
  text,
  onClick,
  className,
  popoverContent,
}: LoginButtonProps) => {
  const disabled = !onClick && !popoverContent;

  const button = (
    <Button
      className={`w-full py-3 rounded-xl text-white font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span className="ml-2">
        {text}
        {disabled ? " (todo)" : ""}
      </span>
    </Button>
  );

  if (popoverContent) {
    return (
      <Popover>
        <PopoverTrigger asChild>{button}</PopoverTrigger>
        <PopoverContent>{popoverContent}</PopoverContent>
      </Popover>
    );
  }

  return button;
};
