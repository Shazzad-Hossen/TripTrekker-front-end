import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../Shared/UploadImage/UploadImage";
import Input from "../../Shared/Input";
import DropdownV2 from "../../Shared/DropdownV2";
import { IoMdArrowDropdown } from "react-icons/io";
import { publicGet } from "../../../utilities/apiCaller";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import Button from "../../Shared/Button";
import { useForm } from "react-hook-form"

const AddTourPackage = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState({});
  const [divisions, setDivisions] = useState([]);
  const [place, setPlace] = useState([]);
  const [description, setDescription] = useState("");
  const quillRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();


  useEffect(() => {
    publicGet("/api/division").then((res) => setDivisions(res?.data));
  }, []);

  const loadPlaces = (d) => {
    console.log(d);
    publicGet(`/api/place?division=${d?.id}`).then((res) => {
      if (res.status === 200) setPlace(res.data);
      else {
        console.log("Error");
      }
    });
  };

  const onSubmit = (data) => {
    console.log('asaa');
    if(data?.division===null || data?.division===undefined)  setError('division', {message: 'This field is required'});
    else if(data?.place===null || data?.place===undefined)  setError('place', {message: 'This field is required'});
    else
    console.log(data)
  }


  
  return (
    <div>
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Add New Package
      </div>

      <div className="px-10 pt-12">
        <h1 className="text-blue-100 font-[600] pb-3">Photos</h1>
        <UploadImage callBack={setPhotos} />

        <form className="flex flex-col gap-3 mt-10 " onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" placeHolder="Package name"  register={()=>register('name', { required: 'This Field is required'})} errors={errors['name']}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-blue-100 font-[600] pb-2">Division</h1>
                <DropdownV2
                  className={`p-1 ${errors['division']?'border-red-400':''}`}
                  placeHolder="Select Division"
                  modalClass="w-full"
                  Icon={IoMdArrowDropdown}
                  iconClass="w-[25px] h-[25px] text-slate-500"
                  data={divisions || []}
                  onChange={loadPlaces}
                  name='division'
                  setValue={setValue}
                  errors={errors['division']}
                />
              </div>
              <div>
                <h1 className="text-blue-100 font-[600] pb-2">Location</h1>
                <DropdownV2
                  className={`p-1 ${errors['place']?'border-red-400':''}`}
                  placeHolder="Select Location"
                  modalClass="w-full"
                  Icon={IoMdArrowDropdown}
                  iconClass="w-[25px] h-[25px] text-slate-500"
                  data={place || []}
                  name='place'
                  setValue={setValue}
                  errors={errors['place']}

                />
              </div>
              <h1 className="font-[600] text-blue-100 pb-2">Duration</h1>

             <div className="pb-3">
             <Input label="" placeHolder="3  (Day)"  register={()=>register('day', { required: 'This Field is required'})} errors={errors['day']} />
             </div>
              <Input label="" placeHolder="4  (Night)" register={()=>register('night', { required: 'This Field is required'})} errors={errors['night']} />
              <Input label="Cost" placeHolder="0.00" register={()=>register('cost', { required: 'This Field is required'})} errors={errors['cost']} />
            </div>

            <div className="">
              <h1 className="font-[600] text-blue-100 pb-2">Description</h1>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="h-[277px]  w-full  "
              />
            </div>

            <Button type="submit" className="bg-blue-100 text-white w-fit px-5" onClick={()=>clearErrors()}>Add</Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddTourPackage;
