import React, { useEffect, useState } from 'react';
import { SlLike } from "react-icons/sl";
import { BiComment } from "react-icons/bi";
import { publicPost } from '../../utilities/apiCaller';
import { useSelector } from 'react-redux';
import { toast } from '../../utilities/toast';
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';


const  ExperienceCard = ({datas}) => {
    const [data, setData] = useState(datas || null);
    const [ismore, setIsMore]= useState(false);
    const [isLike, setIsLike] = useState(false);
    const { user  } = useSelector(state=> state.userInfo);
    const [commentText, setCommentText] = useState('');
    const [modal, setModal] = useState(false);
    const [imgNo,setImgno] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
  

    

    useEffect(()=> {
        const isFound = data?.like?.find(l=> l===user?.id);
        if(isFound) setIsLike(true);

    },[]);

    const handleLike = () => {
        if(!user) return navigate('/signin', {state: { pathTo: location?.pathname}});
        publicPost('/api/post/like',{id: data?.id}).then(res=> {
            if(res?.status===200){
                const isFound = res?.data?.like?.find(l=> l===user?.id);
        if(isFound) setIsLike(true);
        else setIsLike(false)

            }
        })
    }

    const handleComment = () => {
        if(!user) return navigate('/signin', {state: { pathTo: location?.pathname}});

        if(commentText==='') return toast.warn('Type something to make comment');

        publicPost('/api/comment', {
            id: data?.id,
            text: commentText
        }).then(res=> {
            if(res?.status===200) {
                setData(res.data);
                setCommentText('');

            }
            
        })
    };

    return (
        <>
        <div className='w-full border rounded bg-white drop-shadow-md'>
            <div className="flex gap-5 items-center p-5">
                {
                    data?.author?.avatar===''? <div className="h-[35px] w-[35px] rounded-full flex justify-center items-center border font-[600] bg-slate-50 text-blue-100">S</div>:<img className='h-[35px] w-[35px] rounded-full' src={data?.author?.avatar} alt="" />
                }
                <div className="flex gap-4">
                <h1 className='font-[600]'>{data?.author?.fullName}</h1>
                {
                data?.location? <span> <span className='text-slate-400'>is at </span> <span className='text-blue-200'>{data?.location?.name}</span></span>:''
            }
                </div>
            
            </div>
            
           <div className="w-full" onClick={()=>setModal(true)}>
           {
                data?.images.length===1?  <div className="w-full">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" onClick={()=>setImgno(0)} />
                </div>:
                data?.images?.length===2? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" onClick={()=>setImgno(0)} />
                    </div>
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" onClick={()=>setImgno(1)}/>
                    </div>
                    </div>:
                    data?.images?.length===3? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" onClick={()=>setImgno(0)} />
                    </div>
                    <div className="w-1/2 h-full divide-y">
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" onClick={()=>setImgno(1)}/></div>
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[2]}`} alt="" onClick={()=>setImgno(2)} /></div>
                    
                    </div>
                    </div>:
                    data?.images?.length>3? <div className="flex divide-x">
                    <div className="w-1/2">
                    <img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[0]}`} alt="" onClick={()=>setImgno(0)}/>
                    </div>
                    <div className="w-1/2 h-full divide-y">
                    <div className="h-1/2"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[1]}`} alt="" onClick={()=>setImgno(1)} /></div>
                    <div className="h-1/2 relative"><img className='object-cover h-full w-full' src={`${import.meta.env.VITE_SERVER_URL}/api/${data?.images[2]}`} alt=""  onClick={()=>setImgno(2)}/>
                    <div className="absolute top-0 left-0 bg-black/40 h-full w-full flex justify-center items-center text-white text-2xl">+{data?.images?.length - 3}</div></div>
                    
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
                <div className={`w-full py-3 px-2 flex justify-between items-center border-t mt-4 ${data?.comment?.length>0? 'border-b':''}`}>
                    <span className={`flex items-center gap-4 font-semibold cursor-pointer ${isLike?'text-blue-200':''}`}onClick={handleLike}><SlLike className='font-semibold'/> Like</span>

                    <span className='flex items-center gap-4 font-semibold'>{data?.comment?.length}<BiComment className='font-semibold'/> Comment</span>
                </div>
                {
                    data?.comment?.map((com, index)=><div key={index} className="flex gap-3 py-3">
                        {
                            com?.author?.avatar===''? <div className="mt-2 h-[30px] w-[30px] shadow-md rounded-full flex justify-center items-center border font-[600] bg-slate-50 text-blue-100">S</div>:<img className='mt-2 h-[30px] w-[30px] rounded-full border shadow-md' src={com?.author?.avatar} alt="" />
                        }
                        <div className="w-full">
                        <h1 className='text-sm font-[600]'>{com?.author?.fullName}</h1>
                        <div className="border p-3 rounded shadow-sm w-full mt-1 text-sm bg-slate-50/50">
                            {com?.text}
                            
                        </div>
                        </div>
                    </div>)
                }
                {
                    user? <div className="pt-4 flex items-start gap-3">
                    <img className='w-[30px] h-[30px] rounded-full' src={user?.avatar} alt="" />

                    <textarea type="text" className='w-full border rounded-md p-2 h-[50px] outline-none focus:placeholder:opacity-0' placeholder='Write a comment . . .'value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                    <div className="flex flex-col justify-end"><div className="bg-blue-200 text-white p-3 rounded" onClick={handleComment}>Send</div></div>
                </div>:''
                }
            </div>

            
            
        </div>
        {modal===true? <div className=" fixed top-0 left-0 h-screen w-screen bg-black/80  z-[2000] ">
        <div className="flex justify-end  pt-5 pr-5 "><AiOutlineClose className="text-white h-[30px] w-[30px]" onClick={()=>setModal(false)}/></div>
        <div className=" w-full  h-full  flex justify-center items-center relative ">
          <img className=" max-w-[90%] max-h-[80%] pb-20   " src={import.meta.env.VITE_SERVER_URL+'/api/'+data?.images[imgNo]} alt="" />
          <button disabled={imgNo<1} className="absolute left-2 -translate-y-1/2 p-1 md:p-5 ml-5 border border-slate-400" onClick={()=>setImgno(prev=>prev-1)}><FaAngleLeft className="text-white"/></button>
          <button  disabled={imgNo===(data?.images?.length - 1)} className="absolute right-2  -translate-y-1/2 p-1 md:p-5 mr-5 border border-slate-400" onClick={()=>setImgno(prev=>prev+1)}><FaAngleRight className="text-white"/></button>
  
          </div>
      </div> : ''}
      </>
    );
};

export default ExperienceCard;