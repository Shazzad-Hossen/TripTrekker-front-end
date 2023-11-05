import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { privatePatch, publicGet } from '../../../utilities/apiCaller';
import { toast } from '../../../utilities/toast';
import { IoIosArrowBack } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from '../../Shared/Button';
import DropdownV2 from '../../Shared/DropdownV2';
import { useSelector } from 'react-redux';



const OrderDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data,setData]= useState(null);
    const [status,setStatus]= useState('');
    const { user }= useSelector(state=>state.userInfo)

    useEffect(()=>{
        publicGet(`/api/order/${params.id}`).then(res=>{
            res.status===200? (setData(res.data), setStatus(res?.data?.status)): toast.error(res.data);
        })

    },[]);

   const setValue= (name, val)=>{
  setStatus(val);
    
    
   };

   const updateStatus = ()=>{
    privatePatch('/api/order', {id: data?.id, status}).then(res=>{
        console.log(res);
        if(res.status===200){
            toast.success('Successfully Updated');

        }
        else toast.error(res.data)

    })

   }


    return (
        <div>
                <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Orders
      </div> 


      <div className="mx-10 py-16">
        <h1 className='font-roboto text-lg'><span className='font-[600]'>Order Type:</span> {data?.package.type==='hotel'?'Hotel Room':'Travel Package'} </h1>
        <h1 className='font-roboto text-lg'><span className='font-[600]'>Order Date:</span> {new Date(data?.createdAt).toLocaleDateString()} </h1>
        <h1 className='font-roboto text-lg'><span className='font-[600]'>Total Cost:</span> {data?.cost.toFixed(2)} </h1>

        <div className="my-10 border rounded">
            <p className='bg-slate-300 p-2 font-[600] rounded-t font-roboto'>Customer Details</p>
            <table>
                <tr><th className='p-2 border-b text-start'>Name</th> <td className='border-b w-full'>: {data?.user?.fullName}</td></tr>
                <tr><th className='p-2 text-start'>Email</th> <td>: {data?.user?.email}</td></tr>
            </table>
        </div>

        <div className="my-10 border rounded">
            <p className='bg-slate-300 p-2 font-[600] rounded-t font-roboto'>Package Details</p>
            <table>
                <tr><th className='p-2 border-b text-start'>Name</th> <td className='border-b w-full'>: {data?.package?.name}</td></tr>
                {
                data?.package?.type==='agency'? 
                <tr><th className='p-2 text-start border-b'>Cost</th> <td className='border-b'>: ৳ {data?.package?.cost}/person</td></tr>
                :
                <tr><th className='p-2 text-start border-b'>Cost</th> <td className='border-b'>: ৳ {data?.package?.cost}/room (One Day)</td></tr>
                }
                <tr><th className='p-2 text-start border-b'>Duration</th> <td  className='border-b'>: {data?.package?.type==='agency'? data?.package?.duration?.day+' Days '+ data?.package?.duration?.night+' Nights': data?.duration + ' Days'}</td></tr>
                {
                data?.package?.type==='agency'? 
                <tr><th className='p-2 text-start border-b'>Persons</th> <td className='border-b'>: {data?.person}</td></tr>
                :
                <tr><th className='p-2 text-start border-b'>Rooms</th> <td className='border-b'>:  {data?.room}</td></tr>
                }
            </table>
        </div>
       {(user?.role==='agency' || user?.role==='hotel')?  <div className="flex justify-end items-center gap-5">
          <DropdownV2
          className="py-2 w-32 font-[600]" 
          iconClass="w-[25px] h-[25px] text-slate-500"
          modalClass="bottom-11"
          Icon={IoMdArrowDropdown} 
          data={[
            {id: 'pending' , name: 'Pending'},
            {id: 'confirmed' , name: 'Confirmed'},
            {id: 'cancelled' , name: 'Cancelled'},
            {id: 'processing' , name: 'Processing'},
            {id: 'paid' , name: 'Paid'},

          ]}
          value={data?.status}
          onChange={(val)=>setStatus(val.id)}
          />
          <Button type="submit" className="bg-blue-100 text-white" onClick={updateStatus} >Update</Button>
          </div>: '' }
        
        
      </div>
            
        </div>
    );
};

export default OrderDetails;