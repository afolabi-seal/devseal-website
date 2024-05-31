import React, { HTMLAttributes } from "react";
import { MdMenu } from "react-icons/md";

type ButtonProp = HTMLAttributes<HTMLButtonElement>;
type Props = ButtonProp & {};

const HamburgerBtn = (props: Props) => {
  return (
    <button {...props}>
      <MdMenu size={24} />
    </button>
  );
};

export default HamburgerBtn;
