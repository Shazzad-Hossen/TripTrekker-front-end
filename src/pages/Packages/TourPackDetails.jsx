import { Card } from 'antd';
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdAdd, MdMinimize } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import locationIco from '../../assets/icon/location.png';
import loadingImage from "../../assets/images/imageLoading.gif";
import { publicGet, publicPost } from "../../utilities/apiCaller";
import { toast } from "../../utilities/toast";
import DatePicker from "../Shared/DatePicker";
import Scrollable from "../Shared/Scrollable";
import { useSelector } from 'react-redux';

const { Meta } = Card;

const TourPackDetails = ({data=null}) => {
  const [person,setPerson]=useState(1);
  const [modal,setModal] = useState(false);
  const [imgNo,setImgno] = useState(0);
  const [places,setPlaces] = useState([]);
  const navigate = useNavigate();
  const [date,setDate]= useState(null);
  const [error,setError]=useState(null);
  const location = useLocation();
  const { user } = useSelector(state => state.userInfo)



  useEffect(()=>{
    if(data){
      publicGet(`/api/place?division=${data?.division?.id}`).then(res=>res?.status===200? setPlaces(res?.data):'')
    } 

  },[data]);

  const handleBooking = () =>{
    if(!user) return navigate('/signin', {state:{pathTo: location.pathname}});
    if(user?.role!=='user') {
      toast.warn('You are not allowed to use this feature')

      return;
    }
    setError(null)
    if(date===null) setError({message: 'Please pick a date'});
    else {
      publicPost('/api/order',{type:'tour', date, person, package: data?.id }).then(res=>{
        if(res?.status===201) {
          toast.success('Booking successfull');
          publicPost('/api/payment',res?.data).then(res=>{
            res.status===201? window.location.replace(res?.data):'';

           })

        }
        else {
          toast.error(res.data);
        }
      })
    }

  }
  

  return (
   <>
    <div className={`pt-[100px] container px-5 select-none ${modal===true?'overflow-hidden':''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:h-[500px] gap-2 mb-7">
        <div className="h-full">
          <img
            className="object-cover w-full h-full pointer-events-none"
            src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[0]:loadingImage}
            alt=""
            loading="lazy"
          />
        </div>

        <div className=" grid grid-cols-2 gap-2">
          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full pointer-events-none"
              src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[1]:loadingImage}
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full pointer-events-none"
              src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[2]:loadingImage}
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500">
            <img
              className="object-cover w-full h-full pointer-events-none"
              src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[3]:loadingImage}
              alt=""
            />
          </div>

          <div className="h-[149px] sm:h-[249px] bg-slate-500 relative">
            <img
              className="object-cover w-full h-full pointer-events-none"
              src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[4]:loadingImage}
              alt=""
            />
           {data?  <div className={`bg-black absolute top-0 left-0 right-0 bottom-0 bg-opacity-70 flex justify-center items-center text-white text-3xl ${data?.photos.length>5?'block':'hidden'}`} onClick={()=>setModal(true)}>
              +{(data?.photos.length) - 5}
            </div>: ''}
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-12 gap-2">
        <div className="border shadow-md col-span-12 md:col-span-8  p-5 rounded">
         <h1 className="font-roboto text-4xl font-semibold text-blue-100">{data?.name}</h1>
         <h2 className="text-lg  mb-5 flex items-center font-roboto mt-5 "><img src={locationIco} alt="" className="w-[22px]" /> {data?.place?.name}, {data?.division?.name}</h2>
        <div className="px-10 py-10 min-h-[200px] text-justify" dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
        <div className="border shadow-md col-span-12 md:col-span-4  rounded p-5 h-[450px] sticky top-[75px] flex flex-col gap-2 ">
            <h1 className="text-2xl  font-semibold text-[#333333] uppercase font-chakra drop-shadow-lg mb-5 pt-3 ">Summary</h1>
            <div className="text-2xl absolute right-4 top-3 text-green-700 font-semibold"> ৳ {data?.cost * person} </div>

            <h2 className="text-lg  font-roboto">Place: {data?.place?.name}</h2>

            <h2 className="text-lg">Duration: {data?.duration?.day} days {data?.duration?.night} night</h2>
            <h1 className="  text-md  drop-shadow-lg">Cost : ৳ {data?.cost} TK/ Person </h1>
            <div className=""><h2 className="text-md pb-2">Start Date</h2>
            <DatePicker onChange={(e)=>setDate(e)} errors={error} className={error?'border-red-400':''}/></div>
            <div className=""><h2 className="text-md pb-2">Person</h2>
            <div className="flex items-center gap-3">
              <button className="bg-slate-200 w-10 h-8 border rounded flex justify-center hover:bg-blue-300 hover:text-white active:scale-95 " disabled={person<2}><MdMinimize className="relative top-[2px]" onClick={()=>setPerson(prev=>prev-1)}/></button>
              <button className="border-slate-200 w-10 h-8 border rounded flex justify-center  text-sm items-center">{person}</button>
              <button className="bg-slate-200 w-10 h-8 border rounded flex justify-center items-center hover:bg-blue-300 hover:text-white active:scale-95" onClick={()=>setPerson(prev=>prev+1)}><MdAdd/></button>

            </div>
            </div>

            <button className="bg-blue-200 text-white p-2 rounded w-full active:scale-95 transform duration-300 shadow-xl border my-5  font-semibold " onClick={handleBooking}>Book Now</button>

        </div>
      </div>


      {/* Places You May visit */}
      <div className="border rounded p-5 my-5 shadow-md">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Places You May Visit
        </h1>
       <Scrollable>
       {
          places.map((place,index)=><div key={index} onClick={()=>navigate(`/places/${data?.place?.id}`)}><Card  hoverable style={{ width: 240 }}  cover={
            <img alt="image" src={place?.thumbnails[0]} className="h-[250px] pointer-events-none" />
             }>
              <Meta title={place?.name} description={place?.division?.name} />
              </Card></div>)
        }
       </Scrollable>
      </div>
    </div>

    {modal===true? <div className=" fixed top-0 left-0 h-screen w-screen bg-black/80  z-[2000] ">
      <div className="flex justify-end  pt-5 pr-5 "><AiOutlineClose className="text-white h-[30px] w-[30px]" onClick={()=>setModal(false)}/></div>
      <div className=" w-full  h-full  flex justify-center items-center relative ">
        <img className=" max-w-[90%] max-h-[80%] pb-20   " src={import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[imgNo]} alt="" />
        <button disabled={imgNo<1} className="absolute left-2 -translate-y-1/2 p-1 md:p-5 ml-5 border border-slate-400" onClick={()=>setImgno(prev=>prev-1)}><FaAngleLeft className="text-white"/></button>
        <button  disabled={imgNo===(data?.photos?.length - 1)} className="absolute right-2  -translate-y-1/2 p-1 md:p-5 mr-5 border border-slate-400" onClick={()=>setImgno(prev=>prev+1)}><FaAngleRight className="text-white"/></button>

        </div>
    </div> : ''}
    </>
  );
};

export default TourPackDetails;
