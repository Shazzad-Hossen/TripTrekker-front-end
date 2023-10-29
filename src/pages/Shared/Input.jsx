import React from "react";
import errorIco from '../../assets/svg/error.svg'

const Input = ({
  label,
  type = "text",
  register = () => {},
  className = "",
  labelClass = "",
  errors,
  StartIcon,
  iconClaass='',
  ...rest
}) => {
  return (
    <div>
      {label ? (
        <p className={` text-blue-100 font-[600] pb-2 ${labelClass}`}>
          {label}
        </p>
      ) : (
        <></>
      )}
      <div className="relative w-full">
      <input
        className={`border py-1 w-full rounded-[0.2rem] outline-none focus:placeholder:opacity-0 px-3 ${className} ${errors?'border-red-400':''}`}
        type={type}
        autoComplete="off"
        spellCheck="false"
        {...register()}
        {...rest}
      />
      {StartIcon? <StartIcon className={` absolute ${iconClaass}`}/>:''}
      </div>
      {
        
        errors? <p  className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1"><img src={errorIco} alt="" /><span>{errors  .message}</span></p>:<></>
      }
    </div>
  );
};

export default Input;
