import React from 'react';
import { HiHashtag } from "react-icons/hi";
import { FaHeartbeat } from "react-icons/fa";
import './navbar.css'
const Welcome = () => {
    return (
        <div className='p-2 bg-slate-100 text-[#4e311f] welcome font-semibold text-sm'> 
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className='lg:flex items-center gap-1 font-semibold hidden'>
                    <HiHashtag className="text-lg" />
                    <p className=''>Welcome to our Kiddo park..!!</p>
                </div>
                <div className='flex lg:mr-0 mx-auto'>
                    <div className='flex items-center gap-2'><p>Wish List</p><FaHeartbeat className="text-lg text-red-400" /></div>
                    <div className="divider divider-horizontal"></div>
                     <div>USD $</div>
                    <div className="divider divider-horizontal"></div>
                    <div className='flex'><span>English</span></div>
                     
                </div>
           </div>
        </div>
    );
};

export default Welcome;