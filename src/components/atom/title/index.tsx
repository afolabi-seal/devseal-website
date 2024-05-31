"use client"
import React, { HTMLAttributes, useMemo } from "react";
type TextProp = HTMLAttributes<HTMLHeadingElement>;
type Props = TextProp & {
  variant?: "xs" | "sm" | "md" | "lg" | "xl" | "1xl" | "2xl" | "3xl" | "4xl";
};

const Title = ({variant,className, ...props}: Props) => {
  const textSize = useMemo(() => {
    switch (variant) {
      case "xs":
        return "text-[1.8rem]";
      case "sm":
        return "text-[2.4rem]";
      case "md":
        return "text-[2.8rem]";
      case "lg":
        return "text-[3.2rem]";
      case "xl":
        return "text-[3.6rem]";
      case "1xl":
        return "text-[4rem]";
      case "2xl":
        return "text-[4.4rem]";
      case "3xl":
        return "text-[4.8rem]";
      case "4xl":
        return "text-[5rem]";
      default:
        return "text-[1.6rem]";
    }
  }, [variant]);
  return <h1 className={`${textSize} ${className} `} {...props} />;
};

export default Title;
