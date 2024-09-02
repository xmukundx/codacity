import Achievements from "../../components/achievements";
import Aim from "../../components/aim";
import CoursesCarousal from "../../components/coursesCarousal";
import Hero from "../../components/hero";
import Marqueediv from "../../components/marquee";
import Title from "../../components/utilityComponents/title";


export default function Home() {
  
  
  return (
    <main className="bg-white">
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
      <div id="offer" className="mb-7 hidden sm:block">
        <img src="/offer.png" alt="" />
        
      </div>

      <CoursesCarousal />
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


