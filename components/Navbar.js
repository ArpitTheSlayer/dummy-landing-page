"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svg/logo.svg";
import WhiteButton from "./WhiteButton";

const Navbar = ({ ref }) => {
  const handleClick = (e, ref) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center py-8 px-16 sticky top-0 bg-black z-50">
      <Image src={logo} alt={"Logo"} />
      <ul className="flex gap-5">
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
  );
};

export default Navbar;
