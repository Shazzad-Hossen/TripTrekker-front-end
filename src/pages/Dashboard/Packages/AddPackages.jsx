import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddTourPackage from './AddTourPackage';
import { useParams } from 'react-router-dom';
import { publicGet } from '../../../utilities/apiCaller';
import AddHotelPackage from './AddHotelPackage';

const AddPackages = () => {
    const {user} = useSelector((state)=>state.userInfo);
    const params = useParams();
    const [data,setData]= useState(null);
    useEffect(()=>{
        if(params.id!=='addpackages'){
            publicGet(`/api/package/${params.id}`).then(res=>{
                if(res?.status===200) {
                    setData(res?.data);
               
                }
                else {
                    //Navigate to error Page
                }
    
            })

        }
        

    },[params.id])

    return (
        <div>
            {
                data?.type==='agency'? <AddTourPackage details={data}/>:  data?.type==='hotel'? <AddHotelPackage details={data}/>:''
            }
            
            
        </div>
    );
};

export default AddPackages;