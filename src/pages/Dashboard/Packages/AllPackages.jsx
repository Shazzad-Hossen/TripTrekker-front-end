import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import { AiOutlinePlusSquare } from "react-icons/ai";




const AllPackages = () => {
    const navigate = useNavigate();
    return (
        <div>
         <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
          <button className="border px-2  py-2 mr-5 rounded" onClick={() => navigate(-1)} >
            <IoIosArrowBack />
          </button>
          Packages
        </div>

        <div className="flex justify-end gap-3 items-center"> 
  <Input type='search' className='py-1.5 pl-8' StartIcon={LuSearch} iconClaass='w-[26px] h-[25px] top-[6px] left-[5px] text-gray-300' />
    <Link to='addpackages'><Button className='bg-blue-100 text-white my-5 mx-5'><AiOutlinePlusSquare className='text-white text-xl'/>Add New Place</Button></Link>
  </div>
            
        </div>
    );
};

export default AllPackages;