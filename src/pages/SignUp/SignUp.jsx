import userIco from '../../assets/icon/user.png';
import travelIco from '../../assets/icon/travel-agent.png';
import HotelIco from '../../assets/icon/hotel.png';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

const SignUp = () => {
    const [role, setRole] = useState('');
    return (
        <div className="w-full">

            {
                role !== '' ? <SignUpForm role={role} /> :
                    <div className=" px-5">
                        <div className='my-10 max-w-[800px] w-full mx-auto border rounded shadow-md px-10 pt-12 pb-20 '>
                            <h1 className="text-blue-100 text-2xl text-center py-8 font-[600]">Join TripTrekker as</h1>


                            <div className="flex w-full   justify-center items-center gap-2 select-none">

                                <div className=" border shadow-sm p-5 flex justify-center items-center max-w-[150px] w-full flex-col cursor-pointer active:scale-95" onClick={() => setRole('user')}>
                                    <img className='w-[40px] h-[40px]' src={userIco} alt="" />
                                    <h1 className='pt-5 text-center font-[600] text-blue-200 drop-shadow'>General <br />User</h1>
                                </div>

                                <div className=" border shadow-sm p-5 flex justify-center items-center max-w-[150px] w-full flex-col cursor-pointer active:scale-95" onClick={() => setRole('agency')}>
                                    <img className='w-[40px] h-[40px]' src={travelIco} alt="" />
                                    <h1 className='pt-5 text-center font-[600] text-blue-200 drop-shadow'>Travel <br />Agency</h1>
                                </div>

                                <div className=" border shadow-sm p-5 flex justify-center items-center max-w-[150px] w-full flex-col cursor-pointer active:scale-95" onClick={() => setRole('hotel')}>
                                    <img className='w-[40px] h-[40px]' src={HotelIco} alt="" />
                                    <h1 className='pt-5 text-center font-[600] text-blue-200 drop-shadow'>Hotel <br />Owner</h1>
                                </div>

                            </div>

                        </div>
                    </div>
            }


        </div>
    );
};

export default SignUp;