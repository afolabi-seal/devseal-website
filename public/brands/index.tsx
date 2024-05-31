import Image, { ImageProps } from "next/image";
import AccessImage from "./access.png";
import GtbankImage from "./gtb.png";
import CokeImage from "./coke.png";
import MicosoftImage from "./microsoft.png";
import PaystackImage from "./paystack.png";
import SterlingImage from "./sterling.png";
import UACImage from "./uac.png";
import UnileverImage from "./unilever.png";

type NewImageProp = Omit<ImageProps, "src" | "alt" | "placeholder">;

export const GtImage = (props: NewImageProp) => {
  return (
    <Image
      src={GtbankImage}
      alt="Gtbank Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const AccessBankImage = (props: NewImageProp) => {
  return (
    <Image
      src={AccessImage}
      alt="Access Bank Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const CocaColaImage = (props: NewImageProp) => {
  return (
    <Image
      src={CokeImage}
      alt="Coca Cola Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const MicosoftLogoImage = (props: NewImageProp) => {
  return (
    <Image
      src={MicosoftImage}
      alt="Microsoft Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const PaystackLogoImage = (props: NewImageProp) => {
  return (
    <Image
      src={PaystackImage}
      alt="Paystack Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const SterlingBanklImage = (props: NewImageProp) => {
  return (
    <Image
      src={SterlingImage}
      alt="Sterling Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};

export const UacImage = (props: NewImageProp) => {
  return (
    <Image src={UACImage} alt="UAC Logo" placeholder={"blur"} {...props} />
  );
};

export const UnileverLogoImage = (props: NewImageProp) => {
  return (
    <Image
      src={UnileverImage}
      alt="Unilever Logo"
      placeholder={"blur"}
      {...props}
    />
  );
};
