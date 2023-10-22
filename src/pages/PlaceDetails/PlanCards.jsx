import React from 'react';
import Ratings from '../Shared/Ratings';
import { useNavigate } from 'react-router-dom';

const PlanCards = ({ data  }) => {
    console.log(data);
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate('/package/1234')} className='select-none border rounded p-2 min-w-[250px] max-w-[300px] w-full drop-shadow-lg active:scale-95 transform duration-300 hover:-translate-y-1 '>
            <div className="rounded">
                <img className='rounded pointer-events-none' src={import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[0]} alt="" />
            </div>
            <h2 className='font-semibold pt-2 uppercase'>{data?.name}</h2>
            <h2 className='text-sm py-2'>{data?.duration?.day} Days {data?.duration?.night} Night</h2>
            <div className="flex justify-between items-center">
            <Ratings ratings={data?.ratings || 2 } /> <p className='text-[#54741a] font-semibold'>৳ {data?.cost}</p>
            </div>

            
        </div>
    );
};

export default PlanCards;