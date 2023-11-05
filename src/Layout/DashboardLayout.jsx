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
import { FaHotel } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect } from 'react';




const DashboardLayout = () => {
    useEffect(() => {
        const handleClick = (event) => {
          const { target } = event;
          const isInputOrTextarea = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
    
          if (!isInputOrTextarea) {
            document.body.style.userSelect = 'none'; // Disable cursor blinking
          }
        };
    
        document.addEventListener('click', handleClick);
    
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, []);
    
    const navItem = <>
    <NavLink to='home' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><LuLayoutDashboard/> Dashboard </NavLink>
    <NavLink to='profile' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BiSolidUserAccount/> Profile </NavLink>
    <NavLink to='divisions' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><SiDatabricks/> Divisions </NavLink>
    <NavLink to='places' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><HiOutlineGlobe/> Places </NavLink>
    <NavLink to='agencies' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BsFillSignpost2Fill/> Agencies </NavLink>
    <NavLink to='hotels' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><FaHotel/> Hotels </NavLink>
    <NavLink to='packages' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><PiPackageFill/> Packages </NavLink>
    <NavLink to='orders' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><FaCartShopping/> Orders </NavLink>
   
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