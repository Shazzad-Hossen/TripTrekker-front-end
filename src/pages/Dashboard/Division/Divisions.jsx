import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import { useForm } from "react-hook-form"
import Table from '../../Shared/Table/Table';
import SortDropDown from '../../Shared/SortDropDown';

const DIVISION_DATA = {
    docs: [
        {
            id: '12',
            name:'DHAKA',
            slug:'dhaka'
        },
        {
            id: '12',
            name:'DHAKA',
            slug:'dhaka'
        },
        {
            id: '12',
            name:'DHAKA',
            slug:'dhaka'
        },
        {
            id: '12',
            name:'DHAKA',
            slug:'dhaka'
        }
    ]
}

const Divisions = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className="">
    <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center"> <button className="border px-2  py-2 mr-5 rounded" onClick={()=>navigate(-1)}><IoIosArrowBack/></button> Division</div>
     <div className=" px-5 md:px-20 py-10 flex gap-4 flex-col lg:flex-row">
        <div className='max-w-[400px] w-full'>
            <h1 className='text-blue-100 font-[600] font-chakra text-xl'>Add New Division</h1>
            
            <form className="border rounded  w-full p-2 my-5" onSubmit={handleSubmit(onSubmit)}>
                <Input label='Division Name' register={()=>register('name',{required:'Division Name is required'})} errors={errors['name']} placeholder='Division Name. Ex: Dhaka'/>
            
                <Input label='Slug' register={()=>register('slug',{required:'Slug is required'})} errors={errors['slug']} placeholder='Slug. Ex: dhaka'/>

                <div className="flex justify-end">
                    <Button type='submit' className='bg-blue-100 text-white px-4 my-2'>Add</Button>
                </div>
            </form>
        </div>

       <div className="w-full pt-2">
        <div className="w-full flex items-center justify-end">
           <SortDropDown onChange={(value)=>console.log(value)}/>
        </div>
       <Table type='division' data={DIVISION_DATA}/>
       </div>

     </div>
      </div>
    );
};

export default Divisions;