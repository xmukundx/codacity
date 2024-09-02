"use client";
import { useState, useEffect } from "react";
import Loader from "../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../lib/redux/toggleSlice";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const email = Cookies.get("email");
  const isLoading = useSelector(
    (state) => state.toggle?.["isLoading"] || false,
  );
  const { courses } = useSelector((state) => state.courses);
  const reduxDispatch = useDispatch();

  if (!email) {
    return (
      <div className="place-item-center grid min-h-screen-minus-navbar">
        <p>You first need to sign-in to see this page</p>
        <button onClick={() => window.location.href = "/sign-in"}>Sign In</button>
      </div>
    );
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        reduxDispatch(toggle("isLoading"));
        const response = await fetch(`/api/sign-in/${email}`);
        if (response.ok) {
          const curUser = await response.json();
          setUser(curUser);
        } else {
          console.error("Error fetching user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        reduxDispatch(toggle("isLoading"));
      }
    };

    fetchUserDetails();
  }, [email, reduxDispatch]);

  let filteredCourses = [];

  if (user) {
    const purchasedCourseIds = user.purchasedCourses;

    filteredCourses = courses.filter((course) =>
      purchasedCourseIds.includes(course._id),
    );
  }

  if (isLoading) {
    <div className="place-item-center grid min-h-screen-minus-navbar">
      <Loader />
    </div>;
  }

  return (

    <div className="flex min-h-screen-minus-navbar items-center justify-center bg-gradient-to-tr from-yellow-200 to-rose-200">
      {user && (
      <div className="flex flex-col lg:flex-row  lg:w-2/3 overflow-hidden rounded-lg glass shadow-lg">
      {/* Profile Card Section */}
      <div className="flex lg:w-1/3 flex-col items-center justify-center bg-purple-500 text-white py-2">
        <FaUserCircle className="text-6xl" />
        <h2 className="text-2xl font-bold">{user.firstName}</h2>
        <p className="xl:text-sm text-xs">ID: {user._id}</p>
      </div>
      {/* Info Section */}
      <div className="w-2/3 p-6">
        <h2 className="mb-4 text-2xl text-center border-b border-black font-semibold">Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-700">Full Name:</p>
            <p className="text-gray-500">{user.firstName} {user.lastName}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email:</p>
            <p className="text-gray-500">{user.email} </p>
          </div>
        </div>
        <div className="lg:mt-6">
          <h3 className="mb-2 text-xl font-semibold">Enrolled Courses</h3>
          <div className="">
            {/* <div>
              <p className="font-semibold text-gray-700">Recent</p>
              <p className="text-gray-500">School Web</p>
            </div> */}
            <ol className="list-disc pl-5">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, indx) => (
                  <li className="text-gray-500" key={indx}>{course.courseName}</li>
                ))
              ) : (
                <li>No courses purchased</li>
              )}
            </ol>
                      </div>
        </div>
      </div>
    </div>  
      )

      }
      
    </div>
  );
}
