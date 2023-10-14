import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicDelete, publicGet } from "../../../utilities/apiCaller";
import { toast } from "../../../utilities/toast";
import Table from "../../Shared/Table/Table";
import Swal from "sweetalert2";

const AllHotels = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [hotels,setHotels] = useState({});

  useEffect(()=>{
    fetchData();

  },[filter]);
  const fetchData = () => {
    publicGet(`/api/hotel?status=${filter}`).then(res=>{
        if(res.status===200) {
            setHotels(res.data);
        }
        else toast.error(res.data)
     })
  }

  const callBackHandler = (type,id) => {
    if(type==='delete') {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                publicDelete(`/api/hotel/${id}`).then(res=>{
                    if(res.status===200){
                        console.log(res);
                        toast.success('Successfully deleted');
                         fetchData();
                    }
                    else{
                        toast.error(res.data)
                    }    
                })
            }
          })  
    }
    else {
        navigate(`${id}`)
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
        </button>
        Hotels
      </div>

      <div className="flex items-center gap-5 px-10 pt-20">
        <button className={`${filter==='all'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('all')}>All</button>
        <button className={`${filter==='approved'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'}  font-[600]`} onClick={()=>setFilter('approved')}>Approved</button>
        <button className={`${filter==='pending'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('pending')}>Pending</button>
        <button className={`${filter==='declined'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('declined')}>Declined</button>
        <button className={`${filter==='banned'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('banned')}>Banned</button>
      </div>

      <div className="px-10 py-10"><Table type='hotel' data={hotels} callBack={callBackHandler}/></div>

    </div>
  );
};

export default AllHotels;
