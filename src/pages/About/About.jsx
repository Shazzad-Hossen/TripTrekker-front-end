import React from 'react';
import { useRef } from 'react';
import video from '../../assets/videos/tt_about.mp4';
import { useState } from 'react';
import play from "../../assets/icon/play.svg";
import pasue from "../../assets/icon/pause.svg";
import { useEffect } from 'react';


const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const [hover, setHover] = useState(true)
    const togglePlay = () => {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };



    

    return (
        <div className='grid lg:grid-cols-1 pt-10'>

<div className="flex h-full justify-center items-center">
<div className="w-full max-w-[1000px]">
      <div onMouseOver={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="relative w-full px-5">
      <video  ref={videoRef} width="100%" height="100%" className="w-full rounded-3xl" >
        <source src={video} type="video/mp4" />
      </video>
      <span className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
       {hover && <img onClick={togglePlay} src={isPlaying ?  pasue : play } />}
      </span>
    </div>
      </div>
</div>

             <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <p className="mt-4 text-lg text-center text-gray-700">
            TripTrekker is a Tourism platform website that provides comprehensive travel solutions for our users. Our platform offers various packages like Travel Packages and Hotel Packages. Users can also view Available Hotels in specific locations. 
          </p>
          <p className="mt-4 text-lg text-center text-gray-700">
            Besides, TripTrekker aims to help users discover the best tourist attractions and activities in their preferred locations. Our website ensures an immersive experience by incorporating interactive maps, vivid images, and informative content. 
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;