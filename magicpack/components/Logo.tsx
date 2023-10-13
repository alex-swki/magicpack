import Image from "next/image";
import LogoPNG from "../public/img/logo.png";

export default function Logo({ imagewidth }: { imagewidth: number }) {
  return <Image width={imagewidth} src={LogoPNG} alt="MagicPack Logo" />;
}
