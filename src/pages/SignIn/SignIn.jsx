import React, { useState } from "react";
import Input from "../Shared/Input";
import { useForm } from "react-hook-form";
import Button from "../Shared/Button";
import PasswordInput from "../Shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { publicPost } from "../../utilities/apiCaller";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/userSlice";
import { toast } from "../../utilities/toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = (data) => {
    publicPost('/api/user/login', data).then(res=>{
      if(res.status===200){
        dispatch(setUser(res.data));
        navigate('/')
      }
      else toast.error(res?.data)
    });
  }

  return (
    <div className="mx-5">
      <div className="border-2 max-w-[600px] mx-auto rounded-lg  my-24 py-10 shadow-md min-h-[650px] px-16">
        <h1 className="font-chakra text-2xl font-[600] text-center pb-5 text-blue-100">
          Sign In
        </h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
         
          <Input
            label="Email"
            type="email"
            register={() => register("email", {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            errors={errors['email']}
          />
          <PasswordInput
              label="Password"
              className="w-full"
              register={() => register("password", {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message: 'Password must meet the criteria',
                },
              })}
              errors={errors['password']}
            />
         <Link className='text-end text-blue-200 text-sm' to='/forgotpassword'>Forgot Password?</Link>
          <Button  type="submit" className="btn-primary">
            Sign In
          </Button>
        </form>
        <div className="text-center py-5 text-blue-200"> Or Sign In with</div>

        <div className="w-full flex flex-col gap-5">
          <Button className="w-full btn-secondary" StartIcon={FcGoogle}>
            Sign in with Google
          </Button>
          <Button className="w-full btn-secondary" StartIcon={BsGithub}>
            Sign in with GitHub
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default SignIn;
