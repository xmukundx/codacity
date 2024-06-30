import Marquee from "react-fast-marquee";


const Marqueediv = () => {
  return (
 <section className="mt-8 mb-10 md:mb-16 ">
<h1 className="text-center  my-3 text-gray-800 text-xl md:text-3xl font-bold ">Placement Partners</h1>
<p className="text-center text-gray-500 font-semibold text-sm md:font-bold md:mb-8 ">Our students have gotten offers from big names</p>
 <div className="my-4 relative md:mx-32">
  
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
 </section>
  );
};

export default Marqueediv;
