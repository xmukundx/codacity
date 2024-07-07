import Marquee from "react-fast-marquee";


const Marqueediv = () => {
  return (
 
 <div className="my-4  md:mx-32 mb-10 md:mb-16 ">
  
<Marquee autoFill pauseOnHover className="flex items-center  cursor-pointer " >
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-150"><img src="/Brands/google.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-0"><img src="/Brands/apple.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-50 "><img src="/Brands/amazon.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast- 0"><img src="/Brands/cisco.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-50"><img src="/Brands/deloitte.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-50"><img src="/Brands/citi.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-150"><img src="/Brands/facebook.png" alt="brands associated with Codacity" /></div>
  <div className="w-20 md:w-28 mx-2 md:mx-9 grayscale contrast-100"><img src="/Brands/samsung.png" alt="brands associated with Codacity" /></div>
</Marquee>
 </div>

  );
};

export default Marqueediv;
