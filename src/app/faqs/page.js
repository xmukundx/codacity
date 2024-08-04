"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const Accordion = ({ Question, Answer }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <div className="border-b border-black py-2 text-sm sm:text-lg">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <span>
          <span
            className={`font-bold ${openAccordion ? "text-purple-500" : ""}`}
          >
            {Question}
          </span>
        </span>
        <span>
          {openAccordion ? <FiMinus className="text-purple-500" /> : <FiPlus />}
        </span>
      </button>
      <div
        className={`grid text-justify text-slate-800 transition-all duration-300 ${openAccordion ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div
          onClick={() => setOpenAccordion(false)}
          className="overflow-hidden"
        >
          {Answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const FAQ_DATA = [
    {
      Question: "When are the live classes held?",
      Answer:
        "Live classes are normally held 2 times a week, with the exact class days and timings being determined by the batch. However, given all learners would be software engineers that are currently working, the classes would be held in the late evening or night on weekdays and any suitable time over the weekends.",
    },
    {
      Question: "Will I get a certification after completion?",
      Answer:
        "After the end of the any of Codacity's course, you will receive a course completion certificate",
    },
    {
      Question:
        "Do I need any skills or experience to enroll in these courses?",
      Answer:
        "You will not require any skills or experience for beginner-level courses. However, you may need some prerequisites for intermediate or advanced courses. If any prerequisites are needed, they will be mentioned in the course itself.",
    },
    {
      Question: "Are you accredited or licensed by educational organizations?",

      Answer:
        "There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-[5%] sm:justify-start">
      <div className="my-10 flex w-full justify-center px-5 md:w-2/5">
        <h1 className="text-2xl sm:text-nowrap sm:text-3xl md:text-4xl">
          <span className="font-extrabold text-purple-500">Got Questions?</span>
          <span className="">We've Got Answers!</span>
        </h1>
      </div>

      <div className="w-4/5 self-center rounded-lg  mb-10 bg-gray-50 p-4 md:mx-3 md:w-3/5">
        {FAQ_DATA.map((data, index) => (
          <Accordion
            key={index}
            Question={`${index + 1}. ${data.Question}`}
            Answer={data.Answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
