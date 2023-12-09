import React, { useEffect, useState } from 'react';
import About from './About';
import Banner from './Banner';
import Overview from './Overview';
import Testimonial from './Testimonials';
import Scrollable from '../Shared/Scrollable';
import PlanCards from '../PlaceDetails/PlanCards';
import { publicGet } from '../../utilities/apiCaller';
import HotelCard from '../Shared/hotelCard';
import Loading from '../Shared/Loading';
import PromotionCard from '../Shared/PromotionCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    const [packages, setPackages]= useState([]);
    const [hotelPacs, setHotelPacks]= useState([]);
    const [hotels, setHotels]= useState([]);
    const [promotions, setPromotions]= useState([]);
    const [loading, setLoading]= useState(true);


    useEffect(()=> {
       
        publicGet('/api/package?paginate=true&limit=20&type=agency').then(res=>{
            if(res.status===200) setPackages(res?.data?.docs);
            publicGet('/api/package?paginate=true&limit=20&type=hotel').then(res=>{
                if(res.status===200) setHotelPacks(res?.data?.docs);
                publicGet('/api/promotion?').then(res=>{
                    if(res.status===200) setPromotions(res?.data?.docs);
                    
                });

                publicGet('/api/hotel?paginate=true&limit=20').then(res=>{
                    if(res.status===200) setHotels(res?.data?.docs);
                    setLoading(false);
                });
            });
        });
       
        

    },[]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    if(loading) return <Loading />
    return (
        <div  className=''>
           <Banner/> 
           <Overview/>
           <main>


           <div className="mb-5 border rounded-md p-5">
            <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
              New Offers
            </h1>
        <Slider {...settings}>
        {promotions.map((item, i) => (
            <PromotionCard key={i} data={item} />
          ))}
        </Slider>
      </div>
           </main>
           <About/>
       
       <main>
       <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Popular Travel Packages
        </h1>
        
         
        <Scrollable> {packages.map((item, i) => (
            <PlanCards key={i} data={item} />
          ))}</Scrollable>
      </div>
      <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
           Reknown Hotels
        </h1>

        
         
        <Scrollable> {hotels.map((item, i) => (
            <HotelCard key={i} data={item} />
          ))}</Scrollable>
      </div>
      <div className="mb-5 border rounded-md p-5">
      <h1 className="font-chakra text-xl font-bold text-[#333333] mb-5">
          Our Hotel Packages
        </h1>
         
        <Scrollable> {hotelPacs.map((item, i) => (
            <HotelCard key={i} data={item} type='package'  />
          ))}</Scrollable>
      </div>
       </main>


           
       
          <Testimonial/>
           
           
           
            
            
        </div>
    );
};

export default Home;