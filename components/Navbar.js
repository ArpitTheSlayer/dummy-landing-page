"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svg/logo.svg";
import menuIcon from "@/assets/svg/menu-icon.svg";
import WhiteButton from "./WhiteButton";
import { useState } from "react";

const Navbar = ({ ref }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = (e, ref) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 px-8 sticky top-0 bg-black z-50">
      <div className="flex justify-between items-center w-full md:w-fit">
        <Image src={logo} alt={"Logo"} />
        <Image
          src={menuIcon}
          alt="Menu"
          className="block md:hidden size-10"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>
      <div
        className={`${
          toggleMenu ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row gap-5">
          <li>
            <Link href={"#home"} onClick={(e) => handleClick(e, ref.homeRef)}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"#about"} onClick={(e) => handleClick(e, ref.aboutRef)}>
              About us
            </Link>
          </li>
          <li>
            <Link
              href={"#services"}
              onClick={(e) => handleClick(e, ref.servicesRef)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link href={"#blogs"} onClick={(e) => handleClick(e, ref.blogsRef)}>
              Blogs
            </Link>
          </li>
        </ul>
        <WhiteButton text={"Contact"} ref={ref.contactRef} />
      </div>
    </div>
  );
};

export default Navbar;
