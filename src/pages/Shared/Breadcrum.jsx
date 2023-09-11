import React from 'react';

const Breadcrum = ({path}) => {
    return (
        <div className=' backdrop-blur-xl p-2'>
           <div className="container">{path}</div>
            
        </div>
    );
};

export default Breadcrum;