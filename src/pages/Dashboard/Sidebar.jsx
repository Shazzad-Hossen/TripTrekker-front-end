import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";



const Sidebar = () => {
    const navItem = <>
    <NavLink to='home' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><LuLayoutDashboard/> Dashboard </NavLink>
    <NavLink to='account' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BiSolidUserAccount/> Account </NavLink>
   
    </>
    return (
        <div className='bg-gray-700 h-full w-[300px] sticky top-0 overflow-y-auto no-scrollbar py-5 px-3 flex flex-col gap-3'>
            {
                navItem
            }
           
            
        </div>
    );
};

export default Sidebar;