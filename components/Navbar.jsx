"use client";
import { useEffect, useState, useRef, useReducer, useMemo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Searchbar from "./searchbar";
import { ButtonPurple } from "./utilityComponents/buttons";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import {
  LoadingTrue,
  LoadingFalse,
  fetchCourses,
} from "../lib/redux/coursesSlice";

const Navbar = () => {
  const { courses, loading, error } = useSelector((state) => state.courses); // redux code
  const reduxDispatch = useDispatch();
  const [username, setUsername] = useState(null); // State to hold username
  const dropdownRef = useRef(null);

  //useReducer code starts
  const initialState = {
    toggleMobile: false,
    searchQuery: "",
    showDropdown: false,
    username: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_MOBILE":
        return { ...state, toggleMobile: !state.toggleMobile };
      case "UPDATE_SEARCH_QUERY":
        return { ...state, searchQuery: action.payload };
      case "TOGGLE_DROPDOWN":
        return { ...state, showDropdown: !state.showDropdown };
        case "False_DROPDOWN":
          return { ...state, showDropdown: false };
  
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer code ends

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      dispatch({type: "False_DROPDOWN"})
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        reduxDispatch(fetchCourses()); // Dispatch action
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
    console.log("useeffect fetchData");
  }, [reduxDispatch, fetchCourses]);

  const email = Cookies.get("email");

  if (email) {
    useEffect(() => {
      console.log("from email useEffect");
      const fetchUserDetails = async (email) => {
        reduxDispatch(LoadingTrue());
        // console.log(loading);

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
        reduxDispatch(LoadingFalse());
      };
      fetchUserDetails(email);
    }, [email]);
  }

  const handleSearchChange = (event) => {
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: event.target.value });
  };

  const handleLogout = () => {
    Cookies.remove("email", { path: "/" });
    setUsername(null);
    dispatch({ type: "TOGGLE_DROPDOWN" });
    alert("You are logged out");
    console.log("from logout");
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.courseName.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }, [courses, state.searchQuery]);
// console.log(state.toggleMobile);

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
          onClick={() => dispatch({ type: "TOGGLE_MOBILE" })}
          className={`z-10 text-3xl duration-500 ${
            state.toggleMobile ? "rotate-180 transform" : ""
          } cursor-pointer md:hidden`}
        />
        <ul
          className={`fixed h-screen font-bold text-slate-700 md:static md:h-16 ${
            state.toggleMobile
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          } bottom-0 right-0 top-0 flex w-36 flex-col items-center gap-5 border-l-2 bg-white px-2 pt-16 duration-500 md:w-full md:flex-row md:justify-normal md:border-0 md:bg-white md:pt-1`}
        >
          <li className="relative text-sm font-normal hover:text-purple-500">
            <Searchbar
              handleSearchChange={handleSearchChange}
              searchQuery={state.searchQuery}
            />

            {state.searchQuery.length > 0 && (
              <ul className="absolute right-4 z-20 w-fit bg-white text-nowrap rounded-md text-gray-800 md:right-auto md:top-11 shadow-lg  ">
                {filteredCourses.slice(0, 5).map((course, indx) => (
                  <li
                    key={indx}
                    className="rounded-md hover:bg-gray-100 my-2 md:my-0 cursor-pointer border-t text-xs sm:text-base md:pt-3 md:px-2 "
                  >
                    { state.toggleMobile ? (course.courseName.slice(0, 35) + "...") : (course.courseName.slice(0, 50) + "...")}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* creating navigation with li & map */}
          {["Courses", "Contact", "About", "FAQs"].map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer duration-300 hover:text-purple-500 active:scale-[0.98]"
            >
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
          <li className="relative">
            {loading ? (
              <span className="font-semibold">Loading...</span>
            ) : username ? (
              <span
                className="cursor-pointer font-bold text-purple-500 hover:text-purple-700"
                onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}
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
            {state.showDropdown && (
              <span>
                <ul
                  id="dropdown"
                  className="absolute top-8 bg-white md:top-10"
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
