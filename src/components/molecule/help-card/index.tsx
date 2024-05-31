import { Button, Card, Column, Title } from "@/components/atom";
import { DevSealLogoReducedOpacity } from "@/public/index";
import React from "react";

type Props = {
  className?: string;
};

const HelpCard = ({ className }: Props) => {
  return (
    <Card
      variant="primary"
      className={`px-[8.9rem] py-[5.8rem] ${className} relative`}
    >
      <Column className="gap-[4.6rem] items-start max-w-[44rem]">
        <Title
          variant="1xl"
          className="text-white font-[500] leading-[4.44rem]"
        >
          How may our SEALs be of help to you?
        </Title>
        <Button variant="secondary" href={"/"}>
          Talk to the SEALs
        </Button>
      </Column>
      <figure className="max-w-[30.8rem] absolute bottom-0 right-0 w-full">
        <DevSealLogoReducedOpacity />
      </figure>
      <figure className="max-w-[30.8rem] absolute -top-52 -rotate-0 -left-36 w-full">
        <DevSealLogoReducedOpacity />
      </figure>
    </Card>
  );
};

export default HelpCard;
