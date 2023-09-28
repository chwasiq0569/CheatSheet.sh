import React from 'react';
import LogoImg from "../../assets/Logo.svg"
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })

    const [openMenu, setOpenMenu] = React.useState(false);



    return (<div className='w-full max-w-screen-lg flex items-center mx-auto justify-between py-4'>
        <div className='flex items-center'>
            <img className='w-10' src={LogoImg} alt="Logo_Img" /><p>CheatSheet</p>
        </div>
        <ul className='hidden sm:flex cursor-pointer'>
            <li className='mx-3 text-[#9CA3AF]'>CheatSheets</li>
            <li className='mx-3 text-[#9CA3AF]'>Best Practices</li>
            <li className='mx-3 text-[#9CA3AF]'>Interview Practices</li>
            <li className='mx-3 text-[#9CA3AF]'>Videos</li>
        </ul>
        <div className='hidden sm:flex items-center text-[#9CA3AF] hover:bg-gray-900 px-2 py-1 rounded cursor-pointer ease-in	duration-100'>
            <AiOutlineSearch color="#9CA3AF" size={18} />
            <p className='mr-4 ml-3'>X</p>
            <p className='mr-1'>K</p>
        </div>
        {isMobile && <p onClick={() => setOpenMenu(true)} className='sm:hidden text-white'>MENU</p>}
        {
            openMenu && <div className='m-0 p-0 absolute left-0 top-0 z-10 w-full min-h-full bg-white flex flex-col justify-center items-center'>
                <p onClick={() => setOpenMenu(false)} className='sm:hidden absolute top-5 right-7'>X</p>
                <ul className='w-fit flex flex-col cursor-pointer items-center'>
                    <li className='font-questrial text-lg my-2 text-[#9CA3AF]'>CheatSheets</li>
                    <li className='font-questrial text-lg my-2 text-[#9CA3AF]'>Best Practices</li>
                    <li className='font-questrial text-lg my-2 text-[#9CA3AF]'>Interview Practices</li>
                    <li className='font-questrial text-lg my-2 text-[#9CA3AF]'>Videos</li>
                </ul>
            </div>
        }

    </div>);
}

export default Navbar;