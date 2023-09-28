import React from 'react'
import CheatSheetsGrid from '../../Components/CheatSheetsGrid/CheatSheetsGrid';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Hero2 from '../../Components/Hero/Hero2';
import Navbar from '../../Components/Navbar/Navbar';

import CodeEditor from '../../Components/CodeEditor/CodeEditor';


const HomePage = () => {
    const [code, setCode] = React.useState();


    return (<div className='min-h-full gradient-bg mx-auto flex flex-col
    items-center justify-center px-2'>
        <div className='w-full min-h-full max-w-screen-lg '>
            <Navbar />
            <Hero2 />
            <CheatSheetsGrid />
        </div>
        <Footer />
    </div>);
}

export default HomePage;