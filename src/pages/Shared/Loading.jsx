import React from 'react';
import loadingAnim from '../../assets/json/loadingAmin.json'
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-white z-[2000]'>
            <Lottie animationData={loadingAnim} loop={true} />
            
        </div>
    );
};

export default Loading;