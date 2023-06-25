import React from 'react';

const Card = () => {
    return (
        
            <div className='max-w-[500px] w-full h-[250px] relative drop-shadow-xl'>
            <img className='object-cover h-full w-full contrast-75' src="https://images.unsplash.com/photo-1516091877740-fde016699f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FpbnQlMjBtYXJ0aW4lMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            <div className="absolute bottom-0 left-0">
                <h1 className='text-white text-2xl p-5 drop-shadow-lg'>Saint Marin</h1>
            </div>
           
        </div>
        
    );
};

export default Card;