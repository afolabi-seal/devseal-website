"use client";
import {
  Button,
  CancelButton,
  Column,
  HamburgerBtn,
  NavLink,
  Row,
} from "@/components/atom";
import { NAV_LINKS } from "@/constants";
import { SealLogoNameExcludedColored } from "@/public/index";
import React, { useEffect } from "react";


type Props = {
  close: () => void;
  open: () => void;
  isOpen: boolean;
};

const NavBarColumn = ({ open, close, isOpen = false }: Props) => {
  const navItems = NAV_LINKS.map((items, index) => {
    return (
      <li key={items.id}>
        <NavLink href={items.pathname}> {items.name}</NavLink>
      </li>
    );
  });

  useEffect(() => {
    const disableScrollClss = "overflow-hidden";
    if (isOpen) {
      document.body.classList.add(disableScrollClss);
    } else {
      document.body.classList.remove(disableScrollClss);
    }
  });
  return (
    <Column className="gap-[2.5rem] absolute top-0 left-0 w-full z-[999] px-10 pt-[2.5rem] bg-white">
      <Row className="justify-between gap-[2.5rem]">
        <SealLogoNameExcludedColored/>
        {!isOpen ? (
          <HamburgerBtn onClick={open} />
        ) : (
          <CancelButton onClick={close} />
        )}
      </Row>
      <div
        className={`overflow-hidden bg-white w-full px-10  ${
          isOpen ? "h-auto py-0" : "h-0 py-4"
        } transition-all duration-300`}
      >
        <ul className="mb-[2.5rem]">
          <Column className="gap-[2.5rem]">{navItems}</Column>
        </ul>
        <Button href={"/"} variant="primary">
          Free consultation
        </Button>
      </div>
    </Column>
  );
};

export default NavBarColumn;
