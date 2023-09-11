import React from 'react';
import ImageUploader from '../Shared/ImageUploader';
import { IoLocationSharp, IoImages } from "react-icons/io5";
import { useState } from 'react';

const UserCard = () => {
    const [isLocation,setIslocation]=useState(true);
    const [isPhoto,setIsphoto]=useState(true);
    return (
        <div className='rounded p-3 w-full flex gap-4'>
            <img className='max-h-[50px] max-w-[50px] rounded-full border-2 border-[#666666]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" alt="" />
            <div className="w-full">
            <textarea type="text" className="scrollable-div border  bg-[white] max-h-[300px] min-h-[100px] w-full rounded-md p-5 placeholder:text-[#aaaaaa] outline-none focus:placeholder:opacity-0 mb-3"placeholder='Your text here' />
            <div className="flex items-center gap-4 pb-5"><span  className='flex items-center gap-2 cursor-pointer'><IoLocationSharp className='text-[#4fa32e] h-[20px] w-[20px]'/>Location</span> {isPhoto?<span onClick={()=>setIsphoto(false)} className='flex items-center gap-2 cursor-pointer'><IoImages className='text-[#4fa32e] h-[20px] w-[20px]'/>Photos</span>:''}</div>
            {isPhoto?'':<ImageUploader/>}
            </div>
            
        </div>
    );
};

export default UserCard;