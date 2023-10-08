import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import imageIco from "../../../assets/svg/imageIco.svg";
import { useRef } from 'react';
import { useState } from 'react';
import { toast } from '../../../utilities/toast';
import Input from '../../Shared/Input';



const AgencyProfile = () => {
    const navigate = useNavigate();
    const logoRef = useRef(null);
    const [logo,setLogo]=useState('')


    const handleFileChange = (e) => {
      if(e.target.files[0].type.slice(0,5)==='image') {
        if(e.target.files.length>0){
            setLogo(e.target.files[0]);
           }
            
      }
      else {
        toast.error('Invalid file type')
      }
       

    }
    return (
        <div>
            <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center"> <button className="border px-2  py-2 mr-5 rounded" onClick={() => navigate(-1)}><IoIosArrowBack /></button> Additional Information</div>
            <div className="pl-20 pr-5 py-10">

                <div className="flex gap-10">
                    <h1 className="text-blue-100 font-[600]">Logo : </h1>
                    <div
                        className="w-[100px] h-[100px] bg-slate-300 rounded-lg flex justify-center items-center "
                        onClick={() => logoRef.current.click()}
                    >
                        <img className={`${logo===''?'h-[60px] w-[60px]':'h-full w-full rounded shadow'}`} src={logo===''?imageIco:typeof logo==='string'?logo:URL.createObjectURL(logo)} alt="" />
                    </div>
                </div>
                <form className="pt-10 flex flex-col w-full gap-5">
                    <div className="max-w-[600px] w-full">
                    <Input label='Agency Name' placeholder='Agency Name'/>
                    </div>
                    <div className="max-w-[600px] w-full">
                    <Input label='Official Email' placeholder='Official Email'/>
                    </div>
                    <div className="max-w-[600px] w-full">
                    <Input label='Trade Lisence No' placeholder='Trade Lisence No'/>
                    </div>
                    <div className="max-w-[600px] w-full">
                    <p className={` text-blue-100 font-[600] pb-2 `}>Office Address</p>
                   <textarea className='w-full h-[150px] border rounded resize-none py-1 px-3 outline-none' placeholder='Office Address'></textarea>
                    </div>

                    <div className="">
                    <p className={` text-blue-100 font-[600] pb-2 `}>Doccuments</p>
                  
                    </div>
                </form>
                <input
                    className="hidden"
                    type="file"
                    ref={logoRef}
                    onChange={handleFileChange}
                />


            </div>
        </div>
    );
};

export default AgencyProfile;