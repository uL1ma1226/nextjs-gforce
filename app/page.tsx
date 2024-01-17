import Image from "next/image";
import CardWrapper from "./ui/home/cards";
import GforceLogo from "@/public/Gforce-logo.png";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex py-16">
        <Image
          src={GforceLogo}
          width={200}
          height={200}
          alt="Gforce shop logo"
        />
      </div>
      <div className="flex flex-col">
        <CardWrapper />
      </div>
    </main>
  );
}
