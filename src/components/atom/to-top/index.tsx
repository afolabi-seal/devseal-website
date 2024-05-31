"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const ScrollToTop = (props: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);
  return <></>;
};

export default ScrollToTop;
