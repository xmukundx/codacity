import { IoMailOpen, IoMail } from "react-icons/io5";
import { FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../../../components/contactForm";

export const metadata = {
  title: 'Contact Us - CODACITY',
  description: 'Submit the form to get in touch with us and our customer service will reach you.',
};


const Page = () => {
  return (
    <section
      id="contact-section"
      className="flex h-fit  flex-col px-7 py-5 text-xs sm:mx-7 sm:flex-row sm:gap-10 sm:pt-24 sm:text-sm md:text-base lg:mx-16 lg:h-screen-minus-navbar"
    >
      <div id="left" className="flex-1 text-gray-600">
        <h2 className="mb-2 flex items-center gap-3 text-xl font-bold text-black sm:whitespace-nowrap sm:text-2xl md:text-3xl">
          Connect with us <IoMailOpen />
        </h2>
        <p className="mb-5 text-justify">
          We value feedback and would love to hear from you! If you have any
          questions, suggestions, or concerns, please don't hesitate to reach
          out to us. You can contact us through our website by filling out the
          contact form, sending an email to support@codacity.com, or by giving
          us a shout on social media at @CodacityOfficial. Our team is always
          here to help and look forward to connecting with you!
        </p>
        <p className="mb-2 flex items-center gap-3">
          <IoMail className="icon-contact" />
          Contact@codacity.com
        </p>
        <p className="mb-2 flex items-center gap-3">
          <FaPhoneVolume className="icon-contact" /> (+91) 880044XXXX
        </p>
        <p className="mb-2 flex items-center gap-3">
          <FaMapMarkerAlt className="icon-contact" /> East of Kailash, New Delhi
          110065
        </p>
      </div>
      <div id="right" className="my-5 w-full flex-1 sm:my-0 lg:ml-10">
      <ContactForm/>
      </div>
      
    </section>
  );
};

export default Page;
