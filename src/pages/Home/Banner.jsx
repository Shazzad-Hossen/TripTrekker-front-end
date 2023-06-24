import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://wallpapercrafter.com/desktop/38782-Corona-Del-Mar-4k-4K-wallpaper-4K-California-USA-Best-Beaches-in-the-World-travel-tourism-sunset-sunrise-sea.jpg'
    },
    {
      image: 'https://wallpapercave.com/wp/wp3103595.jpg'
     
    },
    
    {
      image: 'https://wallpapercave.com/wp/wp7721695.jpg'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen ">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` h-screen absolute inset-0 ${
            index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
          } transition-opacity duration-500`}
        >
          <img src={slide.image} alt="Banner" className="h-full w-full object-cover contrast-50" />
          <div className="absolute inset-0 "></div>
          <div className=" flex flex-col justify-center h-full absolute top-0 items-center w-full   z-10 ">
          <div className="flex flex-col items-center">
          <div className="flex drop-shadow-md    text-center text-[#5ce6ff] text-7xl font-chakra"><Typewriter  words={['Welcome To TripTrekker']}  cursor   /></div>
          <button className='border-[#9dfade] border-2 text-white bg-[#000000] bg-opacity-5 hover:bg-white hover:text-black p-4 rounded-md mt-10 font-chakra text-lg'>Discover Now</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;