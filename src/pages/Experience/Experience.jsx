import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import ExperienceCard from './ExperienceCard';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';

const Experience = () => {
  const [posts, setPosts]= useState(null);
  useEffect(()=> {
    publicGet('/api/post').then(res=> {
      if(res?.status===200) setPosts(res?.data);
      else toast.error(res?.data);
    })
  }, []);

    return (
        <div className='pt-20 flex flex-start container px-3'>
          <div className="w-full">
          <UserCard/>
          <div className="w-full md:pl-20 flex flex-col gap-5">
            {posts?.docs?.map((item,i)=><ExperienceCard data={item} key={i}/>)}

          </div>
          </div>
          <div className="lg:max-w-[400px] md:max-w-[300px] w-full hidden md:block"></div>
          
            
        </div>
    );
};

export default Experience;