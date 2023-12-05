import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';
import Input from '../Shared/Input';
import { publicPost } from '../../utilities/apiCaller';
import { useForm } from 'react-hook-form';
import PasswordInput from '../Shared/PasswordInput';
import { toast } from '../../utilities/toast';

const ResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, token } = location.state;
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        if(data?.password!== data?.confPassword) return setError('confPassword', { message: 'Confirm password do not matched'})
        publicPost('/api/user/resetpassword', { email, password: data?.password, token}).then(res=> {
            if(res?.status===200) {
                toast.success('Password reset successfull');
                navigate('/signin', { state: { email: data?.email, token: res?.data}})

            } else toast.error(res?.data)
        })
      }

    return (
        <div className="px-5 min-h-[calc(100vh-474px)]">
        <form className="border-2 max-w-[600px] mx-auto rounded-lg  my-24 py-10 shadow-md min-h-[250px] px-16"onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-chakra text-2xl font-[600] text-center pb-5 text-blue-100">
            Reset Password
          </h1>
          <div className="flex flex-col gap-2">
            
              <PasswordInput label='New Password' className="" placeholder='New password' register={()=> register('password', { required: 'This field is required',
           pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
            message: "Password must contain at least 1 capital letter, 1 small letter, 1 number, and 1 special character"
          },})}
            errors={errors.password} />
            <PasswordInput label='Confirm Password'  className="" placeholder='Confirm password' register={()=> register('confPassword', { required: 'This field is required',
           pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
            message: "Password must contain at least 1 capital letter, 1 small letter, 1 number, and 1 special character"
          },})}
            errors={errors.confPassword} />
              <Button className="bg-blue-100 text-white mt-5" type="submit" onClick= {()=> clearErrors()}>Send</Button>
          </div>
        </form>
      </div>
    );
};

export default ResetPassword;