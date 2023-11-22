import React from 'react';
import { useSelector } from 'react-redux';
import UserDashboard from './UserDashboard/UserDashboard';
import AgencyDashboard from './AgencyDashboard/AgencyDashboard';
import HotelDashboard from './HotelDashboard/HotelDashboard';
import AdminDashboard from './AdminDashboard/AdminDashboard';

const Dashboard = () => {
    const { user } = useSelector(state=> state.userInfo);

    if(user.role==='user') return <UserDashboard />;
    else if(user.role==='agency') return <AgencyDashboard />;
    else if(user.role==='hotel') return <HotelDashboard />;
    else if(user.role==='admin' || user.role==='super-admin') return <AdminDashboard />;
    return (
        <div className='flex justify-center items-center pt-52'>
           Comming Soom
        </div>
    );
};

export default Dashboard;