import React, { useRef } from 'react';
import { Gallery } from '../assets/icons';

const InputField = ({ label, inputType = "text", placeholder = "", isSmall = false }) => {
  const inputRef = useRef();

  if (inputType === "file") {
    return (
      <div className='flex flex-col'>
        <h1 className={`text-[#204672] ${isSmall ? "text-[0.8vw]" : "text-[1.7vw]"} font-serif capitalize`}>{label}</h1>
        <div className="flex items-center justify-end px-8 bg-white w-[25vw] rounded-md h-[3.5vw]">
          <label htmlFor="fileInput" className="bg-[#204672] flex justify-center items-center w-10 h-10 rounded-md cursor-pointer">
            <img src={Gallery} alt="" className="w-6 h-6" />
          </label>
          <input ref={inputRef} id="fileInput" type="file" className="hidden" />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <h1 className={`text-[#204672]  ${isSmall ? "text-[1.2vw]" : "text-[1.7vw]"} font-serif capitalize`}>{label}</h1>
      <input type={inputType} placeholder={placeholder} className={` ${isSmall ? "w-[22vw] ":"w-[35vw] shadow-[rgba(0,0,0,0.2)] shadow-md"}  h-[3vw] rounded-md  px-4 capitalize`} />
    </div>
  );
};

export default InputField;
