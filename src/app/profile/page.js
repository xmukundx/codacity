"use client";
import { useState, useEffect } from "react";
import Loader from "../../../components/utilityComponents/loader";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../../lib/redux/coursesSlice";




export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const {courses} = useSelector((state)=> state.courses)
  useEffect(() => {
    const fetchUserDetails = async (email) => {
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      }
    };
  useEffect(()=>{ 
    dispatch(fetchCourses())

  },[])



    const email = Cookies.get("email");
    if (email) {
      fetchUserDetails(email);
    } else {
      alert("You first need to sign-in to see this page");
      window.location.href = "/sign-in";
    }
  }, []);
  console.log(user);
  return (
    <div className="h-screen-minus-navbar">
      {isLoading ? (
        <div className="place-item-center grid h-screen-minus-navbar">
          <Loader />
        </div>
      ) : user ? (
        <div className="h-full">
          <div className="flex h-[50%] w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400">
            <h2 className="text-2xl font-bold text-teal-500 md:text-5xl">
              Profile
            </h2>
          </div>
          <div className="flex h-[50%] w-full flex-col items-center gap-2 bg-gradient-to-r from-white to-slate-200 pt-8 text-start text-2xl font-semibold text-gray-600">
            <div className="mb-10 text-teal-600 absolute top-[40%] h-52 w-[40%] bg-white p-6 shadow-lg rounded-lg flex flex-col justify-center">
              <p className="flex justify-between pb-3">
                <span>Name:</span>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </p>
              <p className="flex justify-between pb-3">
                <span>Email:</span>
                <span>{user.email}</span>
              </p>
              <p className="flex justify-between pb-3">
                <span>Date of join:</span>
                <span>{user.updatedAt.slice(0,10)}</span>
                {/* <span>{user.purchasedCourses.map((i)=> <p>{i}</p>)}</span> */}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Error loading user profile</p>
      )}
    </div>
  );
}
