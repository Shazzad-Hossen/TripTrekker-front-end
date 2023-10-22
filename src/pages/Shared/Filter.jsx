import React from "react";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

const Filter = ({ data=[], onChange=()=>{} }) => {
    const [open,setOpen]=useState(false);
    const [selected,setSelected]= useState(null);

    const handleSelect = (item)=>{
        setSelected(item);
        setOpen(false);
        onChange(item);
    }
  return (
    <div className="">
      <button className="bg-slate-100 p-2 border rounded active:scale-95" onClick={()=>setOpen(prev=>!prev)}>
        <BiFilterAlt />
      </button>
      <div className="relative">
        {
            open===true? <div className="bg-white shadow-md  absolute top-1 right-0 flex flex-col border rounded divide-y ">
                {
                 data?.map((item,index)=><div className={`p-2 font-roboto font-[400] hover:bg-blue-200/50 cursor-pointer ${item?.id===selected?.id?'bg-blue-200 text-white':'bg-white'}`} key={index} onClick={()=>handleSelect(item)}>{item.name}</div>)
                }
            </div>:''
        }
      </div>
    </div>
  );
};

export default Filter;
