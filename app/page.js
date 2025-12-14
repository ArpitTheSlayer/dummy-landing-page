import Navbar from "@/components/Navbar";
import Image from "next/image";
import bgImage from "@/assets/images/bg-image.png";
import WhiteButton from "@/components/WhiteButton";
import BlackButton from "@/components/BlackButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="w-full min-h-250 absolute top-0 -z-10 flex flex-col justify-center items-center gap-10">
        <Image
          src={bgImage}
          alt={"Globe with citylights"}
          className="w-full h-full object-cover absolute top-0 -z-10"
        />
        <h1 className="text-h1 text-center w-4xl">
          Empowering Your Business Through Innovative Technology
        </h1>
        <div className="flex gap-2.5">
          <WhiteButton text={"Contact Us"} />
          <BlackButton text={"About Us"} />
        </div>
      </div>
    </div>
  );
}
