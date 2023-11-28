import React from 'react';
import ImageUploader from '../Shared/ImageUploader';
import { IoLocationSharp, IoImages } from "react-icons/io5";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LocationPicker from '../Shared/LocationPicker';
import UploadImage from '../Shared/UploadImage/UploadImage';
import Button from '../Shared/Button';
import { toast } from '../../utilities/toast';
import { publicPost } from '../../utilities/apiCaller';
import axios from 'axios';

const UserCard = () => {
    const [location,setLocation]=useState(null);
    const [isPhoto,setIsphoto]=useState(true);
    const {user} = useSelector(state=> state.userInfo);
    const [value, setValue]= useState('');
    const [isLocationOpen, setIsLocationOpen]= useState(false);
    const [ images, setImages] = useState([]);

    const handlePost = () => {
     if(value!=='') {
        const data= {};
        data.text=value;
        if(location) data.location=location.id;
        const formData= new FormData();
        Object.keys(images).forEach(img=> formData.append('image', images[img]));
        const postData = JSON.stringify(data);
        formData.append('data',postData)

       axios.post(`${import.meta.env.VITE_SERVER_URL}/api/post`, formData, {headers:{
       'Content-Type':'multipart/form-data'
      },
      withCredentials: true,}).then(res=>{
        console.log(res);
       })

     }
     else toast.error('Please write something to share a post')
    }
    

    
    return (
        <div className='rounded p-3 w-full flex gap-4'>
            <img className='max-h-[50px] max-w-[50px] rounded-full border-2 border-[#dfdfdf]' src={user?.avatar? user.avatar :'https://i.ibb.co/6sQLP3y/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" />
            <div className="w-full">
            <textarea type="text" className="scrollable-div border  bg-[white] max-h-[300px] min-h-[100px] w-full rounded-md p-5 placeholder:text-[#aaaaaa] outline-none focus:placeholder:opacity-0 mb-3"placeholder='Your text here' value={value} onChange={(e) => setValue(e.target.value)}/>
            <div className="flex items-center gap-4 pb-5"><span  className='flex items-center gap-2 cursor-pointer' onClick={() =>setIsLocationOpen(true)}><IoLocationSharp className='text-[#4fa32e] h-[20px] w-[20px]'/>{location? location?.name: 'Location'}</span> {isPhoto?<span onClick={()=>setIsphoto(false)} className='flex items-center gap-2 cursor-pointer'><IoImages className='text-[#4fa32e] h-[20px] w-[20px]'/>Photos</span>:''}
           <div className="w-full flex justify-end"> <Button className='bg-blue-100 text-white' onClick={handlePost}>Post</Button></div></div>
            {isPhoto?'':<UploadImage callBack={setImages} />}
            </div>

            {
                isLocationOpen===true? <LocationPicker setIsLocationOpen={setIsLocationOpen} setLocation={setLocation} />:''
            }
            
        </div>
    );
};

export default UserCard;