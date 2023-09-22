import React from 'react'
import LogoImg from "../../assets/Logo.svg"
import LogoBlackImg from "../../assets/LogoBlack.svg"
import "./cheatsheet.css"
import data from '../../cheatsheet.json';
import CodeEditor from '../CodeEditor/CodeEditor';
import Navbar from '../Navbar/Navbar';

const CheatSheet = () => {

    const [cheatSheet, setCheatSheet] = React.useState();

    React.useEffect(() => {
        data.map(items => items.python).map(col => col.cols).map(col => console.log('col', col))
        console.log(`bg-[${data[0]?.theme_color}]`)
        // .map(row => row.map(rowContent => rowContent.rows.map(rowContentData => console.log(rowContentData.code))))
    }, [])
    return (<div className='h-full gradient-bg w-full min-h-full gradient-bg mx-auto flex flex-col items-center justify-center px-2'>
        <Navbar />
        <div className={"w-full max-w-screen-lg mx-auto my-8 flex-col items-center bg-rose-50  border-b-8 " + " border-[" + data[0].theme_color + "] "}>
            {/* bg-${[cheatSheet.theme_color]}  */}
            <div className={"w-full px-8 py-6 " + " bg-[" + data[0]?.theme_color + "] " + "text-[" + data[0]?.text_color + "] "}>
                <div className='flex items-center'>
                    <img className='w-10' src={data[0].colors_type === 'dark' ? LogoBlackImg : LogoImg} alt="Logo_Img" /> <span className={"mx-2 font-questrial font-semibold " + "text=[" + data[0].colors_type + "] "}>CheatSheet.sh</span>
                </div>
                <div className='flex items-center justify-between my-4 '>
                    <p p className='font-questrial text-2xl font-bold'>Python Cheatsheet</p>
                    <img className='w-10' src={LogoImg} alt="Logo_Img" />
                </div>
                <p className='font-Poppins text-sm mt-12'>Find online Cheatsheets at <span className='underline'>www.cheatsheet.sh</span></p>
            </div>
            <div className='flex px-4'>
                {
                    data.map(items => items.python).map(cols => cols.cols).map(col => col.map((col, index) => {
                        let column = col;
                        return <div className={index == 1 ? "w-1/3" : "w-1/3"}>
                            {
                                column.rows.map(row => <div className='mx-2 my-4'><div className='flex'>
                                    <p className={"font-questrial text-sm px-4 py-2 font-bold" + " bg-[" + data[0]?.theme_color + "] " + "text-[" + data[0]?.text_color + "] "}>&gt;</p>
                                    <p className='w-full py-2 px-4  font-questrial text-sm text-white bg-black'>Intro</p>
                                </div>
                                    <div dangerouslySetInnerHTML={{ __html: row.content }} className='font-questrial w-full bg-white p-2 text-xs'>
                                    </div>
                                    {
                                        row.code && <CodeEditor />
                                    }
                                </div>)
                            }
                        </div>
                    }))
                }
            </div>

        </div>


    </div >);
}
// .map((cols, index) => <div className={index == 0 ? "w-1/3 mt-48 ml-4" : "w-1/3 ml-4 mt-2"}>
//                     <div className='flex'>
//                         <p className='font-questrial text-lg text-white px-4 py-2 bg-lime-600'>&gt;</p>
//                         <p className='w-full py-2 px-4  font-questrial text-lg text-white bg-black'>Intro</p>
//                     </div>
//                 </div>)
export default CheatSheet;