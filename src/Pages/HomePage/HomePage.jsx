import React from 'react'
import CheatSheetsGrid from '../../Components/CheatSheetsGrid/CheatSheetsGrid';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
const HomePage = () => {
    return (<div className='min-h-screen gradient-bg'>
        <Navbar />
        <Hero />
        <CheatSheetsGrid />
    </div>);
}

export default HomePage;