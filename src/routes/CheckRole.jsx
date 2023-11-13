import React from 'react';
import { useSelector } from 'react-redux';

const CheckRole = ({children, role=[]}) => {
    const { user }= useSelector(state=> state.userInfo);
    return (
        <>
        {role.includes(user.role) ? children :''}
        </>
    );
};

export default CheckRole;