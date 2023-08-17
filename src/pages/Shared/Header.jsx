import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/triptrekker-logo.png'
import { CgMenuGridR, CgCloseR } from "react-icons/cg";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { userSignout } from '../../services/userSlice';



const Header = () => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [toggle,setToggle]=useState(true);
    const {user}= useSelector((state)=>state.userInfo);
    const dispatch= useDispatch();
    const location=useLocation();

    



    const navItem= <>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/'>HOME</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/about'>ABOUT</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/plantour'>PLAN TOUR</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/dashboard'>DASHBOARD</Link>
    
    {user? <button className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 text-start' onClick={()=>dispatch(userSignout())}>SIGN OUT</button>:<><Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/signin'>SIGN IN</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/signup'>SIGN UP</Link></>}
    
    </>
    
    useEffect(()=>{
      if(location.pathname!=='/') {
       setNavbarBg(true)
      }

    },[location.pathname])
    

    useEffect(() => {
      const handleScroll = () => {
        
        if (window.scrollY > 0) {
          setNavbarBg(true);
        } else {
          setNavbarBg(false);
        }
       
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
       <>
        <nav
      className={` z-20 fixed w-full transition-colors duration-300  top-0 ${
        navbarBg ? 'bg-[#ffffff] text-black backdrop-blur-xl bg-white/30' : ' bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <img className='w-[200px]' src={logo} alt="" />
          <div className="hidden md:block"><div className="flex space-x-4">
            {navItem}
            
          {
            user && <img className='h-[25px] w-[25px] rounded-full' src={user?.photo}/>
          }
            
          </div></div>
          <button className=' md:hidden flex items-center gap-2' onClick={()=>setToggle(!toggle)}>
            {
              toggle?<CgMenuGridR className='w-[25px] h-[25px]'/> :<CgCloseR className='w-[25px] h-[25px]'/>
            }
            {user && <img className=' h-[25px] w-[25px] rounded-full' src={user?.photo}/>
          }
          </button>
          
            
          
          

        </div>
      </div>
      
    </nav>

    {/* Toggled menu  */}

    <div className=" md:hidden">
    <div className={`bg-white max-w-[200px] w-full  h-screen shadow-lg fixed  z-50  scrollable-div duration-500 ease-in-out ${toggle?'top-0 -left-[1000px]':'top-0 left-0'}`}>
      <div className="flex flex-col">
      {navItem}
      </div>
    </div>
    </div>
    
   
    <ToastContainer />
    
    </>
    );
};

export default Header;