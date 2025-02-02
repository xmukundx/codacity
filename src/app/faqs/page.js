import Accordion from "../../../components/Accordion";

export const metadata = {
  title: 'Frequently Asked Question - CODACITY'
};

const Page = () => {
  
  return (
    <div className="flex flex-col min-h-screen-minus-navbar  sm:items-center sm:justify-center  ">
      
      <div className="py-10 self-center flex w-fit justify-center  md:w-2/5">
        <h1 className="text-xl sm:text-nowrap px-4 sm:text-3xl md:text-4xl">
          <span className="font-extrabold primary-color">Got Questions?</span>
          <span className="">&nbsp; We've Got Answers!</span>
        </h1>
      </div>

      <div className="w-4/5 self-center rounded-lg mb-10 bg-gray-50 p-2 sm:p-4 md:mx-auto md:w-3/5 shadow-md">

        <Accordion/>
      </div>
    </div>
  );
};

export default Page;
