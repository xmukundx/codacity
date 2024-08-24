"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonPurple } from "./utilityComponents/buttons";

export default function ContactForm()  {
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
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-[90%] flex-col text-base sm:w-[90%] sm:gap-1 sm:text-base md:gap-2 lg:w-4/6 "
        >
          <label className="font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
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
          <span className="pt-4">
            <ButtonPurple type="submit" className="">
              Submit
            </ButtonPurple>
          </span>
          <span className="mt-2">{result}</span>
        </form>
  );
};

