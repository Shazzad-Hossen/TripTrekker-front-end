import React from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Paginate = ({data=null, callBack = () => {} }) => {

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="font-roboto">Showing {data?.page===1?1:((data?.page-1)*10)+1} -{data?.page===1? data?.docs?.length :( (data?.page-1)*10)+data?.docs.length} of {data?.totalDocs || 0}</div>
                <div className="flex items-center gap-2"> <IoIosArrowBack className={`h-[30px] w-[30px] border rounded p-1 active:scale-95 ${data?.prevPage===null?'pointer-events-none':'cursor-pointer'}`} onClick={()=>callBack(data?.prevPage)} /><IoIosArrowBack className={`h-[30px] w-[30px] border rounded p-1 rotate-180 active:scale-95 ${data?.nextPage===null?'pointer-events-none':'cursor-pointer'} `} onClick={()=>callBack(data?.nextPage)} /></div>
            </div>
        </div>
    );
};

export default Paginate;