import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import errorIco from '../../assets/svg/error.svg'



const PasswordInput = ({
  label,
  register = () => {},
  className = "",
  labelClass = "",
  errors,
  ...rest
}) => {
    const [visible,setVisible]=useState(true);
  return (
    <div>
      {label ? (
        <p className={` text-blue-100 font-[600] pb-2 ${labelClass}`}>
          {label}
        </p>
      ) : (
        <></>
      )}
      <div className="relative ">
      <input
        className={`border py-1 pl-3 pr-10 w-full rounded-[0.2rem] outline-none focus:placeholder:opacity-0  ${errors?'border-red-400':''}`}
        type={visible?'password':'text'}
        autoComplete="off"
        spellCheck="false"
        {...register()}
        {...rest}
      />
      <button onClick={()=>setVisible(prev=>!prev)} type='button' className="absolute top-2 right-2">{!visible?<AiOutlineEye className="h-[20px] w-[20px] text-slate-800"/>:<AiOutlineEyeInvisible className="h-[20px] w-[20px] text-slate-800"/>}</button>
      </div>
      {
        
        errors? <p  className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1"><img src={errorIco} alt="" /><span>{errors  .message}</span></p>:<></>
      }
    </div>
  );
};

export default PasswordInput;
