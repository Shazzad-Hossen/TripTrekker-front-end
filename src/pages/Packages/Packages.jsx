import { useEffect, useState } from "react";
import PlanCards from "../PlaceDetails/PlanCards";
import { publicGet } from "../../utilities/apiCaller";
import { toast } from "../../utilities/toast";
import { BiSort } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import Input from "../Shared/Input";
import Loading from "../Shared/Loading";
import Paginate2 from "../Shared/Paginate/Paginate2";








const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [filter, setFilter]=useState('all');
  const [loading, setLoadiong] = useState(true);
  const [page, setPage] = useState(1);

  
  const fetchData = () => publicGet(`/api/package?paginate=true&page=${page}&limit=9${filter!=='all'?'&type='+filter :''}`).then(res=> {
    setLoadiong(false);
    console.log(res);
    res?.status===200? setPackages(res?.data):toast.error(res?.data)
  });

  useEffect(()=>{
    setLoadiong(true);
    fetchData();
  },[filter, page]);


    if(loading) return <Loading />
    return (
        <div className="">
          <main>
          <h1 className="font-roboto font-[500] text-blue-100 text-[1.5rem]">
        Packages
      </h1>
      <h2 className="pb-10">Choose travel package you wanna grab</h2>

      <div className="pb-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5">
      <div className="flex items-center gap-3 justify-start ">
        <button className={`${filter==='all'?'bg-blue-200 text-white':''} px-2 rounded `} onClick={()=>{setFilter('all'); setPage(1)}}>All</button>
        <button className={`${filter==='agency'?'bg-blue-200 text-white':''} px-2 rounded `} onClick={()=>{setFilter('agency'); setPage(1)}}>Travel</button>
        <button className={`${filter==='hotel'?'bg-blue-200 text-white':''} px-2 rounded `} onClick={()=>{setFilter('hotel'); setPage(1)}}>Hotel</button>
      </div>

     <div className="flex justify-end items-center  gap-3">
     <Input
          type="search"
          className="py-1.5 pl-8"
          StartIcon={LuSearch}
          iconClaass="w-[26px] h-[25px] top-[6px] left-[5px] text-gray-300"
        />
       <button className="bg-slate-100 p-2 border rounded active:scale-95" onClick={()=>setSort(prev=>!prev)}> <BiSort/></button>
     </div>

      </div>

     




       {/* Hotels Grid */}
       <div className="flex justify-center items-center pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {
        packages?.docs?.map((h, index)=><PlanCards key={index} data={h}/>)
      }
        </div>
      </div>

      <Paginate2 totalPages={packages?.totalPages} currentPage={packages?.page} onPageChange={(e)=> setPage(e)} />

          </main>
        </div>
    );
};

export default Packages;