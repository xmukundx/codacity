"use client";
import { useState, useEffect } from "react";
import Loader from "../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setToggleTrue, toggle } from "../../../lib/redux/toggleSlice";
import Modal from "../../../components/utilityComponents/modal";
import { ButtonPurple } from "../../../components/utilityComponents/buttons";
import { FaUserCircle } from "react-icons/fa";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const email = Cookies.get("email");
  const isLoading = useSelector(
    (state) => state.toggle?.["isLoading"] || false,
  );
  const { courses } = useSelector((state) => state.courses);
  const openModal = useSelector(
    (state) => state.toggle?.["openModal"] || false,
  );
  const reduxDispatch = useDispatch();

  const handleModal = () => {
    reduxDispatch(toggle("openModal"));
  };
  useEffect(() => {
    if (!email) {
      alert("Login first, Mr./Ms.");
      window.location.href = "/login"; // Redirect the user to the login page
    }
  }, [email]);
  // useEffect(() => {
  //   if (!email) {
  //     reduxDispatch(setToggleTrue("openModal")); 
  //   }else{
  //     reduxDispatch(setToggleFalse("openModal"));
  //   }
  // }, [email]);
  // if (!email) {
  //   // return (
  //   //   <div className="min-h-screen-minus-navbar">
  //   //     {openModal && (
  //   //       <Modal openModal={openModal} handleModal={handleModal} >
  //   //         <div className="h-full w-fit p-2 md:p-5">
  //   //           <p>
  //   //             Contrary to popular belief, Lorem Ipsum is not simply random
  //   //             text. It has roots in a piece of classical Latin literature from
  //   //             45 BC, making it over 2000 years old. Richard McClintock, a
  //   //             Latin professor at Hampden-Sydney College in Virginia, looked up
  //   //             one of the more obscure Latin words, consectetur, from a Lorem
  //   //             Ipsum passage, and going through the cites of the word in
  //   //             classical literature, discovered the undoubtable source. Lorem
  //   //             Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
  //   //             Bonorum et Malorum" The Extremes of Good and Evil by Cicero,
  //   //             written in 45 BC. This book is a treatise on the theory of
  //   //             ethics, very popular during the Renaissance. The first line of
  //   //             Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
  //   //             in section 1.10.32. The standard chunk of Lorem Ipsum used since
  //   //             the 1500s is reproduced below for those interested. Sections
  //   //             1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
  //   //             Cicero are also reproduced in their exact original form,
  //   //             accompanied by English versions from the 1914 translation by H.
  //   //             Rackham.
  //   //           </p>
  //   //           <ButtonPurple> Go to Login Page</ButtonPurple>
  //   //         </div>
  //   //       </Modal>
  //   //     )}
        
  //   //   </div>
  //   // );
    
  // }

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
    <div className="flex min-h-screen-minus-navbar items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('./codebg4.jpg')" }}>
      {user && (
        <div className="glass flex flex-col overflow-hidden rounded-lg shadow-lg lg:w-2/3 lg:flex-row">
          {/* Profile Card Section */}
          <div className="flex flex-col items-center justify-center bg-purple-500 py-2 text-white lg:w-1/3">
            <FaUserCircle className="text-6xl" />
            <h2 className="text-2xl font-bold">{user.firstName}</h2>
            <p className="text-xs xl:text-sm">ID: {user._id}</p>
          </div>
          {/* Info Section */}
          <div className="w-2/3 p-6">
            <h2 className="mb-4 border-b border-black text-center text-2xl font-semibold">
              Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-700">Full Name:</p>
                <p className="text-gray-500">
                  {user.firstName} {user.lastName}
                </p>
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
                      <li className="text-gray-500" key={indx}>
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
