import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import errorIco from "../../../assets/svg/error.svg";
import { privatePatch, publicGet, publicPost } from "../../../utilities/apiCaller";
import { toast } from "../../../utilities/toast";
import Button from "../../Shared/Button";
import DropDown from "../../Shared/Dropdown";
import Input from "../../Shared/Input";
import UploadImage from "../../Shared/UploadImage/UploadImage";
import { uploadImage } from "../../../utilities/imageUploader";

const EditPlace = () => {
  const [divisions, setDivisions] = useState([]);
  const [description, setDescription] = useState("");
  const quillRef = useRef(null);
  const [thumbnails, setThumbnails] = useState({});
  const navigate = useNavigate();
  const [place,setPlace] = useState({})
  const {id} = useParams();


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
    publicGet(`/api/place/${id}`).then(res=>{
        if(res.status===200){
            setPlace(res?.data)
        }
    })

  },[]);

  useEffect(()=>{
    setValue('name', place?.name);
    setDescription(place?.description);

  },[place])




  const onSubmit = async (data) => {
    if(Object.keys(thumbnails).length<3) {
      setError('thumbnails', { message: 'Please select minimum 3 photos'});
      return;
      
    }
    const uploadedImages = await uploadImage(thumbnails);
      privatePatch(`/api/place/${place?.id}`,{...data, thumbnails: uploadedImages, description}). then(res=>{
        if(res.status===200) toast.success('Places addedd successfully');
        else {
          console.log('error');
        }
      })
    
  };


  return (
    <div className="">
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
    
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>{" "}
        Edit Place
      </div>
      <div className=" px-5 md:px-20 py-10 flex gap-4 flex-col lg:flex-row">
        <div className="] w-full">
         
          <form
            className="   w-full p-2 my-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* File Upload */}
            <h1 className="text-blue-100 font-[600] pb-2">Thumbnails</h1>
            <UploadImage thumbnails={place?.thumbnails} callBack={setThumbnails}/>
          
            {errors["thumbnails"] ? (
                <p className="text-red-400  flex items-center gap-2 font-[400] text-sm pb-3 ">
                  <img src={errorIco} alt="" />
                  <span>{errors["thumbnails"].message}</span>
                </p>
              ) : (
                <></>
              )}

        
            <div className="grid grid-cols-1 lg:grid-cols-2 center gap-10 w-full">
              <Input
                label="Name"
                placeholder="Place name"
                className="w-[50%]"
                register={() =>
                  register("name", {
                    required: "Name is required",
                  })
                }
                errors={errors["name"]}
              />
              <div className="w-[50]">
                <DropDown
                  label="Division"
                  data={divisions}
                  name="division"
                  setValue={setValue}
                  errors={errors["division"]}
                  value={place?.division?.id}
                />
              </div>
            </div>
            <h1 className="text-blue-100 font-[600] pb-2 pt-5">Description</h1>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              className="h-[400px]  w-full  "
              ref={quillRef}
            />
            <div className="mt-14">
              {errors["description"] ? (
                <p className="text-red-400  flex items-center gap-2 font-[400] text-sm pb-3 ">
                  <img src={errorIco} alt="" />
                  <span>{errors["description"].message}</span>
                </p>
              ) : (
                <></>
              )}
              <Button
                type="submit"
                className="bg-blue-100 text-white  "
                onClick={() => clearErrors()}
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
