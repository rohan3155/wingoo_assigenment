import { useState } from 'react';
import HistoryTable from '../components/HistoryTable'

const History = () => {
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
        <div className='flex flex-col  pt-[2vw] h-full'>
            <HistoryTable />
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
    )
}

export default History