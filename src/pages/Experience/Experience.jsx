import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import ExperienceCard from './ExperienceCard';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';
import Loading from '../Shared/Loading';
import Button from '../Shared/Button';

const Experience = () => {
  const [posts, setPosts]= useState(null);
  const [loading,setLoading]= useState(true);
  const fetchPosts = () =>  publicGet('/api/post').then(res=> {
    setLoading(false);
    if(res?.status===200) setPosts(res?.data);
    else toast.error(res?.data);
  });
  useEffect(()=> {
    fetchPosts();
   
  }, []);

  const handlePostSuccess = () =>{
    window.location.reload();
  }
  const handleLoadMore = (page) => {
    publicGet(`/api/post?page=${page}`).then(res=> {
      setLoading(false);
      if(res?.status===200) setPosts(prev=> {
        // prev?.docs = [...prev.docs,...res?.data?.docs]
        prev.docs= [...prev.docs, ...res.data.docs]
        prev.nextPage = res?.data?.nextPage;
        return {...prev}
      });
      else toast.error(res?.data);
    });

  }

  console.log(posts);

  if(loading) return <Loading />

    return (
        <div className='py-20 flex flex-start container px-3'>
          <div className="w-full">
          <UserCard callBack={handlePostSuccess}/>
          <div className="w-full md:pl-20 flex flex-col gap-5">
            {posts?.docs?.map((item,i)=><ExperienceCard datas={item} key={i}/>)}

          </div>
          {
            posts?.nextPage? <div className="flex justify-center pt-10"><Button className='bg-blue-200/50 text-blue-100' onClick={() => handleLoadMore(posts?.nextPage)}>Load More</Button></div>:"'"
          }
          </div>
          <div className="lg:max-w-[400px] md:max-w-[300px] w-full hidden md:block"></div>
          
          
            
        </div>
    );
};

export default Experience;