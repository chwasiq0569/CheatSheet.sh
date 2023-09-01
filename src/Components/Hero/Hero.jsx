import React from 'react';
import PlusIcon from "../../assets/PlusIcon.svg"
import "./hero.css"
import HeroPattren from "../../assets/HeroPattren.svg"
import BadgeImg from "../../assets/Badge.svg"

const Hero = () => {
    return (<div className='heroContainer w-full max-w-screen-lg mx-auto py-4 text-center flex flex-col'>
        <div className='sections w-full max-w-screen-lg mx-auto py-4 text-center flex items-center'>
            <img className='mt-32 md:mt-36 ml-40 w-12 lg:w-16' src={PlusIcon} alt='plus_icon' />
            <div className="w-3/6 mx-auto" >
                <h1 className='font-questrial text-4xl md:text-6xl font-black text-white'>Speed up your workflow</h1>
            </div>
            <img className='w-16 lg:w-auto mb-32 md:mb-36 mr-40' src={PlusIcon} alt='plus_icon' />
        </div>
        <div className='sections'>
            <img className="badge" src={BadgeImg} alt="badge_img" />
            <img src={HeroPattren} alt='plus_icon' />
        </div>
    </div>);
}

export default Hero;