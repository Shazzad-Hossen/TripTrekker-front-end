import React from 'react';

const Button = ({ className='', type='button', children, disabled=false, StartIcon, EndIcon, iconClass='', ...rest}) => {
    

    return (
        <>
        <button type={type} className={`  py-2 px-2 rounded-[0.25rem] active:scale-95 duration-300 active:shadow-lg flex justify-center items-center  gap-2  disabled:bg-opacity-50 disabled:cursor-not-allowed ${className}`} disabled={disabled} {...rest}>
            {StartIcon?<StartIcon className={` h-[20px] w-[20px] ${iconClass}`}/>:<></>}
            {children}
            {EndIcon?<EndIcon className={` h-[20px] w-[20px] ${iconClass}`}/>:<></>}

            </button>
        </>
    );
};

export default Button;