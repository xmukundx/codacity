import AccordionContainer from "../../../components/Accordion";



export const metadata = {
  title: 'Frequently Asked Question - CODACITY',
  description: 'Submit the form to get in touch with us and our customer service will reach you.',
};

const Page = () => {
  
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center pt-[5%] sm:justify-start ">
      <div className="my-10 flex w-full justify-center px-5 md:w-2/5">
        <h1 className="text-2xl sm:text-nowrap sm:text-3xl md:text-4xl">
          <span className="font-extrabold text-purple-500">Got Questions?</span>
          <span className="">&nbsp; We've Got Answers!</span>
        </h1>
      </div>

      <div className="w-4/5 self-center rounded-lg  mb-10 bg-gray-50 p-4 md:mx-3 md:w-3/5 shadow-md">

        <AccordionContainer/>
      </div>
    </div>
  );
};

export default Page;
