import React from 'react';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/Dashboard/Nav';
import Sidebar from '../pages/Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <Nav/>
           <div className="flex h-[calc(100vh-72.203px)]">
            <Sidebar/>
          <div className="p-5 w-full h-full">
          <div className="border h-full p-2 shadow-md rounded overflow-y-auto no-scrollbar"><Outlet/></div>
          </div>
           </div>
            <Footer/>
            
        </div>
    );
};

export default DashboardLayout;