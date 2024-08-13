"use client";
import { RiFilter2Fill } from "react-icons/ri";
import { BiSort } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../lib/redux/toggleSlice";

const Filter = () => {
  const { isToggled } = useSelector((state) => state.isToggled);
  const dispatch = useDispatch();
  const getUniqueCate = () => {};

  return (
    <div>
      <button
        onClick={() => dispatch(toggle())}
        className="flexAdjustBtn rounded-md border border-black bg-slate-300 px-3 py-1"
      >
        <RiFilter2Fill /> Filter
      </button>
      <button className="flexAdjustBtn">
        <BiSort /> Sort
      </button>
      {isToggled && (
        <ul>
          <li></li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
