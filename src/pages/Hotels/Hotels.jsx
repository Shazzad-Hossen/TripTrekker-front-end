import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';
import HotelCard from '../Shared/hotelCard';

const Hotels = () => {
    const [hotels,setHotels]=useState(null);
    useEffect(()=>{
        publicGet(`/api/hotel?paginate=true`).then(res=>{
       
            if(res?.status===200){
            
                setHotels(res?.data);
            }
            else toast.error(res?.data)
        })

    },[]);

    console.log(hotels);
    return (
        <main>
          
          <h1 className="font-roboto font-[500] text-blue-100 text-[1.5rem]">
        Hotels
      </h1>
      <h2 className="pb-10">Select your favourite hotel</h2>



      {/* Hotels Grid */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {
        hotels?.docs?.map((h, index)=><HotelCard key={index} data={h}/>)
      }
        </div>
      </div>


            
        </main>
    );
};

export default Hotels;