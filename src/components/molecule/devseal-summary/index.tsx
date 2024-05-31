import { BodyText, Button, Column, Row } from "@/components/atom";
import { SealAgent } from "@/public/index";
import React from "react";

type Props = {};

const Summary = (props: Props) => {
  return (
    <Column className="gap-[2.5rem] max-w-[38.5rem]">
      <BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BodyText>
      <div className="self-start">
        <Button variant="secondary" href={"/"}>
          <Row className="gap-[1rem] items-center">
            <SealAgent />
            <small className="text-[1.4rem]"> Become a SEAL</small>
          </Row>
        </Button>
      </div>
    </Column>
  );
};

export default Summary;
