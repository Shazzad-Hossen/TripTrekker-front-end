import React from 'react';
import Ratings from '../Shared/Ratings';
import { useNavigate } from 'react-router-dom';

const PlanCards = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate('/package/1234')} className='select-none border rounded p-2 min-w-[250px] w-full drop-shadow-lg active:scale-95 transform duration-300 hover:-translate-y-1 '>
            <div className="rounded">
                <img className='rounded pointer-events-none' src="https://media.istockphoto.com/id/637491930/photo/marigot-saint-martin-skyline.webp?b=1&s=170667a&w=0&k=20&c=OTUW44j5COvbPTa17RpeD6EoLhCZX2SGmoYM8WIQ5Vc=" alt="" />
            </div>
            <h2 className='font-semibold pt-2 uppercase'>Saint Martin Tour</h2>
            <h2 className='text-sm py-2'>2 Days 3 Night</h2>
            <div className="flex justify-between items-center">
            <Ratings ratings={3.5} /> <p className='text-[#54741a] font-semibold'>৳ 5000</p>
            </div>

            
        </div>
    );
};

export default PlanCards;