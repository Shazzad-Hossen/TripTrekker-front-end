import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import Input from "../../Shared/Input";
import DropDown from "../../Shared/Dropdown";
import { useEffect } from "react";
import { publicGet, publicPost } from "../../../utilities/apiCaller";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef } from "react";
import { BsTrash } from "react-icons/bs";
import uuid from "react-uuid";
import axios from "axios";
import Button from "../../Shared/Button";
import errorIco from "../../../assets/svg/error.svg";
import { toast } from "../../../utilities/toast";
import { useNavigate, useParams } from "react-router-dom";

const EditPlace = () => {
  const [divisions, setDivisions] = useState([]);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);
  const quillRef = useRef(null);
  const [thumbnails, setThumbnails] = useState({});
  const [preview, setPreview] = useState({});
  const navigate = useNavigate();
  const [place,setPlace] = useState({})
  const {id} = useParams();
  console.log(place);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    publicGet("/api/division").then((res) => setDivisions(res?.data.docs));
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
    setThumbnails(place?.thumbnails)

  },[place])

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newID = uuid();
      setThumbnails((prev) => ({ ...prev, [newID]: file }));
      const reader = new FileReader();

      reader.onload = () => {
        setPreview((prev) => {
          return { ...prev, [newID]: reader.result };
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (key) => {
    setPreview((prev) => {
      delete prev[key];
      return { ...prev };
    });
    setThumbnails((prev) => {
      delete prev[key];
      return { ...prev };
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    const uploadedUrls = [];

    await Promise.all(
      Object.keys(thumbnails).map(async (key) => {
        formData.append("image", thumbnails[key]);
        try {
          const response = await axios.post(
            "https://api.imgbb.com/1/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              params: {
                key: "a8f83831f3e714703a0b98d00fcf8f8a",
              },
            }
          );
          const url = response?.data?.data?.url;
          if (url) {
            uploadedUrls.push(url);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      })
    );

    if (uploadedUrls.length < 3)
      setError("thumbnails", { message: "Please select at least three photos" });
    else if (data?.division === null)
      setError("division", { message: "This field is required" });
    else if (quillRef.current.getEditor().getLength() < 2)
      setError("description", { message: "This field is required" });
    else {
      
 
      publicPost('/api/place',{...data, thumbnails: uploadedUrls, description}). then(res=>{
        if(res.status===201) toast.success('Places addedd successfully')
      })
    }
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
            <div className="flex items-center gap-4 flex-wrap">
              <div
                className="bg-slate-100/50 h-[100px] w-[150px] rounded border-dashed border flex justify-center items-center flex-col"
                onClick={() => fileInputRef.current.click()}
              >
                <span>+</span> Upload
              </div>
              {Object.keys(preview).map((key, index) => (
                <div
                  key={index}
                  className="h-[100px] w-[150px] rounded  relative group"
                >
                  <img
                    src={preview[key]}
                    className="w-full h-full rounded"
                    alt="thumbnail"
                  />
                  <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 rounded hidden group-hover:block">
                    <div className="h-full w-full  flex justify-center items-center">
                      <BsTrash
                        className="text-white  text-2xl cursor-pointer"
                        onClick={() => handleDelete(key)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors["thumbnails"] ? (
                <p className="text-red-400  flex items-center gap-2 font-[400] text-sm pb-3 ">
                  <img src={errorIco} alt="" />
                  <span>{errors["thumbnails"].message}</span>
                </p>
              ) : (
                <></>
              )}

            <input
              className="hidden"
              type="file"
              ref={fileInputRef}
              onChange={handleFile}
            />
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
                  value={place?.division}
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
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
