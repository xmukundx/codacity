"use client";
import React, { useEffect, useState } from "react";
//import Loader from "../../../components/utilityComponents/loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../../lib/redux/coursesSlice";
import Pagination from "../../../components/pagination";
import DisplayCourses from "../../../components/displayCourses";
//import Filter from "../../../components/filter";

const CoursePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const { courses, loading, error } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       dispatch(fetchCourses()); // Dispatch action
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  const coursePerPage = courses.slice(firstPostIndex, lastPostIndex);

  // if (loading) {
  //   return (
  //     <div className="place-item-center grid h-screen-minus-navbar">
  //       <Loader />
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="grid h-screen-minus-navbar place-items-center">
        {error.message}
      </div>
    );
  }
  return (
    <>
      <div className="h-fit  lg:h-screen-minus-navbar">
        {/* <Filter/> */}
       <DisplayCourses coursePerPage={coursePerPage} />
      </div>
      <div className="grid place-items-center relative -top-12">
          <Pagination
            totalPosts={courses.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPage={postPerPage}
          />
        </div>
      {/* <div className="min-h-screen p-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-[20%,80%]">
          <Filter />
          <DisplayCourses coursePerPage={coursePerPage} />
        </div>
        <div className="relative -top-12 grid place-items-center">
          <Pagination
            totalPosts={courses.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPage={postPerPage}
          />
        </div>
      </div> */}
    </>
  );
};

export default CoursePage;
