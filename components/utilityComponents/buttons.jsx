import React from "react";

const ButtonPurple = ({ children, disabled = false, ...props }) => {
  return (
    <button
      className={`flex max-w-32 cursor-pointer items-center justify-center border-2 ${
        disabled ? 'border-gray-300 text-gray-400' : 'border-purple-500 text-purple-500 hover:bg-purple-500 active:scale-[0.98]  hover:text-white'} bg-transparent shadow-lg duration-300 px-3 py-1`}
      {...props}
      disabled={disabled}
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
