import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BsTrash } from "react-icons/bs";
import uuid from "react-uuid";

const UploadImage = ({ thumbnails = [], callBack = () => { } }) => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState({});
    useLayoutEffect(() => {
        if (thumbnails.length > 0) {
            setImages({});
            thumbnails.forEach(item => {
                setImages(prev => ({ ...prev, [uuid()]: item }))
            });

        }
    }, [thumbnails]);

    useEffect(()=>{

        callBack(images)


    },[images])

    const handleFile = (e) => {
        setImages(prev => ({ ...prev, ...{ [uuid()]: e.target.files[0] } }))
    }


    const renderImage = (key) => {
        return typeof images[key] === 'string' ? import.meta.env.VITE_SERVER_URL+'/api/'+images[key] : URL.createObjectURL(images[key])

    }
    const handleDelete = (key) =>{
        setImages(prev=>{
            delete prev[key];
            return {...prev}
        })
    }


    return (
        <div>
            <div className="flex items-center gap-4 flex-wrap">
                <div
                    className="bg-slate-100/50 h-[100px] w-[150px] rounded border-dashed border flex justify-center items-center flex-col cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                >
                    <span>+</span> Upload
                </div>
                {Object.keys(images).map((key, index) => (
                    <div
                        key={index}
                        className="h-[100px] w-[150px] rounded  relative group"
                    >
                        <img
                            src={renderImage(key)}
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

            <input
                className="hidden"
                type="file"
                ref={fileInputRef}
                onChange={handleFile}
            />

        </div>
    );
};

export default UploadImage;