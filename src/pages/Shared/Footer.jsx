import React from "react";
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

const Footer = () => {
  return (
    <div className="footer border-t-[1px]">
  
        <div className="max-w-[1280px] mx-auto grid grid-cols-1   lg:grid-cols-4 gap-10 py-8 pl-10">
          <div className="max-w-[250px]">
            <img src={logo} className="w-[200px] mb-5" alt="" />
            <p>
              We are a local tourism marketplace in Bangladesh to provide you
              with authentic travel experiences.
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Contact</h1>
            <div className="flex flex-col gap-2">
              <p>House No: 1042, <br />Velanagar, Narsingdi</p>
              <p>+8801600000000</p>
              <p>shahrin15-3335@diu.edu.bd</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Discover</h1>
            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>
              <Link to="/">Plan Tour</Link>
              <Link to="/">About</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold mb-5">Payment Methods</h1>
            <div className="flex justify-center">
            <div className="grid grid-cols-4  gap-2">
              <img className="w-full" src={visa} alt="" />
              <img className="w-full" src={masterCard} alt="" />
              <img className="w-full" src={aExpress} alt="" />
              <img className="w-full" src={bkash} alt="" />
              <img className="w-full" src={rocket} alt="" />
              <img className="w-full" src={nagad} alt="" />
              <img className="w-full" src={dbbl} alt="" />
              <img className="w-full" src={paypal} alt="" />
              
            </div>
              
            </div>
          </div>
        </div>
        
     
      <div className="bg-[#6b6b6b1a] py-5 text-white ">
          <div className="max-w-[1280px] mx-auto text-center ">
            <p className="drop-shadow-lg">TripTrakker © 2023 All Right Reserved</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
