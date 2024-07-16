'use client'
import { useState, useEffect } from "react"; // Import for state management
import { ButtonPurple } from "../../../../components/utilityComponents/Buttons";
import Loader from "../../../../components/utilityComponents/Loader";

async function GetCourses(id) {
  // Implement error handling (see note below)
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

  // Handle loading state and error gracefully
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"> <Loader/></div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching course: {error.message}
      </div>
    );
  }

  

  const { courseName, aboutCourse, duration, price, language, level, category, popularity } = course;

  // Assuming a purchase API or function is available
  // const handlePurchase = async () => {
  //   try {
  //     // Implement purchase logic here (e.g., call an API)
  //     const purchaseResponse = await fetch('/api/courses/purchase', {
  //       method: 'POST',
  //       body: JSON.stringify({ courseId: course.id }), // Send course ID in request body
  //     });

  //     if (!purchaseResponse.ok) {
  //       throw new Error(`Purchase failed: ${purchaseResponse.statusText}`);
  //     }

  //     const purchaseData = await purchaseResponse.json();
  //     console.log("Purchase successful:", purchaseData); // Handle successful purchase
  //   } catch (error) {
  //     console.error("Purchase error:", error.message); // Log purchase error for debugging
  //     // Optionally, display an error message to the user
  //   }
  // };

  return (
    <div id="course-detail-page" className="container h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseName}</h1>
      <p className="text-gray-700 md:text-lg mb-4">{aboutCourse}</p>
      {/* <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <span className="text-gray-700 font-medium mr-2">Duration:</span>
          <span className="text-gray-500">{duration}</span>
        </div>
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <span className="text-gray-700 font-medium mr-2">Price:</span>
          <span className="text-gray-500">{price}</span>
        </div>
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <span className="text-gray-700 font-medium mr-2">Language:</span>
          <span className="text-gray-500">{language}</span>
        </div>
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <span className="text-gray-700 font-medium mr-2">Level:</span>
          <span className="text-gray-500">{level}</span>
        </div>
        <div className="w-full md:w-1/2 mb-2 md:mb-0">
          <span className="text-gray-700 font-medium mr-2">Category:</span>
          <span className="text-gray-500">{category}</span>
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-gray-700 font-medium mr-2">Popularity:</span>
          <span className="text-gray-500">{popularity}</span>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Duration:</span>
    <span className="text-gray-500">{duration}</span>
  </div>
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Price:</span>
    <span className="text-gray-500">{price}</span>
  </div>
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Language:</span>
    <span className="text-gray-500">{language}</span>
  </div>
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Level:</span>
    <span className="text-gray-500">{level}</span>
  </div>
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Category:</span>
    <span className="text-gray-500">{category}</span>
  </div>
  <div className="flex items-center">
    <span className="text-gray-700 font-medium mr-2">Popularity:</span>
    <span className="text-gray-500">{popularity}</span>
  </div>
</div>
      <ButtonPurple
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-600">
        Buy Now - ₹{price}
      </ButtonPurple>
    </div>
  );
};

export default CourseDetailPage;
