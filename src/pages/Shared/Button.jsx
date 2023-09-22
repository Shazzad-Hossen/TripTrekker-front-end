import React from 'react';

const Button = ({ className='', type='button', children, disabled='false', ...rest}) => {
    return (
        <>
        <button type={type} className={` bg-blue-100 text-white text-[0.9rem] py-2 px-2 rounded-[0.25rem] active:scale-95 active:shadow-lg ${disabled? 'bg-opacity-50':''} ${className}`} disabled={disabled} {...rest}>{children}</button>
        </>
    );
};

export default Button;