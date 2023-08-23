import React from 'react'
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
const HomePage = () => {
    return (<div className='min-h-screen gradient-bg'>
        <Navbar />
        <Hero />
        <div class="flex flex-wrap">
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
            <div style={{ width: "250px", margin: "0 4rem", height: '250px', border: "2px solid red" }}>01</div>
        </div>
    </div>);
}

export default HomePage;