import React from 'react'
import LogoImg from "../../assets/Logo.svg"

const Footer = () => {
    return (<div className='w-full max-w-screen-lg flex items-center mx-auto justify-between py-8 '>
        <div className="flex items-center font-questrial cursor-pointer">
            <img className='w-10' src={LogoImg} alt="Logo_Img" />
            <p className='mx-2 font-bold text-white'>CheatSheets.sh</p> <p className='text-white'>By</p><p className='bg-[#1D4ED8] text-sm text-white p-1 rounded mx-2 text-bold'>@Wasiq Abdullah</p>
        </div>
        <div className="flex items-center">
            <p className='mx-3 text-[#9CA3AF] cursor-pointer'>Terms</p>
            <p className='mx-3 text-[#9CA3AF] cursor-pointer'>Privacy</p>
        </div>
    </div>);
}

export default Footer;