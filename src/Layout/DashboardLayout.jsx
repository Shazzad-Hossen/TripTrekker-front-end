import React from 'react';
import Footer from '../pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/Dashboard/Nav';
import Sidebar from '../pages/Dashboard/Sidebar';
import { ToastContainer } from 'react-toastify';

const DashboardLayout = () => {
    return (
        <div>
            <ToastContainer />
            <Nav />
            <div className="flex h-[calc(100vh-72.203px)]">
                <Sidebar />
                <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-5 ">  <div className=" w-full  py-2 border  shadow-md rounded min-h-[calc(100vh-120px)]  "><Outlet /></div></div>
            </div>


        </div>
    );
};

export default DashboardLayout;