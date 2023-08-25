import React, { useEffect, useState } from "react";
import search_icon from "../../assets/icon/search.png";
import Typewriter from "typewriter-effect";
import CoverFlow from 'coverflow-react';

const Banner = () => {
  const [typeWriter,setTypeWriter]= useState(true);
  const [searchVal, setSearchVal] =  useState('');

  useEffect(()=>{
    if(searchVal==='') setTypeWriter(true);
    else if(searchVal!=='') setTypeWriter(false)

  },[searchVal]);
  const imagesArr = [
    'https://i.ibb.co/K5LGnHV/avenue-815297-640.jpg',
    'https://i.ibb.co/rH5Hp8f/nature-3125912-1280.jpg',
    'https://i.ibb.co/rvsvzK0/Sajek-Valley.webp',
    'https://i.ibb.co/55Pw5yB/shutterstock-1134436058.jpg',
    'https://i.ibb.co/PhfpvfX/50104a5ba9bea452159dc69c656a64cf.jpg',
    'https://i.ibb.co/qrNzzX9/Best-Tourist-Places-to-Visit-in-Bangladesh.jpg',
    'https://i.ibb.co/s5yCX2M/dhaka.jpg',
    
 
   
];
  return (
    <div>
      
      <div className=" relative max-w-[800px] px-5 mx-auto ">
      { typeWriter && <div className="absolute top-[120px] sm:top-[240px] left-1/2 transform -translate-x-1/2 md:text-2xl "><Typewriter 
        options={{
          strings: ["Search  places here"],
          autoStart: true,
          loop: true,
        }}
      /></div> }
        <input 
        onChange={(e)=>setSearchVal(e.target.value)}
        value={searchVal}
          className="relative top-[100px] sm:top-[220px] border-[1px] border-[#e2e2e2] p-4 rounded-xl w-full bg-white bg-opacity-50 z-10 focus:outline-[#e2e2e2] text-center text-2xl"
          type="text"
         
        />
        <img
          className=" absolute w-[30px] top-[120px] sm:top-[240px] right-16 "
          src={search_icon}
          alt=""
        />
      </div>
      <div className='flex justify-center overflow-x-hidden '>
      <div className="hidden sm:block pt-80"> <CoverFlow background="transparent" height={350} imagesArr={imagesArr} /> </div>
      <div className="sm:hidden  pt-36"><CoverFlow  background="transparent" imagesArr={imagesArr} /></div>
    </div>
    </div>
  );
};

export default Banner;
