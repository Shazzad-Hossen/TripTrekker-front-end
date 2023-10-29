import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import { Map, Marker } from "pigeon-maps"
import HotelPackCard from './HotelPackCard';




const HotelDetails = () => {
    const params = useParams();
    const [data,setData]=useState(null);
    const [packages,setPackages]= useState(null);

    useEffect(()=>{
        publicGet(`/api/hotel/${params?.id}`).then(res=>{
            if(res?.status===200) {
                setData(res?.data);
                publicGet(`/api/package?hotel=${res?.data?.id}&paginate=true`).then(res=>{
                    if(res?.status===200) setPackages(res.data);
                })
            }
            else toast.error(res?.data);
        })
    },[]);

    

  console.log(packages);
    return (
      <main>
        <div className="flex items-center gap-10">
          {!data || (data && data?.logo === "") ? (
            <div className="flex justify-center items-center bg-sky-400 w-[100px] h-[100px] rounded-full text-white font-[600] text-4xl  border shadow-md p-1">
              {" "}
              {data ? data?.name[0] : "X"}
            </div>
          ) : (
            <img
              className="w-[100px] h-[100px] rounded-full border shadow-md p-1"
              src={`${import.meta.env.VITE_SERVER_URL}/api/${data.logo}`}
              alt=""
            />
          )}
          <div className="">
            <h1 className="text-xl font-[600] font-roboto text-blue-100">
              {data?.name}
            </h1>
            <h1 className="text-md font-[400] font-roboto text-blue-400">
              {data?.place?.name}, {data?.division?.name}.
            </h1>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-blue-200 font-[600] text-2xl pb-7">
            Contact Information
          </h1>
          <div className="flex  items-center gap-3 pb-2">
            <AiOutlinePhone className="text-blue-200" />{" "}
            <p className="text-sm text-blue-200">{data?.user?.phone}</p>
          </div>
          <div className="flex  items-center gap-3 pb-2">
            <HiOutlineMail className="text-blue-200" />{" "}
            <p className="text-sm text-blue-200">{data?.email}</p>
          </div>
          <div className="flex  items-center gap-3 pb-2">
            <FaAddressBook className="text-blue-200" />{" "}
            <p className="text-sm text-blue-200">{data?.address}</p>
          </div>
        </div>
        <h1 className='text-blue-200 font-[600] text-2xl py-7'>Map Location</h1>
        {data? <Map
          height={200}
          defaultCenter={[data?.latitude, data?.longitude]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[data?.latitude, data?.longitude]} />
        </Map> :''}

        <h1 className='text-blue-200 font-[600] text-2xl py-16'>Packages</h1>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    packages?.docs?.map((item, index)=> <HotelPackCard key={index} data={item}/>)
                }
            </div>
        </div>
      </main>
    );
};

export default HotelDetails;