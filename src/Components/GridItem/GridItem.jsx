import React from 'react'
import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart';

const GridItem = () => {

    const [checked, setChecked] = React.useState(false);


    return (<div className="min-w-[14rem] my-4 p-4  flex flex-1 h-56 flex-col justify-between border-r-4 border-solid border-[#051038] cursor-pointer">
        <div>
            <div className='flex items-center justify-between'>
                <p className='font-questrial text-neutral-400 font-bold'>2024</p>
                <UseAnimations fillColor='#E03C31' checked={checked} animation={heart} size={30} strokeColor="#E03C31" onClick={() => {
                    // eslint-disable-next-line
                    setChecked(!checked)
                    console.log('additional onClick cb is working');
                }} />
            </div>
            <h1 className='font-questrial my-2 text-lg text-white font-bold'>ReactJS CheatSheet</h1>
        </div>
        <p className='font-questrial text-sm text-neutral-400 font-medium'>cheatsheet.sh</p>
    </div>);
}

export default GridItem;