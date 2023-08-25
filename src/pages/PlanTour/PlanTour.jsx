import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Card from '../Home/Card';
import { publicGet } from '../../utilities/apiCaller';
import axios from 'axios';

const places = [
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
  {
    name:"Saint Martin",
    thumbnail: "https://a.cdn-hotels.com/gdcs/production129/d1735/5f9ad8cb-e195-49ef-8206-f95dba366ffd.jpg"
  },
]


const PlanTour = () => {
  const [division, setDivisions] =  useState([]);
  const [component,setComponent] = useState('division');

  useEffect(()=>{
    publicGet('/divisions')
    .then(res=>{
     if(res.status===200){
      setDivisions(res.data);
     }
    })
  },[]);

  const changeComponent = (value) =>{
   setComponent(value)

  }
   
    return (
        <main className='pt-28'>
           {component==='division' && <>
            <SectionTitle title="Plan A Tour"/>
            <div className="flex  justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                division.map((division,i)=> <Card key={i} onClick={()=>changeComponent('places')} data={division}/>)
              }
            </div>
            </div>
            </>}

            {
              component!=='division' && <>
               <SectionTitle title="Plan A Tour"/>
            <div className="flex  justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                places.map((places,i)=> <Card key={i}  data={places}/>)
              }
            </div>
            </div>
              
              </>
            }


            
        </main>
    );
};

export default PlanTour;