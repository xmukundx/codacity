"use client";
import { IoEyeOutline } from "react-icons/io5";
import { ButtonPurple } from "../../../components/utilityComponents/buttons";
import SignUp from "../../../components/sign-upForm";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../lib/redux/toggleSlice";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [seePassword, setSeePassword] = useState(false);

  const isDisable = useSelector(
    (state) => state.toggle?.["isDisable"] || false,
  );

  const reduxDispatch = useDispatch();

  const seeYourPassword = () => setSeePassword(!seePassword);

  const email = Cookies.get("email");

  useEffect(() => {
    if (email) {
      alert("You are already Signed in");
      window.location.href = "/";
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reduxDispatch(toggle("isDisable"));
    try {
      const response = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Signin Successful");
        const responseData = await response.json();
        
        Cookies.set("email", responseData.email, {
          path: "/",
          expires: 1 / 24,
        });

        window.location.href = "/";
      } else {
        const errorData = await response.json();
        alert("Sign in failed", errorData);
      }
    } catch (error) {
      console.error("error while submitting" + error);
    }
    reduxDispatch(toggle("isDisable"));
  };

  return (
    <div className="">
      {isLogin ? (
        <div
          id="form-page"
          className="min-h-screen-minus-navbar overflow-scroll px-4 py-16 sm:px-6 lg:px-8"
        >
          <main>
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
              <p className="mt-4 text-gray-600">
                Sign in to access your account and enjoy the full range of
                features our platform offers. Please enter your credentials
                below.
              </p>
            </div>

            <form
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Regular expressions (regex) are special text patterns used to match specific sequences of characters.
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
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

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  No account yet? &nbsp;
                  <span
                    onClick={() => setIsLogin(false)}
                    className="font-bold underline hover:cursor-pointer hover:text-gray-800"
                  >
                    Create one
                  </span>
                </p>
                <ButtonPurple disabled={isDisable}>Sign in</ButtonPurple>
              </div>
            </form>
          </main>
        </div>
      ) : (
        <div>
          <SignUp
            isDisable={isDisable}
            toggle={toggle}
            setIsLogin={setIsLogin}
            seeYourPassword={seeYourPassword}
            seePassword={seePassword}
            setSeePassword={setSeePassword}
          />
        </div>
      )}
    </div>
  );
}
