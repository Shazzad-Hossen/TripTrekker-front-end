import React from "react";

const Input = ({
  label,
  type = "text",
  register = () => {},
  className = "",
  labelClass = "",
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
      <input
        className="border p-1 w-full rounded-[0.2rem] outline-none focus:placeholder:opacity-0 px-5"
        type={type}
        autoComplete="off"
        spellCheck="false"
        {...register()}
        {...rest}
      />
    </div>
  );
};

export default Input;
