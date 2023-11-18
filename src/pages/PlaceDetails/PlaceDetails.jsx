import React, { useState } from "react";
import PlanCards from "./PlanCards";
import Scrollable from "../Shared/Scrollable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { publicGet } from "../../utilities/apiCaller";
import locationIco from '../../assets/icon/location.png';
import { toast } from "../../utilities/toast";
import HotelCard from "../Shared/hotelCard";


const PlaceDetails = () => {
  const [place,setPlace] = useState(null);
  const [bannerImg, setBannerimg] = useState('');
  const [packages,setPackages]=useState([]);
  const [hotels,setHotels]=useState([]);



  const {id} = useParams();
   useEffect(()=>{

    publicGet(`/api/place/${id}`).then(res=>{
      console.log(res);
    if(res.status===200){ 
      setPlace(res.data);
      setBannerimg(res?.data?.thumbnails[0]);

    }
    else {
      console.log(res.data);
    }
      
    })

   },[]);

   useEffect(()=>{
    if(place) {
      publicGet(`/api/package?place=${place?.id}&type=agency`).then(res=>res?.status===200?setPackages(res?.data):toast.error(res?.data));
      publicGet(`/api/hotel?place=${place?.id}`).then(res=>res?.status===200?setHotels(res?.data):toast.error(res?.data));

    }
   },[place])
  

  return (
    <div className="container pt-20  px-3 ">
      <div className="  flex gap-5 h-full max-h-[600px] md:h-[600px] w-full flex-col md:flex-row">
        <div className="w-full h-full ">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/api/${bannerImg}`}
            className="object-cover rounded-lg h-full w-full backdrop-contrast-125"
            alt=""
          />
        </div>
        <div className="  grid grid-cols-3 md:flex md:flex-col gap-3 h-full">
          <img
            onClick={() => setBannerimg(place?.thumbnails[0])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={`${import.meta.env.VITE_SERVER_URL}/api/${place?.thumbnails[0]}`}
            alt=""
          />
          <img
            onClick={() => setBannerimg(place?.thumbnails[1])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={`${import.meta.env.VITE_SERVER_URL}/api/${place?.thumbnails[1]}`}
            alt=""
          />
          <img
            onClick={() => setBannerimg(place?.thumbnails[2])}
            className="w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 "
            src={`${import.meta.env.VITE_SERVER_URL}/api/${place?.thumbnails[2]}`}
            alt=""
          />
        </div>
      </div>
      {/* Details section */}
      <div className=" pt-4  rounded-lg p-5 my-4  text-[#333333] border ">
        <h1 className="text-3xl font-[500] font-roboto text-blue-100">
          {place?.name}
        </h1>
        <h2 className="text-lg  mb-5 flex items-center font-roboto "><img src={locationIco} alt="" className="w-[22px]" /> {place?.division?.name}</h2>
        <div className="px-10 py-16 min-h-[200px] text-justify" dangerouslySetInnerHTML={{ __html: place?.description }} />
      </div>
      <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Popular Packages
        </h1>
         
        <Scrollable> {packages.map((item, i) => (
            <PlanCards key={i} data={item} />
          ))}</Scrollable>
      </div>
      <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Near by Hotels
        </h1>
         
        <Scrollable> {hotels.map((item, i) => (
            <HotelCard key={i} data={item} />
          ))}</Scrollable>
      </div>
    </div>
  );
};

export default PlaceDetails;

[0];
