import React from 'react';
import { useNavigate } from 'react-router-dom';


const PromotionCard = ({data}) => {
    const navigate = useNavigate();

    return (
      
            <div className="mr-5">
                <img className=' w-[300px] object-cover rounded shadow-md active:scale-95 rlative cursor-pointer' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.image}`} alt="" onClick={()=> navigate(`/offer/${data?.id}`)} />
            </div>
            
    
    );
};

export default PromotionCard;