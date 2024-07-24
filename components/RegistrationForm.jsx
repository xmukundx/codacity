"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { ButtonPurple } from "./utilityComponents/Buttons";


const RegistrationForm = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", ""); //watch function provides a way to react to changes in the form field value.

  //data post
  const onSubmit = async (data, event) => {
    const { firstName, lastName, email, password, ...rest } = data; // Destructure the first 4 keys
    const slicedData = { firstName, lastName, email, password}; 
    
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slicedData),
      });

      if (response.ok) {
        alert('Student created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error saving student:', errorData);
      }
    } catch (error) {
      console.error('Error saving student:', error);
    }

    event.preventDefault();
  };

  // const onSubmit =(data) => {
  //   const { firstName, lastName, email, password, ...rest } = data; // Destructure the first 4 keys
  //   const slicedData = { firstName, lastName, email, password}; 
  //   console.log(slicedData)


  // };

  return (
    <div id="registration-form" className="px-4 py-16 sm:px-6 lg:px-8 h-fit ">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create an Account!</h1>
        <p className="mt-4 text-gray-600">
          Join us today! Enter your details below to create your account.
        </p>
      </div>

      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="sr-only" htmlFor="firstName">
            First Name
          </label>
          <input
            placeholder="First Name"
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            id="firstName"
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="lastName">
            Last Name
          </label>
          <input
            placeholder="Last Name"
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            id="lastName"
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter your email"
            className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              placeholder="Enter your password"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <IoEyeOutline className="h-6 w-6 text-gray-400" />
            </span>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              placeholder="Confirm your password"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <IoEyeOutline className="h-6 w-6 text-gray-400" />
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Already have an account? &nbsp;
            <span
              onClick={() => setIsLogin(true)}
              className="font-bold underline hover:cursor-pointer hover:text-gray-800"
            >
              Sign in
            </span>
          </p>
          <ButtonPurple type="submit" className="ml-4">
            Register
          </ButtonPurple>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
