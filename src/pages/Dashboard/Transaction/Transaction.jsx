import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicGet, publicPost } from '../../../utilities/apiCaller';
import { toast } from '../../../utilities/toast';
import Table from '../../Shared/Table/Table';
import { useSelector } from 'react-redux';

const Transaction = () => {
    const [transactions,setTransactions]= useState(null);
    const {user} = useSelector(state=>state.userInfo);
    const fetchData = () => publicGet(`/api/payment`).then(res=>{
        if(res?.status===200) setTransactions(res?.data)
        else toast.error(res?.data)
    })
    useEffect(()=>{
        fetchData();
    },[]);

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

    const handleRefund = (status, id)=> {
        publicPost('/api/payment/refund-initiate', {status, id}). then(res=>{
            if(res?.status===200) {
                toast.success(res?.data);
                fetchData();
            }
            else toast.error(res?.data);
        })
    }

    return (
        <div>
            <div className="px-10 py-10">
                {
                user.role==='user'?<Table type='transaction' data={transactions} callBack={handleRefundReq} /> :
               ( user.role==='admin' || user?.role==='super-admin')?<Table type='transaction-admin' data={transactions} callBack={handleRefund} /> :''

                }
            </div>
            
        </div>
    );
};

export default Transaction;