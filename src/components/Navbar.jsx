import React, { useState } from 'react';
import { Bell, Exit, Settings, User } from '../assets/icons';

const Navbar = () => {
    const [showUserOptions, setShowUserOptions] = useState(false);
    const [showBellOptions, setShowBellOptions] = useState(false);

    const toggleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
        setShowBellOptions(false);
    };

    const toggleBellOptions = () => {
        setShowBellOptions(!showBellOptions);
        setShowUserOptions(false);
    };

    return (
        <div className="h-[6vw] bg-[#12345D] w-full flex justify-end items-center gap-8 pr-4">
            <h2 className='text-white text-[2vw] font-serif'>Michael Scott </h2>
            <button onClick={toggleUserOptions}>
                <img src={User} className='h-[2vw]' alt="" />
            </button>
            {showUserOptions && (
                <div className="absolute z-10 bg-white rounded-lg shadow-lg w-[18vw] top-[4.5vw] right-[7vw]  ">
                    {/* Add your user options here */}
                    <div className="flex justify-between mx-4 my-2">
                        <div className='bg-[#D9D9D9] flex justify-center items-center w-[3vw] h-[3vw] rounded-full'>
                            <img src={User} className='h-[1.2vw]' alt="" />
                        </div>
                        <div>
                            <h4 className='font-semibold text-[0.9vw]'>Michael Scott</h4>
                            <h5 className='font-semibold text-[0.9vw]'>Mr.Scott123@gmail.com</h5>
                        </div>
                    </div>
                    <div className='mx-4 my-2'>
                        <h5 className='font-medium text-[0.8vw]'>Account id : 124324</h5>
                        <h5 className='font-medium text-[0.8vw]'>Subscription:  free trail</h5>
                        <h5 className='font-medium text-[0.8vw]'>Subscription ends :  26 days</h5>
                    </div>
                    <div className='w-full bg-[#369AD9AD] py-2 rounded-b-md px-4 flex flex-col gap-1'>
                        <button className='flex items-center gap-4'>
                            <img src={Settings} alt="" />
                            <h5 className='capitalize font-medium text-[0.8vw]'>view details</h5>
                        </button>
                        <button className='flex gap-4'>
                            <img src={Exit} alt="" />
                            <h5 className='capitalize font-medium text-[0.8vw]'>logout</h5>
                        </button>
                    </div>
                </div>
            )}
            <button onClick={toggleBellOptions}>
                <img src={Bell} className='h-[2vw]' alt="" />
            </button>
            {showBellOptions && (
                <div className="absolute z-10 bg-white rounded-lg top-[4.5vw] right-[3vw] w-[14vw] shadow-lg  ">
                    <h3 className="mx-4 my-2 font-medium">Notification</h3>
                    <div className="notification flex justify-evenly items-center  py-2 bg-[#325C8D4F] rounded-lg my-2 mx-4">
                        <img src={Bell} className='h-[1.2vw]' alt="" />
                        <h4 className='text-[0.8vw]'>You appeared in the Search</h4>
                    </div>
                    <div className="notification flex justify-evenly items-center  py-2 bg-[#325C8D4F] rounded-lg my-2 mx-4">
                        <img src={Bell} className='h-[1.2vw]' alt="" />
                        <h4 className='text-[0.8vw]'>You appeared in the Search</h4>
                    </div>
                    <div className="notification flex justify-evenly items-center  py-2 bg-[#325C8D4F] rounded-lg my-2 mx-4">
                        <img src={Bell} className='h-[1.2vw]' alt="" />
                        <h4 className='text-[0.8vw]'>You appeared in the Search</h4>
                    </div>
                    <div className="notification flex justify-evenly items-center  py-2 bg-[#325C8D4F] rounded-lg my-2 mx-4">
                        <img src={Bell} className='h-[1.2vw]' alt="" />
                        <h4 className='text-[0.8vw]'>You appeared in the Search</h4>
                    </div>
                    <div className="h-[2vw] bg-[#9d9c9c] rounded-b-md">
                        <h4 className='text-[#323131] text-center'>show more notification</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
