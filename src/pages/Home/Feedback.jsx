import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import ReviewCard from './ReviewCard';


const Feedback = () => {
    return (
        <main className='mb-[50px]'>
            <SectionTitle title="Reviews"/>
            <ReviewCard/>
        </main>
    );
};

export default Feedback;