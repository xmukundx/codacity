"use client";
import { useEffect, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Searchbar from "./searchbar";
import { ButtonPurple } from "./utilityComponents/buttons";
import Cookies from "js-cookie";

const Navbar = () => {
  const [togglemobile, setTogglemobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState(null); // State to hold username
  const [userEmail, setUserEmail] = useState(null); // State to hold user email
  const dropdownRef = useRef(null);

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const email = Cookies.get("email"); // Get the email from the cookie
    const fetchUserDetails = async (email) => {
      try {
        const response = await fetch(`/api/sign-in/${email}`);
        if (response.ok) {
          const user = await response.json();
          setUsername(user.firstName);
        } else {
          console.error("Error fetching user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (email) {
      setUserEmail(email);
      fetchUserDetails(email);
    }
  }, [userEmail]);

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

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const handleLogout = () => {
    Cookies.remove("username", { path: "/" });
    setUsername(null);
    setUserEmail(null);
    showDropdown(false)
    alert("You are logged out");
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <nav
      onClick={handleClickOutside}
      className="fixed top-0 z-10 flex h-16 w-full justify-between border-b-2 border-black bg-white px-3 py-2 text-gray-800"
    >
      <a
        href="/"
        className="flex h-full cursor-pointer items-center text-3xl md:text-3xl lg:text-4xl"
      >
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
          onClick={() => setTogglemobile((prev) => !prev)}
          className={`z-10 text-3xl duration-500 ${
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

            {searchQuery.length > 0 && togglemobile && (
              <ul className="absolute right-4 w-fit text-nowrap rounded-md bg-white text-gray-800 md:right-auto md:top-14">
                {filteredCourses.slice(0, 5).map((course, indx) => (
                  <li
                    key={indx}
                    className="rounded-md- my-2 cursor-pointer border-t text-xs sm:text-base md:my-0 md:text-lg"
                  >
                    {course.courseName.slice(0, 35) + "..."}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* creating navigation with li & map */}
          {["Courses", "Contact", "About", "FAQs"].map((item, idx) => (
            <li key={idx} className="cursor-pointer hover:text-purple-500">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li className="relative">
            {username ? (
              <span
                className="cursor-pointer font-bold text-purple-500 hover:text-purple-700"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {username}
              </span>
            ) : (
              <span>
                <ButtonPurple>
                  <a href="/sign-in">Sign In</a>
                </ButtonPurple>
              </span>
            )}
            {showDropdown && (
              <span>
                <ul
                  id="dropdown"
                  className="absolute top-8 md:top-10 bg-white"
                  ref={dropdownRef}
                >
                  <li className="cursor-pointer p-1">
                    <a href="/profile">Profile</a>
                  </li>
                  <li onClick={handleLogout} className="cursor-pointer p-1">
                    Logout
                  </li>
                </ul>
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
