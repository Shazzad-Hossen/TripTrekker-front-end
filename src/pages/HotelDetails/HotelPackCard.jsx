import React from 'react';
import { Link } from 'react-router-dom';

const HotelPackCard = ({data}) => {
    function isWithinFifteenDays(date1, date2) {
        const date1Time = date1.getTime();
        const date2Time = date2.getTime();
        const difference = Math.abs(date2Time - date1Time);
        const differenceInDays = difference / (1000 * 3600 * 24);
        if (differenceInDays > 15) {
            return false;
        }
        return true; 
    }
    return (
        <Link to={`/package/${data?.id}`}>
            <div className="max-w-[300px] w-full rounded-lg border shadow-md">
                <div className="rounded-t-lg w-full h-52 relative">
                <img className='rounded-t-lg object-cover h-52 w-full ' src={data? import.meta.env.VITE_SERVER_URL+'/api/'+data?.photos[0] :''} alt="" />
                {isWithinFifteenDays(new Date() , new Date(data?.createdAt)) ?<div className="absolute top-2 right-2 bg-red-500 text-white font-[600] text-xs p-1 rounded-lg">NEW</div>:'' }
                

                </div>
                <div className="p-5">
                <h1 className='text-blue-100 font-[600] line-clamp-1'>{data?.name}</h1>
                <h2  className='text-gray-700 font-roboto text-sm pt-2'><b>Cost: </b> ৳{data?.cost}/night</h2>

                </div>
            </div>
        </Link>
    );
};

export default HotelPackCard;