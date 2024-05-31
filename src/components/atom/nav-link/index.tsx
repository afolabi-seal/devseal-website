"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ children, ...props }: Props) => {
  const pathname = usePathname();
  const isActive = `${
    typeof props.href === "string" &&
    (pathname.startsWith(props.href) ? "text-seal-primary-100" : "")
  }`;
  return (
    <Link
      {...props}
      className={`${isActive} hover:text-seal-primary-100 transition-all duration-300 ${props.className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
