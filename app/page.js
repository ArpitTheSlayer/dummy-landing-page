"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import WhiteButton from "@/components/WhiteButton";
import BlackButton from "@/components/BlackButton";
import bgImage from "@/assets/images/bg-image.png";
import bgImage2 from "@/assets/images/bg-image-2.png";
import bgImage3 from "@/assets/images/bg-image-3.jpg";
import bgImage4 from "@/assets/images/bg-image-4.png";
import bgImage5 from "@/assets/images/bg-image-5.png";
import whiteArrowButton from "@/assets/svg/white-arrow-button.svg";
import blackArrowButton from "@/assets/svg/black-arrow-button.svg";
import googleLogo from "@/assets/svg/google-logo.svg";
import orkutLogo from "@/assets/svg/orkut-logo.svg";
import ebayLogo from "@/assets/svg/ebay-logo.svg";
import dribleLogo from "@/assets/svg/drible-logo.svg";
import solarSystem from "@/assets/svg/solar-system.svg";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();

  return (
    <div>
      <Navbar ref={{ homeRef, aboutRef, servicesRef }} />

      {/* Hero Section */}
      <div
        id="home"
        ref={homeRef}
        className="w-full min-h-250 absolute top-0 flex flex-col justify-center items-center gap-10 pointer-events-none"
      >
        <Image
          src={bgImage}
          alt={"Globe with citylights"}
          className="w-full h-full object-cover absolute -z-10"
        />
        <h1 className="text-h1 text-center w-4xl">
          Empowering Your Business Through Innovative Technology
        </h1>
        <div className="flex gap-2.5 pointer-events-auto">
          <WhiteButton text={"Contact Us"} />
          <BlackButton text={"About Us"} ref={aboutRef} />
        </div>
      </div>

      {/* About Section */}
      <div id="about" ref={aboutRef} className="mt-230 px-44 scroll-mt-30">
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
      <div id="services" ref={servicesRef} className="px-44 mb-24 scroll-mt-30">
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

      {/* Partners Section */}
      <div className="px-44 mb-24">
        <h2 className="text-2xl text-center text-gray-400 mb-4">
          My Partner Worldwide
        </h2>
        <div className="flex justify-between">
          <Image src={googleLogo} alt="Google Logo" />
          <Image src={orkutLogo} alt="Orkut Logo" />
          <Image src={ebayLogo} alt="Ebay Logo" />
          <Image src={dribleLogo} alt="Dribble Logo" />
        </div>
      </div>

      {/* Call To Action Section */}
      <div className="h-128 relative mb-24">
        <Image
          src={solarSystem}
          alt="Solar System"
          className="w-full h-full opacity-10 object-cover"
        />
        <div className="w-2xl absolute flex flex-col items-center gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold text-center">
            Have a technology challenge? We have the solution.
          </h2>
          <BlackButton text={"Contact Us"} />
        </div>
      </div>

      {/* Blogs Section */}
      <div className="px-44">
        <h2 className="text-2xl text-gray-400 -ml-32 mb-16">Blogs</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="row-span-2 bg-white text-black flex flex-col">
            <Image
              src={bgImage3}
              alt="Woman using computer"
              className="w-full flex-1 object-cover"
            />
            <div className="px-4 py-8">
              <h3 className="text-2xl font-medium leading-[140%] mb-4">
                Top 5 New Tech Trend is change the world....
              </h3>
              <p className="text-2xl leading-[140%] text-gray-500 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s .....
              </p>
              <BlackButton text={"Read More.."} />
            </div>
          </div>
          <div className="relative text-black">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-0 from-white to-transparent"></div>
            <Image
              src={bgImage4}
              alt="Man using VR headset"
              className="w-full h-full object-cover"
            />
            <div className="flex w-full p-4 absolute bottom-0 justify-between">
              <h3 className="text-xl font-medium">
                AR and VR technology is rapidly growing...
              </h3>
              <Image
                src={blackArrowButton}
                alt="White arrow with black background pointing up"
              />
            </div>
          </div>
          <div className="relative text-black">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-0 from-white to-transparent"></div>
            <Image
              src={bgImage5}
              alt="Graphic of laptop"
              className="w-full h-full object-cover"
            />
            <div className="flex w-full p-4 absolute bottom-0 justify-between">
              <h3 className="text-xl font-medium">
                Why 3D Elements are important in your project...
              </h3>
              <Image
                src={blackArrowButton}
                alt="White arrow with black background pointing up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
