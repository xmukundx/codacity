"use client";
import React, { useState } from "react";
import Marquee from "./Marquee";

const Achievements = () => {
  return (
    <div className="grid grid-cols-3 px-5 items-center md:grid-cols-5 3fr 1fr 1fr 1fr  whitespace-nowrap py-5 text-white bg-blue-700 h-[300px] justify-center">
      <div className="p-4 h-28 md:col-span-2 md:justify-self-center col-span-full text-2xl md:text-4xl font-semibold flex flex-col ">
        
        <span className="">Join in on</span> <span>something big</span>
      </div>
      
      <div className="p-2 h-28 font-semibold flex flex-col  md:pt-6 ">
        <span className="text-lg sm:text-xl md:text-2xl">1 Million</span>
        <span className="text-sm md:text-lg">Learners</span>
      </div>
      <div className="p-2 h-28 font-semibold flex flex-col md:pt-6">
        <span className="text-lg sm:text-xl md:text-2xl">190+</span> <span className="text-sm md:text-lg">Countries</span>
      </div>
      <div className="p-2 h-28 font-semibold flex flex-col md:pt-6">
        <span className="text-lg sm:text-xl md:text-2xl">30 Mil+</span>
        <span className="text-sm md:text-lg">Code submits</span>
        
      </div>
    </div>

    
  );
};
export default Achievements;
