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
      className="h-[75vh] relative w-full p-3 text-black bg-right sm:bg-top "
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
      <div className="flex flex-col justify-center item-center">
        <div
          id="hero-content"
          className=" text-white drop-shadow-2xl mt-10 md:mt-28 px-3 md:px-28 cursor-default "
        >
          <h1 className="inline-block text-3xl md:text-6xl  font-extrabold shadow-2xl ">
            Unlock Your Coding Potential!
          </h1>

          <div />
          <p className="inline-block text-base font-bold sm:text-lg md:text-2xl ">
            Ready to turn ideas into reality? CodaCity empowers you to learn
            coding at your own pace, with interactive lessons, fun challenges,
            and real-world projects.
          </p>

          <ButtonGray className="btn">
            Explore more <FaLongArrowAltRight className="arrow" />
          </ButtonGray>
        </div>
      </div>
      <div className="h-12 w-full  absolute bottom-0 left-0 bg-gradient-to-t from-blue-600 to-transparent " />
    </div>
  );
};
export default Hero;
