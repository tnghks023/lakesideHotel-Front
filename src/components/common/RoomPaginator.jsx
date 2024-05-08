import React from "react";

const RoomPaginator = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav aria-label="Room navigation">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              currentPage === pageNumber ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomPaginator;
