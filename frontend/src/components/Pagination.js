import React from 'react';
import '../Assets/css/Pagination.css';

const Pagination = ({ eventsPerPage, totalEvents, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Maximum number of page buttons to show
  const MAX_BUTTONS = 5;
  let startPage, endPage;

  if (pageNumbers.length <= MAX_BUTTONS) {
    // Show all page numbers
    startPage = 1;
    endPage = pageNumbers.length;
  } else {
    // Calculate which page numbers to show
    const halfButtons = Math.floor(MAX_BUTTONS / 2);
    
    if (currentPage <= halfButtons + 1) {
      // Near the start
      startPage = 1;
      endPage = MAX_BUTTONS;
    } else if (currentPage >= pageNumbers.length - halfButtons) {
      // Near the end
      startPage = pageNumbers.length - MAX_BUTTONS + 1;
      endPage = pageNumbers.length;
    } else {
      // In the middle
      startPage = currentPage - halfButtons;
      endPage = currentPage + halfButtons;
    }
  }

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {/* Previous button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="page-link page-prev"
          >
            <i className="fas fa-chevron-left"></i> Prev
          </button>
        </li>

        {/* First page and ellipsis if needed */}
        {startPage > 1 && (
          <>
            <li className="page-item">
              <button onClick={() => paginate(1)} className="page-link">
                1
              </button>
            </li>
            {startPage > 2 && <li className="page-ellipsis">...</li>}
          </>
        )}

        {/* Page numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}

        {/* Last page and ellipsis if needed */}
        {endPage < pageNumbers.length && (
          <>
            {endPage < pageNumbers.length - 1 && <li className="page-ellipsis">...</li>}
            <li className="page-item">
              <button
                onClick={() => paginate(pageNumbers.length)}
                className="page-link"
              >
                {pageNumbers.length}
              </button>
            </li>
          </>
        )}

        {/* Next button */}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button
            onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
            className="page-link page-next"
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;