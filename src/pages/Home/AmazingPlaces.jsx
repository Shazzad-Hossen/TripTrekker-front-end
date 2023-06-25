import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Card from './Card';

const AmazingPlaces = () => {
    const places=[1,2,3,4,5,6,7,8]
    return (
        <main>
            <SectionTitle title='Amazing places to visit'/>

            <div className="flex  justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                places.map((place,i)=> <Card key={i} place={place}/>)
              }
            </div>
            </div>

            
        </main>
    );
};

export default AmazingPlaces;