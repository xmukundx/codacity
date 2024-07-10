 'use client'
import React, { useState, useEffect } from 'react';  
  
function Test() {  
  const [courses, setCourses] = useState([]);  
  
  useEffect(() => {  
    fetch('/api/courses')  
     .then(response => response.json())  
     .then(data => setCourses(data));  
  }, []);  
  
  return (  
    <div>  
      <h1>Courses</h1>  
      <ul>  
        {courses.map(course => (  
          <li>  
            <h2>{course.courseName}</h2>  
            <p>{course.aboutCourse}</p>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
}  
  
export default Test;  
