import React from 'react';








const Sidebar = ({navItem}) => {
  
    return (
        <div className="hidden md:block w-[300px]">
            <div className='bg-gray-700 h-full w-full sticky top-0 overflow-y-auto no-scrollbar py-5 px-3 flex flex-col gap-3 '>
            {
                navItem
            }
           
            
        </div>
        </div>
    );
};

export default Sidebar;