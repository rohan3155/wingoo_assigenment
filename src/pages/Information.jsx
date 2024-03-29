import React, { useState } from 'react'
import InputField from '../components/InputField'
import Schedule from '../components/Schedule'
import SpokenLanguages from '../components/SpokenLanguages'
import { GreenTick } from '../assets/img'

const Information = () => {
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleBuyNow = () => {
    setShowCongratulations(true);
  };
  return (
    <div className='flex flex-col items-center pb-[4vw]  overflow-x-hidden'>
      <div className="w-[80vw] flex flex-col gap-4">
        <h1 className='text-[#204672] text-[3vw] font-serif capitalize'>personal details :</h1>

        <div className="flex justify-between">
          <InputField inputType='text' label={"first name :"} />
          <InputField inputType='text' label={"last name :"} />
        </div>

        <div className="flex justify-between">
          <InputField inputType='email' label={"email id  :"} />
          <InputField inputType='text' label={"Phone Number : "} placeholder='10 digits' />
        </div>
        <h1 className='text-[#204672] text-[3vw] font-serif capitalize'>personal details :</h1>
        <div className="flex justify-between">
          <InputField inputType='text' label={"company name : "} />
          <InputField inputType='text' label={"trading name :"} />
        </div>
        <div className="flex w-full justify-evenly ">
          <InputField inputType='text' label={"address line 1 :"} isSmall={true} />
          <InputField inputType='text' label={"address line 2 :"} isSmall={true} />
          <InputField inputType='text' label={"address line 3 :"} isSmall={true} />
        </div>
        <div className="flex justify-between">
          <InputField inputType='text' label={"city /town :"} isSmall={true} />
          <InputField inputType='text' label={"postal code: "} isSmall={true} />
          <InputField inputType='text' label={"country :"} isSmall={true} />
        </div>
        <div className="flex justify-between">
          <InputField inputType='text' label={"registration number :"} isSmall={true} />
          <InputField inputType='text' label={"type of business :"} isSmall={true} />
          <InputField inputType='text' label={"website uRL :"} isSmall={true} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <h1 className={`text-[#204672] text-[2vw]  font-serif capitalize`}>Business Description *</h1>
            <textarea name="" className='resize-none h-[8vw] rounded-md  w-[25vw]' id="" cols="10" rows="10"></textarea>
          </div>
          <InputField inputType='file' label={"company logo :"} />
        </div>
        <div className="flex justify-between">
          <Schedule />
          <SpokenLanguages />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-[#204672] font-serif sticky bottom-20 w-[10vw] text-white h-[4vw]  capitalize "
          onClick={handleBuyNow}
        >
          Edit
        </button>
      </div>
      {showCongratulations && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 ">
          <div className="bg-[rgba(255,255,255,0.9)] p-8 rounded-lg absolute top-10 w-[50vw] h-[60vh]">
            <div className="flex flex-col items-center justify-center">
              <img src={GreenTick} className='h-[6vw]' alt="" />
              <h2 className="text-[4vw] font-bold text-gray-800 mb-4 font-serif">Thank You!</h2>
              <p className="text-[2vw] text-gray-700 font-serif capitalize">your details have been updated</p>
              <button
                className="bg-[#214772] text-white px-4 py-2  mt-4"
                onClick={() => setShowCongratulations(false)}
              >
                ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Information