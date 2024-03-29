import React, { useState } from 'react';

const Schedule = () => {
    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const [toggleStates, setToggleStates] = useState(
        weekDays.reduce((obj, day) => ({ ...obj, [day]: true }), {})
    );

    const toggleDay = (day) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [day]: !prevStates[day],
        }));
    };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className={`text-[#204672] text-[2vw]  font-serif capitalize`}>business timings  :</h1>
            <div className="flex flex-col p-4 border border-black bg-white rounded-lg w-[40vw] shadow-md">
                {weekDays.map((day) => (
                    <div key={day} className="flex items-center justify-between mb-2">
                        <div className="flex items-center">

                            <span className="font-serif font-medium ">{day}</span>
                        </div>
                        <div className="flex items-center ">
                            <div className="px-2 py-2 bg-white rounded-md shadow-md shadow-[rgba(0,0,0,0.4)]">
                                <button
                                    className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#204672] ${toggleStates[day] ? 'bg-[#204672]' : 'bg-gray-200'
                                        }`}
                                    onClick={() => toggleDay(day)}
                                >

                                    <span
                                        className={`pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${toggleStates[day] ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                            <div className="ml-2 mr-2">
                                <select className="px-2 py-1 text-gray-700 border border-black rounded-md form-select">
                                    <option value="9:00 AM">9:00:00 AM</option>
                                    <option value="9:00 AM">10:00:00 AM</option>
                                    <option value="9:00 AM">11:00:00 AM</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <span className="mx-2 ">To</span>
                            <div>
                                <select className="px-2 py-1 text-gray-700 border border-black rounded-md form-select">
                                    <option value="6:00 PM">6:00:00 PM</option>
                                    <option value="6:00 PM">7:00:00 PM</option>
                                    <option value="6:00 PM">8:00:00 PM</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;