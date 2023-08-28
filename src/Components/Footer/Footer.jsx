import React from 'react'
import LogoImg from "../../assets/Logo.svg"

const Footer = () => {
    return (<div className='min-h-[60vh] w-full flex mx-auto justify-center  bg-[#051038] py-12 '>
        <div className='w-full min-h-full max-w-screen-lg flex border-2'>
            <div className="flex w-1/2 h-full flex-col font-questrial cursor-pointer border-2 justify-between">
                <div className='flex items-center'>
                    <img className='w-10' src={LogoImg} alt="Logo_Img" />
                    <p className='mx-2 font-bold text-white'>CheatSheets.sh</p> <p className='text-white'>By</p><p className='bg-[#1D4ED8] text-sm text-white p-1 rounded mx-2 text-bold'>@Wasiq Abdullah</p>
                </div>
                <div className='flex'>
                    <p className='mx-3 text-[#9CA3AF] cursor-pointer'>Terms</p>
                    <p className='mx-3 text-[#9CA3AF] cursor-pointer'>Privacy</p>
                </div>
            </div>
            <div className="flex items-start border-2 w-1/2">
                <p className='mx-3 text-4xl font-extrabold text-white cursor-pointer font-questrial'>Collaborate With Us</p>
            </div>
        </div>
    </div>);
}

export default Footer;