import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { privatePatch, publicGet } from "../../../utilities/apiCaller";
import { toast } from "../../../utilities/toast";
import Input from "../../Shared/Input";
import pdfIco from '../../../assets/icon/pdf-file.png';
import PDFViewerModal from "../../Shared/PDFViewerModal";
import Button from "../../Shared/Button";
import DropdownV2 from "../../Shared/DropdownV2";
import { IoMdArrowDropdown } from "react-icons/io";
import { useForm } from "react-hook-form"
import { useEffect } from "react";



const ViewHotelDetails = () => {
  const navigate = useNavigate();
  const {id:hotelId}= useParams();
  const [hotel,setHotel] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selected,setSelected]= useState('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
 
    
    const fetchData = ()=>publicGet(`/api/hotel/${hotelId}`). then(res=>res.status===200?setHotel(res.data):toast(res.data));
    useState(()=>{
      fetchData();
  
    },[]);
  useEffect(()=>{
    if(hotel){
      setValue('name', hotel?.name);
      setValue('email', hotel?.email);
      setValue('lisence', hotel?.lisence);
      setValue('address', hotel?.address);
    }

  },[hotel])

  const onSubmit = (data) => {
    console.log(data);
    privatePatch(`/api/hotel`,{id: hotel?.id, ...data}).then(res=>{
      if(res.status===200){
        fetchData()
        toast.success('Successfully updated');
      }
      else toast.error(res.data);
    })
  }

   console.log(hotel);

    return (
        <div>
            <div className="border-b text-xl font-[600] uppercase px-2 pb-3 flex items-center">
        <button
          className="border px-2  py-2 mr-5 rounded"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack />
        </button>
        Details
      </div>

      {/* body part starts */}

        <div className="py-12 px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center flex-col-reverse  md:flex-row gap-16">
          <div className="flex items-center gap-10 flex-col md:flex-row">
           <img className="rounded-full w-[100px] h-[100px] shadow-lg  border-l-gray-600 border-t-blue-200 border-r-amber-600 border-b-slate-400  border-4" src={hotel?.logo? import.meta.env.VITE_SERVER_URL +'/api/'+hotel?.logo:'https://i.ibb.co/sCXxtkn/No-image-found.jpg'} alt="" />
           <div className="text-center md:text-start">
            <h1 className="text-blue-100 font-[600] text-xl">{hotel?.name}</h1>
            <h2 className="text-blue-200 font-[600] text-md">{hotel?.email}</h2>
           </div>
           </div>
           <div className="flex w-full justify-end items-center gap-2 pr-5 ">
            <div className={` h-3 w-3 rounded-full ${hotel?.status==='declined'? 'bg-gray-400':hotel?.status==='pending'? 'bg-orange-400 ':hotel?.status==='banned'? 'bg-red-600':hotel?.status==='approved'? 'bg-green-600':''}`}></div>
            
            <span className={`first-letter:uppercase font-[600] ${hotel?.status==='declined'? 'text-gray-400':hotel?.status==='pending'? 'text-orange-400 ':hotel?.status==='banned'? 'text-red-600':hotel?.status==='approved'? 'text-green-600':''} `}>{hotel?.status}</span>
          
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10  gap-5 xl:gap-10">


            <div className="border rounded p-5">
              <h1 className="text-blue-200 font-[600] text-xl pb-5">hotel Information</h1>
              <div className="flex flex-col gap-5">
              <Input label='Name'  register={()=>register('name', { required: 'This field is Required'})} name='name' errors={errors['name']}/>
              <Input label='Email'  register={()=>register('email', { required: 'This field is Required'})} name='email' errors={errors['email']} />
              <Input label='Lisence No'  register={()=>register('lisence', { required: 'This field is Required'})} name='lisence' errors={errors['lisence']}  />
              <div className="">
                 <p className={` text-blue-100 font-[600] pb-2 `}>Address</p>
                 <textarea className="border rounded w-full resize-none h-28 outline-none p-2" {...register('address')} ></textarea>
              </div>
              <div className="">
                 <p className={` text-blue-100 font-[600] pb-2 `}>Documents</p>
                 <div className="flex flex-wrap gap-5">
                 {
                  hotel?.documents?.map((doc,index)=><div key={index} className="border rounded bg-orange-50 p-2 flex items-center gap-5 active:scale-95 duration-700 cursor-pointer select-none" onClick={()=>{setSelected(doc?.path); setIsOpen(true)}}>
                  <img className="w-[20px]" src={pdfIco} alt="" /> {doc?.name}
                 </div>)
                 }
                 </div>
              </div>
              </div>
            </div>


            <div className="border rounded p-5">
              <h1 className="text-blue-200 font-[600] text-xl pb-5">Owner Information</h1>
              <div className="flex flex-col gap-5">
              <Input label='Name' defaultValue={hotel?.user?.fullName} disabled/>
              <Input label='Email' defaultValue={hotel?.user?.email} disabled/>
              <Input label='Phone' defaultValue={hotel?.user?.phone} disabled/>
              </div>
            </div>


            


          </div>

          <div className="flex justify-end items-center gap-5">
          <DropdownV2
          className="py-2 w-28 font-[600]" 
          iconClass="w-[25px] h-[25px] text-slate-500"
          modalClass="bottom-11"
          Icon={IoMdArrowDropdown} 
          data={[
            {id: 'pending' , name: 'Pending'},
            {id: 'approved' , name: 'Approve'},
            {id: 'declined' , name: 'Decline'},
            {id: 'banned' , name: 'Banned'},
          ]}
          value={hotel?.status}
          setValue={setValue} name='status'
          />
          <Button type="submit" className="bg-blue-100 text-white" >Update</Button>
          </div>














          <PDFViewerModal isOpen={isOpen} setIsOpen={setIsOpen} pdfUrl={selected}/>

        </form>
        </div>
        </div>
    );
};

export default ViewHotelDetails;