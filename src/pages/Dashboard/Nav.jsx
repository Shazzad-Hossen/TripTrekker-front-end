import React from 'react';
import logo from '../../assets/logo/triptrekker-logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 flex items-center justify-between">
               <Link to='/'> <img className='w-[220px]' src={logo} alt="" /></Link>
            </div>
            
        </div>
    );
};

export default Nav;