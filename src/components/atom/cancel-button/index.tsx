import React, { HTMLAttributes } from "react";
import {IoIosClose } from "react-icons/io";
type ButtonProp = HTMLAttributes<HTMLButtonElement>;
type Props = ButtonProp & {};

const CancelButton = (props: Props) => {
  return (
    <button {...props}>
      <IoIosClose size={24} />
    </button>
  );
};

export default CancelButton;
