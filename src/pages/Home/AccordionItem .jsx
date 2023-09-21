import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <button
        className="w-full flex justify-between items-center py-2 px-4   focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-start">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
          <p className='bg-blue-500 p-3 rounded-md text-start'>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;