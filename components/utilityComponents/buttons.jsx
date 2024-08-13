import React from "react";

const ButtonPurple = ({ children, ...props }) => {
  return (
    // <button
    //   {...props}
    //   className="text-nowrap rounded-lg border-2 border-purple-500 bg-white px-1 py-1 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-100 md:px-5 md:py-2"
    // >
    //   {children}
    // </button>
    <div className="flex max-w-32 cursor-pointer items-center justify-center border-2 border-purple-500 bg-transparent text-purple-500 shadow-lg duration-300 hover:bg-purple-500 hover:text-white active:scale-[0.98]">
      <button {...props} className="px-3 py-1">
        {children}
      </button>
    </div>
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
