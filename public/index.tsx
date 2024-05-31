import DevSealLogo from "./devsealLogo.svg";
import DevSealLogoNameExcluded from "./devseal-logo-full-opacity.svg";
import DevSealLogoNameExcludedColored from "./logowithoutNameColored.svg";
import { SVGProps } from "react";
import DeavSealLogoWithoutTheName from "./devseal-logo.png";
import DevSealLogoOulinedWithoutTheName from "./devseal-logo-outline.png";
import DSFullOpacity from "./devseal-logo-full-opacity.png";
import Image, { ImageProps } from "next/image";
import SealAgentSmall from './seal-small.svg'

type NewImageProp = Omit<ImageProps, "src" | "placeholder" | "alt">;
type prop = SVGProps<SVGSVGElement>;

export * from './brands'
export * from './social-icons'

export const SealLogo = (props: prop) => {
  return <DevSealLogo {...props} />;
};

export const SealLogoNameExcluded = (props: prop) => {
  return <DevSealLogoNameExcluded {...props} />;
};

export const SealLogoNameExcludedColored = (props: prop) => {
  return <DevSealLogoNameExcludedColored {...props} />;
};

export const SealAgent = (props: prop) => {
  return <SealAgentSmall {...props} />;
};
export const DevSealLogoReducedOpacity = (props: NewImageProp) => {
  return (
    <Image
      src={DeavSealLogoWithoutTheName}
      alt="DevSeal Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};
export const DevSealLogoOutlinedReducedOpacity = (props: NewImageProp) => (
  <Image
    src={DevSealLogoOulinedWithoutTheName}
    alt="devSEAL Logo"
    placeholder="blur"
    {...props}
  />
);

export const DevSealLogoFullOpacity = (props: NewImageProp) => (
  <Image src={DSFullOpacity} alt="devSEAL Logo" placeholder="blur" {...props} />
);
