import React from 'react';
import { useSelector } from 'react-redux';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
    const { user } = useSelector(state=> state.userInfo);

    if(user.role==='user') return <UserDashboard />;
    return (
        <div className='flex justify-center items-center pt-52'>
           Comming Soom
        </div>
    );
};

export default Dashboard;