import React, { useState } from 'react';

const SpokenLanguages = () => {
  const [languages, setLanguages] = useState(['', '', '', '']);

  const handleLanguageChange = (index, value) => {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index] = value;
      return newLanguages;
    });
  };

  return (
    <div className="p-4 ">
      <h1 className='text-[#204672] text-[3vw] font-serif capitalize'>spoken languages :</h1>
      {languages.map((language, index) => (
        <div key={index} className="mb-2 ">
          <label
            htmlFor={`language-${index}`}
            className="block mb-1 font-serif font-bold"
          >
            language
          </label>
          <select
            id={`language-${index}`}
            value={language}
            onChange={(e) => handleLanguageChange(index, e.target.value)}
            className=" px-3 py-2 w-[15vw] outline-none text-gray-600   shadow-[rgba(0,0,0,0.2)] shadow-md rounded-md form-select"
          >
            <option value="">select language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default SpokenLanguages;