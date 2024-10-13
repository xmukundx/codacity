"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ButtonPurple } from "./utilityComponents/buttons";
import { useSelector } from "react-redux";
import Link from 'next/link'

const CoursesCarousal = () => {
  const {courses} = useSelector((state)=> state.courses);
  
  
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={"absolute -right-6 top-1/2 cursor-pointer sm:-right-12"}
        onClick={onClick}
      >
        <FaArrowAltCircleRight className="text-blue-500xl text-2xl text-[#0280a5] active:text-purple-500 sm:text-5xl" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={"absolute -left-6 top-1/2 cursor-pointer sm:-left-12"}
        onClick={onClick}
      >
        <FaArrowAltCircleLeft className="text-blue-500xl text-2xl text-[#0280a5] active:text-purple-500 sm:text-5xl" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
    
    <div id="slider-container" className="mx-auto h-4/5 w-4/6">
      <Slider {...settings}>
        {courses.slice(0, 4).map((item, index) => {
          return (
            <div key={index} className="border-1 relative flex h-fit cursor-pointer flex-col rounded-md  bg-[#0280a5] text-white shadow-md hover:shadow-gray-400">
              <div id="img-container" className="rounded-t-md bg-[#efdd32]  py-3">
                <img
                  src="/codebg3.jpg"
                  alt=""
                  className="mx-auto h-36 w-36 rounded-full sm:h-44 sm:w-44"
                />
              </div>
              <div className="h-48 overflow-hidden md:flex flex-col justify-center items-center md:px-8 md:text-center rounded-b-md px-1">
                <h1 className="text-lg font-bold sm:text-xl md:text-2xl sm:pb-2 ">
                  {item.courseName}
                </h1>
                <span className="pb-3 text-xs sm:text-sm md:text-base ">
                  {item.aboutCourse}
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="mt-5 flex justify-end sm:mt-2 sm:pr-2">
        <ButtonPurple>
          <Link href="/courses">View All</Link>
        </ButtonPurple>
      </div>

    </div>
    </>
  );
};

export default CoursesCarousal;
