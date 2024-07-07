"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "@/utillity/data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ButtonPurple } from "./utilityComponents/Buttons";

const TrendingCourses = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={"absolute -right-6 sm:-right-12 top-1/2 z-10 cursor-pointer"} onClick={onClick}>
        <FaArrowAltCircleRight className="active:text-purple-500 text-blue-500xl text-indigo-950 text-2xl sm:text-5xl" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={"absolute -left-6 sm:-left-12 top-1/2 z-10 cursor-pointer"} onClick={onClick}>
        <FaArrowAltCircleLeft className="active:text-purple-500 text-blue-500xl text-indigo-950 text-2xl sm:text-5xl" />
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
    <div id="slider-container" className="w-4/6 h-4/5 mx-auto">
      <Slider {...settings}>
        {data.slice(0, 4).map((item, index) => {
          return (
            <div className="relative rounded-lg bg-blue-700 border-2 border-trans flex flex-col cursor-pointer shadow-md hover:shadow-gray-400 h-fit  text-white">
              <div id="img" className="bg-slate-300 flex-1 rounded-t-lg py-3">
                <img
                  src="/codebg3.jpg"
                  alt=""
                  className="h-36 sm:h-44 w-36 sm:w-44 mx-auto rounded-full"
                />
              </div>
              <div className="px-1 rounded-b-lg flex-1 h-48">
                <h1 className="text-lg sm:text-xl font-bold">{item.courseName}</h1>
                <span className="text-xs sm:text-sm pb-3">{item.aboutCourse}</span>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-end mt-5 sm:mt-0"><ButtonPurple><a href="/courses">View All</a></ButtonPurple></div>

      {/* <div className="h-full bg-yellow-400">
          {selectedImage && (
            <img width='200px'
              src={(() => {
                switch (selectedImage) {
                  case "image1":
                    return "/Brands.png";
                  case "image2":
                    return "/Brands.png";
                  case "image3":
                    return "/Brands.png";
                  default:
                    return null;
                }
              })()}
              alt={selectedImage}
              className="w-full h-full object-cover"
            />
          )}
        </div> */}
    </div>
  );
};

export default TrendingCourses;
