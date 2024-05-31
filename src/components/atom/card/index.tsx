"use client";
import React, { HTMLAttributes, useMemo } from "react";
type CardProp = HTMLAttributes<HTMLDivElement>;
type Props = CardProp & {
  variant?: "primary" | "secondary";
  rounded?: "xs" | "sm" | "lg";
};

const Card = ({ variant, rounded, className, ...props }: Props) => {
  const roundedCornerStyle = useMemo(() => {
    switch (rounded) {
      case "xs":
        return "rounded-[.5rem]";
      case "sm":
        return "rounded-[1rem]";
      case "lg":
        return "rounded-[1.5rem]";
      default:
        return "";
    }
  }, [rounded]);
  const VariantColors = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-seal-primary-100";
      case "secondary":
        return "bg-seal-secondary-100";
      default:
        return "bg-seal-primary-100";
    }
  }, [variant]);
  return (
    <div
      className={`${className} ${roundedCornerStyle} ${VariantColors}`}
      {...props}
    />
  );
};

export default Card;
