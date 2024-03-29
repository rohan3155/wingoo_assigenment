import React, { useState } from 'react';
import SubscriptionCard from '../components/SubscriptionCard';
import { GreenTick } from '../assets/img';
import { subscriptionData } from './data/Subscription';





const Subscription = () => {
    const [selected, setSelected] = useState(null);
    const [showCongratulations, setShowCongratulations] = useState(false);

    const handleBuyNow = () => {
        setShowCongratulations(true);
    };

    return (
        <div className='flex flex-col w-full h-full gap-4 '>
            <div className="flex justify-evenly items-center mt-[4vh]">
                {subscriptionData && subscriptionData.map((plan, index) => (
                    <SubscriptionCard
                        key={index}
                        index={index}
                        color={plan.color}
                        variantColor={plan.variantColor}
                        plan={plan.plan}
                        price={plan.price}
                        features={plan.features}
                        selected={selected}
                        setSelected={setSelected}
                        handleBuyNow={handleBuyNow}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-[#558dbe] font-serif sticky bottom-20 w-[20vw] text-white h-[4vw] rounded-2xl capitalize "
                    onClick={handleBuyNow}
                >
                    proceed to payment
                </button>
            </div>
            {showCongratulations && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75 ">
                    <div className="bg-[rgba(255,255,255,0.9)] p-8 rounded-lg absolute top-10 w-[50vw] h-[60vh]">
                        <div className="flex flex-col items-center justify-center">
                            <img src={GreenTick} className='h-[6vw]' alt="" />
                            <h2 className="text-[4vw] font-bold text-gray-800 mb-4 font-serif">Congratulations!</h2>
                            <p className="text-[2vw] text-gray-700 font-serif capitalize">payment  successful</p>
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

export default Subscription;
