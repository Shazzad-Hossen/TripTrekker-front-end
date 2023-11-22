import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicDelete, publicGet } from '../../../../utilities/apiCaller';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from '../../../Shared/Table/Table';
import { toast } from '../../../../utilities/toast';

const AgencyDashboard = () => {
    const [data, setData] = useState(null);
    const [active, setActive]= useState('order');
    const [ orders, setOrders] = useState(null);
    const [packages,setPackages]= useState(null);
    const { user } = useSelector(state=> state.userInfo);
    const navigate = useNavigate();
    const fetchPackages = () => publicGet(`/api/package?paginate=true&agency=${user?.agency?.id}`).then(res=> res?.status===200? setPackages(res.data):toast.error(res?.data));

    useEffect(()=> {
        publicGet('/api/dashboard-agency').then(res=> {
            if(res?.status===200) setData(res?.data)
        });
        publicGet(`/api/order?agency=${user?.agency?.id}`).then(res=>{
            if(res.status===200) setOrders(res?.data);
            else toast.error(res?.data);
        });


        fetchPackages();

    }, []);

    const handleCallback = (type, id)=>{
        console.log(type, id);
        if(type==='delete') publicDelete(`/api/package/${id}`).then(res=>res.status===200?(fetchPackages(),toast.success('Successfully deleted')):toast.error(res.data));
        else navigate(`/dashboard/packages/${id}`)
      }

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

        <div className="pt-10">
                <div className="flex items-center gap-3">
                    <button className={`${active==='order'?'bg-blue-200 text-white': ''} py-1 px-2 rounded font-[600]`} onClick={()=> setActive('order')}>Orders</button>
                    <button className={`${active==='package'?'bg-blue-200 text-white': ''} py-1 px-2 rounded font-[600]`} onClick={()=> setActive('package')}>Packages</button>
                </div>
                <div className="pt-5">
                {
                    active==='order'? <Table type='userOrders' data={orders} callBack={(type, data) =>  navigate(`/dashboard/orders/${data?.id}`)}/>:<Table type='hotel_package' data={packages} callBack={(type, id)=>handleCallback(type,id)}/> 
                }
                <div className="pt-5 flex justify-end font-[600] cursor-pointer " onClick={()=> navigate(active==='order'?'/dashboard/orders':'/dashboard/packages')}>See more</div>
                </div>
            </div>

        
        
    </div>
    );
};

export default AgencyDashboard;