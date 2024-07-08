"use client";
import { useEffect, useState } from "react";
import Button, { ButtonGray } from "./utilityComponents/Buttons";
import Image from "next/image";
import bgImg from "../public/codebg3.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div
      className="h-[82vh] relative w-full p-3 text-black bg-right sm:bg-top flex item-center justify-center flex-col"
      id="hero-section"
      style={{
        backgroundImage: `linear-gradient(
        to bottom,
        rgb(25 5 0 / 50%),
        rgb(40 0 255 / 50%)
      ),url(./codebg1.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <div
        id="hero-content "
        className=" text-white text-effect drop-shadow-2xl px-3 sm:px-16 md:px-28  cursor-default "
      >
        <h1 className="inline-block text-3xl sm:text-5xl md:text-6xl font-extrabold shadow-2xl ">
          Unlock Your Coding Potential!
        </h1>

        <div />
        <p className="inline-block text-base mt-2 sm:mt-5 font-bold sm:text-lg md:text-2xl ">
          Ready to turn ideas into reality? CodaCity empowers you to learn
          coding at your own pace, with interactive lessons, fun challenges, and
          real-world projects.
        </p>

        <ButtonGray className="btn">
          Explore more <FaLongArrowAltRight className="arrow" />
        </ButtonGray>
      </div>

      <div className="h-12 w-full  absolute bottom-0 left-0 bg-gradient-to-t from-blue-600 to-transparent " />
    </div>
  );
};
export default Hero;
