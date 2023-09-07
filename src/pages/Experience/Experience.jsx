import React from 'react';
import UserCard from './UserCard';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    return (
        <div className='pt-20 flex flex-start container'>
          <div className="w-full">
          <UserCard/>
          <div className="w-full pl-20 flex flex-col gap-5">
            {[1,2,3,4,5,6,7].map((item,i)=><ExperienceCard data={item} key={i}/>)}

          </div>
          </div>
          <div className="max-w-[400px] w-full"></div>
          
            
        </div>
    );
};

export default Experience;