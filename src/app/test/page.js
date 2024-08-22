"use client";
import { RiFilter2Fill } from "react-icons/ri";
import { BiSort } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../lib/redux/toggleSlice";

const Test = () => {
  console.log('from test page');
  
  const { isToggled } = useSelector((state) => state.isToggled);
  const dispatch = useDispatch();
  
  

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
          <li>hhhhhh</li>
        </ul>
      )}
    </div>
  );
};

export default Test;
