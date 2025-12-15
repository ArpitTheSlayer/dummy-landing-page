import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import facebookLogo from "@/assets/svg/facebook-logo.svg";
import instagramLogo from "@/assets/svg/instagram-logo.svg";
import xLogo from "@/assets/svg/x-logo.svg";
import linkedinLogo from "@/assets/svg/linkedin-logo.svg";
import youtubeLogo from "@/assets/svg/youtube-logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-24 gap-16">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Image src={logo} alt="Logo" />
          <p>
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Your email here"
              className="border p-2 w-full"
            />
            <button className="w-fit border px-12 py-2 cursor-pointer">
              Join
            </button>
          </div>
          <p className="text-xs">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Resources</h2>
          <ul className="flex flex-col gap-2">
            <li>FAQs</li>
            <li>Support</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Connect With Us</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <Image src={facebookLogo} alt="Facebook Logo" />
              Facebook
            </li>
            <li className="flex gap-2 items-center">
              <Image src={instagramLogo} alt="Instagram Logo" />
              Instagram
            </li>
            <li className="flex gap-2 items-center">
              <Image src={xLogo} alt="X Logo" />X
            </li>
            <li className="flex gap-2 items-center">
              <Image src={linkedinLogo} alt="LinkedIn Logo" />
              LinkedIn
            </li>
            <li className="flex gap-2 items-center">
              <Image src={youtubeLogo} alt="Youtube Logo" />
              YouTube
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between">
        <p className="text-sm">
          © 2025{" "}
          <Link
            href={"https://github.com/arpittheslayer"}
            className="underline"
          >
            ArpitTheSlayer
          </Link>
          . All rights reserved.
        </p>
        <ul className="flex flex-col sm:flex-row gap-4">
          <li className="text-sm">Privacy Policy</li>
          <li className="text-sm">Terms of Service</li>
          <li className="text-sm">Cookie Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
