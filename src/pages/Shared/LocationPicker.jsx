import React, { useEffect, useState } from 'react';
import { publicGet } from '../../utilities/apiCaller';
import { toast } from '../../utilities/toast';
import { IoMdCloseCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const LocationPicker = ({setIsLocationOpen=()=> {}, setLocation= () => {}, defaultValue=null}) => {
    const [place, setPlace] = useState([]);
    const [searchVal, setSearchVal]= useState('');
    const [selected, setSelected]= useState(null);
    let typingTimer;

    useEffect(()=> {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            publicGet(`/api/place?search=${searchVal}`).then(res=>  {
                if(res?.status===200) setPlace(res?.data);
                else toast.error(req.data);
            })
          }, 500);

    }, [searchVal]);


    useEffect(()=> {
        setLocation(selected);

    }, [selected])

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black/80 z-[500] flex justify-center items-center'>
            
            <div className="bg-white max-w-[500px] w-full p-5 rounded ">
            <div className="pb-5 flex justify-between items-center">
                <h1 className='font-[600] '>Select Place</h1>
            <IoCloseOutline className='w-[30px] h-[30px] active:scale-95' onClick={()=> setIsLocationOpen(false)} /></div>
            
            {
                selected? <div className="font-roboto border rounded p-1 w-full flex items-center gap-2">{selected?.name} <IoMdCloseCircle className='text-red-400' onClick={() => setSelected(null)} /></div>:
                <input type="text" className='border rounded p-1 w-full focus:placeholder:opacity-0 outline-none' placeholder=' Type place name here' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            }
            {
                !selected? <div className="h-[200px] overflow-y-auto py-5">
                {
                    place.map((p, i)=> <div className='font-roboto cursor-pointer border-b py-1' key={i} onClick={() => {setSelected(p)}}>{p?.name}</div>)
                }
            </div>:<div className='p-10'> </div>
            }
            </div>
            
            
        </div>
    );
};

export default LocationPicker;