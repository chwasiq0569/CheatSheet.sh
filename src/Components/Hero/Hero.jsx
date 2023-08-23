import React from 'react';
import PlusIcon from "../../assets/PlusIcon.svg"
import "./hero.css"
import HeroPattren from "../../assets/HeroPattren.svg"
import BadgeImg from "../../assets/Badge.svg"

const Hero = () => {
    return ( <div className='heroContainer w-full max-w-screen-lg mx-auto py-4 text-center flex flex-col'>
    <div className='sections w-full max-w-screen-lg mx-auto py-4 text-center flex items-center'> 
            <img className='mt-36 ml-40 w-16' src={PlusIcon} alt='plus_icon' />
            <div className="w-3/6 mx-auto " > 
                <h1 className='font-questrial text-6xl font-black text-white'>Speed up your workflow</h1>
            </div>
            <img className='mb-36 mr-40' src={PlusIcon} alt='plus_icon' />
    </div>
    <div className='sections'>
        <img className="badge" src={BadgeImg} alt="badge_img" />
        <img src={HeroPattren} alt='plus_icon' />
    </div>
    </div> );
}
 
export default Hero;