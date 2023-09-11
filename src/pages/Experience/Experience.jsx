import React from 'react';
import UserCard from './UserCard';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div className='pt-20 flex flex-start container px-3'>
          <div className="w-full">
          <UserCard/>
          <div className="w-full md:pl-20 flex flex-col gap-5">
            {[1,2,3,4,5,6,7].map((item,i)=><ExperienceCard data={item} key={i}/>)}

          </div>
          </div>
          <div className="lg:max-w-[400px] md:max-w-[300px] w-full hidden md:block"></div>
          
            
        </div>
    );
};

export default Experience;