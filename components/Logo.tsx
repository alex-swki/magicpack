import Image from "next/image";
const LogoPNG = require("../public" + process.env.NEXT_PUBLIC_COMPANY_LOGO_PATH);

import magicpackLogo from "../public/img/logo.png";

function Logo({ imagewidth }: { imagewidth: number }) {
  return <Image width={imagewidth} src={LogoPNG} alt="MagicPack Logo" />;
}

function MagicPackLogo({ imagewidth }: { imagewidth: number }) {
  return <Image width={imagewidth} src={magicpackLogo} alt="MagicPack Logo" />;
}

export { Logo, MagicPackLogo };
