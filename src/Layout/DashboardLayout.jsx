import React from 'react';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/Dashboard/Nav';
import Sidebar from '../pages/Dashboard/Sidebar';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";
import { HiOutlineGlobe } from "react-icons/hi";
import { SiDatabricks } from "react-icons/si";
import { BsFillSignpost2Fill } from "react-icons/bs";


const DashboardLayout = () => {
    const navItem = <>
    <NavLink to='home' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><LuLayoutDashboard/> Dashboard </NavLink>
    <NavLink to='profile' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BiSolidUserAccount/> Profile </NavLink>
    <NavLink to='divisions' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><SiDatabricks/> Divisions </NavLink>
    <NavLink to='places' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><HiOutlineGlobe/> Places </NavLink>
    <NavLink to='agencies' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BsFillSignpost2Fill/> Agencies </NavLink>
   
    </>
    
    
    return (
        <div>
            <ToastContainer />
            <Nav navItem={navItem} />
            <div className="flex h-[calc(100vh-72.203px)]">
                <Sidebar navItem={navItem} />
                <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-5 ">  <div className=" w-full  py-2 border  shadow-md rounded min-h-[calc(100vh-120px)]  "><Outlet /></div></div>
            </div>


        </div>
    );
};

export default DashboardLayout;