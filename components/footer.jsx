"use client";
import { useEffect, useState } from "react";
import { FaRegCopyright, FaArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setToggleFalse, setToggleTrue } from "../lib/redux/toggleSlice";
import Link from "next/link";
const Footer = () => {
  // const [showButton, setShowButton] = useState(false);
  const showBtn = useSelector((state)=> state.toggle?.["showButton"] || false)
  const reduxDispatch = useDispatch();
  
  const handleScroll = () => {
    if (window.scrollY > 400) {      
      // setShowButton(true);
      reduxDispatch(setToggleTrue('showButton'))
      
      
    } else {
      // setShowButton(false);
      reduxDispatch(setToggleFalse('showButton'))
      
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <footer className="relative bottom-0 flex h-24 w-full bg-gray-700 text-xs text-white sm:text-sm">
      <section className="flex flex-col sm:flex-row w-full items-center justify-evenly px-2 py-3 md:justify-between md:px-5 md:font-semibold">
        <div id="left">
          <p>
            <span className="inline-block md:mr-1" aria-label="Copyright">
              <FaRegCopyright />
            </span>
            2024 Codacity. All rights reserved.
          </p>
        </div>
        {/* <div className="hidden px-1 text-3xl font-thin md:block">|</div> */}
        <div id="right">
          <ul className="flex gap-2 md:gap-5">
            <li>
              <Link
                href="/faqs"
                className="hover:cursor-pointer hover:primary-color"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:cursor-pointer hover:primary-color"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:cursor-pointer hover:primary-color"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {showBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-16 right-5 rounded-full bg-purple-500 p-3 text-white shadow-lg hover:bg-purple-700"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        )}
      </section>
    </footer>
  );
};

export default Footer;
