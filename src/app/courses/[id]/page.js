'use client'
import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/utilityComponents/Loader';

const CourseDetailPage = (req, {params}) => {
  
  console.log(params);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/courses/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCourse(data);
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="item-center flex h-screen justify-center">
        <Loader />
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail-page">
      <h1>{course.courseName}</h1>
      <p>{course.aboutCourse}</p>
      <div>Duration: {course.duration}</div>
      <div>Price: {course.price}</div>
      <div>Language: {course.language}</div>
      <div>Level: {course.level}</div>
      <div>Category: {course.category}</div>
      <div>Popularity: {course.popularity}</div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default CourseDetailPage;
