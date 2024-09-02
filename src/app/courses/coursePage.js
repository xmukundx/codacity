"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../components/pagination";
import DisplayCourses from "../../../components/displayCourses";
import Loader from "../../../components/utilityComponents/loader";

const CoursePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const { courses, loading, error } = useSelector((state) => state.courses);
  
  
  const coursePerPage = courses.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return (
      <div className="place-item-center min-h-screen-minus-navbar grid h-screen-minus-navbar">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid min-h-screen-minus-navbar place-items-center">
        {error.message}
      </div>
    );
  }
  return (
    <>
      <div className=" min-h-[calc(100vh-6rem)]">
        <DisplayCourses coursePerPage={coursePerPage} />
      </div>
      <div className="relative -top-7  grid place-items-center">
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
