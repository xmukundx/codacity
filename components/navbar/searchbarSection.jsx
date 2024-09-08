

const SearchbarSection = ({ handleSearchChange, searchQuery }) => {
  return (
    <div className="relative text-sm font-normal hover:text-purple-500">
      <div className="relative">
        <input
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Search..."
          className="w-28 rounded-xl border-2 border-transparent px-3 py-1 shadow-lg outline-none transition-all focus:border-2 focus:border-purple-400 md:w-36 md:focus:w-40 lg:w-48 lg:focus:w-56"
          name="search"
          type="search"
        />
        <button className={`absolute right-3 top-1 text-gray-500`}>
          {!searchQuery && (
            <svg
              className="size-6 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          )}
        </button>
        .
      </div>

      {(state.toggleMobile || !isMobile) && state.searchQuery.length > 0 && (
        <ul className="absolute right-4 z-20 w-fit text-nowrap rounded-md bg-white text-gray-800 shadow-lg md:right-auto md:top-11">
          {filteredCourses.slice(0, 5).map((course, indx) => (
            <li
              key={indx}
              className="my-2 cursor-pointer rounded-md border-t text-xs hover:bg-gray-100 sm:text-base md:my-0 md:px-2 md:pt-3"
            >
              {state.toggleMobile
                ? course.courseName.slice(0, 35) + "..."
                : course.courseName.slice(0, 50) + "..."}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchbarSection;
