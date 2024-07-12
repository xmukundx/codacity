import React, { useEffect, useState } from "react";

const Searchbar = () => {
  const [showInput, setShowInput] = useState(false);


  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get value of input field
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .finally(() => setIsLoading(false));
  }, []);



  return (
    <div class="relative">
      <input
        onChange={handleSearchChange}
        value={searchQuery}
        placeholder="Search..."
        class="focus:border-purple-400 w-28 md:w-48 rounded-xl border-2 border-transparent px-3 py-1 shadow-lg outline-none transition-all md:focus:w-56 focus:border-2"
        name="search"
        type="search"
      />
      <button className={`absolute top-1 right-3 text-gray-500 ${showInput ? "hidden" : ""}`}>

      
      <svg
        class="size-6 text-gray-500"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
