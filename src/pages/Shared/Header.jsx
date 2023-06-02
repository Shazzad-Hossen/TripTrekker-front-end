import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import { CgMenuGridR, CgCloseR } from "react-icons/cg";


const Header = () => {

    const [menu,setMenu]=useState(true);

    const navItem= 
    <>
    <Link to='/'>HOME</Link>
    <Link to='signin'>SIGN IN</Link>
    <Link to='signup'>SIGN UP</Link>

    </>
    return (
        
           

            
<div className='w-full fixed px-4 py-6 shadow-xl z-10 bg-white text-xl'>
            

            <div className="flex items-center justify-between">

            <div className="md:hidden">
            <div className={`shadow-xl absolute  w-full duration-1000 ease-in-out ${menu? '-top-[1000px] right-0': 'top-20 right-0'}`}>
                <div className="flex flex-col bg-white z-20 p-8">
                    { navItem}
                </div>
            </div>
            </div>
                <img className='w-[250px]' src={logo} alt="TripTrekker" />
                <div className="hidden md:block"><div className="flex items-center gap-4 ">
                    {navItem}
                </div></div>
                <button onClick={()=>setMenu(!menu)} className='text-[#96BC33] md:hidden'>
                    {
                        menu? <CgMenuGridR className="w-[30px] h-[30px]"/> : <CgCloseR className="w-[30px] h-[30px]"/> 
                    }
                </button>


            </div>
           
        </div>
        
    );
};

export default Header;