"use client"
import { RiFilter2Fill } from "react-icons/ri";
import { BiSort } from "react-icons/bi";



const Filter = () => {
  return (
    <div><button className="flexAdjustBtn border bg-slate-300 border-black py-1 px-3 rounded-md "><RiFilter2Fill/> Filter</button>
    <button className="flexAdjustBtn"><BiSort/> Sort</button></div>
  )
}

export default Filter