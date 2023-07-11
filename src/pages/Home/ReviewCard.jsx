import React from 'react';
import user from '../../assets/icon/user.jpeg'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewCard = () => {
    return (
        <div className='bg-[#ebe9e9] h-[500px] rounded-tl-[100px] rounded-br-[100px] relative p-20'>
            <div className="h-full  relative">
                <FaQuoteLeft className='absolute left-0 top-0 h-[50px] w-[50px]'/>

                <FaQuoteRight className='absolute right-0 bottom-0 h-[50px] w-[50px]'/>
                <p className='p-[80px] text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quos amet minus rem error consequuntur, optio officiis libero aliquid dolorem.</p>
            </div>





           <img className='h-[100px] w-[100px] rounded-full border-4 border-[#acacac] absolute -bottom-[50px] left-0 right-0 mx-auto drop-shadow-lg' src={user} alt="" /> 
            


            
        </div>
    );
};

export default ReviewCard;