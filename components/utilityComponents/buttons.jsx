import React from "react";

const ButtonPurple = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-nowrap rounded-lg border-2 border-purple-500 bg-white px-1 py-1 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-100 md:px-5 md:py-2"
    >
      {children}
    </button>
  );
};

const ButtonGray = ({ children, ...props }) => {
  <button
    {...props}
    className="flex w-24 justify-center gap-1 text-nowrap rounded-lg border-2 border-black bg-gray-100 px-3 py-1 font-bold active:bg-purple-500 active:text-white"
  >
    {children}
  </button>;
};

export { ButtonPurple, ButtonGray };
