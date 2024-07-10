import Achievements from "../../components/Achievements";
import TrendingCourses from "../../components/CoursesCarousal";
import Hero from "../../components/Hero";
import Marqueediv from "../../components/Marquee";
import Navbar from "../../components/Navbar";
import Test from "../../components/test";
import TestComponent from "../../components/testComponent";
import Modal from "../../components/utilityComponents/modal";
import Title from "../../components/utilityComponents/Title";

export default function Home() {
 

  return (
    <main>
      {/* <Modal/> */}
      
    
     {/* <Test/> */}
      <Hero /> 
      <Achievements/>
      <Title subTitle={"Our students have gotten offers from big names"} title={"Placement Partners"} />
      <Marqueediv/>
      <Title subTitle={"Choose the most demanding courses in the market"} title={"Top Courses"} />
      <TrendingCourses/>
    
    </main>

  );
}
