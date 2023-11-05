import React from "react";
import { FiEdit2,  } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const TABLE_HEAD = {
  division: ["SL.", "Name", "Slug",'Action'],
  place: ["SL.", "Name", "Division",'Action'],
  agency: ["SL.","Logo", "Name", "Email",'Lisence No','Owner','Status', 'Action'],
  hotel: ["SL.","Logo", "Name", "Email",'Lisence No','Owner','Status', 'Action'],
  'tour_package': ["SL.", "Name", "Agency", "Status", "Action"],
  'hotel_package': ["SL.", "Name", "Hotel", "Status", "Action"],
  'package': ["SL.", "Name", "Agency/Hotel", "Status", "Action"],
  'userOrders': ["SL","Package Name", "Date", "Cost", "Status", 'Action']
};

const Table = ({ type = "", data = {}, deleteHandler= ()=>{}, callBack=()=>{} }) => {
  const { user } = useSelector(state=>state.userInfo)

  const renderDivisionRows = () => {
    return (<tbody>
        {
            data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
            <td  className="py-2 px-4 font-[600] w-[80px]+ ">
              {index+1}
            </td>
            <td  className="py-2 px-4">
              {item?.name}
            </td>
            <td  className="py-2 px-4">
              {item?.slug}
            </td>
            <td  className="py-2 px-4 w-[100px]">
              <div className="flex items-center gap-3"><Link to={`${item?.id}`}><FiEdit2 className="group-hover:text-red-400"/></Link> <BsTrash className="group-hover:text-red-400" onClick={()=>deleteHandler(item?.id)}/></div>
            </td>
            </tr>)
        }

    </tbody>)  
        
       
  };

  const renderPlaceRows = () =>{
    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td  className="py-2 px-4">
            {item?.name}
          </td>
          <td  className="py-2 px-4">
            {item?.division?.name}
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

  </tbody>)  

  }

  const renderAgencyRows = () => {
    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4"><img className="w-[40px] h-[40px] rounded-full  shadow-md m-1" src={`${import.meta.env.VITE_SERVER_URL}/api/${item.logo}`} alt="logo" /></td>
          <td  className="py-2 px-4">
            {item?.name}
          </td>
          <td  className="py-2 px-4">
            {item?.email}
          </td>
          <td  className="py-2 px-4">
            {item?.lisence}
          </td>
          <td  className="py-2 px-4">
            {item?.user?.fullName}
          </td>
          <td  className={'py-2 px-4 first-letter:uppercase'}>
            <p className={` ${item?.status==='pending'?'bg-orange-400 text-white ':item?.status==='approved'?'bg-green-600 text-white ':item?.status==='banned'?'bg-red-600 text-white ':item?.status==='declined'?'bg-gray-400 text-white ':''} w-fit py-1 px-3 rounded-2xl`}> {item?.status}</p>
           
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

    

  </tbody>)  

  }

  const renderHotelRows = () => {
    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4"><img className="w-[40px] h-[40px] rounded-full  shadow-md m-1" src={`${import.meta.env.VITE_SERVER_URL}/api/${item.logo}`} alt="logo" /></td>
          <td  className="py-2 px-4">
            {item?.name}
          </td>
          <td  className="py-2 px-4">
            {item?.email}
          </td>
          <td  className="py-2 px-4">
            {item?.lisence}
          </td>
          <td  className="py-2 px-4">
            {item?.user?.fullName}
          </td>
          <td  className={'py-2 px-4 first-letter:uppercase'}>
            <p className={` ${item?.status==='pending'?'bg-orange-400 text-white ':item?.status==='approved'?'bg-green-600 text-white ':item?.status==='banned'?'bg-red-600 text-white ':item?.status==='declined'?'bg-gray-400 text-white ':''} w-fit py-1 px-3 rounded-2xl`}> {item?.status}</p>
           
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

    

  </tbody>) 

  }

  const renderTourPackageRows = () =>{
    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4">{item?.name}</td>
          <td  className="py-2 px-4">
            {item?.agency?.name}
          </td>
          
          <td  className={'py-2 px-4 first-letter:uppercase'}>
            <p className={` ${item?.status==='pending'?'bg-orange-400 text-white ':item?.status==='approved'?'bg-green-600 text-white ':item?.status==='rejected'?'bg-red-600 text-white ':''} w-fit py-1 px-3 rounded-2xl`}> {item?.status}</p>
           
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

    

  </tbody>) 

  }

  const renderHotelPackageRows = () =>{
    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4">{item?.name}</td>
          <td  className="py-2 px-4">
            {item?.hotel?.name}
          </td>
          
          <td  className={'py-2 px-4 first-letter:uppercase'}>
            <p className={` ${item?.status==='pending'?'bg-orange-400 text-white ':item?.status==='approved'?'bg-green-600 text-white ':item?.status==='rejected'?'bg-red-600 text-white ':''} w-fit py-1 px-3 rounded-2xl`}> {item?.status}</p>
           
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

    

  </tbody>) 

  }

  const renderPackageRows = () =>{

    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4">{item?.name}</td>
          <td  className="py-2 px-4">
            {item?.hotel?.name || item?.agency?.name || 'Not Available'}
          </td>
          
          <td  className={'py-2 px-4 first-letter:uppercase'}>
            <p className={` ${item?.status==='pending'?'bg-orange-400 text-white ':item?.status==='approved'?'bg-green-600 text-white ':item?.status==='rejected'?'bg-red-600 text-white ':''} w-fit py-1 px-3 rounded-2xl`}> {item?.status}</p>
           
          </td>
          <td  className="py-2 px-4 w-[100px]">
            <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400" onClick={()=>callBack('edit',item?.id)}/> <BsTrash className="group-hover:text-red-400" onClick={()=>callBack('delete',item?.id)}/></div>
          </td>
          </tr>)
      }

    

  </tbody>) 

  }

  const renderUserOrdersRows = () =>{

    return (<tbody>
      {
          data?.docs?.map((item, index)=><tr key={index} className=" border-b border-gray-300 group hover:bg-blue-400/10" >
          <td  className="py-2 px-4 font-[600] w-[80px]+ ">
            {index+1}
          </td>
          <td className="px-4">{item?.package?.name || 'Not Available'}</td>
          <td className="px-4">{item?.createdAt? new Date(item?.createdAt).toLocaleDateString() : 'Not Available'}</td>
          <td className="px-4">{item?.cost.toFixed(2) || 'Not Available'}</td>
        
          
          <td  className={'py-2 px-4 '}>
            <div className="flex items-center gap-2">
            <p className={` ${item?.status==='pending'?'bg-orange-300 text-white ':item?.status==='confirmed'?'bg-green-600 text-white ':item?.status==='cancelled'?'bg-red-600 text-white ':item?.status==='paid'?'bg-blue-200 text-white ':item?.status==='processing'?'bg-orange-400 text-white ':''} w-fit py-1 px-3 rounded-2xl first-letter:uppercase  `}> {item?.status} </p>
            {
             ( item?.status==='pending' && user?.role==='user')? <button className=" w-fit py-1 px-3 rounded-2xl bg-[#ff9d64] text-white whitespace-nowrap cursor-pointer" onClick={()=>callBack('pay',item)}>Pay Now</button>:''
            }
            </div>
           
          </td>
          <td className="px-4 w-[50px] pl-8"><AiOutlineEye className="h-[20px] w-[20px] group-hover:text-blue-200" onClick={()=>callBack('view',item)}/></td>

          
       
          </tr>)
      }

    

  </tbody>) 

  }

  



  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg ">
        <thead>
          <tr>
            {TABLE_HEAD[type]?.map((item, index) => (
              <th
                key={index}
                className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-start "
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {type === "division" ? renderDivisionRows() :
        type === "place" ? renderPlaceRows() :
        type === "agency" ? renderAgencyRows() :
        type === "hotel" ? renderHotelRows() : 
        type === "tour_package" ? renderTourPackageRows() :
        type === "hotel_package" ? renderHotelPackageRows() :
        type === "package" ? renderPackageRows() : 
        type === "userOrders" ? renderUserOrdersRows() : ""

        



        

        }
      </table>
    </div>
  );
};

export default Table;
