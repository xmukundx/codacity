"use client";
import { useEffect, useState } from "react";
import { FaRegCopyright, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
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
    <footer className="relative bottom-0 flex h-fit w-full bg-gray-700 text-xs text-white md:text-sm">
      <section className="flex w-full items-center justify-evenly px-2 py-3 md:justify-between md:px-5 md:font-semibold">
        <div id="left">
          <p>
            <span className="inline-block md:mr-1" aria-label="Copyright">
              <FaRegCopyright />
            </span>
            2024 Codacity. All rights reserved.
          </p>
        </div>
        <div className="hidden px-1 text-3xl font-thin md:block">|</div>
        <div id="right">
          <ul className="flex gap-2 md:gap-5">
            <li>
              <a
                href="/faqs"
                className="hover:cursor-pointer hover:text-purple-500"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:cursor-pointer hover:text-purple-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:cursor-pointer hover:text-purple-500"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        {showButton && (
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
