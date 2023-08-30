import React from "react";

const PlaceCard = ({ data, onClick }) => {
  return (
    <div>
      <div onClick={onClick} className="max-w-[350px] w-full max-h-[200px] h-full rounded-lg border-[1px] relative flex justify-center items-center transform hover:scale-105 transition-transform duration-300 ease-in-out group hover:cursor-pointer">
        <img className="rounded-lg opacity-100 h-full w-full " src={data?.thumbnail} alt="" />
        <div className="h-full w-full absolute top-0 left-0 bg-black opacity-30 group-hover:opacity-0 rounded-lg"></div>
        <p className="absolute inset-0 flex items-center justify-center text-2xl text-white drop-shadow-lg z-20 group-hover:scale-0 duration-700">{data?.name}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
