import React from 'react'
const GridItem = () => {
    return (<div className="min-w-[14rem] my-4 p-4  flex flex-1 h-56 flex-col justify-between border-r-4 border-solid border-[#051038] cursor-pointer">
        <div>
            <p className='font-questrial text-neutral-400 font-bold'>2024</p>
            <h1 className='font-questrial my-2 text-lg text-white font-bold'>ReactJS CheatSheet</h1>
        </div>
        <p className='font-questrial text-sm text-neutral-400 font-medium'>cheatsheet.sh</p>
    </div>);
}

export default GridItem;