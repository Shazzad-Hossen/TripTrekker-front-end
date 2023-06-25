import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div>
            <h1 className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#60DD8E] to-[#188A8D] uppercase text-center font-chakra drop-shadow-md mb-10'>{title}</h1>
            
        </div>
    );
};

export default SectionTitle;