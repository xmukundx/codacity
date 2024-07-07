import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className=" relative bottom-0 text-white
     z-10 w-full h-10 text-xs md:text-sm bg-gray-700 flex justify-between items-center"
    >
      <section className="w-full  md:font-semibold flex justify-evenly  md:justify-between md:px-5 px-2   ">
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
