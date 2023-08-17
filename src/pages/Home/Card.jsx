import React from 'react';

const Card = ({data, onClick}) => {
    return (
        
            <div onClick={onClick} className='max-w-[500px] w-full h-[250px] relative drop-shadow-xl'>
            <img className='object-cover h-full w-full contrast-75' src={data?.thumbnail} alt="" />
            <div className="absolute bottom-0 left-0">
                <h1 className='text-white text-2xl p-5 drop-shadow-lg'>{data?.name}</h1>
            </div>
           
        </div>
        
    );
};

export default Card;