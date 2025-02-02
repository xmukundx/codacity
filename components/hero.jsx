"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  // Hook to track scroll progress
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into vertical movement for the text
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div
      className="item-center flex min-h-screen-minus-navbar w-full flex-col justify-center p-3 text-black "
      id="hero-section"
      style={{
        background: `url('./codebg1.jpg'), linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 8.8))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the background fixed
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{ y }} //Moving Text
        className="backdrop-saturate-180 bg-opacity-75 text-gray-200 backdrop-blur-md"
      >
        <div
          id="hero-content"
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
      </motion.div>
    </div>
  );
};

export default Hero;
