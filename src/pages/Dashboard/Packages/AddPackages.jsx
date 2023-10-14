import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import UploadImage from '../../Shared/UploadImage/UploadImage';
import Input from '../../Shared/Input';
const AddPackages = () => {
    const navigate = useNavigate();
    const [photos,setPhotos]= useState({});


    console.log(photos);
    return (
        <div>
         <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
          <button className="border px-2  py-2 mr-5 rounded" onClick={() => navigate(-1)} >
            <IoIosArrowBack />
          </button>
          Add New Package
        </div>

        <div className="px-10 pt-12">
            <h1 className='text-blue-100 font-[600] pb-3'>Photos</h1>
            <UploadImage  callBack={setPhotos}  />

            <form className='flex flex-col gap-3 mt-10'>
                <Input label='Name' placeHolder='Package name'/>

            </form>

            
        </div>


            
        </div>
    );
};

export default AddPackages;