import React from 'react';
import qa from '../../assets/icon/qa.png'

const Query = ({title, description}) => {
    return (
        <div className="flex gap-5 flex-wrap items-start mb-12">
      <img className='h-[40px] w-[40px]' src={qa} />
      <div className="">
        <p className="text-2xl">
          {title}
        </p>
        <p className=" text-[#475569] text-base font-normal font-sans">
          {description}
        </p>
      </div>
    </div>
    );
};

export default Query;