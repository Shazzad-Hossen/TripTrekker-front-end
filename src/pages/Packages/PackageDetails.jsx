import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicGet } from '../../utilities/apiCaller';
import TourPackDetails from './TourPackDetails';
import HotelPackDetails from './HotelPackDetails';

const PackageDetails = () => {
  const params = useParams();
  const [data,setData] = useState(null)
  useEffect(()=>{
    publicGet(`/api/package/${params?.id}`).then(res=>res.status===200?setData(res?.data):toast.error(res?.data))

  },[]);
  return (
    <div>

      {
        data?.type==='agency'? <TourPackDetails data={data}/>: <HotelPackDetails data={data}/>
      }
      
    </div>
  );
};

export default PackageDetails;