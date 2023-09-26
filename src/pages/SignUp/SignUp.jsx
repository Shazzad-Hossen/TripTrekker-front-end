import React, { useState } from "react";
import Input from "../Shared/Input";
import { useForm } from "react-hook-form";
import Button from "../Shared/Button";
import PasswordInput from "../Shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { publicPost } from "../../utilities/apiCaller";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    delete data.accept;
    if(data.password!==data.confirmPassword){
      setError('confirmPassword', {message: 'Confirm password does not matched'})
    }
    else {
      delete data.confirmPassword;
      publicPost('/api/user',data).then(res=>{
        if(res.status===201){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfull',
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/signin')

        }
        else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: res?.data || 'Something wents wrong',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  }

  return (
    <div className="mx-5">
      <div className="border-2 max-w-[600px] mx-auto rounded-lg  my-24 py-10 shadow-md min-h-[650px] px-16">
        <h1 className="font-chakra text-2xl font-[600] text-center pb-5 text-blue-100">
          Sign Up
        </h1>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Full Name"
            register={() =>
              register("fullName", { required: "Name is required", minLength: {
                value: 5,
                message: 'Name must be at least 5 charecters'
              } })
            }
            errors={errors["fullName"]}
          />
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
          <div className="flex sm:items-start gap-2 justify-between w-full flex-col sm:flex-row">
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
            <PasswordInput
              label="Confirm Password"
              className="w-full"
              register={() => register("confirmPassword",{
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message: 'Password must meet the criteria',
                },
              })}
              errors={errors['confirmPassword']}
            />
          </div>
          <div className="flex  items-center gap-4">
            <input
              type="checkbox"
              onClick={(e) => setChecked(e.target.checked)}
              {...register("accept")}
            />
            <p className="font-[400] text-sm text-blue-200">
              Accept terms and{" "}
              <Link to="#" className="text-blue-100 font-[600]">
                conditions
              </Link>
            </p>
          </div>
          <Button disabled={!checked} type="submit" className="btn-primary" onClick={()=>clearErrors()}>
            Sign Up
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

export default SignUp;
