import React, { useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import { useForm } from "react-hook-form"
import Table from '../../Shared/Table/Table';
import SortDropDown from '../../Shared/SortDropDown';
import uploadAnim from '../../../assets/json/uploadImage.json';
import uploading from '../../../assets/json/uploading.json';
import Lottie from "lottie-react";
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { publicDelete, publicGet, publicPost } from '../../../utilities/apiCaller';
import Swal from 'sweetalert2';



const Divisions = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const fileInputRef = useRef(null);
      const [photo,setPhoto]=useState('');
      const [loading, setLoading]= useState(false);
      const [divisionData,setDivisionData]=useState(null);

      useEffect(()=>{
        fetchData();
       

      },[]);
      const fetchData = () =>{
        publicGet('/api/division').then(res=>setDivisionData(res?.data))
      }

       //   Image Upload to ImgBB
    const handleFileChange = (e) => {
        
        if(!e.target.files[0]) return;
        setLoading(true);
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
        setLoading(false)
        if (res.status === 200) {
          setPhoto(res?.data?.data?.url);
        } else {
          console.log(" Image upload unsuccessfull");
        }
      });
  };
    
      const onSubmit = (data) => {
        data.thumbnail= photo;
    
        publicPost('/api/division',data).then(res=>{
           if(res.status===201){
            fetchData();
            reset();
            setPhoto('');
           }
        })
        
      }

      const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure to delete this division?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Don't `,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                publicDelete(`/api/division/${id}`).then(res=>{
                    if(res.status===200){
                     Swal.fire({
                         position: 'center',
                         icon: 'success',
                         title: 'Successfully deleted',
                         showConfirmButton: false,
                         timer: 1500
                       })
                     fetchData();
                    }
                    })
            }
          })
      }

    return (
        <div className="">
    <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center"> <button className="border px-2  py-2 mr-5 rounded" onClick={()=>navigate(-1)}><IoIosArrowBack/></button> Division</div>
     <div className=" px-5 md:px-20 py-10 flex gap-4 flex-col lg:flex-row">
        <div className='lg:max-w-[400px] w-full'>
            <h1 className='text-blue-100 font-[600] font-chakra text-xl'>Add New Division</h1>
            
            <form className="border rounded  w-full p-2 my-5" onSubmit={handleSubmit(onSubmit)}>
                <Input label='Division Name' register={()=>register('name',{required:'Division Name is required'})} errors={errors['name']} placeholder='Division Name. Ex: Dhaka'/>
            
                <Input label='Slug' register={()=>register('slug',{required:'Slug is required'})} errors={errors['slug']} placeholder='Slug. Ex: dhaka'/>
                <h1 className='text-blue-100 font-[600] pt-5'>Thumbnail</h1>
                <div className="h-[200px] w-full border rounded my-3 flex justify-center items-center shadow-md"  onClick={() => fileInputRef.current.click()}>
               {
                loading?  <Lottie className={`w-[200px] ${photo!==''?'hidden':'block'}`} animationData={uploading} loop={true} />
                : <>
                 <Lottie className={`w-[200px] ${photo!==''?'hidden':'block'}`} animationData={uploadAnim} loop={true} />
               
                
               <img src={photo} className={`h-full w-full rounded ${photo===''?'hidden':'block'}`} alt="" />
                </>
               }
               

                </div>
                <input className="hidden" type="file" ref={fileInputRef} onChange={handleFileChange} />

                <div className="flex justify-end">
                    <Button type='submit' className='bg-blue-100 text-white px-4 my-2'>Add</Button>
                </div>
            </form>
        </div>

       <div className="w-full pt-2">
        <div className="w-full flex items-center justify-end">
           <SortDropDown onChange={(value)=>console.log(value)}/>
        </div>
       <Table type='division' data={divisionData} deleteHandler={deleteHandler}/>
       </div>

     </div>
      </div>
    );
};

export default Divisions;