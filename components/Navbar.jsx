"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ButtonPurple } from "./utilityComponents/Buttons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [togglemobile, setTogglemobile] = useState(false);
  const [showCourseMenu, SetshowCourseMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  const toggleDropdown = () => {
    SetshowCourseMenu(!showCourseMenu);
  };

  const handleToggle = () => {
    setTogglemobile(!togglemobile);
  };

  return (
    <nav
      className="fixed top-0 z-20 bg-white text-black h-16 w-full flex py-2 px-3 justify-between border-b-2 border-black"
      id="nav-section"
    >
      <a href="/" id="left" className=" text-3xl sm:text-4xl cursor-pointer">
        {/* framemotion? code */}
        {firtName.map((char, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block font-extrabold text-purple-500 "
              whileHover={{ scale: 1.2 }}
            >
              {char}
            </motion.span>
          );
        })}
        {secondName.map((char, index) => {
          return (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2 }}
              className="inline-block"
            >
              {char}{" "}
            </motion.span>
          );
        })}
      </a>
      {/* <a
        href="/"
        className="text-2xl sm:text-3xl px-1 cursor-pointer pt-2 sm:pt-1"
        id="left"
      >
        <motion.span
          whileHover={{ scale: 1.2 }}
          className="font-extrabold text-purple-500 "
        >
          CODA{" "}
        </motion.span>
        <motion.span whileHover={{ scale: 1.2 }} className="inline-block">
          CITY
        </motion.span>{" "}
      </a> */}
      <div id="right" className="flex flex-col">
        <GiHamburgerMenu
          onClick={handleToggle}
          className={`text-3xl duration-500 hover:text-gray-800 hover:scale-125  z-10 ${
            togglemobile
              ? "transform rotate-180 text-purple-500 hover:text-purple-500"
              : ""
          } hover:cursor-pointer md:hidden`}
        />
        <ul
          className={` font-bold fixed md:static h-screen md:h-16 ${
            togglemobile ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } duration-500 top-0 right-0 border-l-2 md:border-0 bg-white md:bg-white bottom-0 w-28 md:w-full flex flex-col md:flex-row justify-start md:justify-normal  items-center gap-5 pt-16 md:pt-1 px-2`}
        >
          <li
            className="cursor-pointer hover:text-purple-500"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            onClick={toggleDropdown}
          >
            <a href="/courses">Courses</a>
          </li>
          {showCourseMenu && (
            <ul
              onMouseEnter={() => SetshowCourseMenu(true)}
              onMouseLeave={() => SetshowCourseMenu(!showCourseMenu)}
              id="dropdown-list"
              className="absolute flex flex-col right-28 md:left-0  md:top-12 bg-white md:bg-white w-24 gap-5 p-1 rounded-l-md text-center"
            >
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">
                Javascript
              </li>
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">
                Python
              </li>
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">
                Full stack
              </li>
            </ul>
          )}
          <li className="cursor-pointer hover:text-purple-500">ab </li>
          <li className="cursor-pointer hover:text-purple-500">
            <a href="/contact">Cantact us</a>
          </li>
          <li className="cursor-pointer hover:text-purple-500">
            <a href="/about">About us</a>
          </li>
          <li className="cursor-pointer hover:text-purple-500">
            {" "}
            <a href="/faqs">FAQs</a>
          </li>

          {/* <button className="bg-purple-500 text-white hover:bg-white hover:border-purple-500 hover:text-purple-500 border-2  font-bold py-1 px-3 rounded">Sign In</button> */}
          <ButtonPurple>Sign In</ButtonPurple>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
