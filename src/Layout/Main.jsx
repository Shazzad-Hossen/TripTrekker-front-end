import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
           
           <div className="mx-8"> <Outlet/></div>
            
            <Footer/>
            
        </div>
    );
};

export default Main;