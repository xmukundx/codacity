"use client";

const Pagination = ({
  postPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="">
      {pages.map((page, indx) => {
        return (
          <button
            key={indx}
            className={`bg-transparent text-2xl rounded-md h-fit hover:bg-gray-200 font-bold w-10 sm:w-20 ${page == currentPage ? "primary-color" : "text-gray-800"} `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;