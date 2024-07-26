const ButtonPurple = ({ children }) => {
  return (
    <button className="rounded-lg border-2 bg-purple-600 px-1 md:px-5 py-1 md:py-2 text-white text-sm font-medium text-nowrap hover:border-purple-500 hover:bg-white hover:text-purple-600 active:bg-purple-100">
      {children}
    </button>
  );
};

const ButtonGray = ({ children }) => {
  <button className="flexAdjustBtn item-center flex w-24 justify-center gap-1 border-2 border-black bg-gray-100 px-3 py-1 font-bold active:bg-purple-500 active:text-white">
    {children}
  </button>;
};

export { ButtonPurple, ButtonGray };
