import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/triptrekker-logo.png'
import { CgMenuGridR, CgCloseR } from "react-icons/cg";
import { useEffect } from 'react';



const Header = () => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [toggle,setToggle]=useState(true)
    
    const navItem= [
        {name:"HOME", value: "/"},
        {name:"ABOUT", value: "/about"},
        {name:"DASHBOARD", value: "/dashboard"},
        {name:"SIGN IN", value: "/signin"},
        {name:"SIGN UP", value: "/signup"},
    ]
    

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
      className={` z-20 fixed w-full transition-colors duration-300 shadow-lg ${
        navbarBg ? 'bg-white text-black' : 'bg-[#ffffff] bg-opacity-75'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <img className='w-[200px]' src={logo} alt="" />
          <div className="hidden md:block"><div className="flex space-x-4">
            {
                navItem.map((n,i)=><Link key={i} to={n.value }>{n.name}</Link>)
            }

          </div></div>
          
          <button className=' md:hidden' onClick={()=>setToggle(!toggle)}>
            {
              toggle?<CgMenuGridR className='w-[25px] h-[25px]'/> :<CgCloseR className='w-[25px] h-[25px]'/>
            }
          </button>
        </div>
      </div>
      
    </nav>

    {/* Toggled menu  */}

    <div className=" md:hidden">
    <div className={`bg-white max-w-[200px] w-full  h-screen shadow-lg fixed  z-50  scrollable-div duration-500 ease-in-out ${toggle?'top-0 -left-[1000px]':'top-0 left-0'}`}>
      <div className="flex flex-col">
      {
        navItem.map((n,i)=><Link className='border-b-[1px] p-3  ' key={i} to={n.value}>{n.name}</Link>)
      }
      </div>
    </div>
    </div>
    
   
    
    
    </>
    );
};

export default Header;