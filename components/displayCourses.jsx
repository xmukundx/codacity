import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Link from "next/link";

const DisplayCourses = ({ coursePerPage }) => {
  return (
    <div className="grid w-full justify-around justify-items-center gap-8 p-2 mb-16 sm:gap-6 sm:p-4 md:grid-cols-2 lg:grid-cols-[repeat(3,350px)] ">
      {coursePerPage.map((item) => (
        <Link
          href={`/courses/${item._id}`}
          key={item._id}
          id="section1"
          className="group relative max-w-xl transform cursor-pointer overflow-hidden rounded-lg border-2 shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-gray-400 group-hover:shadow-lg"
        >
          <div className="rounded-t-lg text-white">
            <img
              className="h-48 w-full object-cover brightness-50 transition duration-300 ease-in-out group-hover:brightness-125"
              src="./codebg2.jpg"
              alt={item.courseName}
            />
            <div className=" absolute inset-0 bottom-0 bg-gradient-to-b from-black via-transparent to-transparent px-6 py-4 group-hover:opacity-100">
              <h3 className="text-base font-medium leading-tight sm:text-lg sm:leading-none md:text-xl">
                {item.courseName.toUpperCase()}
              </h3>
              <p className="pt-2 text-sm italic leading-tight sm:pt-4 sm:text-base sm:leading-none">
                {item.aboutCourse}
              </p>
            </div>
          </div>
          <div
            id="section2"
            className="bg-white text-sm text-gray-700 lg:text-lg"
          >
            <div className="mx-5 flex h-8 justify-between border-b-2 pt-2">
              <span className="flex items-center">
                <FaRupeeSign />
                {item.price}
              </span>
              <span className="hidden md:block">{item.language}</span>
              <span>{item.level}</span>
            </div>
            <div className="flex justify-between px-5 py-2">
              <div className="flex items-center">
                <MdOutlineWatchLater className="mr-1 inline-block" />
                {item.duration}
              </div>
              <button className="font-bold primary-color">Enroll Now</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayCourses;
