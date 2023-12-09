import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const PromotionCard = ({data}) => {

    return (
      
            <div className="mr-5">
                <img className=' w-[300px] object-cover rounded shadow-md active:scale-95 rlative cursor-pointer' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.image}`} alt="" />
            </div>
            
    
    );
};

export default PromotionCard;