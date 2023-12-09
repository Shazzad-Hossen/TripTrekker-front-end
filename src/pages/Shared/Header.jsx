import React, { useEffect, useRef, useState } from 'react';
import { CgCloseR, CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo/triptrekker-logo.png';
import { removeUser } from '../../services/userSlice';
import { publicPost } from '../../utilities/apiCaller';



const Header = () => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [toggle,setToggle]=useState(true);
    const {user}= useSelector((state)=>state.userInfo);
    const dispatch= useDispatch();
    const location=useLocation();
    const navigate = useNavigate();
    const menuRef = useRef();

    
    const handleSignOut = ()=> {
      publicPost('/api/user/logout').then(res=> {
        if(res?.status===200) {
          dispatch(removeUser());
          navigate('/signin');

        }
        
      })
    }

   




    const navItem= <>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/'>HOME</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/plantour'>PLAN TOUR</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/experience'>EXPERIENCE</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/packages'>PACKAGES</Link>
    <Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/hotels'>HOTELS</Link>
    
    {user? <button className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 text-start' onClick={handleSignOut}>SIGN OUT</button>:<><Link className='md:drop-shadow-lg border-b-[1px] p-3 md:border-0 md:p-0 ' to='/signin'>SIGN IN</Link>
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
       {
        location?.pathname==='/'?'':<div className="h-20"></div>
       }
        <nav
      className={` z-20 fixed w-full transition-colors duration-300  top-0 ${
        navbarBg ? ' text-white backdrop-blur-xl bg-blue-100/80 ' : ' bg-blue-100 text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link to='/'><img className='w-[200px]' src={logo} alt="" /></Link>
         <div className="">

         <div className="hidden md:block">
          <div className="flex space-x-3  md:text-md ">
            {navItem}
            
         {user? <Link to='/dashboard/home'>
          {
            user?.avatar!==''? <img className='h-[25px] w-[25px] rounded-full' src={user?.avatar}/>: <div className='h-[25px] w-[25px] rounded-full bg-white text-blue-100 flex justify-center items-center font-[600]' >{user.fullName[0]}</div>
          }
          </Link>
          :
          <div className="flex items-center gap-2">
          
          {user && <Link to='/dashboard/home'><img className=' h-[25px] w-[25px] rounded-full md:hidden' src={user?.avatar}/> </Link>
          }
          </div>
          }
            
          </div></div>
          <button className=' md:hidden flex items-center gap-2' onClick={()=>setToggle(!toggle)}>
            {
              toggle?<CgMenuGridR className='w-[25px] h-[25px]'/> :<CgCloseR className='w-[25px] h-[25px]'/>
            }
            
          </button>
         </div>
          
          
          
            
          
          

        </div>
      </div>
      
    </nav>

    {/* Toggled menu  */}

    <div className=" md:hidden"  ref={menuRef}>
    <div className={`bg-white max-w-[200px] w-full  h-screen shadow-lg fixed  z-50  scrollable-div duration-500 ease-in-out ${toggle?'top-0 -left-[1000px]':'top-0 left-0'}`} >
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