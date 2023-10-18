import React from 'react';
import { useSelector } from 'react-redux';
import AddTourPackage from './AddTourPackage';

const AddPackages = () => {
    const {user} = useSelector((state)=>state.userInfo);

    return (
        <div>
            {
                user?.role==='agency'? <AddTourPackage/>:''
            }
            
            
        </div>
    );
};

export default AddPackages;