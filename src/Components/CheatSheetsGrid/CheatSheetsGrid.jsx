import React from 'react';
import GridItem from '../GridItem/GridItem';

const CheatSheetsGrid = () => {
    return (<>
        <h1 className='font-questrial mx-auto text-center text-3xl text-white font-bold mt-12'>CheatSheets</h1>
        <div className="flex flex-wrap mx-auto my-8">
            <GridItem />
            <GridItem />
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