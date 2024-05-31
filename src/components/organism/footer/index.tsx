"use client";
import { Button, Column, Container, NavLink, Row } from "@/components/atom";
import {
  BrandThatTrustUs,
  Contacts,
  HelpCard,
  SubLinks,
  Summary,
} from "@/components/molecule";
import { useMediaQuery } from "@/hooks";
import { SealLogo } from "@/public/index";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 600px)");

  return (
    <footer className="mt-auto">
      <Container>
        <BrandThatTrustUs />
        <HelpCard className="mt-[11.2rem] mb-[15.9rem]" />
        {!isAboveMediumScreens ? (
          <>
            <Column className="gap-[2.5rem]">
              <SealLogo />
              <div className="self-start">
                <Button href={"/"}>Free consultation</Button>
              </div>
            </Column>
            <Column className="gap-[2.5rem] mt-[1.3rem]">
              <Summary />
              <Contacts />
            </Column>
          </>
        ) : (
          <>
            <Row className="justify-between items-center">
              <SealLogo />
              <Button href={"/"}>Free consultation</Button>
            </Row>
            <Row className="gap-[2.5rem] justify-between items-start mt-[1.3rem]">
              <Summary />
              <Contacts />
            </Row>
          </>
        )}
        <SubLinks
          className={"mt-[2rem]"}
          isAboveMediumScreen={isAboveMediumScreens}
        />
        <Row className="gap-[1.5rem] mt-[1.2rem]">
          <small className="text-[1.3rem] text-gray-300 ">
            <NavLink href={"*"}>Privacy Policy</NavLink>
          </small>
          <small className="text-[1.3rem] text-gray-300 ">
            <NavLink href={"/*"}>Media kit</NavLink>
          </small>
        </Row>
        <Row className="items-center justify-center my-[2.4rem] text-stone-300">
          devSEAL 2024, Copyright
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
