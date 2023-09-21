import React from 'react';
import Banner from './Banner';
import AmazingPlaces from './AmazingPlaces';
import About from './About';
import Testimonial from './Testimonials';
import Overview from './Overview';


const Home = () => {
    return (
        <div  className=''>
           <Banner/> 
           <Overview/>
           <About/>
       
          <Testimonial/>
           
           
           
            
            
        </div>
    );
};

export default Home;