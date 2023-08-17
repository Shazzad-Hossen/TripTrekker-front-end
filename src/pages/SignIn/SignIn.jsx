import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import google from "../../assets/icon/google.png";
import { googleSignin, signinUser } from "../../firebase.config";
import { publicGet, publicPost } from "../../utilities/apiCaller";
import { useDispatch } from "react-redux";
import { userSignin } from "../../services/userSlice";


const SignIn = () => {
  const [pass, setPass] = useState(true);
  const dispatch=useDispatch();
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    signinUser(data.email,data.password)
    .then(res=>{
      publicGet(`/user/${data.email}`)
      .then(res=>{
        dispatch(userSignin(res));
      })
    })
    .catch(err=>{
      console.log(err)
    })
  };

  const googleHandler=()=>{
    googleSignin()
    .then(res=>{
      const userData={
        "name": res.user.displayName,
        "email": res.user.email,
        "role": "user",
        "photo": res.user.photoURL,
        "phone": "",
        "address": "",

      }

      publicPost('/user',userData)
         .then(res=>{
         
          if(res.acknowledged===true){
            
            dispatch(userSignin(res.user));
            navigate('/');
           
          }
          else {
            toast.success("Something wents wrong");
           


          }
        });
      
    })
    .catch(err=>{

    })
  }

  return (
    
      <div className=" bg-no-repeat bg-cover py-40 px-5">
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="border-2 rounded-md w-full max-w-[500px] p-10 shadow-lg bg-white border-white border-opacity-10 bg-opacity-10
                    "
          >
            <h1 className="font-chakra text-[#333333] text-3xl text-center">
              Sign In
            </h1>

            <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
              

              <div className="flex flex-col gap-1 mb-4">
                <legend className=" text-[#333333] text-lg">Email</legend>
                <input
                  className="  text-[#333333] border-[1px]  bg-[#fff9f94f] p-1 rounded-md w-full"
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
                  <span className="flex items-center justify-between">
                    <legend className=" text-[#333333] text-lg">Password</legend>
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
                    className="text-[#333333] border-[1px]  bg-[#fff9f94f] p-1 rounded-md w-full"
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
                
              
              {errors.password &&  <p>{errors.password.message}</p> }
               
              

              <input
                type="submit"
                value="Sign In"
                className="bg-gradient-to-r from-cyan-500 to-blue-500  w-full p-2 rounded-md shadow-md text-white "
              />
              <p className="text-[#333333] text-lg py-3">
                Do not have an account?{" "}
                <Link className="text-[#1976c2]" to="/signup">
                  Sign Up here
                </Link>
              </p>
            </form>
            <p className="text-white text-center py-2">Or sign in with</p>
            <div className="mb-10 flex justify-center items-center">
              <button onClick={googleHandler} className="bg-white border-2 py-2 px-4  flex items-center gap-2 text-md font-semibold rounded-md">
                <img src={google} className="w-[30px]" alt="" /> Sign In with
                google
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SignIn;
