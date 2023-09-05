import React from 'react';
import PlusIcon from "../../assets/PlusIcon.svg"
import "./hero.css"
import HeroPattren from "../../assets/HeroPattren.svg"
import BadgeImg from "../../assets/Badge.svg"
import GoDownIcon from "../../assets/GoDown.png"

const Hero = () => {
    return (<div className='border-2 heroContainer w-full max-w-screen-lg mx-auto py-4 text-center flex flex-col'>
        <div className='sections w-full max-w-screen-lg mx-auto py-4 text-center flex items-center flex-col sm:flex-row border-2 '>
            <img className='hidden sm:block mt-32 md:mt-36 ml-40 w-12 lg:w-16' src={PlusIcon} alt='plus_icon' />
            <div className="px-4 w-1/1 sm:w-3/6 sm:mx-auto" >
                <h1 className='leading-tight text-left sm:text-center font-questrial text-5xl md:text-6xl font-black text-white'>Speed up your workflow</h1>
            </div>
            <img className='hidden sm:block w-16 lg:w-auto mb-32 md:mb-36 mr-40' src={PlusIcon} alt='plus_icon' />
            <p className='block sm:hidden px-4 py-3 font-questrial text-white text-lg text-left'>Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.</p>
            <button className='block sm:hidden mx-4 my-2 mr-auto bg-[#2C5AD2] px-8 py-4 text-white font-questrial text-xl tracking-wide rounded-lg'>Explore</button>
            <img className="block sm:hidden badgeMobile mr-auto m-4" src={BadgeImg} alt="badge_img" />
            <img className="block sm:hidden border-2 absolute bottom-0" src={GoDownIcon} alt="GoDownIcon_img" />
        </div>
        <div className='hidden sm:block sections'>
            <img className="badge" src={BadgeImg} alt="badge_img" />
            <img src={HeroPattren} alt='plus_icon' />
        </div>
    </div>);
}

export default Hero;