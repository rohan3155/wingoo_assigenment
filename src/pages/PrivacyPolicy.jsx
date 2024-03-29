import React, { useState } from 'react';
import { Edit } from '../assets/icons';
import privacyPolicyContent from './data/policy';
import { GreenTick } from '../assets/img';

const PrivacyPolicy = () => {
  const [isEditable, setIsEditable] = useState(false);

  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleBuyNow = () => {
    setIsEditable(!isEditable)
    setShowCongratulations(true);
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className="heading w-[80vw] flex justify-between px-10 items-center">
        <h1 className='text-[#204672] text-[3vw] font-serif'>Policy</h1>
        <button className='edit' onClick={handleEditClick}>
          <img src={Edit} className='h-[3vw]' alt="edit" />
        </button>
      </div>
      <textarea
        className={`w-[74vw] h-[65vh] resize-none ps-10 pt-10 ${isEditable ? ' border-black border-2' : 'pointer-events-none'}`}
        name=""
        id=""
        cols="180"
        rows="10"
        value={privacyPolicyContent}
        readOnly={!isEditable}
      ></textarea>
      <div className="flex justify-end w-[74vw]">
        <button onClick={handleBuyNow} className="px-10 mt-4 rounded-3xl text-white  bg-[#204672] py-2">
          Submit
        </button>
      </div>
      {showCongratulations && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 ">
          <div className="bg-[rgba(255,255,255,0.9)] p-8 rounded-lg absolute top-10 w-[50vw] h-[60vh]">
            <div className="flex flex-col items-center justify-center">
              <img src={GreenTick} className='h-[6vw]' alt="" />
              <h2 className="text-[4vw] font-bold text-gray-800 mb-4 font-serif">Success!</h2>
              <p className="text-[2vw] text-gray-700 font-serif capitalize">your policy have been updated</p>
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
  );
};

export default PrivacyPolicy;
