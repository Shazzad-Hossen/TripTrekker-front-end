import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const Scrollable = ({children}) => {
    const scrollableDivRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollableDivRef.current.offsetLeft);
      setScrollLeft(scrollableDivRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollableDivRef.current.offsetLeft;
      const walk = (x - startX) * 1; // Adjust the sensitivity of scrolling
      scrollableDivRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <div  className=" mb-2 flex  items-center gap-4 overflow-x-scroll  scrollable-div select-none pb-4"
        ref={scrollableDivRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}>
            {children}
            
        </div>
    );
};

export default Scrollable;