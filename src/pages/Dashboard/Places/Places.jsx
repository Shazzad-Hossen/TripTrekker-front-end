import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Button from '../../Shared/Button';
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Table from '../../Shared/Table/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicDelete, publicGet } from '../../../utilities/apiCaller';
import Input from '../../Shared/Input';
import { LuSearch } from "react-icons/lu";
import { toast } from '../../../utilities/toast';




const Places = () => {
  const navigate = useNavigate();
  const [ places,setPlaces]= useState(null);
  useEffect(()=>{
    fetchData();
   

  },[]);
  const fetchData = ()=>{
    publicGet(`/api/place?paginate=true`).then(res=>{
      if(res.status===200) {
        setPlaces(res?.data);
      }
      else {
        console.log('error');
      }
    })
  }

  const handleCallback = (type, id) =>{
    if(type==='delete'){
      publicDelete(`/api/place/${id}`). then(res=>{
        if(res.status===200){
          toast.success('Successfully Deleted');
          fetchData();
        }
        else {
          console.log(érror);
        }
      })
    }
    else if(type==='edit'){
      navigate(`edit/${id}`)

    }

  }
  return (
    <div>
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
    
    <button
      className="border px-2  py-2 mr-5 rounded"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowBack />
    </button>{" "}
    Places
  </div>

  <div className="flex justify-end gap-3 items-center"> 
  <Input type='search' className='py-1.5 pl-8' StartIcon={LuSearch} iconClaass='w-[26px] h-[25px] top-[6px] left-[5px] text-gray-300' />
    <Link to='addplaces'><Button className='bg-blue-100 text-white my-5 mx-5'><AiOutlinePlusSquare className='text-white text-xl'/>Add New Place</Button></Link>
  </div>

  <div className="px-5">
  <Table type='place' callBack={handleCallback} data={places}/>
  </div>
      
    </div>
  );
};

export default Places;