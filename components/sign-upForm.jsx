"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { ButtonPurple } from "./utilityComponents/buttons";
import { useDispatch } from "react-redux";

const RegistrationForm = ({
  toggle,
  isDisable,
  setIsLogin,
  seePassword,
  seeYourPassword,
}) => {
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const reduxDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", ""); //watch function provides a way to react to changes in the form field value.

  const onSubmit = async (data, event) => {
    const { firstName, lastName, email, password, ...rest } = data; // Destructure the first 4 keys
    const slicedData = { firstName, lastName, email, password };

    try {
      reduxDispatch(toggle("isDisable"));
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(slicedData),
      });

      if (response.ok) {
        alert("Registration successful!");
        setIsLogin(true);
        console.log(setIsLogin);
      } else {
        const errorData = await response.json();
        if (response.status === 409) {
          alert(errorData.message);
        }
      }
    } catch (error) {
      console.error("Error saving user:", error);
    } finally {
      reduxDispatch(toggle("isDisable"));
    }

    event.preventDefault();
  };
  return (
    <div id="registration-form" className="h-fit px-4 py-16 sm:px-6 lg:px-8">
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
              type={`${seePassword ? "text" : "password"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <span
              onClick={seeYourPassword}
              className="absolute inset-y-0 end-0 grid place-content-center px-4"
            >
              <IoEyeOutline
                className={`h-6 w-6 hover:cursor-pointer ${seePassword ? "text-purple-400" : "text-gray-400"}`}
              />
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
              type={`${seeConfirmPassword ? "text" : "password"}`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
              className="absolute inset-y-0 end-0 grid place-content-center px-4"
            >
              <IoEyeOutline
                className={`h-6 w-6 hover:cursor-pointer ${seeConfirmPassword ? "text-purple-400" : "text-gray-400"}`}
              />
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
          <ButtonPurple disabled={isDisable} type="submit">
            Sign Up
          </ButtonPurple>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
