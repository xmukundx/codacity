import React, { useEffect, useState } from "react";

const Searchbar = ({ handleSearchChange, searchQuery }) => {
  return (
    <div className="relative">
      <input
        onChange={handleSearchChange}
        value={searchQuery}
        placeholder="Search..."
        className="w-28 rounded-xl border-2 border-transparent px-3 py-1 shadow-lg outline-none transition-all focus:border-2 focus:border-purple-400 md:w-48 md:focus:w-56"
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
    </div>
  );
};

export default Searchbar;
