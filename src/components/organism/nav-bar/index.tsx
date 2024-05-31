"use client";
import Container from "@/components/atom/container";
import { NavBarColumn, NavBarRow } from "@/components/molecule";
import { useMediaQuery } from "@/hooks";
import React, { useCallback, useState } from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({subsets:["latin"]})
type Props = {};

const NavBar = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);
  return (
    <nav className={outfit.className}>
      <Container className="mt-[4.2rem]">
        {isAboveMediumScreens ? (
          <NavBarRow />
        ) : (
          <NavBarColumn
            isOpen={isNavOpen}
            open={handleToggleNav}
            close={handleToggleNav}
          />
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
