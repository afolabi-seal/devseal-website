"use client";
import Link, { LinkProps } from "next/link";
import React, { useMemo } from "react";

type Props = LinkProps & {
  variant?: "primary" | "secondary" | "outlined";
  className?: string;
  children: React.ReactNode;
};

const Button = ({ className, children, variant, ...props }: Props) => {
  const primaryClasses = `${className} py-[1rem] px-[2.5rem] hover:bg-seal-primary-50 transition-all duration-300 text-center hover:text-seal-primary-100 cursor-pointer font-normal text-white bg-seal-primary-100 text-[1.8rem] rounded-[4.8rem]`;
  const secondaryClasses = `${className} py-[1rem] px-[2.5rem] hover:bg-seal-primary-100 transition-all duration-300 text-center hover:text-white cursor-pointer font-[600] text-seal-primary-100 bg-white border border-seal-primary-100 text-[1.6rem] rounded-[.5rem]`;
  const Buttons = useMemo(() => {
    switch (variant) {
      case "primary":
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={primaryClasses}>{children}</div>
          </Link>
        );
      case "secondary":
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={secondaryClasses}>{children}</div>
          </Link>
        );
      default:
        return (
          <Link className={`leading-[2.268rem]`} {...props}>
            <div className={primaryClasses}>{children}</div>
          </Link>
        );
    }
  }, [variant, children, primaryClasses, secondaryClasses, props]);
  return Buttons;
};

export default Button;
