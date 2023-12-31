import React from 'react';
import GridItem from '../GridItem/GridItem';
import { Link } from 'react-router-dom';

const CheatSheetsGrid = () => {
    return (<>
        <h1 className='font-questrial mx-auto text-center text-3xl text-white font-bold mt-24'>CheatSheets</h1>
        <div className="flex flex-wrap mx-auto my-8">
            <Link style={{ all: 'unset' }} to="/cheatsheet" state={{ cheatsheet: "python" }}><GridItem /></Link>
            <Link style={{ all: 'unset' }} to="/cheatsheet" state={{ cheatsheet: "java" }}><GridItem /></Link>
            <GridItem />
            <GridItem />
        </div>
        <h3 className='font-questrial mx-auto text-center text-2xl text-white font-bold my-12'>Languages</h3>
        <div className="flex flex-wrap mx-auto my-8">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
        <h3 className='font-questrial mx-auto text-center text-2xl text-white font-bold my-12'>Frameworks</h3>
        <div className="flex flex-wrap mx-auto my-8">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    </>);
}

export default CheatSheetsGrid;