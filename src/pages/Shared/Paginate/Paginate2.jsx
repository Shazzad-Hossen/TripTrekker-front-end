import React from 'react';

const Paginate2 = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const renderPages = () => {
    if (totalPages <= 5) {
      return pages.map((page) => renderPageItem(page));
    }

    const visiblePages = getVisiblePages();
    return visiblePages.map((page, index) => {
      if (page === '...') {
        return <li key={index} className="mx-2">...</li>;
      }
      return renderPageItem(page);
    });
  };

  const getVisiblePages = () => {
    const offset = 2; // Number of pages to show on either side of the current page
    const totalPagesToShow = 5 + offset * 2;

    if (totalPages <= totalPagesToShow) {
      return pages;
    }

    const firstPage = Math.max(1, currentPage - offset);
    const lastPage = Math.min(totalPages, currentPage + offset);

    let visiblePages = [1];
    if (firstPage > 2) {
      visiblePages.push('...');
    }

    for (let i = firstPage; i <= lastPage; i++) {
      visiblePages.push(i);
    }

    if (lastPage < totalPages - 1) {
      visiblePages.push('...');
    }
    visiblePages.push(totalPages);

    return visiblePages;
  };

  const renderPageItem = (page) => (
    <li
      key={page}
      className={`mx-2 ${
        currentPage === page ? 'bg-blue-100 text-white ' : 'bg-blue-200 text-white hover:bg-blue-100'
      } cursor-pointer px-4 py-2 rounded`}
      onClick={() => onPageChange(page)}
    >
      {page}
    </li>
  );

  return (
    <nav className="flex items-center justify-center mt-4">
      <ul className="flex justify-center items-center flex-wrap gap-2"> {/* Added flex-wrap for responsiveness */}
        <li
          className={`mx-2 cursor-pointer px-4 py-2 rounded ${currentPage === 1 ? 'bg-blue-200/10 text-slate-500 pointer-events-none cursor-not-allowed' : 'hover:bg-blue-100 bg-blue-200 text-white'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </li>
        {renderPages()}
        <li
          className={`mx-2 cursor-pointer px-4 py-2 rounded ${currentPage === totalPages ? 'bg-blue-200/10 text-slate-500 pointer-events-none cursor-not-allowed' : 'hover:bg-blue-100 bg-blue-200 text-white'}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </li>
        <li
          className={`mx-2 cursor-pointer px-4 py-2 rounded ${currentPage === totalPages ? 'bg-blue-200/10 text-slate-500 pointer-events-none cursor-not-allowed' : 'hover:bg-blue-100 bg-blue-200 text-white'}`}
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </li>
      </ul>
    </nav>
  );
};

export default Paginate2;