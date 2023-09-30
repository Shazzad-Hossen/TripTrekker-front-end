import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form"
import Input from '../../Shared/Input';
import DropDown from '../../Shared/Dropdown';
import { useEffect } from 'react';
import { publicGet } from '../../../utilities/apiCaller';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Places = () => {
  const [divisions,setDivisions]= useState([]);
  const [value, setValue] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      useEffect(()=>{
        publicGet('/api/division').then(res=>setDivisions(res?.data.docs))

      },[])


      const onSubmit = (data) => {
        console.log(data);
        
      }
  console.log(value);

    return (
        <div className="">
    <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center"> <button className="border px-2  py-2 mr-5 rounded" onClick={()=>navigate(-1)}><IoIosArrowBack/></button> Places</div>
     <div className=" px-5 md:px-20 py-10 flex gap-4 flex-col lg:flex-row">
        <div className='] w-full'>
            <h1 className='text-blue-100 font-[600] font-chakra text-xl'>Add New Place</h1>
            
            <form className="   w-full p-2 my-5" onSubmit={handleSubmit(onSubmit)}>
               <div className="grid grid-cols-1 lg:grid-cols-2 center gap-10 w-full">
               <Input label='Name' placeholder='Place name' className='w-[50%]'/>
               <div className="w-[50]">
               <DropDown label='Division' data={divisions}/>
               </div>
               </div>
               <h1  className='text-blue-100 font-[600] pb-2 pt-5'>Description</h1>
                <ReactQuill theme="snow" value={value} onChange={setValue} className='h-[400px]  w- full ' />
               
            </form>
        </div>


     </div>
      </div>
    );
};

export default Places;