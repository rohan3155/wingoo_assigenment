import React from 'react';
import { Filter, Search } from '../assets/icons';

const userData = [
    { id: 1, name: "John Doe", region: "North America", email: "john.doe@example.com", interaction: "High" },
    { id: 2, name: "Jane Smith", region: "Europe", email: "jane.smith@example.com", interaction: "Medium" },
];

const Table = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-[#325C8D] w-[80vw] h-[3.3vw] rounded-md flex justify-between items-center px-8">
                <h3 className='text-white text-[1.4vw] font-bold'>User Information</h3>
                <div className="flex px-4 py-1 bg-white rounded-3xl">
                    <input type="text" className='outline-none' />
                    <button>
                        <img src={Search} alt="" />
                    </button>
                </div>
            </div>
            <table className="w-[80vw]">
                <thead>
                    <tr className="bg-white">
                        <th className='text-[1.2vw] font-bold p-4'>Name</th>
                        <th className='text-[1.2vw] font-bold p-4'>Region</th>
                        <th className='text-[1.2vw] font-bold p-4'>Email</th>
                        <th className='text-[1.2vw] font-bold p-4'>Interaction</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id} className={user.id % 2 === 0 ? 'bg-[#C7C7C7]' : 'bg-[#FFFFFF]'}>
                            <td className='text-[1.2vw] p-4'>{user.name}</td>
                            <td className='text-[1.2vw] p-4'>{user.region}</td>
                            <td className='text-[1.2vw] p-4'>{user.email}</td>
                            <td className='text-[1.2vw] p-4'>{user.interaction}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
