import { useEffect, useRef, useState } from "react";
import downarrow from '../../assets/icon/downArrow.svg'
import errorIco from '../../assets/icon/error.svg'
/**
 * Dropdown Component
 *
 * @component
 * @param {string} label - The label text for the textarea.i.e. label='Description'
 * @param {string} name - The  name for the Dropdown which will be used for hookform. i.e. name='name'
 * @param {string} value - The  value represented id of data. i.e. value='121aw31s2'
 * @param {object} errors - Errors object of hookform. i.e. errors={errors["name"]}
 * @param {Array} data - The data that will be shown in dropdown. i.e. [{id:'1234', name:'Name'}]
 * @param {function} onChange - A callback function to handle  value changes. i.e. getValue={valuehandler}
 * @param {function} setvalue - A callback function to hookForm value changes. i.e. setvalue={setvalue}
 * @returns {JSX.Element} The rendered textarea element.
 */
export default function DropDown({
    data = [],
    onChange = () => { },
    label,
    setValue = () => { },
    name,
    errors,
    value,
    defaultValue = 'Select',
    labelvarient='',
}) {
    const [isOpen, setIsopen] = useState(false);
    const [selected, setSelected] = useState(null);
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

    useEffect(() => {
        setSelected(data.find(item => item?.id === value));
        setValue(name || 'dropdown', value);
    }, [data, value]);

    return (
        <>
            {label ? <p className={`text-blue-100 font-[600] pb-2  ${labelvarient} `}>{label}</p> : ''}
            <div
                onClick={() => setIsopen(!isOpen)}
                className={`w-full min-h-[2.1rem] px-3 bg-white rounded  border justify-between items-center gap-3 inline-flex relative ${errors ? "border-red " : "border-dimGray "}`}
                ref={modalRef}
            >
                <div className={`${defaultValue && 'text-graish text-sm'}`}>{selected ? selected?.name : defaultValue}</div>
                <div className="w-[1.375rem] h-3.5 bg-zinc-200 rounded-sm">
                    <img src={downarrow} alt="" />
                </div>

                {isOpen && (
                    <div className="top-11 left-0 absolute shadow-lg py-2 pr-2  rounded right-0 text-start max-h-[18rem] min-h-[1.5rem] overflow-y-auto no-scrollbar bg-white z-50">
                        {
                            data.length > 0 ? data.map((item, i) => (
                                <div key={i} className="relative">
                                    <div className={`bg-blue-100 absolute left-0 top-0 bottom-0 rounded-r w-[0.225rem]  ${selected?.id === item?.id ? "block " : "hidden"} `}></div>
                                    <div onClick={() => { setSelected(item); setIsopen(!isOpen); onChange(item); setValue(name || 'dropdown', item?.id) }} className={`w-full ml-2 px-2 py-[0.625rem] rounded cursor-pointer hover:bg-blue-400/20 ${selected?.id === item?.id ? "bg-blue-400/20 " : ""}`}>
                                        {item?.name}
                                    </div>
                                </div>
                            )) : <></>
                        }
                    </div>
                )}
            </div>
            {errors && (
                <p className="text-red text-sm font-normal leading-tight flex items-center gap-2 pt-1">
                    <img src={errorIco} alt="" />
                    {errors.message}
                </p>
            )}
        </>
    );
}
