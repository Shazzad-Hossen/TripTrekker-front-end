import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import imageIco from "../../../assets/svg/imageIco.svg";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { toast } from "../../../utilities/toast";
import Input from "../../Shared/Input";
import FileUploader from "../../Shared/FileUploader/FileUploader";
import { useForm } from "react-hook-form";
import Button from "../../Shared/Button";
import axios from "axios";
import { privatePatch, publicPost } from "../../../utilities/apiCaller";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../services/userSlice";
import errorIco from '../../../assets/svg/error.svg';

const AgencyProfile = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const [logo, setLogo] = useState("");
  const [files, setFiles] = useState({});
  const { user } = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch();
  console.log(user);


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    if(user?.agency){
      setValue('name', user?.agency?.name);
      setValue('email', user?.agency?.email);
      setValue('lisence', user?.agency?.lisence);
      setValue('address', user?.agency?.address);
      setLogo(user?.agency?.logo);
      setFiles(user?.agency?.documents)

    }

  },[user]);


  const handleFileChange = (e) => {
    if (e.target.files[0].type.slice(0, 5) === "image") {
      if (e.target.files.length > 0) {
        setLogo(e.target.files[0]);
      }
    } else {
      toast.error("Invalid file type");
    }
  };



  const onSubmit = async (data) => {
    data.user= user?.id;
    if(typeof logo ==='string') data.logo= logo;
    else {
      const formData = new FormData();
      formData.append('file', logo);
      const logoRes = await axios.post('http://localhost:4000/api/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(logoRes.status===201) data.logo= logoRes.data;

    }
    
 
    const docs=[];
    await Promise.all(Object.keys(files).map(async (key) => {
      if(typeof files[key].path==='string') {
        docs.push({name: files[key].name, path: files[key].path});
        return;
      };
      const formData = new FormData();
      formData.append('file', files[key].path);

      const response = await axios.post('http://localhost:4000/api/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response?.status === 201) {
       docs.push({ name: files[key].name, path: response?.data });
      }
    }));
   
  
    
  
   
   if(!user?.agency){
    publicPost('/api/agency',{...data, documents: docs }). then(res=>{
      if(res.status===201){
        dispatch(setUser(res?.data));
        toast.success('Successfully Addedd');
      
        
      }
    })
   }
   else {
    privatePatch('/api/agency',{...data, documents: docs, id: user?.agency?.id }). then(res=>{
      if(res.status===200){
        dispatch(setUser(res?.data));
        toast.success('Successfully Updated');

        
      }
    })
   }

    
  }

 
  return (
    <div>
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        {" "}
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>{" "}
        Additional Information
      </div>
      <div className="pl-20 pr-5 py-10">
        {
        
        user?.agency?  <div className="flex justify-end items-center gap-5"><h1 className="text-blue-100 font-[600]">Status: </h1> <h1>{user?.agency?.status}</h1></div>:''
        }
        <div className="flex gap-10">
          <h1 className="text-blue-100 font-[600]">Logo : </h1>
          <div
            className="w-[100px] h-[100px] bg-slate-300 rounded-lg flex justify-center items-center "
            onClick={() => logoRef.current.click()}
          >
            <img
              className={`${
                logo === ""
                  ? "h-[60px] w-[60px]"
                  : "h-full w-full rounded shadow"
              }`}
              src={
                logo === ""
                  ? imageIco
                  : typeof logo === "string"
                  ? `${import.meta.env.VITE_SERVER_URL}/api/${logo}`
                  : URL.createObjectURL(logo)
              }
              alt=""
            />
          </div>
        </div>
        <form
          className="pt-10 flex flex-col w-full gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="max-w-[600px] w-full">
            <Input label="Agency Name" placeholder="Agency Name" register={()=>register('name', { required: 'This  field is required'})} name='name' errors={errors['name']} />
          </div>
          <div className="max-w-[600px] w-full">
            <Input label="Official Email" placeholder="Official Email" register={()=>register('email',{ required: 'This  field is required'})} name='email' errors={errors['email']}  />
          </div>
          <div className="max-w-[600px] w-full">
            <Input label="Trade Lisence No" placeholder="Trade Lisence No" register={()=>register('lisence', { required: 'This  field is required'})} name='lisence' errors={errors['lisence']} />
          </div>
          <div className="max-w-[600px] w-full">
            <p className={` text-blue-100 font-[600] pb-2 `}>Office Address</p>
            <textarea
              className="w-full h-[150px] border rounded resize-none py-1 px-3 outline-none"
              placeholder="Office Address"
              {...register('address', { required: 'This  field is required'})}
            ></textarea>
             {
        
        errors['address']? <p  className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1"><img src={errorIco} alt="" /><span>{ errors['address'].message}</span></p>:<></>
      }
          </div>
          <FileUploader onChange={setFiles} value={files} />
          <div className="flex justify-center items-center">
          <Button type='submit' className='bg-blue-100 text-white'>Submit</Button>
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
