"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";


const AccordionContainer = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

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

  const handleToggle = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div>
      {FAQ_DATA.map((item, index) => (
        <Accordion
          key={index}
          Question={item.Question}
          Answer={item.Answer}
          isOpen={openAccordionIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export const Accordion = ({ Question, Answer, isOpen, onToggle }) => {
  return (
    <div className="py-2 text-sm sm:text-lg">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onToggle}
      >
        <span className={`font-bold ${isOpen ? "text-purple-500" : ""}`}>
          {Question}
        </span>
        <span>{isOpen ? <FiMinus className="text-purple-500" /> : <FiPlus />}</span>
      </button>
      <div
        className={`grid text-justify text-slate-800 transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{Answer}</div>
      </div>
    </div>
  );
};
export default AccordionContainer;
