import React from 'react';

const Dialog = ({ title, children, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-900/50 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="bg-white rounded-lg shadow-md p-4 w-full max-w-md"
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <h2 id="dialog-title" className="text-lg font-bold text-gray-800">
          {title}
        </h2>
        {children}
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;