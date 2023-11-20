import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet } from '../../../../utilities/apiCaller';
import Table from '../../../Shared/Table/Table';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [data, setData] = useState(null);
    const [active, setActive]= useState('order');
    const [ orders, setOrders] = useState(null);
    const [transactions,setTransactions]= useState(null);
    const { user } = useSelector(state=> state.userInfo);
    const navigate = useNavigate();
    useEffect(() => {
        publicGet('/api/dashboard-user').then(res=> {
           if(res.status===200) {
            setData(res?.data);
           }
        });
        publicGet(`/api/order?userId=${user.id}`).then(res=>{
            if(res.status===200) setOrders(res?.data);
            else toast.error(res?.data);
        });
        publicGet(`/api/payment`).then(res=>{
            if(res?.status===200) setTransactions(res?.data)
            else toast.error(res?.data)
        })

    }, []);

    const handleCallBack= ( type, data) =>{
       
        if(type==='pay'){
            publicPost('/api/payment',data).then(res=>{
                res.status===201? window.location.replace(res?.data):'';
            })
        }
        else if(type==='view') {
          navigate(data?.id);
        }
    }

    const handleRefundReq = (type, data)=>{
        publicPost(`/api/payment/refund-req`, {
            id: data.id
        }).then(res=>{
            if(res.status===200){
                toast.success('Refund request successfully sent');
                fetchData();
            }
            else toast.error(res?.data);
        })
    }
    
   
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

            <div className="pt-10">
                <div className="flex items-center gap-3">
                    <button className={`${active==='order'?'bg-blue-200 text-white': ''} py-1 px-2 rounded font-[600]`} onClick={()=> setActive('order')}>Orders</button>
                    <button className={`${active==='transaction'?'bg-blue-200 text-white': ''} py-1 px-2 rounded font-[600]`} onClick={()=> setActive('transaction')}>Transactions</button>
                </div>
                <div className="pt-5">
                {
                    active==='order'? <Table type='userOrders' data={orders} callBack={handleCallBack}/>:<Table type='transaction' data={transactions} callBack={handleRefundReq} />
                }
                <div className="pt-5 flex justify-end font-[600] cursor-pointer " onClick={()=> navigate(active==='order'?'/dashboard/orders':'/dashboard/transaction')}>See more</div>
                </div>
            </div>
            
        </div>
    );
};

export default UserDashboard;