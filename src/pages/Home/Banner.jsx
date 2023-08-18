import React, { useEffect, useState } from "react";
import Coverflow from "react-coverflow";
import search_icon from "../../assets/icon/search.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const [typeWriter,setTypeWriter]= useState(true);
  const [searchVal, setSearchVal] =  useState('');

  useEffect(()=>{
    if(searchVal==='') setTypeWriter(true);
    else if(searchVal!=='') setTypeWriter(false)

  },[searchVal])
  return (
    <div>
      
      <div className=" relative max-w-[800px] px-5 mx-auto ">
      { typeWriter && <div className="absolute top-[220px] left-1/2 transform -translate-x-1/2 md:text-2xl "><Typewriter 
        options={{
          strings: ["Search  places here"],
          autoStart: true,
          loop: true,
        }}
      /></div> }
        <input 
        onChange={(e)=>setSearchVal(e.target.value)}
        value={searchVal}
          className="relative top-[200px] border-[1px] border-[#e2e2e2] p-4 rounded-full w-full bg-white bg-opacity-50 z-10 focus:outline-[#e2e2e2] text-center text-2xl"
          type="text"
         
        />
        <img
          className=" absolute w-[30px] top-[220px] right-16 "
          src={search_icon}
          alt=""
        />
      </div>
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        //navigation={false}
        //enableScroll={true}
        //clickable={true}
        active={0}
        media={{ background: "transparent ", height: "100vh" }}
      >
        <img src="https://i.ibb.co/GtKrv6p/Best-Tourist-Places-to-Visit-in-Bangladesh-1.jpg" />

        <img src="https://i.ibb.co/55Pw5yB/shutterstock-1134436058.jpg" />
        <img src="https://i.ibb.co/PhfpvfX/50104a5ba9bea452159dc69c656a64cf.jpg" />
        <img src="https://i.ibb.co/rvsvzK0/Sajek-Valley.webp" />
        <img src="https://i.ibb.co/K5LGnHV/avenue-815297-640.jpg" />
        <img src="https://i.ibb.co/rH5Hp8f/nature-3125912-1280.jpg" />
      </Coverflow>
    </div>
  );
};

export default Banner;
