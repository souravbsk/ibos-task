import React from "react";
import logo from "../../assets/logo/Logo-2.png";
import us from "../../assets/logo/Us.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import CopyRIght from "./CopyRIght";

const Footer = () => {
  return (
    <section className="bg-black mt-20">
      <div className="container">
        <div className="md:py-20 py-14 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:gap-12 gap-6">
          <div className="lg:col-span-2 lg:text-left text-center col-span-full">
            <Link to="/">
              <img src={logo} alt="Logo " className="h-10 inline-block" />
            </Link>
          </div>
          <div className="text-lg md:text-left text-center">
            <h2 className="text-white font-semibold md:mb-6 mb-3">About US</h2>
            <ul className="text-[#81859F] md:space-y-2 space-y-1">
              <li>
                <Link to="/">Master Plan</Link>
              </li>
              <li>
                d<Link to="/">Jobs</Link>
              </li>
              <li>
                <Link to="/">Invest</Link>
              </li>
              <li>
                <Link to="/">Pressroom</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg md:text-left text-center">
            <h2 className="text-white font-semibold md:mb-6 mb-3">Explore EEVE</h2>
            <ul className="text-[#81859F] md:space-y-2 space-y-1">
              <li>
                <Link to="/">Unlock my Robot Power</Link>
              </li>
              <li>
                <Link to="/">Starlight</Link>
              </li>
              <li>
                <Link to="/">Robot Platform</Link>
              </li>
              <li>
                <Link to="/">EEVE Roadmap</Link>
              </li>
            </ul>
          </div>
          <div className="text-lg md:text-left text-center">
            <h2 className="text-white font-semibold md:mb-6 mb-3">
              Community & Support
            </h2>
            <ul className="text-[#81859F] md:space-y-2 space-y-1">
              <li>
                <Link to="/">Willow X Community</Link>
              </li>
              <li>
                d<Link to="/">Developer & Maker Access</Link>
              </li>
              <li>
                <Link to="/">Special Cases</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col items-center gap-5 justify-between  border-t border-t-[#252948] py-10 ">
          <ul className="text-[#dfdfdf] text-xl flex items-center gap-4">
            <li>
              <Link>
                <FaFacebookF></FaFacebookF>
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram></FaInstagram>
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter></FaTwitter>
              </Link>
            </li>
            <li>
              <Link>
                <FaLinkedin></FaLinkedin>
              </Link>
            </li>
          </ul>
          <ul className="flex md:flex-nowrap flex-wrap items-center md:justify-between justify-center text-lg gap-4 text-[#81859F]">
            <li>
              <Link>March22 Recap</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>General Terms</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
          <ul className="text-[#81859F] text-lg">
            <li>
              <Link className="flex items-center gap-2 justify-end">
                <img src={us} alt="" /> <span>United States (English)</span>
              </Link>
            </li>
          </ul>
        </div>
        <CopyRIght></CopyRIght>
      </div>
    </section>
  );
};

export default Footer;
