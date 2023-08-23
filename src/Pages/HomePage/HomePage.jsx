import React from 'react'
import CheatSheetsGrid from '../../Components/CheatSheetsGrid/CheatSheetsGrid';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
const HomePage = () => {
    return (<div className='min-h-screen gradient-bg mx-auto flex justify-center px-2'>
        <div className='w-full max-w-screen-lg'>
            <Navbar />
            <Hero />
            <CheatSheetsGrid />
        </div>
    </div>);
}

export default HomePage;