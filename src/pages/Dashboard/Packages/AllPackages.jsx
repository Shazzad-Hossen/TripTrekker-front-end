import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Table from "../../Shared/Table/Table";
import { useState } from "react";
import { useEffect } from "react";
import { publicDelete, publicGet } from "../../../utilities/apiCaller";
import { toast } from "../../../utilities/toast";
import { useSelector } from "react-redux";
import { BiSort } from "react-icons/bi";
import Filter from "../../Shared/Filter";
import Loading from "../../Shared/Loading";
import Paginate from "../../Shared/Paginate/Paginate";


const AllPackages = () => {
  const navigate = useNavigate();
  const [packages,setPackages]= useState({});
  const {user} =useSelector(state=>state.userInfo);
  const [type,setType]= useState(user?.role==='hotel'?'hotel': user?.role==='agency'?'agency':'all');
  const [sort,setSort]=useState(false);
  const [status,setStatus]=useState('all');
  const [searchVal, setSearchVal]=useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const fetchPackages= ()=> {
    setLoading(true)
    publicGet(`/api/package?type=${type}&page=${page}&sortBy=createdAt:${sort===true?'asc':'desc'}${status!=='all'?'&status='+status:''}&paginate=true${user?.role==='hotel'?'&hotel='+user?.hotel?.id:user?.role==='agency'?'&agency='+user?.agency?.id:''}${searchVal!==''?'&search='+searchVal: ''}`).then(res=> {
      setLoading(false);
      res?.status===200? setPackages(res.data):toast.error(res?.data)
    });
  }

  useEffect(()=> {
    setPage(1);

  },[type])
  useEffect(()=>{
    if(user){
      setLoading(true)
      fetchPackages();
    }
  },[user, type, sort, status, searchVal, page]);

  const handleCallback = (type, id)=>{
    if(type==='delete') publicDelete(`/api/package/${id}`).then(res=>res.status===200?(fetchPackages(),toast.success('Successfully deleted')):toast .error(res.data));
    else navigate(id)
  }

 const handleCreate = () => {
  if(user.role==='hotel' || user.role==='agency') {
    if(user.hotel || user.agency) {
      navigate('addpackages');
    }
    else
    toast.error('Please complete your profile first');

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
        Packages
      </div>

      <div className="flex justify-end gap-3 items-center  my-5 mx-5">
        <Input
          type="search"
          className="py-1.5 pl-8"
          StartIcon={LuSearch}
          iconClaass="w-[26px] h-[25px] top-[6px] left-[5px] text-gray-300"
          onChange={(e)=> setSearchVal(e.target.value)}
        />
        <div className={`${(user?.role==='agency' || user?.role==='hotel')?'':'hidden'}`}>
          <Button className="bg-blue-100 text-white" onClick={handleCreate}>
            <AiOutlinePlusSquare className="text-white text-xl" />
            Create New
          </Button>
        </div>
      </div>

     <div className="px-5 py-10">
     <div className="flex items-center justify-between">
     <div className={`flex items-center gap-5 ${(user?.role==='agency' || user?.role==='hotel')? 'hidden': 'block'}`}>
        <button className={`${type==='all'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setType('all')}>All</button>
        <button className={`${type==='hotel'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'}  font-[600]`} onClick={()=>setType('hotel')}>Hotel</button>
        <button className={`${type==='agency'?'bg-blue-200 text-white px-3 py-1 rounded':'text-blue-100'} font-[600]`} onClick={()=>setType('agency')}>Travel</button>
      </div>
      <div className=""></div>
      <div className="flex items-center gap-2">
      
       <Filter data={[{ id: 'all', name:'All'}, { id: 'approved', name:'Approved'}, { id: 'pending', name:'Pending'}, { id: 'rejected', name:'Rejected'} ]} onChange={(e)=>setStatus(e.id)}/>
       <button className="bg-slate-100 p-2 border rounded active:scale-95" onClick={()=>setSort(prev=>!prev)}> <BiSort/></button>
      
       
      </div>
     </div>

     <div className="pt-5">
     {
        type==='agency'?  <Table type='tour_package' data={packages} callBack={(type, id)=>handleCallback(type,id)}/>:
        type==='hotel'?   <Table type='hotel_package' data={packages} callBack={(type, id)=>handleCallback(type,id)}/>:
        type==='all'?   <Table type='package' data={packages} callBack={(type, id)=>handleCallback(type,id)}/>:''


      }
     </div>

   

     </div>

    <div className="px-10 pb-10">
    <Paginate data={packages} callBack={(e)=> setPage(e)} />
    </div>
    </div>
  );
};

export default AllPackages;
