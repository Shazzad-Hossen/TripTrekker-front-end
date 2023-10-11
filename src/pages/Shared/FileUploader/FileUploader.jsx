import React, { useEffect } from "react";
import uploadIco from "../../../assets/icon/upload.png";
import { useRef } from "react";
import { useState } from "react";
import pdfIco from "../../../assets/icon/pdf-file.png";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { BsTrash } from "react-icons/bs";
import uuid from "react-uuid";



const FileUploader = ({onChange=()=>{}, value=[]}) => {
  const docsRef = useRef(null);
  const [files,setFiles]=useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev=>({...prev, [uuid()]:{name: file.name, path: file}}));
    }
  };

  const seleteHandler =  ( id ) => {
    setFiles(prev=>{
      delete prev[id];
      return { ...prev };
    })
  }
  useEffect(()=>{
    if(value.length>0) {
      setFiles({});
      value.forEach(val=>{
        setFiles(prev=> {
          return {...prev, [uuid()]: val};
        });
      });
      onChange(files);
    }

  },[value]);

  useEffect(()=>{
    onChange(files);

  },[files]);

  ;

  return (
    <div>
      <div className="">
        <p className={` text-blue-100 font-[600] pb-2 `}>Doccuments</p>
        <div className="flex  justify-center mt-20 items-center">
          <div
            className="flex flex-col items-center justify-center max-w-[650px] w-full h-[150px] group p-10 border-dashed  rounded-lg border-2 select-none"
            onClick={() => docsRef.current.click()}
          >
            <img src={uploadIco} alt="" className="group-active:scale-95 h-[50px] " />
            <h1>Upload</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 flex-wrap justify-center pt-5">
        {
            Object.keys(files).map((item, index)=><div  key={index} className="max-w-[130px] overflow-hidden">
              <div className="h-[150px] w-[130px] bg-orange-100/50 rounded flex flex-col  border relative group select-none p-1">
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded hidden group-hover:block">
              <div className="h-full w-full flex flex-col items-center justify-center text-white">
                <div className="h-1/2 w-full flex justify-center items-center active:scale-90 ">  <HiMiniViewfinderCircle/></div>
                <div className="h-1/2 flex justify-center items-center  active:scale-90" onClick={()=>seleteHandler(item)}>  <BsTrash/></div>
              </div>
            </div>
            <div className="h-full w-full flex justify-center items-center">
            <img src={pdfIco} className="w-[50px]" alt="" />
            </div>
          </div>
            <h1 className="h-[20px] ">{files[item].name}</h1>
            </div>
            )
        }
        
      </div>

      <input
        className="hidden"
        type="file"
        ref={docsRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
