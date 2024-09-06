import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import logo from "/icon.png";
import { AiFillTwitterCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 bg-[#0E0E0E] pt-10 pb-6">
      <div className="max-w-7xl flex flex-col justify-between py-14 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            {/* <div className="self-center gap-2 flex items-center text-lg md:text-2xl font-semibold">
              <img className="w-10" src={logo} alt="" />
              <h2 className="mt-3">LearnEnglish</h2>
            </div> */}
            <Link to={"/"} className="flex items-center justify-center gap-1">
              <img className="w-6 rounded-full " src={logo} alt="" />
              <h3 className="font-inter font-bold text-xl text-[#fff]">
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h3>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 text-[#81859F] font-medium text-sm gap-x-4 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3 col-span-2">
            <h3 className="tracking-wide capitalize text-[#FFF] ">About US</h3>
            <ul className="space-y-3">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  href="#"
                >
                  Master Plan
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Invest
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Pressroom
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide capitalize text-[#FFF]">
              Explore EEVE{" "}
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Unlock my Robot Power
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Starlight
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Robot Platform
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  EEVE Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide capitalize text-[#FFF]">
              Community & Support
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Willow X Community
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Developer & Maker Access
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="flex  items-center gap-2"
                  href="#"
                >
                  Special Cases
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] max-w-7xl pb-10 mx-auto border-[#252948]"></div>
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <div className="flex flex-wrap pb-5 gap-2">
          <a href="#">
            <img src="facebook-02.png" alt="" />
          </a>
          <a href="#">
            {" "}
            <img src="instagram.png" alt="" />
          </a>
          <a href="#">
            {" "}
            <img src="new-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="linkedin-02.svg" alt="" />
          </a>
        </div>
        <div className="text-[#81859F] flex-wrap flex space-x-6 text-lg font-semibold">
          <a href="#">March22 Recap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">General Terms</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <img className="text-4xl w-5 h-5"  src="us.png" alt="" />
          <h3 className="text-[#81859F] font-semibold text-lg">United States (English)</h3>
        </div>
      </div>

      <div></div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        <p className="text-[#323544] font-semibold text-lg">
          EEVE © {new Date().getFullYear()}.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
