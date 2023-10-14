import React from 'react';
import logo from '../../assets/logo/triptrekker-logo.png'
import { Link } from 'react-router-dom';
import { CgMenuGridR } from "react-icons/cg";
import { useState } from 'react';


const Nav = ({navItem}) => {
    const [open,setOpen]=useState(false);
    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 flex items-center justify-between">
            <Link to='/'> <img className='w-[220px]' src={logo} alt="" /></Link>
            <CgMenuGridR className='text-blue-200 w-[30px] h-[30px] active:scale-95' onClick={()=>setOpen(prev=>!prev)}/>
                
            
            </div>

            {/* Responsive sidebar */}
            <div className={`h-screen fixed w-[300px]  ${open?'left-0':'-left-[1000px]'} duration-700 transform md:hidden z-[1000]`}>
                <div className="bg-gray-700 h-full w-full  top-0 overflow-y-auto no-scrollbar py-5 px-3 flex flex-col gap-3">
                {
                    navItem
                }
                </div>
            </div>
            
        </div>
    );
};

export default Nav;