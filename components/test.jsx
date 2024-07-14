export default function Test() {
  return (
    <section className="flex w-full flex-col justify-center py-3 pb-16 text-gray-800 sm:flex-row">
      <div className="w-full sm:w-[50%] md:w-[40%]">
        <img
          src="./study.jpg"
          className="mx-auto h-64 w-9/12 object-cover py-2 px-5 sm:h-96 md:h-[63%]"
          alt=""
        />
        {/* <img src="" className="play_icon" alt="" /> */}
      </div>
      <div className="w-full px-2 sm:w-[50%] md:w-[40%]">
        <h3 className="font-semibold text-[#212ea0] md:text-lg">
          From critical skills to technical topics,
        </h3>
        <h2 className="font-bold md:text-xl">
          Codacity supports your professional development.
        </h2>
        <ul className="flex flex-col gap-3 pt-4 text-justify text-sm font-medium sm:gap-5 md:text-base">
          <li>
            {"   "}
            We offer a comprehensive range of coding courses, designed for all
            levels. Whether you're a complete beginner or a seasoned programmer
            looking to refine your skills, we have the resources to propel you
            forward.
          </li>
          <li>
            If traditional learning feels like a chore, this platform transforms
            it into an epic quest. Earn points, unlock badges, and level up as
            you conquer coding challenges. Bite-sized lessons and engaging
            narratives make learning fun and keep you coming back for more. It's
            a perfect fit for those who thrive on competition and enjoy a
            healthy dose of gamification.
          </li>
          <li>
            No matter your background or learning style, Codacity is a perfect
            coding platform waiting to unleash your potential. Take the first
            step today and embark on your journey to becoming a coding master!
          </li>
        </ul>
      </div>
    </section>
  );
}
