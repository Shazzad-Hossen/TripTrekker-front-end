import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";



const PasswordInput = ({
  label,
  register = () => {},
  className = "",
  labelClass = "",
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
        className="border p-1 w-full rounded-[0.2rem] outline-none focus:placeholder:opacity-0 px-5"
        type={visible?'password':'text'}
        autoComplete="off"
        spellCheck="false"
        {...register()}
        {...rest}
      />
      <button onClick={()=>setVisible(prev=>!prev)} type='button' className="absolute top-2 right-2">{!visible?<AiOutlineEye className="h-[20px] w-[20px] text-slate-800"/>:<AiOutlineEyeInvisible className="h-[20px] w-[20px] text-slate-800"/>}</button>
      </div>
    </div>
  );
};

export default PasswordInput;
