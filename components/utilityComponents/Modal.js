'use client'
import React, { useState } from 'react';

const Modal = ({ children, triggerText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleModal}>{triggerText}</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 shadow-md">
            {children}
            <button onClick={toggleModal} className="mt-4 text-red-500 hover:text-red-700">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;