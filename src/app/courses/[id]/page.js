"use client";
import { useState, useEffect } from "react"; 
import { ButtonPurple } from "../../../../components/utilityComponents/buttons";
import Loader from "../../../../components/utilityComponents/Loader";

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
      <div className="flex items-center justify-center h-screen-minus-navbar">
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

  if (!course) {
    return <div className="text-center text-red-500 h-screen-minus-navbar"></div>;
  }

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
      className="container mx-auto h-screen px-4 py-8"
    >
      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{courseName}</h1>
      <p className="mb-6 text-gray-700 md:text-lg">{aboutCourse}</p>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Duration:</span>
          <span className="text-gray-500">{duration}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Price:</span>
          <span className="text-gray-500">₹{price}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Language:</span>
          <span className="text-gray-500">{language}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Level:</span>
          <span className="text-gray-500">{level}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Category:</span>
          <span className="text-gray-500">{category}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium text-gray-700">Popularity:</span>
          <span className="text-gray-500">{popularity}</span>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <ButtonPurple className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Buy Now - ₹{price}
        </ButtonPurple>
      </div>
    </div>
  );
};

export default CourseDetailPage;
