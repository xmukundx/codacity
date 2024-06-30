import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white fixed bottom-0 z-50 w-full text-xs md:text-sm bg-gray-500">
      <section className="w-full md:font-semibold md:mx-10 flex justify-evenly items-center md:justify-between md:px-5 p-x-2   ">
        <div id="left" className="">
          <p>
            <span className="inline-block md:mr-1">
              <FaRegCopyright />
            </span>
            2024 Codacity. All rights reserved.
          </p>
        </div>
        <div id="right">
          <ul className="flex gap-2 md:gap-5 ">
            <li className="hover:cursor-pointer hover:text-purple-500">FAQs</li>
            <li className="hover:cursor-pointer hover:text-purple-500">
              Contact
            </li>
            <li className="hover:cursor-pointer hover:text-purple-500">
              About us
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
