import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';

const HotelDetails = () => {
    const params = useParams();
    const [data,setData]=useState(null);

    useEffect(()=>{

        publicGet(`/api/hotel/${params?.id}`).then(res=>{
            if(res?.status===200) {
                setData(res?.data);
            }
            else toast.error(res?.data);
        })
        
    },[]);;
    console.log(data);


    return (
        <div>
            sdsdsd
        </div>
    );
};

export default HotelDetails;