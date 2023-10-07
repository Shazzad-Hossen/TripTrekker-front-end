import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';

const Profile = () => {
    const {role} = useSelector((state)=>state.userInfo.user);
    return (
       <>

       {
        role==='user'?<UserProfile/>:''
       }
       
       </>
    );
};

export default Profile;