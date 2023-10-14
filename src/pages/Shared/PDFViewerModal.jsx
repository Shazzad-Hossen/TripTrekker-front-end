import { AiOutlineClose } from "react-icons/ai";
import Iframe from 'react-iframe'


function PDFViewerModal({pdfUrl='',isOpen=false,setIsOpen=()=>{}}) {
 


  return (
    <div>
       

      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4">
         <div className="flex justify-end h-7"> <AiOutlineClose className='w-5 h-5' onClick={()=>setIsOpen(false)}/></div>

     
         <Iframe url={import.meta.env.VITE_SERVER_URL+'/api/'+pdfUrl}className="w-full h-[95%] rounded-xl"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PDFViewerModal;
