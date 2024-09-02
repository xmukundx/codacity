"use client";
import { RiFilter2Fill } from "react-icons/ri";
import { BiSort } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../lib/redux/toggleSlice";
import CourseData from "@/utillity/data";

const Filter = () => {
  
  const reduxDispatch = useDispatch();

  const getUniqueData = (data, property) => {
    let newValue = data.map((i) => i[property]);
    return (newValue = ["All", ...new Set(newValue)]);
  };
  const getLanguageData = getUniqueData(CourseData, "language");
  
  const getPopularityData = getUniqueData(CourseData, "popularity");
  return (
    <aside className="rounded bg-white p-4">
      <div
        onClick={() => reduxDispatch(toggle())}
        className="mb-4 flex items-center p-3 text-2xl font-bold text-gray-600"
      >
        <RiFilter2Fill className="inline-block" /> Filter
      </div>
      {/* <button className="flexAdjustBtn">
        <BiSort /> Sort
      </button> */}
      <div className="border-b">
        <h1 className="ml-2 text-lg font-semibold text-gray-700">Language</h1>
        {getLanguageData.map((item, indx) => (
          <div key={indx} className="flex items-center justify-start px-4 py-1">
            <input
              type="checkbox"
              className=" dark:border-white-400/20 h-4 w-fit transition-all duration-500 ease-in-out dark:scale-100 dark:checked:scale-100 dark:hover:scale-110"
            />
            <label
              htmlFor="checkbox"
              className="font- ml-1 text-sm text-gray-600"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
      <div className="">
        <h1 className="ml-2 text-lg font-semibold text-gray-700">Popularity</h1>
        {getPopularityData.map((item, indx) => (
          <div key={indx} className="flex items-center justify-start px-4 py-1">
            <input
              type="checkbox"
              className="dark:border-white-400/20 h-4 w-fit transition-all duration-500 ease-in-out dark:scale-100 dark:checked:scale-100 dark:hover:scale-110"
            />
            <label
              htmlFor="checkbox"
              className="font- ml-1 text-sm text-gray-600"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Filter;
