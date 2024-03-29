import React, { useState } from 'react';
import { MagnifyingGlass, Smile, UpDown, UserToNetwork, Users } from '../assets/icons';
import { LogoWithName } from '../assets/img';
import Card from '../components/Card';
import Table from '../components/Table';

const Home = () => {
    const [selectedPage, setSelectedPage] = useState(1);


    const handlePageSelect = (pageIndex) => {
        setSelectedPage(pageIndex);
    };

    const paginationButtons = [];
    for (let i = 1; i <= 5; i++) {
        paginationButtons.push(
            <button key={i} onClick={() => handlePageSelect(i)} className={`text-[1.1vw] font-bold ${selectedPage === i ? 'bg-white w-[2vw] h-[2vw] rounded-full' : 'text-black'}`}>
                {i}
            </button>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between h-20 px-20 ">
                <img src={LogoWithName} className='h-12' alt="Logo" />
                <div className="flex gap-8">
                    <h3 className="font-serif text-3xl text-black">Welcome</h3>
                    <img src={Smile} className='h-10' alt="Smile" />
                </div>
            </div>
            <div className="flex px-8 py-4 justify-evenly">
                <Card color={"#6B4692"} title="USERS INTERACTION COUNTS" number={1000} icon={Users} />
                <Card color="#EEB46F" title="no of user view count" number={700} icon={MagnifyingGlass} />
                <Card color="#00A912" title="today user interaction counts" number={1700} icon={UserToNetwork} />
                <Card color="#495faf" title="your ranking" number={"05"} icon={UpDown} />
            </div>
            <div>
                <Table />
            </div>
            <div className="sticky right-0 flex justify-end gap-6 pr-8 mt-4 pagination bottom-10">
                <button>
                    <h5 className='text-[1.4vw] font-bold'>NEXT</h5>
                </button>
                {paginationButtons}
                <button>
                    <h5 className='text-[1.4vw] font-bold'>{">"}</h5>
                </button>
            </div>
        </div>
    );
};

export default Home;
