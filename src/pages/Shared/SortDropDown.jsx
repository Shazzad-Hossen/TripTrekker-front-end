import React from 'react';
import { useState } from 'react';
import { BiSort } from "react-icons/bi";


const SortDropDown = ({onChange=()=>{}}) => {
    const[isOpen,setIsopen]= useState(false) ;
    const [selected,setSelected]= useState('');
    const handleSelect = (value)=>{
        setSelected(value);
        setIsopen(false);
        onChange(value)

    }

    return (
        <div className='relative'>
           <button className='border rounded py-2 px-3 mb-2' onClick={()=>setIsopen(prev=>!prev)}><BiSort/></button>
           {
            isOpen?<div className="bg-white shadow-md min-w-[80px]  font-[400] text-sm absolute top-9 right-0 ">
            <h1 className={`border-b border-gray-200 p-2 hover:bg-blue-400/10 cursor-pointer ${selected==='asc'?'bg-blue-400/40':''}`} onClick={()=>handleSelect('asc')}>ASC</h1>
            <h1 className={`p-2 hover:bg-blue-400/10 cursor-pointer ${selected==='desc'?'bg-blue-400/40':''}`} onClick={()=>handleSelect('desc')}>DESC</h1>
           </div>:''
           }
        </div>
    );
};

export default SortDropDown;