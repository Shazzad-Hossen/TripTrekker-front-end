import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import google from "../../assets/icon/google.png";
import bg from '../../assets/bg/loginbg.jpg'

const SignUp = () => {
  const [pass, setPass] = useState(true);
  const [confPass, setConfPass] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    

      <div className="bg-signup bg-no-repeat bg-cover   py-40 px-5">
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="border-2 rounded-md w-full max-w-[500px] p-10 shadow-lg bg-black border-black border-opacity-10 bg-opacity-10
                    "
          >
            <h1 className="font-chakra text-white text-3xl text-center">
              Sign Up
            </h1>

            <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-1 mb-4">
                <legend className=" text-white text-lg">Name</legend>
                <input
                  className="bg-white bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 5,
                      message: "Name must be at least 5 characters",
                    },
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <legend className=" text-white text-lg">Email</legend>
                <input
                  className="bg-white bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <legend className=" text-white text-lg">Phone</legend>
                <input
                  className="bg-white bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <legend className=" text-white text-lg">Address</legend>
                <input
                  className="bg-white bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 5,
                      message: "Address must be at least 5 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Address must not exceed 30 characters",
                    },
                  })}
                />
                {errors.address && <p>{errors.address.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between ">
                <div className="flex flex-col gap-1 mb-4 w-full sm:w-auto">
                  <span className="flex items-center justify-between">
                    <legend className=" text-white text-lg">Password</legend>
                    <span
                      onClick={() => setPass(!pass)}
                      className="text-white pr-2"
                    >
                      {pass ? (
                        <AiFillEyeInvisible className="h-[20px] w-[20px]" />
                      ) : (
                        <AiFillEye className="h-[20px] w-[20px]" />
                      )}
                    </span>
                  </span>
                  <input
                    type={`${pass ? "password" : "text"}`}
                    className="bg-white  bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 12,
                        message: "Password must not exceed 12 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,12}$/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4 w-full sm:w-auto">
                  <span className="flex items-center justify-between ">
                    <legend className=" text-white text-lg">
                      Confirm Password
                    </legend>
                    <span
                      onClick={() => setConfPass(!confPass)}
                      className="text-white  pr-2"
                    >
                      {confPass ? (
                        <AiFillEyeInvisible className="h-[20px] w-[20px]" />
                      ) : (
                        <AiFillEye className="h-[20px] w-[20px]" />
                      )}
                    </span>
                  </span>
                  <input
                    type={`${confPass ? "password" : "text"}`}
                    className="bg-white bg-opacity-40 text-white border-[1px] border-opacity-40 border-white p-1 rounded-md w-full"
                    {...register("confPassword", {
                      required: "Confirm Password is required",
                      minLength: {
                        value: 6,
                        message:
                          "Confirm Password must be at least 6 characters",
                      },
                      maxLength: {
                        value: 12,
                        message:
                          "Confirm Password must not exceed 12 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,12}$/,
                        message:
                          "Confirm Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                      },
                    })}
                  />
                </div>
              </div>
              {errors.password ? (
                <p>{errors.password.message}</p>
              ) : errors.confPassword ? (
                <p>{errors.confPassword.message}</p>
              ) : (
                <></>
              )}

              <input
                type="submit"
                value="Sign Up"
                className="bg-gradient-to-r from-cyan-500 to-blue-500  w-full p-2 rounded-md shadow-md text-white "
              />
              <p className="text-white text-lg py-3">
                Already have an account?{" "}
                <Link className="text-[#b3fcff]" to="/signin">
                  Sign in here
                </Link>
              </p>
            </form>
            <p className="text-white text-center py-2">Or sign in with</p>
            <div className="mb-10 flex justify-center items-center">
              <button className="bg-white py-2 px-4  flex items-center gap-2 text-md font-semibold rounded-md">
                <img src={google} className="w-[30px]" alt="" /> Sign In with
                google
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SignUp;
