import React, { HTMLAttributes } from "react";
type BoxProp = HTMLAttributes<HTMLDivElement>;
type Props = BoxProp & {};

const Row = ({ className, ...props }: Props) => {
  return <div className={`${className} flex `} {...props}/>;
};

export default Row;
