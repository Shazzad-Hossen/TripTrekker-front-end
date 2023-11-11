import React, { useEffect, useState } from 'react';
import About from './About';
import Banner from './Banner';
import Overview from './Overview';
import Testimonial from './Testimonials';
import Scrollable from '../Shared/Scrollable';
import PlanCards from '../PlaceDetails/PlanCards';
import { publicGet } from '../../utilities/apiCaller';
import HotelCard from '../Shared/hotelCard';


const Home = () => {
    const [packages, setPackages]= useState([]);
    const [hotels, setHotels]= useState([]);
    console.log(packages);

    useEffect(()=> {
        publicGet('/api/package?paginate=true&limit=20').then(res=>{
            if(res.status===200) setPackages(res?.data?.docs);
        });
        publicGet('/api/hotel?paginate=true&limit=20').then(res=>{
            if(res.status===200) setHotels(res?.data?.docs);
        })

    },[])
    return (
        <div  className=''>
           <Banner/> 
           <Overview/>
           <About/>
       
       <main>
       <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Popular Packages
        </h1>
         
        <Scrollable> {packages.map((item, i) => (
            <PlanCards key={i} data={item} />
          ))}</Scrollable>
      </div>
      <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Famous Hotels
        </h1>
         
        <Scrollable> {hotels.map((item, i) => (
            <HotelCard key={i} data={item} />
          ))}</Scrollable>
      </div>
       </main>


           
       
          <Testimonial/>
           
           
           
            
            
        </div>
    );
};

export default Home;