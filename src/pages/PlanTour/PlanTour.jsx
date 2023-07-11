import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Card from '../Home/Card';

const PlanTour = () => {
    const divisions=[1,2,3,4,5,6,7,8]
    return (
        <main className='pt-28'>
            <SectionTitle title="Plan A Tour"/>
            <div className="flex  justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                divisions.map((division,i)=> <Card key={i} division={division}/>)
              }
            </div>
            </div>
            
        </main>
    );
};

export default PlanTour;