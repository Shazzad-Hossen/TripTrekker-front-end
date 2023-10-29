import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';



const Main = () => {
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