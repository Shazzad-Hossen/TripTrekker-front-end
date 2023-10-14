import React from "react";
import { FiEdit2,  } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";



const TABLE_HEAD = {
  division: ["SL.", "Name", "Slug",'Action'],
  place: ["SL.", "Name", "Division",'Action'],
  agency: ["SL.","Logo", "Name", "Email",'Lisence No','Owner','Status', 'Action'],
  hotel: ["SL.","Logo", "Name", "Email",'Lisence No','Owner','Status', 'Action'],
};

const Table = ({ type = "", data = {}, deleteHandler= ()=>{}, callBack=()=>{} }) => {

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
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg ">
        <thead>
          <tr>
            {TABLE_HEAD[type]?.map((item, index) => (
              <th
                key={index}
                className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-start"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {type === "division" ? renderDivisionRows() :
        type === "place" ? renderPlaceRows() :
        type === "agency" ? renderAgencyRows() :
        type === "hotel" ? renderHotelRows() : ""

        }
      </table>
    </div>
  );
};

export default Table;
