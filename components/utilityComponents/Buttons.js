const ButtonPurple = ({ children }) => {
  return (
    <button className="rounded-md border-2 bg-purple-500 px-3 py-1 font-bold text-white hover:border-purple-500 hover:bg-white hover:text-purple-500 active:bg-purple-100">
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
