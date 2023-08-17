import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

const Banner = () => {
  return (
    <div>
      <div className="max-w-[800px] px-5 mx-auto ">
    <input className='relative top-[200px] border-[1px] border-[#e2e2e2] p-4 rounded-full w-full bg-white bg-opacity-50 z-10 focus:outline-[#e2e2e2]' type="text" />
   </div>
      <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
    media= {{background: 'transparent ', height: '100vh'}}
  >
    
    <img src='https://i.ibb.co/GtKrv6p/Best-Tourist-Places-to-Visit-in-Bangladesh-1.jpg' />

    <img src='https://i.ibb.co/55Pw5yB/shutterstock-1134436058.jpg'/>
    <img src='https://i.ibb.co/PhfpvfX/50104a5ba9bea452159dc69c656a64cf.jpg'/>
    <img src='https://i.ibb.co/rvsvzK0/Sajek-Valley.webp'/>
    <img src='https://i.ibb.co/K5LGnHV/avenue-815297-640.jpg'/>
    <img src='https://i.ibb.co/rH5Hp8f/nature-3125912-1280.jpg'/>
  </Coverflow>

   
      
    </div>
  );
};

export default Banner;