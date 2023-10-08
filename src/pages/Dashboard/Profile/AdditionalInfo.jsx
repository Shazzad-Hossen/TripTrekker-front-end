import React from 'react';
import { useSelector } from 'react-redux';
import AgencyProfile from './AgencyProfile';

const AdditionalInfo = () => {
    const { user } = useSelector((state) => state.userInfo);
    return (
        <div>

            {user.role==='agency'?<AgencyProfile/>:''}
            
        </div>
    );
};

export default AdditionalInfo;