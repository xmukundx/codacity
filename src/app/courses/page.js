"use client";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/utilityComponents/loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../../lib/redux/coursesSlice";
import Pagination from "../../../components/pagination";
import DisplayCourses from "../../../components/displayCourses";

const CoursePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  // const [courses, setCourses] = useState([]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const { courses, loading, error } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchCourses()); // Dispatch action
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const coursePerPage = courses.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    // during fetch loader will be shown
    return (
      <div className="place-item-center grid h-screen-minus-navbar">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-screen-minus-navbar place-items-center">
        {error.message}
      </div>
    );
  }
  return (
    <>
      <div className="h-screen-minus-navbar">
        <DisplayCourses coursePerPage={coursePerPage} />
      </div>
      <div className="grid place-items-center relative -top-16">
          <Pagination
            totalPosts={courses.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postPerPage={postPerPage}
          />
        </div>
    </>
  );
};

export default CoursePage;
