import React from 'react';
import { BiSolidStarHalf, BiSolidStar  } from "react-icons/bi";


const Ratings = ({ratings, className=''}) => {
   
    const ratingStar = Array.from({length: 5 }, (elem, index)=>{
        let number =  index + 0.5;
        return <span key={index}>
            {ratings>= index+ 1?<BiSolidStar className={`text-[#ffc527] ${className}`}/>: ratings>=number? <BiSolidStarHalf className={`text-[#ffc527] ${className} `}/>:<BiSolidStar className={`text-[#e7e7e7] ${className}`}/>}
        </span>
    })
    return (
        <div className='flex items-center '>
            {ratingStar}
            
        </div>
    );
};

export default Ratings;