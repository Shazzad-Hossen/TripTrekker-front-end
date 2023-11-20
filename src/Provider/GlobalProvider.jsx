import React, { useEffect } from 'react';
import { publicGet } from '../utilities/apiCaller';
import { useDispatch } from 'react-redux';
import { removeUser } from '../services/userSlice';

const GlobalProvider = ({children}) => {
    const dispatch = useDispatch();
    useEffect(()=> {
        publicGet('/api/user/me').then(res=> {
            // console.log(res);
            if(res.status!==200) {
                dispatch(removeUser());

            }
        })

    }, [])
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default GlobalProvider;