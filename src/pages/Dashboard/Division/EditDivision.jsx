import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { privatePatch, publicGet } from "../../../utilities/apiCaller";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { useForm } from "react-hook-form";
import noImg from '../../../assets/images/noImage.png'
import axios from "axios";

const EditDivision = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const params = useParams();
  const [photo, setPhoto] = useState(noImg);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();


  useEffect(() => {
    publicGet(`/api/division/${params.id}`).then((res) => {
      if (res.status === 200) {
        setPhoto(res?.data?.thumbnail);
        setValue('name',res?.data?.name);
        setValue('slug',res?.data?.slug);
        setValue('id',res?.data?.id);
        
      }
    });
  }, []);

  const handleFileChange = (e) => {
        
    if(!e.target.files[0]) return;

const formData = new FormData();
formData.append("image", e.target.files[0]);
axios
  .post("https://api.imgbb.com/1/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    params: {
      key: "a8f83831f3e714703a0b98d00fcf8f8a",
    },
  })
  .then((res) => {
 
    if (res.status === 200) {
      console.log(res);
      setPhoto(res?.data?.data?.url);
      setValue('avatar',res?.data?.data?.url);
    } else {
      console.log(" Image upload unsuccessfull");
    }
  });
};

  const onSubmit = data => {
    privatePatch(`/api/division`,data).then(res=>{
      console.log(res);
    })

  }

  return (
    <div className="">
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        {" "}
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Edit Division
      </div>
      <div className=" px-5 md:px-20 py-10 flex flex-col  gap-4  ">
        <div className=" ">
          <h1 className="font-[600] text-blue-100 pb-3">Thumbnail</h1>
          <img src={photo} className="rounded shadow-md max-w-[500px] max-h-[300px] h-full w-full " alt="" onClick={() => fileInputRef.current.click()} />
          <input className="hidden" type="file" ref={fileInputRef} onChange={handleFileChange} />
        </div>
     
          <form className="py-3 px-5 max-w-[500px] w-full flex flex-col  justify-between h-full  mt-9  "  onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              <Input label="Name" placeholder="Division"  register={()=>register('name',{required:'Division Name is required'})} errors={errors['name']} />

              <Input label="Slug" placeholder="Division" register={()=>register('slug',{required:'Slug is required'})} errors={errors['slug']} />
            </div>
           <div className="pt-8">
           <Button type='submit' className="bg-blue-100 text-white">Update</Button>
           </div>
          </form>
       
      </div>
      
    </div>
  );
};

export default EditDivision;
