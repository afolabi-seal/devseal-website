
import { SVGProps } from "react";
import X from "./x.svg";
import Instagram from "./instagram.svg";
import Facebook from "./facebook.svg";
import LinkedIn from "./linkedin.svg";

type prop = SVGProps<SVGSVGElement>;

export const XIcon = (props: prop) => {
  return <X {...props} />;
};

export const InstagramIcon = (props: prop) => {
  return <Instagram {...props} />;
};

export const FacebookIcon = (props: prop) => {
  return <Facebook {...props} />;
};

export const LinkedInIcon = (props: prop) => {
  return <LinkedIn {...props} />;
};
