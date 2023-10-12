import React from 'react';
import { useSelector } from 'react-redux';
import AgencyProfile from './AgencyProfile';
import HotelProfile from './HotelProfile';

const AdditionalInfo = () => {
    const { user } = useSelector((state) => state.userInfo);
    return (
        <div>

            {user.role==='agency'?<AgencyProfile/>:<HotelProfile/>}
            
        </div>
    );
};

export default AdditionalInfo;