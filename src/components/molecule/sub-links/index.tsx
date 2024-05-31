import { Column, NavLink, Row } from "@/components/atom";
import { NAV_LINKS } from "@/constants";
import { Outfit } from "next/font/google";
import React, { HTMLAttributes } from "react";


type LinksProps = HTMLAttributes<HTMLUListElement>
type Props = LinksProps &{
  isAboveMediumScreen?: boolean;
};

const outfit = Outfit({subsets:["latin"]})
const SubLinks = ({ isAboveMediumScreen, ...props }: Props) => {
  const navItems = NAV_LINKS.map((items, index) => {
    return (
      <li key={items.id}>
        <NavLink href={items.pathname} className={`font-[500] font-sans} ${outfit.className}`}> {items.name}</NavLink>
      </li>
    );
  });
  return (
    <ul {...props}>
      {isAboveMediumScreen ? (
        <Row className="gap-[2.5rem]">{navItems}</Row>
      ) : (
        <Column className="gap-[2.5rem] items-start">{navItems}</Column>
      )}
    </ul>
  );
};

export default SubLinks;
