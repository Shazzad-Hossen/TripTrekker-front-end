import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
import { FaCartShopping, FaHandHoldingDollar } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckRole from '../routes/CheckRole';
import { publicPost } from '../utilities/apiCaller';
import { removeUser } from '../services/userSlice';




const DashboardLayout = () => {
  const {user} = useSelector(state=>state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      const handleSignOut = ()=> {
        publicPost('/api/user/logout').then(res=> {
          if(res?.status===200) {
            dispatch(removeUser());
            navigate('/signin');
          }
          
        })
      }
    
    const navItem = <>
    <NavLink to='home' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><LuLayoutDashboard/> Dashboard </NavLink>

    <NavLink to='profile' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BiSolidUserAccount/> Profile </NavLink>

    <CheckRole role={['admin', 'super-admin']}> <NavLink to='divisions' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><SiDatabricks/> Divisions </NavLink></CheckRole>

    <CheckRole role={['admin', 'super-admin']}><NavLink to='places' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><HiOutlineGlobe/> Places </NavLink></CheckRole>
    
    <CheckRole role={['admin', 'super-admin']}><NavLink to='agencies' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><BsFillSignpost2Fill/> Agencies </NavLink></CheckRole>
    
    <CheckRole role={['admin', 'super-admin']}><NavLink to='hotels' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><FaHotel/> Hotels </NavLink></CheckRole>

    <CheckRole role={['admin', 'super-admin', 'agency', 'hotel']}><NavLink to='packages' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><PiPackageFill/> Packages </NavLink></CheckRole>
    <NavLink to='orders' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><FaCartShopping/> Orders </NavLink>
    
   <CheckRole role={['admin', 'super-admin', 'user']}> <NavLink to='transaction' className={({isActive})=> isActive?' pl-2 ml-1 text-blue-200 font-[600]   sidebar-item':'sidebar-item text-white font-[400]'}><FaHandHoldingDollar/> Transaction </NavLink></CheckRole>

   <div to='transaction' className={`sidebar-item text-white font-[400]`} onClick={handleSignOut}><RiLogoutBoxFill className='text-white' /> Sign Out </div>
   
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