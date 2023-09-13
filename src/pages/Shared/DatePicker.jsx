
/**
 * Input Field Component.
 *
 * @component
 * @param {boolean} labelColor - It will set the label color as blue.  if we use If we dont use it , color will be default. value can be true or false.
 * @param {boolean} blue - It will set the border color as blue.  value can be true or false.
 * @param {string} className - It is used to add custom tailwind classes.
 * @param {string} label - The label text for the input.
 * @param {string} name - The name attribute for the input.
 * @param {string} value - The current value of the input.
 * @param {function} onChange - A callback function to handle input value changes.
 * @param {string} placeholder - The placeholder text for the input.
 * @param {string} errors - An error message to display if there's an input validation error.
 *
 * @returns {JSX.Element} The rendered Input field.
 * I.E:  <DatePicker label='Date of Birth' setValue={setValue} value={'1998-10-11'} name='startDate' errors={errors['startDate']} placeholder='Start Date' onChange={(val)=>console.log('date 1:',val)} />
            <DatePicker label='Date of Death' setValue={setValue} name='startDate2' errors={errors['startDate2']} placeholder='Start Date' onChange={(val)=>console.log('date 2:',val)} />
 */

            import { useEffect, useRef, useState } from 'react';
            import downArrow from '../../assets/icon/downArrow.svg';
            import errorIco from '../../assets/icon/error.svg';
            import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
            
            const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
            
            export default function DatePicker ({onChange=()=>{}, setValue=()=>{}, value, name='date',errors, placeholder='Select Date', className='', label, labelColor=false}) {
                const [isOpen,setIsopen]=useState(false);
                const [currentDate,setCurrentdate]=useState({date: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()});
                const [currentYear,setCurrentYear]= useState(new Date().getFullYear());
                const [currentMonth,setCurrentMonth]= useState((new Date().getMonth()));
                const daysInMonth = ()=> new Date(currentYear, currentMonth+1,0).getDate();
                const [daysArray,setDaysarray]=useState([...Array(daysInMonth()).keys()]);
                const [blankDays,setBlackdays]=useState(new Date(currentYear, currentMonth, 1).getDay());
                const [selectedText,setSelectedtext]=useState('');
                const monthHandler= (value)=>{
                    if(value==='next'){
                        currentMonth<11? setCurrentMonth(prev=>prev+1): (setCurrentMonth(0), setCurrentYear(prev=>prev+1));      
                    }
                    else{
                        currentMonth>0? setCurrentMonth(prev=>prev-1): (setCurrentMonth(11), setCurrentYear(prev=>prev-1));  
                    }
                }
                   
                useEffect(()=>{
                    setDaysarray([...Array(daysInMonth()).keys()]);
                    setBlackdays(new Date(currentYear, currentMonth, 1).getDay())
                },[currentYear,currentMonth]);
            
                useEffect(()=>{
                    if(value){
                        const [year, month, date]=value.split('-');
                        setCurrentMonth(Number(month-1));
                        setCurrentYear(Number(year));
                        setCurrentdate({year,month:month-1,date: Number(date)});
                        setSelectedtext(new Date(value).toLocaleDateString());
                        setValue(name,value);
                        onChange(value)
            
                    }
                    else {
                      setValue(name,null);
                      onChange(null);
                      
                    }
            
                },[])
            
             
                const selectHandler = (date, month, year) =>{
                    setCurrentdate({date,month, year});
                    onChange(year+'-'+(month+1)+'-'+date)
                    setValue(name,year +'-'+(month+1)+'-'+date);
                    setSelectedtext(new Date(year +'-'+(month+1)+'-'+date).toLocaleDateString())
                }
                const modalRef = useRef(null);
            
                useEffect(() => {
                    const handleOutsideClick = (e) => {
                        if (modalRef.current && !modalRef.current.contains(e.target)) {
                            setIsopen(false);
                        }
                    };
                    isOpen ? document.addEventListener("mousedown", handleOutsideClick) : document.removeEventListener("mousedown", handleOutsideClick);
                    return () => document.removeEventListener("mousedown", handleOutsideClick);
            
                }, [isOpen]);
            
            
                return (
                    <>
                     {
                            label ? <p className={`pb-2 font-normal text-sm ${labelColor ? "text-blue" : ""} `}>{label}</p> : ''
                        }
                   <div className="relative">
                   <div className={`cursor-pointer h-[2.25rem] border rounded  w-full relative ${errors?'border-red':'border-gray-300'} ${className} `} onClick={()=>setIsopen(!isOpen)}  >
                        <div className="flex w-full items-center justify-between h-full px-[0.75rem]">
                            <span className='text-[0.875rem] leading-[1.25rem] font-[400] text-graish '>{selectedText!==''? selectedText:( value? value : placeholder)}</span>
                            <div className="w-[1.375rem] h-3.5 bg-zinc-200 rounded-sm">
                                <img src={downArrow} alt="" />
                            </div>
                        </div>
                        
                    </div>
                    {
                        isOpen? <div className=" bg-white rounded-[0.5rem] p-[1.25rem] h-[18rem]  max-w-[20rem] w-full shadow-lg absolute top-9 z-[50] "  ref={modalRef}>
                           <div className="flex items-center justify-between">
                           <BsArrowLeft className='h-[1.2rem] w-[1.2rem]' onClick={()=>monthHandler('prev')}/>
                           <span className='text-[0.875rem] leading-[1.25rem] font-[400]'> {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentYear, currentMonth, 1)) +' '+ currentYear} </span>
                           <BsArrowRight className='h-[1.2rem] w-[1.2rem]' onClick={()=>monthHandler('next')}/>
                           </div>
                           <div className="grid grid-cols-7 w-full pt-[0.625rem]">
                            {days.map((day,i)=><span className='text-[0.75rem] leading-[1rem] font-[400] pl-2.5' key={i}>{day}</span>)}
                           </div>
                           <div className="grid grid-cols-7 w-full pt-[0.625rem]">
                           {
                               [...Array(blankDays).keys()].map((blankDay, i)=><span className='text-[0.75rem] leading-[1rem] font-[400] p-2' key={i}>{''}</span>) 
                            }
                            {daysArray.map((day,i)=><span className={`text-[0.75rem] leading-[1rem] font-[400] p-2 cursor-pointer  text-center rounded-[0.25rem] ${  currentDate.year==currentYear && currentDate.month==currentMonth && currentDate.date==i+1  ? 'bg-green-800 text-white':''}`} key={i} onClick={()=>selectHandler( i+1,currentMonth, currentYear)} >{i+1}</span>)}
                           </div>
                           
                        </div>
                        
                        :<></>
                    }
                   </div>
                    
                   
                    {
                            errors && (
                                <p className="text-red text-sm font-normal leading-tight flex items-center gap-2 pt-1">
                                    <img src={errorIco} alt="" />
                                    {errors.message}
                                </p>
                            )
                        }
                      
                    </>
                );
            }