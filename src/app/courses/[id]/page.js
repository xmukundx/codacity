"use client";
import { useState, useEffect } from "react";
import { ButtonPurple } from "../../../../components/utilityComponents/buttons";
import Loader from "../../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import Modal from "../../../../components/utilityComponents/modal";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../../lib/redux/toggleSlice";
import { BiFontSize } from "react-icons/bi";

async function GetCourses(id) {
  const response = await fetch(`/api/courses/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.statusText}`);
  }
  const data = await response.json();
  return data.result;
}

const CourseDetailPage = ({ params }) => {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  const openModal = useSelector(
    (state) => state.toggle?.["openModal"] || false,
  );
  const isLoading = useSelector(
    (state) => state.toggle?.["isLoading"] || false,
  );
  const reduxDispatch = useDispatch();

  const handleModal = () => {
    reduxDispatch(toggle("openModal"));
  };

  useEffect(() => {
    const fetchData = async () => {
      reduxDispatch(toggle("isLoading"));

      try {
        const fetchedCourse = await GetCourses(params.id);
        setCourse(fetchedCourse);
        document.title = fetchedCourse.courseName;
      } catch (error) {
        setError(error);
      } finally {
        reduxDispatch(toggle("isLoading"));
      }
    };

    fetchData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen-minus-navbar items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen-minus-navbar items-center justify-center text-red-500">
        Error fetching course: {error.message}
      </div>
    );
  }

  const buyCourseFunc = async () => {
    const email = Cookies.get("email");
    const _id = params.id;
    if (!email) {
      alert("You need to log in to purchase this course.");
      window.location.href = "/sign-in";
    }
    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, _id }),
      });

      console.log("Request sent", { email, _id });

      if (response.ok) {
        alert("Course purchased successfully!");
      } else {
        const errorData = await response.json();
        console.log(`Error purchasing course: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error purchasing course: ${error.message}`);
    }
  };

  if (course) {
    const {
      courseName,
      aboutCourse,
      duration,
      price,
      language,
      level,
      category,
      popularity,
    } = course;
    return (
      <div
        id="course-detail-page"
        className="h-fit min-h-screen-minus-navbar pb-8"
      >
        <div className="flex min-h-52 w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 md:h-[30%]">
          <h2 className="p-1 text-3xl font-bold md:outline lg:text-5xl">
            {courseName}
          </h2>
        </div>
        <div className="text-lg font-semibold">
          <p className="mb-6 px-1 pt-8 text-gray-700 sm:px-3 md:w-8/12 md:px-16 md:text-2xl">
            {aboutCourse}
          </p>
          <div className="grid w-full grid-cols-1 gap-4 px-1 sm:grid-cols-2 sm:px-3 md:gap-8 md:px-16">
            <div>
              <span className="text-gray-700">Duration:</span>
              <span className="text-gray-500">{duration}</span>
            </div>
            <div>
              <span className="text-gray-700">Price:</span>
              <span className="text-gray-500">₹{price}</span>
            </div>
            <div>
              <span className="text-gray-700">Language:</span>
              <span className="text-gray-500">{language}</span>
            </div>
            <div>
              <span className="text-gray-700">Level:</span>
              <span className="text-gray-500">{level}</span>
            </div>
            <div>
              <span className="text-gray-700">Category:</span>
              <span className="text-gray-500">{category}</span>
            </div>
            <div>
              <span className="text-gray-700">Popularity:</span>
              <span className="text-gray-500">{popularity}</span>
            </div>
            <div className="sm:col-span-2">
              <ButtonPurple
                onClick={handleModal}
                // className="text-nowrap rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Buy Now - ₹{price}
              </ButtonPurple>
            </div>
          </div>
        </div>
        {openModal && (
          <Modal openModal={openModal} handleModal={handleModal}>
            <div className="h-full w-fit p-2 md:p-5">
              <h2 className="mt-3 text-lg font-bold text-purple-500 md:text-3xl">
                Please confirm before buying the course
              </h2>
              <p className="mb-8 text-sm md:text-base">
                You are a one step before becoming a better version of yourself{" "}
              </p>
              <div className="text-sm font-semibold md:text-lg">
                <div className="flex justify-between">
                  <span>Course Name: </span>
                  <span>{courseName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Course Duration: </span> <span>{duration}</span>
                </div>
                <span className="mt-10 flex justify-end">
                  <ButtonPurple style={"md:text-lg"} onClick={buyCourseFunc}>
                    Total Amount: ₹{price}
                  </ButtonPurple>
                </span>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
};
export default CourseDetailPage;
