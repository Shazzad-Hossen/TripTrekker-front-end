import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Button from '../../Shared/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { publicGet } from '../../../utilities/apiCaller';
import { toast } from '../../../utilities/toast';
import Table from '../../Shared/Table/Table';
import Paginate from '../../Shared/Paginate/Paginate';
import Loading from '../../Shared/Loading';



const Promotions = () => {
  const navigate = useNavigate();
  const [promotions, setPrormotions] = useState(null);
  const [page, setPage]= useState(1);
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    setLoading(true);
    publicGet(`/api/promotion?page=${page}`).then(res=> {
      setLoading(false);
      if(res?.status===200) {
        setPrormotions(res?.data);
      }
      else toast.error(res?.data);
    })

  },[page]);

  const handleCallBack = ( type, id) => {
    if( type==='edit') navigate(`${id}`)

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
        Promotions
      </div>

      <div className="flex justify-end p-10">
      <Button className="bg-blue-100 text-white" onClick={()=> navigate('add')}>
            <AiOutlinePlusSquare className="text-white text-xl" />
            Create New
          </Button>
      </div>

      <div className="px-10">
        <Table type='promotions' data={promotions} callBack={(type, id) => handleCallBack(type, id)} />
        <div className="py-5">
        <Paginate data={promotions} callBack={setPage} />
        </div>

      </div>
      
    </div>
  );
};

export default Promotions;