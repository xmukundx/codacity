"use client";
import { useState, useEffect } from "react";
import Loader from "../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../../lib/redux/toggleSlice";
import { FaUserCircle } from "react-icons/fa";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const email = Cookies.get("email");
  const isLoading = useSelector(
    (state) => state.toggle?.["isLoading"] || false,
  );
  const { courses } = useSelector((state) => state.courses);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    if (!email) {
      alert("Login first, Mr./Ms.");
      window.location.href = "/login"; // Redirect the user to the login page
    }
  }, [email]);

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
    <div
      className="flex min-h-screen-minus-navbar items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('./codebg4.jpg')" }}
    >
      {user && (
        <div className="glass flex flex-col overflow-hidden shadow-lg lg:w-2/3 lg:flex-row mx-2">
          {/* Profile Card Section */}
          <div className="flex flex-col items-center justify-center bg-purple-700 py-2 text-white lg:w-1/3">
            <FaUserCircle className="text-4xl sm:text-6xl" />
            <h2 className="text-xl font-bold sm:text-2xl">{user.firstName}</h2>
            <p className="text-xs xl:text-sm">ID: {user._id}</p>
          </div>
          {/* Info Section */}
          <div className=" p-2 sm:p-6">
            <h2 className="mb-4  text-xl font-semibold lg:text-center sm:text-2xl">
              Information
            </h2>
            <div className="grid w-fit justify-start text-sm sm:grid-cols-2 sm:text-base">
              <p className="font-semibold text-gray-700">Full Name</p>
              <p className="text-nowrap text-gray-700">
                {user.firstName} {user.lastName}
              </p>

              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-700">{user.email} </p>
            </div>
            <div className="mt-5 lg:mt-6">
              <h3 className="mb-4  text-xl font-semibold lg:text-center sm:text-2xl">
                Enrolled Courses
              </h3>
              <div className="">
                <ol className="list-disc pl-5 text-sm sm:text-base">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, indx) => (
                      <li className="text-gray-700" key={indx}>
                        {course.courseName}
                      </li>
                    ))
                  ) : (
                    <li>No courses purchased</li>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
