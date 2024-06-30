'use client'
import { useEffect, useState } from "react";
import Button from "./utilityComponents/Button";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [togglemobile, setTogglemobile] = useState(false);
  const [showCourseMenu, SetshowCourseMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const toggleDropdown = () => {
    SetshowCourseMenu(!showCourseMenu);
  };

  const handleToggle = () => {
    setTogglemobile(!togglemobile);
  };


  return (
    <nav className='fixed top-0 z-20 bg-white text-black h-16 w-full flex py-2 px-3 justify-between border-b-2 border-black' id="nav-section">
      <a href="/" className="text-2xl sm:text-3xl px-1 cursor-pointer pt-2 sm:pt-1" id="left"> <span className="font-extrabold text-purple-500">CODA </span><span className="">CITY</span></a>
      <div id="right" className="flex flex-col">
      <GiHamburgerMenu onClick={handleToggle} className={`text-3xl duration-500 hover:text-gray-800 z-10 ${togglemobile ?'transform rotate-180 text-purple-500 hover:text-purple-500':''} hover:cursor-pointer md:hidden` }/>
        <ul className={` font-bold fixed md:static h-screen md:h-16 ${togglemobile ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} duration-500 top-0 right-0  bg-green-200 md:bg-white bottom-0 w-28 md:w-full flex flex-col md:flex-row justify-start md:justify-normal  items-center gap-5 pt-16 md:pt-1 px-2`}>
          <li className="cursor-pointer hover:text-purple-500" onMouseEnter={toggleDropdown} onClick={toggleDropdown}>Courses</li>
          {showCourseMenu && (
            <ul onMouseEnter={()=>SetshowCourseMenu(true)} onMouseLeave={()=> SetshowCourseMenu(!showCourseMenu)}  id="dropdown-list" className="absolute flex flex-col right-28 md:left-0  md:top-12 bg-green-200 md:bg-white w-24 gap-5 p-1 rounded-l-md text-center">
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">Javascript</li>
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">Python</li>
              <li className="cursor-pointer hover:text-purple-500 border-b border-black">Full stack</li>
            </ul>
          )}
          <li className="cursor-pointer hover:text-purple-500">ab </li>
          <li className="cursor-pointer hover:text-purple-500">Cantact us</li>
          <li className="cursor-pointer hover:text-purple-500">About us</li>
          <li className="cursor-pointer hover:text-purple-500"> <a href="/faqs">FAQs</a></li>
          
         <Button title="Sign in"/>
         </ul>
      </div>

    </nav>
  )
}

export default Navbar