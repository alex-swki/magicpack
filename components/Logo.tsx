import Image from "next/image";
const LogoPNG = require("../public" + process.env.NEXT_PUBLIC_COMPANY_LOGO_PATH);

export default function Logo({ imagewidth }: { imagewidth: number }) {
  return <Image width={imagewidth} src={LogoPNG} alt="MagicPack Logo" />;
}
