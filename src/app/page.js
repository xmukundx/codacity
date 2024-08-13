import Achievements from "../../components/achievements";
import Aim from "../../components/aim";
import TrendingCourses from "../../components/coursesCarousal";
import Hero from "../../components/hero";
import Marqueediv from "../../components/marquee";
import Test from "../../components/test";
import Title from "../../components/utilityComponents/title";

export default function Home() {

 
  return (
    <main className="bg-white">

    
      
      {/* <Test/> */}
      <Hero />
      <Title
        subTitle={"Our students have gotten offers from big names."}
        title={"Placement Partners"}
      />
      <Marqueediv />
      <Achievements />
      <Title
        subTitle={"Choose the most demanding courses in the market."}
        title={"Most Demanding Courses"}
      />
      <div id="offer" className="relative mb-7 hidden sm:block">
        <img src="/offer.webp" alt="" />
        <p className="absolute right-24 top-5 h-20 w-80 bg-[#0280a5] text-2xl text-white">
          {" "}
          On your 1st purchase via UPI payment!{" "}
        </p>
      </div>

      <TrendingCourses />
      <Title
        subTitle={
          "We offer a comprehensive range of coding courses, designed for all levels."
        }
        title={"Know Our Aim"}
      />
      <Aim />
    </main>
  );
}
