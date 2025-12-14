import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svg/logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-16">
      <Image src={logo} alt={"Image of stylish text written as Logo"} />
      <ul className="flex gap-5">
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>About us</Link>
        </li>
        <li>
          <Link href={"#"}>Services</Link>
        </li>
        <li>
          <Link href={"#"}>Testimonials</Link>
        </li>
      </ul>
      <Button text={"Contact"} />
    </div>
  );
};

export default Navbar;
