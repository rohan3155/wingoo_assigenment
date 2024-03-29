import React, { useState } from 'react';
import { Tick } from '../assets/icons';

const SubscriptionCard = ({
    color,
    variantColor,
    plan,
    price,
    features,
    index,
    setSelected,
    selected,
    handleBuyNow
}) => {


    return (
        <div
            onClick={() => setSelected(index)}
            className={`cursor-pointer w-[20vw] text-white flex flex-col gap-2 rounded-xl sticky ${selected !== index ? "h-[70vh]" : "h-[75vh] -mt-4"}`}
            style={{ backgroundColor: color }}
        >
            <h3 className='font-bold text-[1.8vw] text-center'>{selected === index && plan}</h3>
            <div
                className={`px-8 ${selected === index ? "flex flex-col h-full w-full gap-2 rounded-xl" : "flex flex-col gap-2"}`}
                style={{ backgroundColor: selected === index && variantColor }}
            >
                <h3 className='font-bold text-[2vw]'>{selected !== index && plan}</h3>
                <h3 className='font-extrabold text-[2.2vw]'>${price}/<span className='text-[1.5vw]'>mo</span></h3>
                {features && features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                        <img src={Tick} alt="" />
                        <h3 className='text-[1vw] font-medium'>{feature}</h3>
                    </div>
                ))}
                <div className="flex justify-center">
                    <button onClick={handleBuyNow} className="bg-[#2aa7ff] absolute bottom-8 w-[90%] h-[3vw] rounded-2xl">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
