"use client";
import { useState, useEffect } from "react";
import {
  ButtonGray,
  ButtonPurple,
} from "../../../../components/utilityComponents/buttons";
import Loader from "../../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import Modal from "../../../../components/utilityComponents/modal";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedCourse = await GetCourses(params.id);
        setCourse(fetchedCourse);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex h-screen-minus-navbar items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching course: {error.message}
      </div>
    );
  }

  const buyCourseFunc = async () => {
    const username = Cookies.get("username");
    if (!username) {
      alert("You need to log in to purchase this course.");
      window.location.href = "/sign-in";
    }

    try {
      const userId = Cookies.get("username"); // Assuming you set a userId cookie on login
      const id = params.id
      // console.log(userId, id);
      const response = await fetch("/api/courses/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, id }),
      });
      if (response.ok) {
        alert("Course purchased successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error purchasing course: ${errorData.message}`);
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
      <div id="course-detail-page" className=" md:h-screen-minus-navbar pb-8">
        <div className="flex h-[40%]  md:h-[30%] w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 ">
          <h2 className="p-1 font-bold md:outline text-3xl lg:text-5xl">
            {courseName}
          </h2>
        </div>
        <div className="font-semibold">
          <p className="mb-6 pt-8 text-gray-700 md:px-16 sm:px-3 md:w-8/12 md:text-2xl px-1">
            {aboutCourse}
          </p>
          <div className="grid w-full grid-cols-1 gap-4 md:px-16 sm:grid-cols-2 px-1 sm:px-3 md:gap-8">
            <div>
              <span className="font-medium text-gray-700">Duration:</span>
              <span className="text-gray-500">{duration}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Price:</span>
              <span className="text-gray-500">₹{price}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Language:</span>
              <span className="text-gray-500">{language}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Level:</span>
              <span className="text-gray-500">{level}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Category:</span>
              <span className="text-gray-500">{category}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Popularity:</span>
              <span className="text-gray-500">{popularity}</span>
            </div>
            <div className="sm:col-span-2">
              <ButtonPurple
                onClick={handleModal}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Buy Now - ₹{price}
              </ButtonPurple>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} handleModal={handleModal}>
            <div className="h-full w-fit p-5 shadow-lg">
              <h2 className="mt-3 text-3xl font-bold text-purple-500">
                Please confirm before buying the course
              </h2>
              <p className="mb-8 text-xl">
                You are a one step before becoming a better version of yourself{" "}
              </p>
              <div className="text-lg font-semibold">
                <div className="flex justify-between">
                  <span>Course Name: </span>
                  <span>{courseName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Course Duration: </span> <span>{duration}</span>
                </div>
                <span className="flex justify-end mt-10">
                  <ButtonPurple onClick={buyCourseFunc}>
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
}
export default CourseDetailPage;
