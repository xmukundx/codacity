"use client";

import React, { useRef } from "react";
import { ButtonGray, ButtonPurple } from "./Buttons";

const Modal = () => {
  // modal logic
  const modalRef = useRef(null);
  const closeModal = () => {
    document.getElementById("ptaNahiModal").close();
  };
  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <>
      <button
        className="group cursor-pointer outline-none"
        title="Add New"
        onClick={() => modalRef.current.showModal()}
      >
        this is button
      </button>
      <dialog
        id="ptaNahiModal"
        className="glass fixed w-full h-screen p-8 z-50"
        ref={modalRef}
        onClick={handleOverlayClick}
      >
        <div className="bg-white p-5">
        <form className="flex flex-col">
      <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"/>
      <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password"/>
      <div className="flex items-center justify-between flex-wrap">
        <label for="remember-me" className="text-sm text-gray-900 cursor-pointer">
          <input type="checkbox" id="remember-me" className="mr-2"/>
          Remember me
        </label>
        <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
        <p className="text-gray-900 mt-4"> Don't have an account? <a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
      </div>
      <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
    </form>
        </div>
         
        <ButtonPurple  onClick={closeModal}>
          Close
        </ButtonPurple>
      </dialog>
    </>
  );
};

export default Modal;
