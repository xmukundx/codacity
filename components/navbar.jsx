"use client";
import { useEffect, useState, useRef, useReducer, useMemo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Searchbar from "./searchbar";
import { ButtonPurple } from "./utilityComponents/buttons";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../lib/redux/coursesSlice";

const Navbar = () => {
  const { courses } = useSelector((state) => state.courses); // redux code
  const reduxDispatch = useDispatch();
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null); 
  const [isMobile, setIsMobile] = useState(false);
  //useReducer code starts
  const initialState = {
    toggleMobile: false,
    userLoad: false,
    searchQuery: "",
    showDropdown: false,
    username: "",
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_MOBILE":
        return { ...state, toggleMobile: !state.toggleMobile };
      case "TOGGLE_USER_LOAD":
        return { ...state, userLoad: !state.userLoad };
      case "UPDATE_SEARCH_QUERY":
        return { ...state, searchQuery: action.payload };
      case "TOGGLE_DROPDOWN":
        return { ...state, showDropdown: !state.showDropdown };
      case "False_DROPDOWN":
        return { ...state, showDropdown: false };
      case "SET_USERNAME":
        return { ...state, username: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer code ends

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Document clicked"); // Log when the document is clicked
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        console.log("Clicked outside navbar"); // Log when the click is outside the navbar
        if (state.toggleMobile) {
          console.log("Closing mobile menu"); // Log when the menu should close
          dispatch({ type: "TOGGLE_MOBILE" });
          dispatch({ type: "False_DROPDOWN" });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state.toggleMobile]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        reduxDispatch(fetchCourses()); // Dispatch action
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [reduxDispatch, fetchCourses]);

  const email = Cookies.get("email");

  useEffect(() => {
    if (email) {
      const fetchUserDetails = async () => {
        dispatch({ type: "TOGGLE_USER_LOAD"});

        try {
          const response = await fetch(`/api/sign-in/${email}`);
          if (response.ok) {
            const user = await response.json();
            dispatch({ type: "SET_USERNAME", payload: user.firstName });
          } else {
            console.error("Error fetching user details");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        } finally {
          dispatch({ type: "TOGGLE_USER_LOAD" });
        }
      };

      fetchUserDetails();
    }
  }, [email]);

  const handleSearchChange = (event) => {
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: event.target.value });
  };

  const handleLogout = () => {
    Cookies.remove("email", { path: "/" });
    dispatch({ type: "SET_USERNAME", action: null });

    dispatch({ type: "TOGGLE_DROPDOWN" });
    alert("You are logged out");
    console.log("from logout");
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.courseName.toLowerCase().includes(state.searchQuery.toLowerCase()),
    );
  }, [courses, state.searchQuery]);

  // const filteredCourses = () => {
  //   return courses.filter((course) =>
  //     course.courseName.toLowerCase().includes(state.searchQuery.toLowerCase()),
  //   );
  // }
  console.log(state.searchQuery);

  return (
    <nav
    ref={navbarRef}  
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

            {(state.toggleMobile || !isMobile)  && state.searchQuery.length > 0 &&  (
              <ul className="absolute right-4 z-20 w-fit text-nowrap rounded-md bg-white text-gray-800 shadow-lg md:right-auto md:top-11">
                {filteredCourses.slice(0, 5).map((course, indx) => (
                  <li
                    key={indx}
                    className="my-2 cursor-pointer rounded-md border-t text-xs hover:bg-gray-100 sm:text-base md:my-0 md:px-2 md:pt-3"
                  >
                    {state.toggleMobile
                      ? course.courseName.slice(0, 35) + "..."
                      : course.courseName.slice(0, 50) + "..."}
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
            {state.userLoad ? (
              <span className="font-semibold">Loading...</span>
            ) : state.username ? (
              <span
                className="cursor-pointer font-bold text-purple-500 hover:text-purple-700"
                onClick={() => dispatch({ type: "TOGGLE_DROPDOWN" })}
              >
                {state.username}
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
                  className="absolute top-8 bg-white md:top-10 px-3 py-2 gap-2 flex flex-col "
                  ref={dropdownRef}
                >
                  <li className="cursor-pointer ">
                    <a href="/profile">Profile</a>
                  </li>
                  <hr/>
                  <li onClick={handleLogout} className="cursor-pointer">
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
