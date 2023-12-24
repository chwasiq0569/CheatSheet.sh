import React from 'react'
import LogoImg from "../../assets/Logo.svg"
import LogoBlackImg from "../../assets/LogoBlack.svg"
import "./cheatsheet.css"
import data from '../../cheatsheet.json';
import CodeEditor from '../CodeEditor/CodeEditor';
import Navbar from '../Navbar/Navbar';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs'

const CheatSheet = () => {
    const [svgImg, setSvgImg] = React.useState("")
    const [cheatSheet, setCheatSheet] = React.useState();
    const [datas, setDatas] = React.useState([])
    const FileSaver =
        React.useEffect(() => {
            let cols = data.map(items => items.python).map(data => data.cols).map(col => col)
            if (cols) setDatas(cols)
            console.log("COLS", cols)
        }, [data])

    // React.useEffect(() => {
    // }, [svgImg])
    const svgContent = decodeURIComponent(svgImg.split(",")[1]);
    const openingTagIndex = decodeURIComponent(svgImg.split(",")[1]).indexOf("<svg");

    console.log("SGG214", svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))
    var node = document.getElementById('testId');
    // htmlToImage.toPng(node)
    //     .then(function (dataUrl) {
    //         var img = new Image();
    //         img.src = dataUrl;
    //         document.body.appendChild(img);
    //     })
    //     .catch(function (error) {
    //         console.error('oops, something went wrong!', error);
    //     });
    return (<div className='h-full gradient-bg w-full min-h-full gradient-bg mx-auto flex flex-col items-center justify-center px-2 '>
        <Navbar />
        <button style={{ border: '2px solid red' }} onClick={() => {
            // htmlToImage.toCanvas(document.getElementById('testId'))
            //     .then(function (dataUrl) {
            //         console.log('dataUrl', dataUrl)
            //         // download(dataUrl, 'my-node.svg');
            //         setSvgImg(dataUrl)
            //     });
            htmlToImage.toSvg(document.getElementById('testId'))
                .then(function (dataUrl) {
                    console.log('dataUrl', dataUrl)
                    const svgContent = decodeURIComponent(dataUrl.split(",")[1]);
                    const openingTagIndex = decodeURIComponent(dataUrl.split(",")[1]).indexOf("<svg");
                    console.log('decodeURIComponent', svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))
                    download(dataUrl, 'my-node.svg');
                    setSvgImg(dataUrl)
                });
        }}>DOWNLOAD</button>
        {/* <CheatSheetSVG datas={datas} /> */}
        {/* <GenericPdfDownloader rootElementId="pdf" downloadFileName="FAAF" /> */}
        <div id='testId' className={'w-full h-full mx-auto my-8  flex-col items-center bg-rose-50 border-b-8 ' + ' border-[' + data[0].theme_color + '] '}>
            <div className={'w-full px-8 py-6 ' + ' bg-[' + data[0]?.theme_color + '] ' + ' text-[' + data[0]?.text_color + '] '}>
                <div className='flex items-center'>
                    <img className='w-10' src={data[0].colors_type === 'dark' ? LogoBlackImg : LogoImg} alt='Logo_Img' /> <span className={'mx-2 font-questrial font-semibold ' + 'text-[' + data[0].colors_type + '] '}>CheatSheet.sh</span>
                </div>
                <div className='flex items-center justify-between my-4 '>
                    <p className='font-questrial text-2xl font-bold'>Python Cheatsheet</p>
                    <img className='w-10' src={LogoImg} alt='Logo_Img' />
                </div>
                <p className='font-Poppins text-sm mt-12'>Find online Cheatsheets at <span className='underline'>www.cheatsheet.sh</span></p>
            </div>
            <div className='flex px-4'>
                {
                    data.map(items => items.python).map(cols => cols.cols).map(col => col.map((col, index) => {
                        let column = col;
                        return <div className={index == 1 ? 'w-1/3' : 'w-1/3'}>
                            {
                                column.rows.map(row => <div className='mx-2 my-4'><div className='flex'>
                                    <p className={'font-questrial text-sm px-4 py-2 font-bold' + ' bg-[' + data[0]?.theme_color + '] ' + 'text-[' + data[0]?.text_color + '] '}>&gt;</p>
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
            <br />
        </div>
        <p style={{ color: 'red' }}>jsfakljasfkljklasfjklasjf</p>
        {/* {svgImg && <Document>
            <Page>
                <Image src={decodeURIComponent(svgImg.split(",")[1])} />
            </Page>
        </Document>} */}
        {/* {svgImg && <img style={{ userSelect: "text" }} src={`data:image/svg+xml;${svgImg}`} alt="SVG Image" />} */}

        {/* {svgImg && <img src={svgImg} style={{ width: "100%", height: "100%", objectFit: "contain" }} />} */}
        {/* {svgImg && <ReactSVG style={{ width: '100vw', objectFit: 'contain' }} src={svgImg} />} */}

        {/* {svgImg && <div dangerouslySetInnerHTML={{ __html: decodeURIComponent(svgImg.split(",")[1]) }} />} */}
        {/* {svgImg && <embed type="image/svg+xml" src={svgImg} />} */}
        {/* {svgImg && <img
            src={`data:image/svg+xml;utf8,${decodeURIComponent(svgImg.split(",")[1])}`}
            alt="SVG Image"
            style={{ objectFit: 'contain' }}
        />} */}
        {/* <div
            dangerouslySetInnerHTML={{
                __html: svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5)
            }}
        ></div> */}
        {/* {<div dangerouslySetInnerHTML={{
            __html: decodeURIComponent(svgImg.split(",")[1])
        }}>
        </div>} */}
        {/* {svgImg && <svg xmlns="http://www.w3.org/2000/svg" width="1119" height="1148" viewBox="0 0 1119 1148" preserveAspectRatio="xMidYMid meet" dangerouslySetInnerHTML={{
            __html: svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5)
        }}>
        </svg>} */}
        {svgImg && <svg xmlns="http://www.w3.org/2000/svg" viewBox={new DOMParser().parseFromString(svgContent, "image/svg+xml").documentElement.getAttribute('viewBox')} preserveAspectRatio="xMidYMid meet" dangerouslySetInnerHTML={{
            __html: svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5)
        }}>
        </svg>}
        {/* <object style={{ minHeight: '100vh' }} data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object> */}

        {/* <div style={{ width: '100vw' }}
            dangerouslySetInnerHTML={{
                __html: svgImg
            }}
        /> */}
    </div >);
}
// .map((cols, index) => <div className={index == 0 ? "w-1/3 mt-48 ml-4" : "w-1/3 ml-4 mt-2"}>
//                     <div className='flex'>
//                         <p className='font-questrial text-lg text-white px-4 py-2 bg-lime-600'>&gt;</p>
//                         <p className='w-full py-2 px-4  font-questrial text-lg text-white bg-black'>Intro</p>
//                     </div>
//                 </div>)
export default CheatSheet;