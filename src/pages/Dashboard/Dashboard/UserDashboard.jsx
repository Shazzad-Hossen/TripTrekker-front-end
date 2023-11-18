import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../../utilities/apiCaller';

const UserDashboard = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        publicGet('/api/dashboard-user').then(res=> {
           if(res.status===200) {
            setData(res?.data);
           }
        })

    }, []);
   
    return (
        <div className='px-5 pt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="border rounded p-5 bg-orange-600/20 text-orange-600">
                    <h1 className='font-[600] font-roboto text-xl'>{data?.totalDocuments || 0}</h1>
                    <p className='font-roboto font-[600]'>Total Orders</p>
                </div>
                <div className="border rounded p-5 bg-green-600/20 text-green-600">
                    <h1 className='font-[600] font-roboto text-xl'>{data?.totalConfirmed || 0}</h1>
                    <p className='font-roboto font-[600]'>Confirmed</p>
                </div>
                <div className="border rounded p-5 bg-red-600/20 text-red-600 ">
                    <h1 className='font-[600] font-roboto text-xl'>{data?.totalCancelled || 0}</h1>
                    <p className='font-roboto font-[600]'>Cancelled</p>
                </div>
                <div className="border rounded p-5 bg-blue-600/20 text-blue-100">
                    <h1 className='font-[600] font-roboto text-xl'>৳ {data?.totalCost || 0}</h1>
                    <p className='font-roboto font-[600]'>Money Spend</p>
                </div>
            </div>
            
        </div>
    );
};

export default UserDashboard;