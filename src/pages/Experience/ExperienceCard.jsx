import React, { useEffect, useState } from 'react';
import { SlLike } from "react-icons/sl";
import { BiComment } from "react-icons/bi";
import { publicPost } from '../../utilities/apiCaller';
import { useSelector } from 'react-redux';


const  ExperienceCard = ({data}) => {
    const [ismore, setIsMore]= useState(false);
    const [isLike, setIsLike] = useState(false);
    const { user  } = useSelector(state=> state.userInfo);
    const [commentText, setCommentText] = useState('')
    

    useEffect(()=> {
        const isFound = data?.like?.find(l=> l===user?.id);
        console.log(isFound);
        if(isFound) setIsLike(true);

    },[]);

    const handleLike = () => {
        publicPost('/api/post/like',{id: data?.id}).then(res=> {
            if(res?.status===200){
                const isFound = res?.data?.like?.find(l=> l===user?.id);
        if(isFound) setIsLike(true);
        else setIsLike(false)

            }
        })
    }

    const handleComment = () => {
        publicPost('/api/comment', {
            id: data?.id,
            text: commentText
        }).then(res=> {
            console.log(res);
        })
    }
    return (
        <div className='w-full border rounded bg-white drop-shadow-md'>
            <div className="flex gap-5 items-center p-5">
                {
                    data?.author?.avatar===''? <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center border font-[600] bg-slate-50 text-blue-100">S</div>:<img className='h-[35px] w-[35px] rounded-full' src={data?.author?.avatar} alt="" />
                }
                <h1 className='font-[600]'>{data?.author?.fullName}</h1>
            
            </div>
           <div className="w-full">
           {
                data?.images.length===1?  <div className="w-full">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" />
                </div>:
                data?.images?.length===2? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" />
                    </div>
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" />
                    </div>
                    </div>:
                    data?.images?.length===3? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" />
                    </div>
                    <div className="w-1/2 h-full divide-y">
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" /></div>
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[2]}`} alt="" /></div>
                    
                    </div>
                    </div>:
                    data?.images?.length>3? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" />
                    </div>
                    <div className="w-1/2 h-full divide-y">
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" /></div>
                    <div className="h-1/2 relative"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[2]}`} alt="" />
                    <div className="absolute top-0 left-0 bg-black/40 h-full w-full flex justify-center items-center text-white text-2xl">+1</div></div>
                    
                    </div>
                    </div>:''
            }
           </div>
            
            <div className="p-3 text-justify">
                {
                    ismore? data?.text:''
                }
               {data?.text.length>400? data?.text.slice(0,350):data?.text}
              {
               !ismore && data?.text.length>400?  <span className='text-blue-200'onClick={()=>setIsMore(true)}>... read more</span>:ismore && data?.text.length>400? <span className='text-blue-200'onClick={()=>setIsMore(false)}>  read less</span>:''
               }
                <div className="w-full py-3 px-2 flex justify-between items-center border-y mt-4">
                    <span className={`flex items-center gap-4 font-semibold cursor-pointer ${isLike?'text-blue-200':''}`}onClick={handleLike}><SlLike className='font-semibold'/> Like</span>

                    <span className='flex items-center gap-4 font-semibold'><BiComment className='font-semibold'/> Comment</span>
                </div>
                <div className="pt-4 flex items-start gap-3">
                    <img className='w-[30px] h-[30px] rounded-full' src={user?.avatar} alt="" />

                    <textarea type="text" className='w-full border rounded-md p-2 h-[50px] outline-none focus:placeholder:opacity-0' placeholder='Write a comment . . .'value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <div className="flex flex-col justify-end"><div className="bg-blue-200 text-white p-3 rounded" onClick={handleComment}>Send</div></div>
                </div>
            </div>
            
        </div>
    );
};

export default ExperienceCard;