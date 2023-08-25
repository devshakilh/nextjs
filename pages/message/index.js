import React from 'react';
import { GrFormAdd } from 'react-icons/Gr';




const index = () => {
    return (
        <div className=' pl-[278px] bg-white'>


            <div className='flex pr-4 justify-between'>
                <h2 className='font-semibold'>Messages</h2>
                <p className='flex items-center gap-2 px-4 py-2 bg-[#0A208B] text-white'>
                    <span className='text-white'><GrFormAdd/></span> New Chat</p>
            </div>


            <div className='w-[1132px] h-[818px]'>

            </div>
        </div>
    );
};

export default index;