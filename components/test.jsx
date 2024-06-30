import React from "react";
import { BiSort } from "react-icons/bi";
import { RiFilter2Fill } from "react-icons/ri";

const Test = () => {
  return (
    <div className="grid grid-rows-1 grid-cols-5">
      <aside className=" hidden sm:block bg-red-500flexAdjustBtn text-sm  border bg-slate-300 border-black py-1 px-3 rounded-md ">
        <h1>All courses</h1>
        <h1 className="flexAdjustBtn  border bg-slate-300 border-black py-1 px-3 w-fit rounded-md ">
          <RiFilter2Fill />
          Filter
        </h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </aside>
      <div className="bg-blue-500 col-span-5 sm:col-span-4 w-full">2</div>
    </div>
  );
};

export default Test;
