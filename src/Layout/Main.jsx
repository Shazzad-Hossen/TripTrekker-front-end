import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';



const Main = () => {


    return (
        <div>
            <Header />
            <ToastContainer />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;