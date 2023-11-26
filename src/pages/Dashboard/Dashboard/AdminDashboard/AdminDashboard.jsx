import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicDelete, publicGet } from '../../../../utilities/apiCaller';
import Table from '../../../Shared/Table/Table';
import { toast } from '../../../../utilities/toast';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [data, setData] = useState(null);
    const [active, setActive] = useState('division');
    const [divisionData,setDivisionData]=useState(null);
    const [ places,setPlaces]= useState(null);
    const navigate= useNavigate();


    const fetchDivision = () =>{
        publicGet('/api/division?paginate=true').then(res=>setDivisionData(res?.data))
      }
      const fetchPlaces = ()=>{
        publicGet(`/api/place?paginate=true`).then(res=>{
          if(res?.status===200) {
            setPlaces(res?.data);
          }
          else {
            toast.error(res?.data);
          }
        })
      }

    useEffect(()=> {
        publicGet('/api/dashboard-admin').then(res=>{
            if(res.status===200) setData(res?.data);
        });
        fetchDivision();
        fetchPlaces();

    }, []);
    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure to delete this division?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No `,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                publicDelete(`/api/division/${id}`).then(res=>{
                    if(res.status===200){
                     toast.success('Successfully Deleted');
                     fetchDivision();
                    }
                    })
            }
          })
      }

      const handleCallback = (type, id) =>{
        console.log(type);
        if(type==='delete'){
          publicDelete(`/api/place/${id}`). then(res=>{
            if(res.status===200){
              toast.success('Successfully Deleted');
              fetchData();
            }
            else {
              toast.error(res?.data);
            }
          })
        }
        else if(type==='edit'){
          navigate(`/dashboard/places/edit/${id}`)
    
        }
    
      }

    return (
        <div className='px-5 py-5'>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
            <div className="border rounded p-5 bg-blue-200/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalUser || 0}</h1>
                <p className='font-roboto font-[600]'>Users</p>
            </div>
            <div className="border rounded p-5 bg-orange-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalAgency || 0}</h1>
                <p className='font-roboto font-[600]'>Agencies</p>
            </div>
            <div className="border rounded p-5 bg-purple-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.totalHotel || 0}</h1>
                <p className='font-roboto font-[600]'>Hotels</p>
            </div><div className="border rounded p-5 bg-red-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.packsByAgency || 0}</h1>
                <p className='font-roboto font-[600]'>Travel Packages</p>
            </div>
            <div className="border rounded p-5 bg-green-600/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>{data?.packsByHotel || 0}</h1>
                <p className='font-roboto font-[600]'>Hotel Packages</p>
            </div>
            <div className="border rounded p-5 bg-sky-700/80 text-white">
                <h1 className='font-[600] font-roboto text-xl'>৳ {(data?.totalStoreAmount*10)/100 || 0}</h1>
                <p className='font-roboto font-[600]'>Revenue</p>
            </div>
            
        </div>

        <div className="pt-5 flex items-center gap-2">
            <button className={`${active==='division'?'bg-blue-200 text-white':''} px-2 py-1 rounded font-[600]`} onClick={()=>setActive('division')}>Divisions</button>
            <button className={`${active==='places'?'bg-blue-200 text-white':''} px-2 py-1 rounded font-[600]`} onClick={()=>setActive('places')}>Places</button>
        </div>

        <div className="pt-10">
        {
            active==='division'?<Table type='division' data={divisionData} deleteHandler={deleteHandler}/>:<Table type='place' callBack={handleCallback} data={places}/>
        }
        <div className={`text-end pt-5 font-[600] cursor-pointer pr-2`} onClick={() => navigate(active==='division'?'/dashboard/divisions':'/dashboard/places')}>See more</div>
           </div> 
        </div>
    );
};

export default AdminDashboard;