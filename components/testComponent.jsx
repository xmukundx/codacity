"use client"
import data from "../src/utillity/data";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import Navbar from "./Navbar";
import { RiFilter2Fill } from "react-icons/ri";
import { BiSort } from "react-icons/bi";
import { useState } from "react";


export const Filter = () => {
  return <div className="flex flex-wrap">djd</div>;
};

const TestComponent = () => {
  
  const  [filterOpen, setFilterOpen] = useState('');  
  // extracting unique data from array
  
  // const getData = (data, property) => {
  //   let extractedValues = data.map((i) => {
  //     return i[property];
  //   });
  //   console.log(extractedValues);
  // };

  const getExtractedData = (data, property) => {
    let extractedValues = [];
    data.forEach((item) => {
      extractedValues.push(item[property]);
    });
    extractedValues = [...new Set(extractedValues)];
    console.log(extractedValues);
  };
  // saving unique data in var
  const levelData = getExtractedData(data, "level");

  return (
    <div className="">
    <button className="flexAdjustBtn  border bg-slate-300 border-black py-1 px-3 rounded-md "><RiFilter2Fill/> Filter</button>
    <button  className="flexAdjustBtn"><BiSort/> Sort</button>
    <div className="flex min-h-screen">
      <aside className="w-44 bg-gray-800 text-white fixed top-16 left-0 h-screen overflow-auto p-4">
        {/* Aside content here */}
        <h1>Filter</h1>
        <ul>
          
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </aside>
      <main className="flex-grow px-4 w-full static pt-4">
        {/* <TestComponent/> */}
      </main>
    </div>
      <main className="grid m-4 w-[90%] justify-around sm:grid-cols-2 md:grid-cols-[repeat(3,400px)] justify-items-center gap-8 sm:gap-6 p-2 sm:p-4">
        {data.map((item) => (
          <div
            id="section1"
            className="group shadow-lg relative overflow-hidden rounded-lg cursor-pointer group-hover:shadow-lg hover:shadow-gray-400 transform hover:scale-110 transition duration-300 ease-in-out max-w-xl"
          >
            <div className=" text-white rounded-t-lg ">
              <img
                className="w-full h-48 object-cover transition duration-300 ease-in-out brightness-50 group-hover:brightness-125"
                src="./codebg2.jpg"
                alt="dkjnd"
              />
              <div className="absolute inset-0 px-6 py-4 bottom-0 bg-gradient-to-b from-black via-transparent to-transparent group-hover:opacity-100  place-items-">
                <h3 className=" text-base sm:text-lg md:text-xl font-medium leading-tight sm:leading-none">
                  {item.courseName.toUpperCase()}
                </h3>
                <p className="pt-2 sm:pt-4 text-sm sm:text-base leading-tight sm:leading-none italic">
                  {item.aboutCourse}
                </p>
              </div>
            </div>
            <div
              id="section2"
              className="text-gray-700 text-sm sm:text-base md:text-lg"
            >
              <div className="flex justify-between mx-5 pt-2 h-8 border-b-2">
                <span className="flex items-center">
                  {" "}
                  <FaRupeeSign />
                  {item.price}
                </span>
                <span className="hidden sm:block">{item.language}</span>
                <span>{item.level}</span>
              </div>
              <div className="flex justify-between px-5 py-2">
                <div className="flex items-center">
                  <MdOutlineWatchLater className="inline-block mr-1" />
                  {item.duration}
                </div>
                <button className="text-purple-500 font-bold">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
export default TestComponent;
