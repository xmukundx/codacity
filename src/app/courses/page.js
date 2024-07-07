'use client'
import React, { useState } from "react";
import { BiSort } from "react-icons/bi";
import { RiFilter2Fill } from "react-icons/ri";
import data from "@/utillity/data";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { ButtonGray } from "../../../components/utilityComponents/Buttons";

const Test = () => {

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="grid grid-rows-1 grid-cols-5 bg-zinc-200">
      <aside className=" hidden sm:block bg-red-500flexAdjustBtn text-sm  border border-black py-1 px-3">
        <h1>All courses</h1>
        <h1 onClick={showModalHandler} className="flexAdjustBtn  border  border-black py-1 px-3 w-fit border-r bg-white ">
          <RiFilter2Fill />
          Filter
        </h1>
        {showModal &&  <Dialog/>}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </aside>
      <div className=" col-span-5 sm:col-span-4 w-full">
        {/* filter and sort section */}
        <div className="flex sm:hidden justify-around my-3">
          <button onClick={showModalHandler} className="flexAdjustBtn  border bg-gray-100 border-black py-1 px-1 active:bg-purple-500 active:text-white">
            <RiFilter2Fill /> Filter
          </button>
          {/* <ButtonGray>  Filter</ButtonGray> */}
          <button className="flexAdjustBtn  border bg-gray-100 border-black py-1 px-1 active:bg-purple-500 active:text-white ">
            <BiSort /> Sort
          </button>
        </div>
        {/* main course content */}
        <main className="grid  m-4 w-[90%]  justify-around md:grid-cols-2 lg:grid-cols-[repeat(3,350px)] justify-items-center gap-8 sm:gap-6 p-2 sm:p-4">

          {data.map((item) => (
            <div
            key={item.id}
              id="section1"
              className="group shadow-lg relative overflow-hidden rounded-lg border-2 cursor-pointer group-hover:shadow-lg hover:shadow-gray-400 transform hover:scale-110 transition duration-300 ease-in-out max-w-xl"
            >
              <div className=" text-white rounded-t-lg ">
                <img
                  className="w-full h-48 object-cover transition duration-300 ease-in-out brightness-50 group-hover:brightness-125"
                  src="./codebg2.jpg"
                  alt="dkjnd"
                />
                <div className="absolute inset-0 px-6 py-4 bottom-0  bg-gradient-to-b from-black via-transparent to-transparent group-hover:opacity-100  place-items-">
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
                className="text-gray-700 bg-white text-sm lg:text-lg"
              >
                <div className="flex justify-between mx-5 pt-2 h-8 border-b-2">
                  <span className="flex items-center">
                    {" "}
                    <FaRupeeSign />
                    {item.price}
                  </span>
                  <span className="hidden md:block">{item.language}</span>
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
    </div>
  );
};

export default Test;
