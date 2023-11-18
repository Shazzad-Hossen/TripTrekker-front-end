import React from "react";

const PlaceCard = ({ data, onClick=()=>{} }) => {
  return (
    <div>
      <div onClick={()=>onClick(data?.id)} className="max-w-[350px] w-full h-[200px]  rounded-lg border-[1px] relative flex justify-center items-center transform hover:scale-105 transition-transform duration-300 ease-in-out group hover:cursor-pointer drop-shadow-lg">
        <img className="rounded-lg opacity-100 h-full w-full " src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.thumbnail}`} alt="" />
        <div className="h-full w-full absolute top-0 left-0 bg-black opacity-20 group-hover:opacity-0 rounded-lg"></div>
        <span className="absolute inset-0 flex items-center justify-center text-2xl text-[#eeeeee] drospan-shadow-lg z-20 group-hover:scale-0 duration-700 font-[400]  ">{data?.name}</span>
      </div>
    </div>
  );
};

export default PlaceCard;
