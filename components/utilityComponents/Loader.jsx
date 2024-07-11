const Loader = () => {
  return (
    <div className="flex h-(1000px) items-center justify-center">
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.7s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.3s]"></div>
      <div className="h-6 w-6 animate-bounce rounded-full bg-purple-500 [animation-delay:.7s]"></div>
    </div>
  );
};

export default Loader;

