const Loader = () => {
  return (
    <div className="flex gap-2 items-center justify-center bg-white">
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.7s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.3s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.7s]"></div>
    </div>
  );
};

export default Loader;

