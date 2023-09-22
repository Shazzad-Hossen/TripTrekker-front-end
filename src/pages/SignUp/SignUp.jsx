import React, { useState } from 'react';
import Input from '../Shared/Input';
import { useForm } from "react-hook-form"
import Button from '../Shared/Button';
import PasswordInput from '../Shared/PasswordInput';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [checked,setChecked]=useState(false);


  const onSubmit = (data) => console.log(data)

  return (
    <div className='border-2 max-w-[600px] mx-auto rounded-lg  my-24 shadow-md h-[600px] px-16'>
      <h1  className='font-chakra text-2xl font-[600] text-center my-10 text-blue-100'>Sign Up</h1>

      <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

        <Input label='Full Name' register={()=>register('fullName')}/>
        <Input label='Email' type='email' register={()=>register('email')}/>
        <div className="flex items-center justify-between w-full">
          <PasswordInput label='Password' className='w-full' register={()=>register('password')}/>
          <PasswordInput label='Confirm Password' className='w-full' register={()=>register('confirmPassword')}/>
        </div>
        <div className="flex items-center gap-4">
          <input type="checkbox" onClick={(e)=>setChecked(e.target.checked)} {...register('accept')} />
          <p  className='font-[400] text-sm text-blue-200'>Accept terms and <Link to='#' className='text-blue-100 font-[600]'>conditions</Link></p>
        </div>
        <Button disabled={!checked} type='submit'>Sign Up</Button>
      </form>
      
    </div>
  );
};

export default SignUp;