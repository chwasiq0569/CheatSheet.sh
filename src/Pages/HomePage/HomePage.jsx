import React from 'react'
import CheatSheetsGrid from '../../Components/CheatSheetsGrid/CheatSheetsGrid';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
const HomePage = () => {
    return (<div className='min-h-full gradient-bg mx-auto flex flex-col
    items-center justify-center px-2 '>
        <div className='w-full border-4 border-solid border-[#fffff] min-h-full max-w-screen-lg'>
            <Navbar />
            <Hero />
            <CheatSheetsGrid />
        </div>
        <Footer />
    </div>);
}

export default HomePage;