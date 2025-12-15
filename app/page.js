import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhiteButton from "@/components/WhiteButton";
import BlackButton from "@/components/BlackButton";
import bgImage from "@/assets/images/bg-image.png";
import bgImage2 from "@/assets/images/bg-image-2.png";
import whiteArrowButton from "@/assets/svg/white-arrow-button.svg";
import blackArrowButton from "@/assets/svg/black-arrow-button.svg";

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

      {/* About Section */}
      <div className="mt-230 px-44">
        <h2 className="text-2xl text-gray-400 -ml-32 mb-4">About Us</h2>
        <p className="text-[2.625rem] leading-[190%]">
          Transforming ideas into the digital world. Meet company name
          Technologies. We're dedicated to{" "}
          <span className="text-gray-400 opacity-70">
            empowering your vision through innovative technology solutions We
            partner with you to bring your ideas to life in the digital
            landscape.
          </span>
        </p>
        <div className="flex justify-between gap-20 my-32">
          <div className="flex-1">
            <h3 className="text-2xl text-gray-400">Clients</h3>
            <span className="font-semibold text-[5rem]">37 +</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-gray-400">Years Experience</h3>
            <span className="font-semibold text-[5rem]">5 +</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-gray-400">Projects</h3>
            <span className="font-semibold text-[5rem]">88 +</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-gray-400">Awards</h3>
            <span className="font-semibold text-[5rem]">2 +</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-44">
        <h2 className="text-2xl text-gray-400 -ml-32 mb-4">Services</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gray-900 h-110 px-10 flex flex-col gap-6 justify-center">
            <span className="text-3xl leading-[140%]">
              Software Development
            </span>
            <Image
              src={whiteArrowButton}
              alt="Black arrow with white background pointing up"
            />
          </div>
          <div className="h-110">
            <div className="bg-white text-black px-10 flex flex-col gap-6 justify-center h-1/2">
              <h3 className="text-2xl leading-[125%]">
                Mobile App Development
              </h3>
              <p className="text-sm leading-[140%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Image
                src={blackArrowButton}
                alt="White arrow with black background pointing up"
              />
            </div>
            <Image
              src={bgImage2}
              alt="Glass globe on a laptop"
              className="w-full h-1/2 object-cover"
            />
          </div>
          <div className="bg-gray-900 h-110 px-10 flex flex-col gap-6 justify-center">
            <span className="text-3xl leading-[140%]">Web Development</span>
            <Image
              src={whiteArrowButton}
              alt="Black arrow with white background pointing up"
            />
          </div>
          <div className="h-110">
            <div className="bg-white text-black px-10 flex flex-col gap-6 justify-center h-1/2">
              <h3 className="text-2xl leading-[125%]">Digital Marketing</h3>
              <p className="text-sm leading-[140%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Image
                src={blackArrowButton}
                alt="White arrow with black background pointing up"
              />
            </div>
            <Image
              src={bgImage2}
              alt="Glass globe on a laptop"
              className="w-full h-1/2 object-cover"
            />
          </div>
          <div className="bg-gray-900 h-110 px-10 flex flex-col gap-6 justify-center">
            <span className="text-3xl leading-[140%]">
              Database Development
            </span>
            <Image
              src={whiteArrowButton}
              alt="Black arrow with white background pointing up"
            />
          </div>
          <div className="h-110">
            <div className="bg-white text-black px-10 flex flex-col gap-6 justify-center h-1/2">
              <h3 className="text-2xl leading-[125%]">Cyber Security</h3>
              <p className="text-sm leading-[140%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <Image
                src={blackArrowButton}
                alt="White arrow with black background pointing up"
              />
            </div>
            <Image
              src={bgImage2}
              alt="Glass globe on a laptop"
              className="w-full h-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
