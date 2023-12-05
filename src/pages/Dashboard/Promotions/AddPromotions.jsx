import React, { useRef } from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import { toast } from "../../../utilities/toast";
import { privatePatch, publicGet, publicPost } from "../../../utilities/apiCaller";
import { useEffect } from "react";

const AddPromotions = () => {
  const navigate = useNavigate();
  const fileRef = useRef();
  const [image,setImage]= useState('');
  const [description, setDescription] = useState('');
  const quillRef = useRef(null);
  const [title,setTitle] = useState('');
  const {pId} = useParams();


  useEffect(()=> {
    if(pId!=='add') {
        publicGet(`/api/promotion/${pId}`).then(res=> {
            if(res?.status===200) {
                setImage(res?.data?.image);
                setTitle(res?.data?.title);
                setDescription(res?.data?.description);
            }
            else {
                ToastContainer.error(res?.data)
            }
        })
    }

  }, []);



  const handleFileChange = (e) => {
    if(e.target.files[0]) setImage(e.target.files[0])

  }
  const handleSubmit = () => {
    if(image==='' || image === null || image === undefined) return toast.error('Please choose an image')
    else if (quillRef.current.getEditor().getLength() < 2  || title==='')  return toast.error('Please fillup all fields');

    const formData = new FormData();
    if(typeof image !== 'string') formData.append('image', image);
    formData.append('data', JSON.stringify({title, description}));

    if(pId==='add') {
        publicPost('/api/promotion', formData).then(res=> {
            console.log(res);
            if(res?.status===200) {
                toast.success('Successfully added');
                navigate(-1);
            }
            else toast.error(res?.data);
        })
    } else {
        privatePatch(`/api/promotion/${pId}`, formData).then(res=> {
            if(res?.status===200) {
                toast.success('Successfully updated');
            }
            else {
                toast.error(res?.data)
            }
        })
    }


  }


  return (
    <div className='w-full'>
      <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Promotions
      </div>
      <div className="  w-full ">
        <div className={`flex justify-center items-center w-full ${image===''?'':'hidden'} py-10`}>
            <div className="border rounded-lg h-[80px] w-[120px] text-3xl flex justify-center items-center pb-2 border-dashed active:scale-95 cursor-pointer" onClick={()=>fileRef.current.click()}>+</div>
        </div>
        <input className="hidden" type="file" accept="image/*" ref={fileRef} onChange={handleFileChange} />

        <div className="flex justify-center items-center w-full">
            <img className={`${image===''?'hidden':''} h-[400px] w-[400px] rounded-lg cursor-pointer my-10`} src={typeof image==='string'?import.meta.env.VITE_SERVER_URL+'/api/'+image:URL.createObjectURL(image)} alt="" onClick={()=> fileRef.current?.click()} />
        </div>
        </div>
        <div className=" max-w-[800px]   w-full mx-auto px-5">
            
           <div className="w-full pb-5">
           <Input className="w-full" label='Title' onChange={(e)=> setTitle(e.target.value)} defaultValue={title} />
           </div>
           <h1 className="text-blue-100 font-[600] pb-2">Descriptions</h1>
        <div className=" h-[360px] w-full">
        <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="h-[277px]  w-full  "
                ref={quillRef}
              />
        </div>
        </div>
        <div className="w-full flex justify-center items-center mb-10">
            <Button className="bg-blue-100 text-white" onClick={handleSubmit}>Submit</Button>
        </div>


      
    </div>
  );
};

export default AddPromotions;
