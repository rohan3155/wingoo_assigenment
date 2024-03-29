import React from 'react';

const Card = ({ color, title, number, icon }) => {
    return (
        <div className={`w-[18vw] h-[12vw] shadow-[rgba(0,0,0,0.4)] shadow-md p-[1px]  rounded-lg`} style={{backgroundColor:color}}>
            <div className="bg-white h-[90%] rounded-lg flex flex-col justify-between py-4">
                <h3 className={`uppercase text-[1.2vw] w-[90%] text-left font-bold ps-8`} style={{ color }}>{title}</h3>
                <div className="flex items-center justify-between px-8">
                    <h3 className="text-[1.8vw] font-bold" style={{ color }}>{number}</h3>
                    <img src={icon} className='h-[3vw]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Card;
