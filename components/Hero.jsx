"use client";
import { useEffect, useState } from "react";
import Button, { ButtonGray } from "./utilityComponents/buttons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Parallax } from "react-parallax";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <Parallax
      strength={400}
      bgImage={"./codebg1.jpg"}
      className="item-center flex h-screen-minus-navbar w-full flex-col justify-center bg-gradient-to- p-3 text-black sm:bg-top"
      id="hero-section"
      // style={{
      //   background: `linear-gradient(
      //   to bottom,
      //   rgb(25 5 0 / 50%),
      //   rgb(40 0 255 / 50%)
      // ),url(./codebg1.jpg)`,
      //   backgroundSize: "cover",
      // }}
    >
      <div className="backdrop-saturate-180 bg-opacity-75 text-gray-200 backdrop-blur-md">
        <div
          id="hero-content "
          className="text-effect cursor-default px-3 drop-shadow-2xl sm:px-16 md:px-28"
        >
          <h1 className="inline-block text-3xl font-extrabold shadow-2xl sm:text-5xl md:text-6xl">
            Unlock Your Coding Potential!
          </h1>

          <div />
          <p className="mt-2 inline-block text-base font-bold sm:mt-5 sm:text-lg md:text-2xl">
            Ready to turn ideas into reality? CodaCity empowers you to learn
            coding at your own pace, with interactive lessons, fun challenges,
            and real-world projects.
          </p>
        </div>
      </div>
    </Parallax>
  );
};
export default Hero;
