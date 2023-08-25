import React from 'react';
import Image from 'next/image';
import img1 from '../assets/1 Social logo.png'
import { IoIosNotificationsOutline } from 'react-icons/Io';




const Header = () => {
    return (
        <div className='b justify-between pl-[240px] py-4 pr-4 flex items-center bg-white '>
           <div className=''>
            <input className='px-4 py-4 bg-white lg:w-[700px]  text-gray-500' type="search" placeholder='search' name="" id="" />
           </div>


           <div className='flex items-center gap-4'>
           <div>
    <span><IoIosNotificationsOutline/> </span>
</div>

      <div>

    <Image className='rounded-full h-4 w-4 ' src={img1} alt=''/>
     </div>
           </div>


        </div>
    );
};

export default Header;