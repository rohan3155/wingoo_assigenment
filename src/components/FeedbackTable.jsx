import React from 'react';
import { Filter, Star } from '../assets/icons';

const data = [
    {
        date: "06-03-24",
        name: "Rajesh Dutt",
        email: "raj1263@gmail.com",
        review: "amazing services",
        ratings: 5
    },
    {
        date: "12-02-24",
        name: "mr. gupta",
        email: "guptaji98@gmail.com",
        review: "good service",
        ratings: 4
    },
];

const FeedbackTable = () => {
    return (
        <div className='flex flex-col items-center'>
            <table className="w-[80vw]">
                <thead>
                    <tr className="bg-[#325C8D] h-[3vw] text-white">
                        <th className='text-[1.2vw] font-bold'>S.No:</th>
                        <th className='text-[1.2vw] font-bold'>Date</th>
                        <th className='text-[1.2vw] font-bold'>Name</th>
                        <th className='text-[1.2vw] font-bold'>Email</th>
                        <th className='text-[1.2vw] font-bold'>Review</th>
                        <th className='text-[1.2vw] font-bold'>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#DDDDDD]"} h-[3vw] text-black`}>
                            <td className='text-[1.2vw] text-center'>{index + 1}</td>
                            <td className='text-[1.2vw] text-center'>{item.date}</td>
                            <td className='text-[1.2vw] text-center'>{item.name}</td>
                            <td className='text-[1.2vw] text-center'>{item.email}</td>
                            <td className='text-[1.2vw] text-center'>{item.review}</td>
                            <td className='text-[1.2vw] text-center'>
                                <div className="flex">
                                    {[...Array(item.ratings)].map((_, i) => (
                                        <img key={i} src={Star} className='h-[1.2vw]' alt="" />
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedbackTable;
