import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../../../utilities/apiCaller';

const AgencyDashboard = () => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        publicGet('/api/dashboard-agency').then(res=> {
            if(res?.status===200) setData(res?.data)
        })

    }, []);

    return (
        <div className='px-5 pt-5'>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="border rounded p-5 bg-orange-600/20 text-orange-600">
                <h1 className='font-[600] font-roboto text-xl'>{data?.orders || 0}</h1>
                <p className='font-roboto font-[600]'>Total Orders</p>
            </div>
            <div className="border rounded p-5 bg-green-600/20 text-green-600">
                <h1 className='font-[600] font-roboto text-xl'>{data?.confirmed || 0}</h1>
                <p className='font-roboto font-[600]'>Confirmed Orders</p>
            </div>
            <div className="border rounded p-5 bg-orange-600/20 text-orange-600 ">
                <h1 className='font-[600] font-roboto text-xl'>{data?.packages || 0}</h1>
                <p className='font-roboto font-[600]'>Total Packages</p>
            </div>
            <div className="border rounded p-5 bg-green-600/20 text-green-600">
                <h1 className='font-[600] font-roboto text-xl'>৳ {data?.approved || 0}</h1>
                <p className='font-roboto font-[600]'>Approved Packages</p>
            </div>
        </div>

        
        
    </div>
    );
};

export default AgencyDashboard;