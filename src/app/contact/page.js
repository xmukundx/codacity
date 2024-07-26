"use client";
import { IoMailOpen, IoMail } from "react-icons/io5";
import { FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonPurple } from "../../../components/utilityComponents/buttons";

const Contact = () => {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "470ba6f2-bb8f-4bab-8f8f-1a4cd7594827");
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 2000);
    } else {
      console.log("Error", result);
      setResult(result.message);
    }
  };

  return (
    <section
      id="contact-section"
      className="flex h-fit flex-col px-7 py-5 text-xs sm:mx-7 sm:flex-row sm:gap-10 sm:pt-24 sm:text-sm md:text-base lg:mx-16 lg:h-screen-minus-navbar"
    >
      <div id="left" className="flex-1 text-gray-600">
        <h2 className="mb-2 flex items-center gap-3 text-xl font-bold text-black sm:whitespace-nowrap sm:text-2xl md:text-3xl">
          Connect with us <IoMailOpen />
        </h2>
        <p className="mb-5 text-justify">
          We value feedback and would love to hear from you! If you have any
          questions, suggestions, or concerns, please don't hesitate to reach
          out to us. You can contact us through our website by filling out the
          contact form, sending an email to support@codacity.com, or by giving
          us a shout on social media at @CodacityOfficial. Our team is always
          here to help and look forward to connecting with you!
        </p>
        <p className="mb-2 flex items-center gap-3">
          <IoMail className="icon-contact" />
          Contact@codacity.com
        </p>
        <p className="mb-2 flex items-center gap-3">
          <FaPhoneVolume className="icon-contact" /> (+91) 880044XXXX
        </p>
        <p className="mb-2 flex items-center gap-3">
          <FaMapMarkerAlt className="icon-contact" /> East of Kailash, New Delhi
          110065
        </p>
      </div>
      <div id="right" className="my-5 w-full flex-1 sm:my-0 lg:ml-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[90%] flex-col text-base sm:w-[90%] sm:gap-1 sm:text-base md:gap-2 lg:w-4/6 lg:w-[80%]"
        >
          <label className="font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your name"
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}

          <label className="font-medium" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your phone number"
            type="text"
            name="phone"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}

          <label className="font-medium" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your message"
            name="message"
            id="message"
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
          <span>
            <ButtonPurple type="submit" className="mt-4">
              Submit
            </ButtonPurple>
          </span>
          <span className="mt-2">{result}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
