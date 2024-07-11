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
      className="fixed top-0 z-20 flex h-16 w-full justify-between border-b-2 border-black bg-white px-3 py-2 text-black"
      id="nav-section"
    >
      <a href="/" id="left" className="cursor-pointer text-3xl sm:text-4xl">
        {/* framemotion? code */}
        {firtName.map((char, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block font-extrabold text-purple-500"
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
          className={`z-10 text-3xl duration-500 hover:scale-125 hover:text-gray-800 ${
            togglemobile
              ? "rotate-180 transform text-purple-500 hover:text-purple-500"
              : ""
          } hover:cursor-pointer md:hidden`}
        />
        <ul
          className={`fixed h-screen font-bold md:static md:h-16 ${
            togglemobile ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } bottom-0 right-0 top-0 flex w-28 flex-col items-center justify-start gap-5 border-l-2 bg-white px-2 pt-16 duration-500 md:w-full md:flex-row md:justify-normal md:border-0 md:bg-white md:pt-1`}
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
              className="absolute right-28 flex w-24 flex-col gap-5 rounded-l-md bg-white p-1 text-center md:left-0 md:top-12 md:bg-white"
            >
              <li className="cursor-pointer border-b border-black hover:text-purple-500">
                Javascript
              </li>
              <li className="cursor-pointer border-b border-black hover:text-purple-500">
                Python
              </li>
              <li className="cursor-pointer border-b border-black hover:text-purple-500">
                Full stack
              </li>
            </ul>
          )}
          <li className="cursor-pointer hover:text-purple-500">ab </li>
          <li className="cursor-pointer hover:text-purple-500 ">
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
