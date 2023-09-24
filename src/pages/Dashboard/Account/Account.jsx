
import imageIco from '../../../assets/svg/imageIco.svg';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import PasswordInput from '../../Shared/PasswordInput';
import { useForm } from "react-hook-form"

const Account = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => console.log(data)


    return (
        <div className='pl-20 pr-5 py-10'>
            <div className="flex gap-10">
                <h1 className='text-blue-100 font-[600]'>Photo : </h1>
                <div className="w-[100px] h-[100px] bg-slate-300 rounded-lg flex justify-center items-center ">
                    <img className='h-[60px] w-[60px]' src={imageIco} alt="" />
                </div>
                <ul className='text-slate-400 justify-center flex flex-col list-disc'>
                    <li>The image must be clear and recent</li>
                    <li>Size must be 4*4</li>
                    <li>Size must not exceed 5mb</li>
                </ul>
               
                
            </div>
            <form  onSubmit={handleSubmit(onSubmit)}>

                <div className="pt-10 w-full flex flex-col gap-5 max-w-[600px] ">
                <h1 className='font-[600] text-xl text-blue-200'>General Information</h1>
                <Input label='Full Name' placeholder='Full name' register= { ()=>register('fullName')}/>
                <div className="flex items-center gap-5">
                    <p className='text-blue-100 font-[600]'>Gender</p>
                   <span> <input className='mr-2' type="radio" value='male'  {...register('gender')} />Male</span>
                   <span> <input className='mr-2' type="radio" value='female'  {...register('gender')} />Female</span>
                   <span> <input className='mr-2' type="radio" value='other'  {...register('gender')} />Other</span>
                    </div>

                <Input type='phone' label='Phone' placeholder='+880'/>
                <Input label='NID' placeholder='National id' register= { ()=>register('nid')}/>


                <h1 className='font-[600] text-xl text-blue-200'>Address</h1>
                <Input label='Street/ Village' placeholder='street'/>
                <Input label='City' placeholder='city'/>
                <Input label='Zip' placeholder='zip'/>


                <h1 className='font-[600] text-xl text-blue-200'>Account Information</h1>

                <Input label='Email' type='email' placeholder='example@example.com'/>
                <PasswordInput label='Current Password' placeholder='Current password'/>
                <PasswordInput label='New Password' placeholder='Current password'/>
                <PasswordInput label='Confirm Password' placeholder='Current password'/>
                </div>

                <div className="flex items-center justify-center gap-3 pt-10">
                    <Button className='bg-blue-200 text-white w-[80px]'>Reset</Button>
                    <Button type='submit' className='btn-primary  w-[80px]'>Save</Button>
                </div>


            </form>
        
        </div>
    );
};

export default Account;

