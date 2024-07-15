"use client";
import { useEffect, useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ButtonPurple } from "./utilityComponents/Buttons";
import { motion } from "framer-motion";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [togglemobile, setTogglemobile] = useState(false);
  const [showCourseMenu, setShowCourseMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  const handleToggle = () => setTogglemobile(!togglemobile);
  const toggleDropdown = () => setShowCourseMenu(!showCourseMenu);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full justify-between border-b-2 border-black bg-white px-3 py-2 text-gray-800">
      <a href="/" className="cursor-pointer text-3xl md:text-3xl lg:text-4xl">
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
      <div className="flex flex-col">
        <GiHamburgerMenu
          onClick={handleToggle}
          className={`z-10 text-3xl duration-500  ${
            togglemobile ? "rotate-180 transform text-purple-500" : ""
          } cursor-pointer md:hidden`}
        />
        <ul
          className={`fixed h-screen font-bold text-slate-700 md:static md:h-16 ${
            togglemobile ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } bottom-0 right-0 top-0 flex w-36 flex-col items-center gap-5 border-l-2 bg-white px-2 pt-16 duration-500 md:w-full md:flex-row md:justify-normal md:border-0 md:bg-white md:pt-1`}
        >
          <li className="text-sm font-normal hover:text-purple-500">
            <Searchbar
              handleSearchChange={handleSearchChange}
              searchQuery={searchQuery}
            />

            {searchQuery.length > 0 && (
              <ul className="absolute right-4 md:right-auto  md:top-14  w-fit text-nowrap  bg-white rounded-md text-gray-800">
                {filteredCourses.slice(0, 5).map((course, indx) => (
                  <li key={indx} className="cursor-pointer my-2 md:my-0 px-1 text-xs md:text-lg rounded-md- border-t">
                    {course.courseName.slice(0, 40) + "..."}
                  </li>
                ))}
              </ul>
            )}
            
          </li>
          <li
            className="hover:text-purple-500"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/courses">Courses</a>
            {showCourseMenu && (
              <ul className="absolute right-28 flex w-24 flex-col gap-5 rounded-l-md bg-white p-1 text-center md:right-auto md:top-12 md:bg-white">
                {["Javascript", "Python", "Full stack"].map((course, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer border-b border-black hover:text-purple-500"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {["Contact", "About", "FAQs"].map((item, idx) => (
            <li key={idx} className="cursor-pointer hover:text-purple-500">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <ButtonPurple>Sign In</ButtonPurple>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
