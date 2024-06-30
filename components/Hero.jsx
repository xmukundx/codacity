"use client";
import { useEffect, useState } from "react";
import Button from "./utilityComponents/Button";
import Image from "next/image";
import bgImg from "../public/codebg3.jpg";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Unlock Your Coding Potential!
  //     Ready to turn ideas into reality? Learn today’s most in-demand skills
  //         with our online courses, CodaCity empowers you to learn coding at your
  //         own pace, with interactive lessons, fun challenges, and real-world
  //         projects.
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollPosition / 6}px)`,
  };

  return (
    <div
      className="h-[75vh] relative w-full p-3 text-black bg-right sm:bg-top " id="hero-section"
      style={{ parallaxStyle, backgroundImage: `linear-gradient(
        to bottom,
        rgb(25 5 0 / 50%),
        rgb(0 0 255 / 50%)
      ),url(./codebg1.jpg)`, backgroundSize: "cover" }}
    >
      <div className="h-8 w-full  absolute bottom-0 left-0 bg-gradient-to-t from-blue-700 to-blue-blue-500 " />
    </div>
  );
};
export default Hero;
