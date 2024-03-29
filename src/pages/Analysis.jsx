import React, { useState, useRef } from 'react';
import BarChart from '../components/BarChart';
import { LogoWithName } from '../assets/img';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calender } from '../assets/icons';

const Analysis = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const datePickerStartRef = useRef(null);
    const datePickerEndRef = useRef(null);

    const chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        values: [10, 20, 30]
    };
    const handleStartButtonClick = () => {
        datePickerStartRef.current.setOpen(true);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndButtonClick = () => {
        datePickerEndRef.current.setOpen(true);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="flex flex-col items-center analysis-container">
            <div className="h-[6vw] w-[80vw] py-4">
                <img src={LogoWithName} className='h-12' alt="Logo" />
            </div>
            <div className="h-[4vw] w-[80vw] bg-[#204672] px-20 py-4 flex justify-between items-center">
                <h2 className="text-white text-[1.8vw] font-serif">Filter</h2>
                <button className="px-10 text-[1.2vw] font-medium text-[#204672] bg-[#FFFFFF] py-2">
                    Submit
                </button>
            </div>
            <div className="h-[6vw] w-[80vw] bg-[#E3E3E3] px-20 py-4 flex justify-between items-center">
                <div className="flex items-center justify-start gap-4 ">
                    <h2 className="text-black text-[1.8vw] font-serif">From:</h2>
                    <div>
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select a date"
                            ref={datePickerStartRef}
                        />
                    </div>
                    <button
                        className="ml-2 px-4 py-2 text-white bg-[#204672] rounded"
                        onClick={handleStartButtonClick}
                    >
                        <img src={Calender} className='h-[1.2vw]' alt="" />
                    </button>
                </div>
                <div className="flex items-center justify-start gap-4 ">
                    <h2 className="text-black text-[1.8vw] font-serif">To:</h2>
                    <div>
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select a date"
                            ref={datePickerEndRef}
                        />
                    </div>
                    <button
                        className="ml-2 px-4 py-2 text-white bg-[#204672] rounded"
                        onClick={handleEndButtonClick}
                    >
                        <img src={Calender} className='h-[1.2vw]' alt="" />
                    </button>
                </div>
            </div>
            <div className="bar-chart-container w-[50vw] h-[50vh]">
                <BarChart data={chartData} />
            </div>
        </div>
    );
};

export default Analysis;
