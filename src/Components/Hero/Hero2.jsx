import React from 'react';
import BadgeImg from "../../assets/Badge.svg"
import "./hero.css"

const Hero2 = () => {
    return (<div className='heroContainer w-full max-w-screen-lg mx-auto py-8 text-center flex flex-col items-center '>
        <h1 className='md:w-1/1 w-full  leading-tight sm:text-center font-drukwidebold text-3xl px-2 md:text-5xl font-black text-white mt-10'>Speed up your workflow using CheatSheets</h1>
        <p className='text-lg font-questrial text-[#9CA3AF] py-8 px-8'>cheatsheet.sh is an effort to create cheatsheets, guides and other educational content to help guide developers in picking up a path and guide their learnings.</p>
        <img className="badge" src={BadgeImg} alt="badge_img" />
    </div>);
}

export default Hero2;