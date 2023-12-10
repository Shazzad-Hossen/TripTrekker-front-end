import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicGet, publicPost } from '../../../utilities/apiCaller';
import { toast } from '../../../utilities/toast';
import Table from '../../Shared/Table/Table';
import { IoIosArrowBack } from "react-icons/io";
import { BiSort } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import Paginate from '../../Shared/Paginate/Paginate';


const Orders = () => {
    const { user }= useSelector(state=> state.userInfo);
    const [data,setData]=useState(null);
    const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const {search: query}= useLocation();
  const [sort,setSort]= useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const isFound = query.slice(1).split('&').find(key=>key.split('=')[0]==='status');
    if(isFound) {
       const [, value] = isFound.split('=');
       if(value=='success') toast.success('Payment Successfull');
       else if(value==='failed') toast.error('Payment Failed');
       else if(value==='cancelled') toast.error('Payment cancelled');
    }

  },[]);
    const fetchData = () => {
      setLoading(true);
        publicGet(`/api/order?status=${filter}&page=${page}${user.role==='user'?'&userId='+user.id:user.role==='hotel'?'&hotel='+user.hotel.id:user.role==='agency'?'&agency='+user.agency.id:''}&sortBy=createdAt:${sort===true?'asc':'desc'}`).then(res=>{
          setLoading(false);
            if(res.status===200) setData(res?.data);
            else toast.error(res?.data);
        })
    }  

    useEffect(()=> {
      setPage(1);

    }, [filter]);

    useEffect(()=>{
        fetchData();
    },[filter, sort, page]);



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
    if(loading) return <Loading />
    return (
        <div>
            <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Orders
      </div>
     <div className="flex gap-5 justify-between  pt-20  px-10 ">
     <div className="flex items-center gap-5 flex-wrap">
        <button className={`${filter==='all'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('all')}>All</button>
        <button className={`${filter==='confirmed'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'}  font-[600]`} onClick={()=>setFilter('confirmed')}>Confirmed</button>
        <button className={`${filter==='pending'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('pending')}>Pending</button>
        
        <button className={`${filter==='paid'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('paid')}>Paid</button>
        <button className={`${filter==='processing'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('processing')}>Processing</button>
        <button className={`${filter==='cancelled'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setFilter('cancelled')}>Cancelled</button>
      </div>
      <button className="bg-slate-100 p-2 border rounded active:scale-95 h-fit" onClick={()=>setSort(prev=>!prev)}> <BiSort/></button>
     </div>
<div className="px-10 py-10">
<Table type='userOrders' data={data} callBack={handleCallBack}/>
    </div>     
    <div className="px-10 pb-10">
     <Paginate data={data} callBack={(e) => setPage(e)} /> 
      </div>     
        </div>
    );
};

export default Orders;