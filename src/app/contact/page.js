"use client"
import { IoMailOpen } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "470ba6f2-bb8f-4bab-8f8f-1a4cd7594827");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact-section" className="flex  flex-col sm:gap-10 sm:flex-row my-10 sm:my-24 mx-7 sm:mx-7 md:mx-16 text-xs sm:text-sm md:text-base ">
      <div id="left" className="text-gray-700  flex-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black flex sm:whitespace-nowrap gap-3 items-center mb-2">
          Send us a message <IoMailOpen className="" />
        </h2>
        <p className="text-justify mb-5">
        We value feedback and would love to hear from you! If you have any questions, suggestions, or concerns,
          please don't hesitate to reach out to us. You can contact us through
          our website by filling out the contact form, sending an email to
          support@codacity.com, or by giving us a shout on social media at
          @CodacityOfficial. Our team is always here to help and look forward to
          connecting with you!
        </p>
        <p className="flex gap-3 items-center mb-2">
          <IoMail className="icon-contact" />
          Contact@codacity.com
        </p>
        <p className="flex gap-3 items-center mb-2">
          <FaPhoneVolume className="icon-contact" /> (+91) 880044XXXX
        </p>
        <p className="flex gap-3 items-center mb-2">
          <FaMapMarkerAlt className="icon-contact" /> East of Kailash, New Delhi 110065
        </p>
      </div>
      <div id="right" className="flex-1 w-full my-5 sm:my-0 lg:ml-10">
      
        <form onSubmit={onSubmit} className="flex flex-col sm:gap-1 text-xs sm:text-base w-[90%] sm:w-[80%] md:w-4/6" >

          <label htmlFor="name">Your Name</label>
          <input className="bg-purple-100 rounded-md p-2 mb-4 " placeholder="Enter your name" type="text" name="name" id="name" />
          <label htmlFor="phone">Phone Number</label>
          <input className="bg-purple-100 rounded-md p-2 mb-4 " placeholder="Enter your phone number"  type="text" name="phone" id="name" />
          <label htmlFor="area">Type Your Message here</label>
          <input className="bg-purple-100 rounded-md p-2 mb-4  h-28" placeholder="Enter your message" name="area" id="area" type="area"  ></input>
          <button type="submit" className="bg-purple-500 text-white hover:bg-white hover:border-purple-500 hover:text-purple-500 border-2 w-fit font-bold py-1 px-3 rounded">Submit</button>
          <span>{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
