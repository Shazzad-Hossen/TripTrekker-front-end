import { list } from "postcss";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import errorIco from '../../assets/svg/error.svg'


const DropdownV2 = ({
  className = "",
  placeHolder = "Select",
  Icon,
  iconClass = "",
  modalClass='',
  data=[],
  value='',
  setValue=()=>{},
  name='dropDown',
  errors,
  onChange= ()=>{}


}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected,setSelected] = useState(null);

  useEffect(()=>{
    setSelected(data?.find(item=>item?.id===value));
    setValue(name,null)
  },[value,data]);

  useEffect(()=>{
    setValue(name,selected?.id);

  },[selected]);


 
  return (
    <div className="relative" >
     <div
      className={` rounded px-3 flex items-center justify-between cursor-pointer border ${className}  `} onClick={()=>setIsOpen(prev=>!prev)}
    >
      {selected? selected?.name : placeHolder}
      {Icon ? <Icon className={iconClass} /> : ""}
    </div>
    {isOpen && <div className={` shadow-md  rounded absolute bg-white border z-10 ${modalClass}`}>
      {
        data?.map((option, index)=> <div className={`py-1 px-3 cursor-pointer hover:bg-blue-200/20 hover:text-black  font-roboto ${selected?.id===option?.id? 'bg-blue-200 text-white':''}`} key={index} onClick={()=>{setSelected(option); setIsOpen(false);  onChange(option)}}>{option?.name}</div>)
      } </div>}
      {
        errors?  <p  className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1"><img src={errorIco} alt="" /><span>{errors.message}</span></p>:<></>
      }
   </div>
  );
};

export default DropdownV2;
