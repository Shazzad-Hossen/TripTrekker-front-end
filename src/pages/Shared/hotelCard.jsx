import React from 'react';
import Ratings from '../Shared/Ratings';
import { useNavigate } from 'react-router-dom';
import hotelImg from '../../assets/images/hotelRoom.png';
import locationIco from '../../assets/icon/location.png';

const HotelCard = ({ data  }) => {
    const navigate = useNavigate();
    return (
      <div
        onClick={() => navigate(`/hotels/${data?.id}`)}
        className="select-none border rounded p-2 min-w-[250px] max-w-[300px] w-full drop-shadow-lg active:scale-95 transform duration-300 hover:-translate-y-1 "
      >
        <div className="rounded">
          <img
            className="rounded pointer-events-none h-[210px]"
            src={
              data?.logo
                ? import.meta.env.VITE_SERVER_URL + "/api/" + data?.logo
                : hotelImg
            }
            alt=""
          />
        </div>
        <h2 className="font-semibold pt-2 uppercase line-clamp-1">{data?.name}</h2>
        <div className="flex items-start py-2  ">
          <div className="">
            <img className="w-[20px] h-[20px] " src={locationIco} alt="" />
          </div>
          <h2 className="text-sm  break-words w-[90%]">
            {data?.place?.name} , {data?.division?.name} 
          </h2>
        </div>

        <Ratings ratings={data?.ratings || 2 } />
      </div>
    );
};

export default HotelCard;