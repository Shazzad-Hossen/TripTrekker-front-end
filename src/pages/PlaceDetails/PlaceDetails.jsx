import React, { useState } from 'react';


const thumbnails = [
    'https://i.ibb.co/b1vzmVr/thumb1.jpg', 'https://i.ibb.co/w4ZjmF2/ko-tapu-2560x1440-thailand-islands-mountains-rocks-ocean-5k-16556.jpg', 'https://i.ibb.co/NjrQDRC/mountains-2560x1440-fog-sky-field-4k-23318.jpg'
]

const PlaceDetails = () => {
    const [bannerImg, setBannerimg] = useState(thumbnails[0]);

    return (
       <div className="container pt-20  px-3 ">
         <div className='  flex gap-5 h-full max-h-[600px] md:h-[600px] w-full flex-col md:flex-row'>
            <div className="w-full h-full ">
                <img src={bannerImg} className='object-cover rounded-lg h-full w-full backdrop-contrast-125' alt="" />
            </div>
            <div className="  grid grid-cols-3 md:flex md:flex-col gap-3 h-full">

                

               <img onClick={()=>setBannerimg(thumbnails[0])} className='w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 ' src={thumbnails[0]} alt="" />
               <img onClick={()=>setBannerimg(thumbnails[1])} className='w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 ' src={thumbnails[1]} alt="" />
               <img onClick={()=>setBannerimg(thumbnails[2])} className='w-full h-full rounded-lg border-[1px]  shadow-lg md:max-h-[200px] md:max-w-[350px] transform active:scale-95 hover:contrast-50 duration-300 ' src={thumbnails[2]} alt="" />
               
               
              
               
            </div>
    

        </div>
         {/* Details section */}
         <div className=" pt-4">
                <h1 className='text-3xl font-semibold font-chakra'>Saint Martin Island</h1>



            </div>
       </div>
    );
};

export default PlaceDetails;

[0]