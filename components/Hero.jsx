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
      className="item-center relative flex h-[82vh] w-full flex-col justify-center bg-right p-3 text-black sm:bg-top"
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
        className="text-effect cursor-default px-3 text-white drop-shadow-2xl sm:px-16 md:px-28"
      >
        <h1 className="inline-block text-3xl font-extrabold shadow-2xl sm:text-5xl md:text-6xl">
          Unlock Your Coding Potential!
        </h1>

        <div />
        <p className="mt-2 inline-block text-base font-bold sm:mt-5 sm:text-lg md:text-2xl">
          Ready to turn ideas into reality? CodaCity empowers you to learn
          coding at your own pace, with interactive lessons, fun challenges, and
          real-world projects.
        </p>

        <ButtonGray className="btn">
          Explore more <FaLongArrowAltRight className="arrow" />
        </ButtonGray>
      </div>

      <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-blue-600 to-transparent" />
    </div>
  );
};
export default Hero;
