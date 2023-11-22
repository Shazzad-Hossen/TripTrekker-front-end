import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../../../utilities/apiCaller';

const AdminDashboard = () => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        publicGet('/api/dashboard-admin').then(res=>{
            if(res.status===200) setData(res?.data);
        })

    }, []);

    return (
        <div className='px-5 py-5'>
            <div className="grid grid-cols-1  xl:grid-cols-3 gap-5">
            <div className="border rounded p-5 bg-blue-200/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalUser || 0}</h1>
                <p className='font-roboto font-[600]'>Users</p>
            </div>
            <div className="border rounded p-5 bg-orange-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalAgency || 0}</h1>
                <p className='font-roboto font-[600]'>Agencies</p>
            </div>
            <div className="border rounded p-5 bg-purple-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalHotel || 0}</h1>
                <p className='font-roboto font-[600]'>Hotels</p>
            </div>
            
        </div>
            
        </div>
    );
};

export default AdminDashboard;