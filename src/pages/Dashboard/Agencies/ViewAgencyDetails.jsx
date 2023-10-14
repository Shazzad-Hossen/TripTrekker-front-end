import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { publicGet } from "../../../utilities/apiCaller";
import { toast } from "../../../utilities/toast";


const ViewAgencyDetails = () => {
  const navigate = useNavigate();
  const {id:agencyId}= useParams();
  const [agency,setAgency] = useState({});

  useState(()=>{
    publicGet(`/api/agency/${agencyId}`). then(res=>res.status===200?setAgency(res.data):toast(res.data));

  },[]);
  console.log(agency);

    return (
        <div>
            <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Details
      </div>

      {/* body part starts */}

        <div className="py-12 px-10">
           <div className="flex items-center gap-10">
           <img className="rounded-full w-[100px] h-[100px] shadow-lg  border-l-gray-600 border-t-blue-200 border-r-amber-600 border-b-slate-400  border-4" src={import.meta.env.VITE_SERVER_URL +'/api/'+agency?.logo} alt="" />
           <div className="">
            <h1 className="text-blue-100 font-[600] text-xl">{agency?.name}</h1>
            <h2 className="text-blue-200 font-[600] text-md">{agency?.email}</h2>
           </div>
           </div>
        </div>

            
        </div>
    );
};

export default ViewAgencyDetails;