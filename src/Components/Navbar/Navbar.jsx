import React from 'react';
import LogoImg from "../../assets/Logo.svg"
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
    return (<div className='w-full max-w-screen-lg flex items-center mx-auto justify-between py-4'>
        <img className='w-10' src={LogoImg} alt="Logo_Img" />
        <ul className='hidden sm:flex cursor-pointer'>
            <li className='mx-3 text-[#9CA3AF]'>CheatSheets</li>
            <li className='mx-3 text-[#9CA3AF]'>Best Practices</li>
            <li className='mx-3 text-[#9CA3AF]'>Interview Practices</li>
            <li className='mx-3 text-[#9CA3AF]'>Videos</li>
        </ul>
        <div className='flex items-center text-[#9CA3AF] hover:bg-gray-900 px-2 py-1 rounded cursor-pointer ease-in	duration-100'>
            <AiOutlineSearch color="#9CA3AF" size={18} />
            <p className='mr-4 ml-3'>X</p>
            <p className='mr-1'>K</p>
        </div>
    </div>);
}

export default Navbar;