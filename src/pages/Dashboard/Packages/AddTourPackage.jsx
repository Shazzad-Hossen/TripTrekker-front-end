import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UploadImage from "../../Shared/UploadImage/UploadImage";
import Input from "../../Shared/Input";
import DropdownV2 from "../../Shared/DropdownV2";
import { IoMdArrowDropdown } from "react-icons/io";
import { privatePatch, publicGet, publicPost } from "../../../utilities/apiCaller";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import Button from "../../Shared/Button";
import { useForm } from "react-hook-form";
import errorIco from '../../../assets/icon/error.svg'
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "../../../utilities/toast";

const AddTourPackage = ({ details:detailedData}) => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState({});
  const [divisions, setDivisions] = useState([]);
  const [place, setPlace] = useState([]);
  const [description, setDescription] = useState("");
  const quillRef = useRef(null);
  const {user}= useSelector(state=>state.userInfo);
  const [prevImages,setPrevimages]=useState([]);
  const [details, setDetails] = useState(detailedData|| {});


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

  useEffect(()=>{
    if(details){
      setValue('id',details?.id)
      setValue('name',details?.name);
      setValue('day',details?.duration?.day);
      setValue('night',details?.duration?.night);
      setValue('cost',details?.cost);
      publicGet(`/api/place?division=${details?.division}`).then((res) => {
        if (res.status === 200) setPlace(res.data);
        else {
          console.log("Error");
        }
      });
      setDescription(details?.description);
      setPrevimages(details?.photos)
    }
  },[details])

  const loadPlaces = (d) => {
    console.log(d);
    publicGet(`/api/place?division=${d?.id}`).then((res) => {
      if (res.status === 200) setPlace(res.data);
      else {
        console.log("Error");
      }
    });
  };

  const onSubmit = async(data) => {
    if(data?.division===null || data?.division===undefined)  setError('division', {message: 'This field is required'});
    else if(data?.place===null || data?.place===undefined)  setError('place', {message: 'This field is required'});
    else if (Object.keys(photos).length<5) setError('photos', {message: 'Upload minimum 5 photos'});
    else if (quillRef.current.getEditor().getLength() < 2)  setError("description", { message: "This field is required" });
    else {
      const uploads=[];
      await Promise.all(
        Object.keys(photos).map(async key=>{

          const formData = new FormData();
          if(typeof photos[key]==='string') uploads.push(photos[key]);
          else {
            formData.append('file',photos[key])
            const response = await  axios.post(`${import.meta.env.VITE_SERVER_URL}/api/file`,formData);
            response?.status===201? uploads.push(response?.data):'';
          }

        })
      );

      if(details){
        console.log({...data, description,photos:uploads });
        privatePatch('/api/package',{...data, description,photos:uploads }).then(res=>res?.status===200? ( toast.success("Successfully Updated"), setDetails(res?.data)): toast.error(res?.data));
  
      }
      else {
        data.type='agency';
      data.photos= uploads;
      data.description= description;
      data.agency=  user?.agency?.id;
      publicPost('/api/package',data).then(res=>{
        res.status===201? toast.success('Successfully added'): toast.error(res?.data);
      })

      }


    }
    
 
    
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
        <UploadImage thumbnails={prevImages} callBack={setPhotos} />
        {
        
        errors['photos']? <p  className="text-red-400  flex items-center gap-2 font-[400] text-sm pt-1"><img src={errorIco} alt="" /><span>{errors['photos'].message}</span></p>:<></>
      }

        <form className="flex flex-col gap-3 mt-10 mb-10 " onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" placeholder="Package name"  register={()=>register('name', { required: 'This Field is required'})} errors={errors['name']}/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-blue-100 font-[600] pb-2">Division</h1>
                <DropdownV2
                  className={`p-1 ${errors['division']?'border-red-400':''}`}
                  placeholder="Select Division"
                  modalClass="w-full"
                  Icon={IoMdArrowDropdown}
                  iconClass="w-[25px] h-[25px] text-slate-500"
                  data={divisions || []}
                  onChange={loadPlaces}
                  name='division'
                  setValue={setValue}
                  errors={errors['division']}
                  value={details?.division}
                />
              </div>
              <div>
                <h1 className="text-blue-100 font-[600] pb-2">Location</h1>
                <DropdownV2
                  className={`p-1 ${errors['place']?'border-red-400':''}`}
                  placeholder="Select Location"
                  modalClass="w-full"
                  Icon={IoMdArrowDropdown}
                  iconClass="w-[25px] h-[25px] text-slate-500"
                  data={place || []}
                  name='place'
                  setValue={setValue}
                  errors={errors['place']}
                  value={details?.place}

                />
              </div>
              <h1 className="font-[600] text-blue-100 pb-2">Duration</h1>

             <div className="pb-3">
             <Input label="" placeholder="3  (Day)"  register={()=>register('day', { required: 'This Field is required'})} errors={errors['day']} />
             </div>
              <Input label="" placeholder="4  (Night)" register={()=>register('night', { required: 'This Field is required'})} errors={errors['night']} />
              <Input label="Cost" placeholder="0.00" register={()=>register('cost', { required: 'This Field is required'})} errors={errors['cost']} />
               <div className={(user?.role==='agency'|| user?.role==='hotel')?'hidden':'block'}>
              <h1 className="font-[600] text-blue-100 pb-2">Status</h1>
              <DropdownV2 
              className=" bg-blue-200 text-white p-2 w-[150px]"
              Icon={IoMdArrowDropdown}
              iconClass="w-[25px] h-[25px] text-white"
              data={[
                {id:'approved', name: ' Approve'},
                {id:'pending', name: 'Pending'},
                {id:'rejected', name: ' Reject'},
              ]}
              modalClass="w-[150px]"
              onChange={(e)=>setValue('status',e.id)}
              value={details?.status}
              
              />

               </div>
            </div>

            <div className="">
              <h1 className="font-[600] text-blue-100 pb-2">Description</h1>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="h-[277px]  w-full  "
                ref={quillRef}
              />
              {errors["description"] ? (
                <p className="text-red-400  flex items-center gap-2 font-[400] text-sm pb-3 pt-14 ">
                  <img src={errorIco} alt="" />
                  <span>{errors["description"].message}</span>
                </p>
              ) : (
                <></>
              )}
            </div>

            <Button type="submit" className="bg-blue-100 text-white w-fit px-5" onClick={()=>clearErrors()}>{details?'Update':'Add'}</Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddTourPackage;
