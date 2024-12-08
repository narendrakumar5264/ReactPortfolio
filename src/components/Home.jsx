import React from "react";
import Profile from "../assets/profile4.png";

import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

import { ReactTyped } from "react-typed";

const Home = ({ darkMode }) => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          {/* Left Section */}
          <div className="md:w-1/2 mt-0 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl">Welcome to my Feed</span>
            <div className="flex justify-center md:justify-start space-x-3 text-2xl md:text-4xl">
              <h2>Hello, I'm a</h2>
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Coder", "Programmer", "Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify mt-2">
              5★ Coder on HackerRank | 200+ DSA Problems | gfg | leetcode |
              Front-End Developer | RHCSA certified | SQL Enthusiast | Passionate Problem Solver
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex justify-center md:justify-start space-x-5">
                  <li>
                    <a href="" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/narendra-kumar-9b2223257/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <MdEmail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 font-bold">
                <h1>Currently Working on</h1>
                <div className="flex justify-center md:justify-start space-x-5">
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]" />
                  <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]" />
                  <FaPython className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]" />
                  <AiOutlineConsoleSql className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[3px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-4 md:mt-16 order-1 md:ml-20 flex justify-center">
            <div
              className={`rounded-full w-48 md:w-[450px] md:h-[450px] 
              ${darkMode ? "filter drop-shadow-[0_0_0.7rem_rgb(240,143,130)]" : ""}`}
            >
              <img
                src={Profile}
                alt="Profile"
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Home;