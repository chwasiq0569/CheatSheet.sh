import React from 'react'
import LogoImg from "../../assets/Logo.svg"

const Footer = () => {
    return (<div className='min-h-[60vh] w-full flex mx-auto justify-center  bg-[#051038] py-12 '>
        <div className='w-full min-h-full max-w-screen-lg flex'>
            <div className="flex w-1/2 h-full flex-col font-questrial cursor-pointer justify-between">
                <div className='flex items-center mt-5'>
                    <img className='w-10' src={LogoImg} alt="Logo_Img" />
                    <p className='mx-2 font-bold text-white'>CheatSheets.sh</p> <p className='text-white'>By</p><p className='bg-[#1D4ED8] text-sm text-white p-1 rounded mx-2 text-bold'>@Wasiq Abdullah</p>
                </div>
                <div className='flex'>
                    <p className='mx-3 text-[#9CA3AF] cursor-pointer hover:text-white hover:transition-all'>LinkedIn</p>
                    <p className='mx-3 text-[#9CA3AF] cursor-pointer hover:text-white hover:transition-all'>Instagram</p>
                    <p className='mx-3 text-[#9CA3AF] cursor-pointer hover:text-white hover:transition-all'>Youtube</p>
                </div>
            </div>
            <div className="flex w-1/2 flex-col justify-between">
                <div className="flex flex-col h-1/4">
                    <div className='flex items-center'>
                        <p className='text-5xl font-bold tracking-tighter	 text-white font-Poppins'>Collaborate</p>
                        <p className='mx-2 text-2xl text-white font-questrial mt-1'>With Us</p>
                    </div>
                    <p className='font-questrial text-white mr-14 my-4'>Our entrepreneurial community, co-investors business partners, and staff for another year well spent.</p>
                </div>
                <h1 className='text-2xl text-white cursor-pointer font-questrial underline decoration-wavy hover:text-[1.75rem] hover:transition-all'>
                    Join CheatSheet.sh
                </h1>
            </div>
        </div>
    </div>);
}

export default Footer;