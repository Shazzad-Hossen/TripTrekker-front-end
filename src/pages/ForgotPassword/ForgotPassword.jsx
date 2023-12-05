import React from "react";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import { useForm } from "react-hook-form"
import { publicPost } from "../../utilities/apiCaller";
import { toast } from "../../utilities/toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigate = useNavigate();
      const onSubmit = (data) => {
        publicPost('/api/user/forgotpass', { email: data?.email}).then(res=> {
            if(res?.status===200) {
                navigate('/verifyotp', { state: { email: data?.email, token: res?.data}})

            } else toast.error(res?.data)
        })
      }
  return (
    <div className="px-5 min-h-[calc(100vh-474px)]">
      <form className="border-2 max-w-[600px] mx-auto rounded-lg  my-24 py-10 shadow-md min-h-[250px] px-16"onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-chakra text-2xl font-[600] text-center pb-5 text-blue-100">
          Forgot Password?
        </h1>
        <div className="flex flex-col gap-2">
            <Input className="" placeholder='Your email address' register={()=> register('email', { required: 'This field is required',
         pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },})}
          errors={errors.email} />
            <Button className="bg-blue-100 text-white" type="submit">Send Otp</Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
