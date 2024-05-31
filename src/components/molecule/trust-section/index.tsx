import { Column, MarqueeScroll, Title } from "@/components/atom";
import { Brand_Images } from "@/constants";
import React from "react";

type Props = {};

const BrandThatTrustUs = (props: Props) => {
  const items = Object.values(Brand_Images);
  return (
    <Column className="gap-[4.3rem]">
      <Title
        variant="md"
        className="text-seal-primary-100 font-semibold leading-[3.6rem]"
      >
        Companies that trust us
      </Title>
      <figure>
        <MarqueeScroll>
          {items.map((Items, index) => <Items key={index} className="mx-[4.1rem]" />)}
        </MarqueeScroll>
      </figure>
    </Column>
  );
};

export default BrandThatTrustUs;
