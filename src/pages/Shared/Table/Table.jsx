import React from "react";
import { FiEdit2,  } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";



const TABLE_HEAD = {
  division: ["SL.", "Name", "Slug",'Action'],
};

const Table = ({ type = "", data = {} }) => {
    console.log(data);
  const renderDivisionRows = () => {
    return (<tbody>
        {
            data?.docs?.map((item, index)=><tr className=" border-b border-gray-300 group hover:bg-blue-400/10" >
            <td key={index} className="py-2 px-4 font-[600] w-[80px]+ ">
              {index+1}
            </td>
            <td key={index} className="py-2 px-4">
              {item?.name}
            </td>
            <td key={index} className="py-2 px-4">
              {item?.slug}
            </td>
            <td key={index} className="py-2 px-4 w-[100px]">
              <div className="flex items-center gap-3"><FiEdit2 className="group-hover:text-red-400"/> <BsTrash className="group-hover:text-red-400"/></div>
            </td>
            </tr>)
        }

    </tbody>)  
        
       
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg ">
        <thead>
          <tr>
            {TABLE_HEAD[type].map((item, index) => (
              <th
                key={index}
                className="py-2 px-4 bg-gray-200 border-b border-gray-300 text-start"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {type === "division" ? renderDivisionRows() : ""}
      </table>
    </div>
  );
};

export default Table;
