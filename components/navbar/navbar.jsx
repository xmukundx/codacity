"use client";
import { useEffect, useRef, useReducer, useMemo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../lib/redux/coursesSlice";
import UserSection from "./userSection";
import SearchbarSection from "./searchbarSection";
import Link from "next/link";

const Navbar = () => {
  const { courses } = useSelector((state) => state.courses); // redux code
  const reduxDispatch = useDispatch();
  const navbarRef = useRef(null);
  //useReducer code starts
  const initialState = {
    toggleMobile: false,
    userLoad: false,
    searchQuery: "",
    showDropdown: false,
    username: "",
    isMobile: false,
  };

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
      case "SET_iSMOBILE":
        return { ...state, isMobile: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer code ends

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768);
      dispatch({ type: "SET_iSMOBILE", payload: window.innerWidth < 768 });
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firtName = "Coda".toUpperCase().split("");
  const secondName = "City".toUpperCase().split("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        state.toggleMobile &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        console.log("Clicked outside navbar"); // Log when the click is outside the navbar

        if (state.toggleMobile) {
          console.log("Closing mobile menu"); // Log when the menu should close
          dispatch({ type: "TOGGLE_MOBILE" });
          dispatch({ type: "False_DROPDOWN" });
        }
      }
      if (!navbarRef.current.contains(event.target)) {
        dispatch({ type: "UPDATE_SEARCH_QUERY", payload: "" });
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
        dispatch({ type: "TOGGLE_USER_LOAD" });

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
  };

  const filteredCourses = useMemo(() => {
    if (courses.length > 0) {
      return courses.filter((course) =>
        course.courseName
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase()),
      );
    }
  }, [courses, state.searchQuery]);

  // const filteredCourses = () => {
  //   return courses.filter((course) =>
  //     course.courseName.toLowerCase().includes(state.searchQuery.toLowerCase()),
  //   );
  // }

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 z-10 flex h-16 w-full justify-between border-b-2 border-black bg-white px-3 py-2 text-gray-800"
    >
      <Link
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
      </Link>
      <div className="flex flex-col">
        <GiHamburgerMenu
          onClick={() => {
            dispatch({ type: "TOGGLE_MOBILE" });
            dispatch({ type: "UPDATE_SEARCH_QUERY", payload: "" }); // Reset search query
          }}
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
          <SearchbarSection
            state={state}
            handleSearchChange={handleSearchChange}
            filteredCourses={filteredCourses}
          />
          {/* navigation array & map */}
          {["Courses", "Contact", "About", "FAQs"].map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer duration-300 hover:text-purple-500 active:scale-[0.98]"
            >
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
          <UserSection
            state={state}
            dispatch={dispatch}
            navbarRef={navbarRef}
            handleLogout={handleLogout}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
