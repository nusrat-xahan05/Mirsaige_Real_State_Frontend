import Image from "next/image";
import logo from "../../public/mirsaige-logo.avif";

export default function Logo() {
  return (
    <div className="flex justify-center pt-8">
      <Image
        src={logo}
        alt="Mirsaige PMC Logo"
        width={100}
        height={100}
        priority
        className="w-28 h-auto object-contain"
      />
    </div>
  );
}
