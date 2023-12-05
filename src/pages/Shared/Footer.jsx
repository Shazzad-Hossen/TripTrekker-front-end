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
import chatIco from '../../assets/icon/chat.png';
import { IoCloseSharp } from "react-icons/io5";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form"



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
              <Link to="/">Plan Tour</Link>
              <Link to="/">About</Link>
              <Link to="/">Contact Us</Link>
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

        <div className={`fixed ${isChat?'-bottom-44 right-14':'bottom-24 right-14'} duration-300`}><img src={chatIco} className="w-[40px] " alt="" onClick={()=>setIsChat(prev=>!prev)}/></div>
        <div className={`w-[250px] h-[400px] bg-white rounded shadow-md fixed ${isChat?'bottom-14 right-14':'-bottom-[1000px] right-14'} duration-700`}>
          <form className="bg-blue-200/50 rounded" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-end p-2"><IoCloseSharp className="text-2xl" onClick={() => setIsChat(prev=> !prev)}/>
          </div>
          <div className="p-5">
            <h1 className="drop-shadow-md">Full Name</h1>
            <Input placeholder='Your full name' className="text-black"  register={() =>
                  register("fullName", { required: true })
                } />
            <h1 className="drop-shadow-md pt-2">Email </h1>
            <Input placeholder='abc@example.com' className="text-black" register={() =>
                  register("email", { required: true })
                }/>
            <h1 className="drop-shadow-md pt-2 ">Message </h1>
           <textarea className="w-full rounded h-28 resize-none outline-none text-black p-2 focus:placeholder:opacity-0" placeholder="Your messages" {...register('message', { required: true})} />
           <div className="flex justify-end pt-2">
            <Button className="bg-blue-100" type="submit">Send</Button>
           </div>
          </div>
          </form>
        </div>
    </div>
  );
};

export default Footer;
