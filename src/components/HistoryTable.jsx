import React from 'react';
import { Filter, Search } from '../assets/icons';

const historyData = [
    { id: 1, content: "Content 1" },
    { id: 2, content: "Content 2" },
    { id: 3, content: "Content 3" },
    { id: 4, content: "Content 4" },
    { id: 5, content: "Content 5" }
];

const HistoryTable = () => {
    return (
        <div className='flex flex-col items-center'>
            <table className="w-[80vw]">
                <thead>
                    <tr className="bg-[#325C8D] text-white">
                        <th className='text-[1.4vw] font-medium text-left capitalize p-4'>Past History</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((item) => (
                        <tr key={item.id} className={item.id % 2 === 0 ? 'bg-[#C7C7C7]' : 'bg-[#FFFFFF]'}>
                            <td className='text-[1.2vw] px-8 py-2'>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;
