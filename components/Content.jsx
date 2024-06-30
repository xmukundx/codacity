"use client";
import { useState } from "react";
import contentImg from "../public/contentImages/contentImg1.png";
import Image from "next/image";

const Content = () => {
  const [selectedImage, setSelectedImage] = useState("image1");

  const handleButtonClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="h-[10px]">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="grid grid-rows-3">
          <div
            className="   font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick("image1")}
          >
            <h1>Hands-on training</h1>
            <p>
              Upskill effectively with AI-powered coding exercises, practice
              tests, skills assessments, labs, and workspaces.
            </p>
          </div>
          <div
            className="   font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick("image2")}
          >
            <h1>Certification prep</h1>
            <p>
              Prep for industry-recognized certifications by solving real-world
              challenges and earn badges along the way.
            </p>
          </div>
          <div
            className="   font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick("image3")}
          >
            <h1>Insights and analytics</h1>
            <p>
              Enterprise Plan Fast-track goals with advanced insights plus a
              dedicated customer success team to help drive effective learning.
            </p>
          </div>
        </div>
        <div className="h-full bg-yellow-400">
          {selectedImage && (
            <img width='200px'
              src={(() => {
                switch (selectedImage) {
                  case "image1":
                    return "/contentImages/contentImg1.png";
                  case "image2":
                    return "/contentImages/contentImg2.png";
                  case "image3":
                    return "/contentImages/contentImg3.png";
                  default:
                    return null;
                }
              })()}
              alt={selectedImage}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default Content;
