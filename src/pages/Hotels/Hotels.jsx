import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';
import HotelCard from '../Shared/hotelCard';
import Paginate2 from '../Shared/Paginate/Paginate2';
import Loading from '../Shared/Loading';

const Hotels = () => {
    const [hotels,setHotels]=useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    useEffect(()=>{
      setLoading(true);
        publicGet(`/api/hotel?paginate=true&limit=9&page=${page}`).then(res=>{
          setLoading(false);
       
            if(res?.status===200){
            
                setHotels(res?.data);
            }
            else toast.error(res?.data)
        })

    },[page]);
    if(loading) return <Loading />
    return (
        <main>
          
          <h1 className="font-roboto font-[500] text-blue-100 text-[1.5rem]">
        Hotels
      </h1>
      <h2 className="pb-10">Select your favourite hotel</h2>



      {/* Hotels Grid */}
      <div className="flex justify-center items-center pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {
        hotels?.docs?.map((h, index)=><HotelCard key={index} data={h}/>)
      }
        </div>
      </div>


      <Paginate2 totalPages={hotels?.totalPages} currentPage={hotels?.page} onPageChange={(e)=> setPage(e)} />

        </main>
    );
};

export default Hotels;