import React from 'react';
import { SlLike } from "react-icons/sl";
import { BiComment } from "react-icons/bi";


const ExperienceCard = () => {
    return (
        <div className='w-full border rounded bg-white drop-shadow-md'>
            <img className='rounded-t' src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg" alt="" />
            <div className="p-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magnam expedita ipsa molestias quibusdam beatae deleniti, incidunt unde odit, quasi ad! Quo laboriosam officiis quas, debitis eaque itaque eius nesciunt similique minus inventore eveniet adipisci, necessitatibus aspernatur quae consequatur error nisi explicabo reiciendis officia fugit nihil cumque ipsum eligendi? Exercitationem.
                <div className="w-full py-3 px-2 flex justify-between items-center border-y mt-4">
                    <span className='flex items-center gap-4 font-semibold'><SlLike className='font-semibold'/> Like</span>

                    <span className='flex items-center gap-4 font-semibold'><BiComment className='font-semibold'/> Comment</span>
                </div>
                <div className="pt-4 flex items-start gap-3">
                    <img className='w-[30px] h-[30px] rounded-full' src="https://satvision.in/wp-content/uploads/2019/06/user.jpg" alt="" />

                    <textarea type="text" className='w-full border rounded-md p-2 h-[50px] outline-none focus:placeholder:opacity-0' placeholder='Write a comment . . .' />
                </div>
            </div>
            
        </div>
    );
};

export default ExperienceCard;