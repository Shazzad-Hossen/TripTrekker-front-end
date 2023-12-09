import React, { useState } from "react";
import logo from "../../assets/logo/triptrekker-logo.png";
import { Link } from "react-router-dom";
import visa from '../../assets/payment/visa.png'
import masterCard from '../../assets/payment/mastercard.png'
import aExpress from '../../assets/payment/american-express.png'
import bkash from '../../assets/payment/bkash.png'
import rocket from '../../assets/payment/rocket.png'
import nagad from '../../assets/payment/nagad.png'
import dbbl from '../../assets/payment/dbbl.png'
import paypal from '../../assets/payment/paypal.png'
import { useForm } from "react-hook-form"
import { CustomChat, FacebookProvider } from "react-facebook";



const Footer = () => {
  const [isChat, setIsChat]= useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="bg-blue-100 border-t-[1px] text-white ">
  
        <div className="max-w-[1280px] mx-auto flex flex-col   md:flex-row justify-between py-8 px-10 ">
          <div className="max-w-[250px]">
            <img src={logo} className="w-[200px] mb-5" alt="" />
            <p>
              We are a local tourism marketplace in Bangladesh to provide you
              with authentic travel experiences.
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Contact</h1>
            <div className="flex flex-col gap-2 font-[300]">
              <p>House No: 1042, <br />Velanagar, Narsingdi</p>
              <p>+8801600000000</p>
              <p>shahrin15-3335@diu.edu.bd</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Discover</h1>
            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>
              <Link to="/plantour">Plan Tour</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Payment Methods</h1>
            <div className="flex justify-start">
            <div className="grid grid-cols-4  gap-2">
              <img className="w-[40px]" src={visa} alt="" />
              <img className="w-[40px]" src={masterCard} alt="" />
              <img className="w-[40px]" src={aExpress} alt="" />
              <img className="w-[40px]" src={bkash} alt="" />
              <img className="w-[40px]" src={rocket} alt="" />
              <img className="w-[40px]" src={nagad} alt="" />
              <img className="w-[40px]" src={dbbl} alt="" />
              <img className="w-[40px]" src={paypal} alt="" />
              
            </div>
              
            </div>
          </div>
        </div>
        
     
      <div className="bg-[#0d233b] py-5 text-white border-t border-[#1d367a] ">
          <div className="max-w-[1280px] mx-auto text-center ">
            <p className="drop-shadow-lg">TripTrakker © 2023 All Right Reserved</p>
          </div>
        </div>
        <FacebookProvider appId="1010226250087775" chatSupport>
        <CustomChat pageId="994002627350323" minimized={false}/>
      </FacebookProvider>

        
    </div>
  );
};

export default Footer;
