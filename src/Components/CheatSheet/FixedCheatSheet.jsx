import React from 'react';
import styles from "./fixedcheatsheet.module.css"
import LogoImg from "../../assets/Logo.svg"
import CodeEditor from '../CodeEditor/CodeEditor';
import * as htmlToImage from 'html-to-image';
import Navbar from '../Navbar/Navbar';
import data from '../../cheatsheet.json';
import Footer from '../Footer/Footer';
import download from 'downloadjs'
import { useLocation } from 'react-router-dom'

const FixedCheatSheet = () => {
    const [svgImg, setSvgImg] = React.useState("")
    const svgContent = decodeURIComponent(svgImg.split(",")[1]);
    const openingTagIndex = decodeURIComponent(svgImg.split(",")[1]).indexOf("<svg");
    const [loading, setLoading] = React.useState(false);
    const location = useLocation()


    console.log("SGG214", svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))

    data['python']?.python.cols.map(row => row.rows.map(data => console.log("DATA", data)))
    React.useEffect(() => {
        window.scrollTo(0, 0)

        setLoading(true)
        htmlToImage.toSvg(document.getElementById('testId'))
            .then(function (dataUrl) {
                console.log('dataUrl', dataUrl)
                const svgContent = decodeURIComponent(dataUrl.split(",")[1]);
                const openingTagIndex = decodeURIComponent(dataUrl.split(",")[1]).indexOf("<svg");
                console.log('decodeURIComponent', svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))
                // download(dataUrl, 'my-node.svg');
                setLoading(false)
                setSvgImg(dataUrl)
            });
    }, [])

    const downloadCheatSheet = () => {
        htmlToImage.toSvg(document.getElementById('testId'))
            .then(function (dataUrl) {
                const svgContent = decodeURIComponent(dataUrl.split(",")[1]);
                const openingTagIndex = decodeURIComponent(dataUrl.split(",")[1]).indexOf("<svg");
                console.log('decodeURIComponent', svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))
                download(dataUrl, 'my-node.svg');
                setSvgImg(dataUrl)
            });
    }
    return (
        <>
            <Navbar />
            {/* <button style={{ border: '2px solid red', color: "red" }} onClick={() => {
                htmlToImage.toSvg(document.getElementById('testId'))
                    .then(function (dataUrl) {
                        console.log('dataUrl', dataUrl)
                        const svgContent = decodeURIComponent(dataUrl.split(",")[1]);
                        const openingTagIndex = decodeURIComponent(dataUrl.split(",")[1]).indexOf("<svg");
                        console.log('decodeURIComponent', svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5))
                        download(dataUrl, 'my-node.svg');
                        setSvgImg(dataUrl)
                    });
            }}>DOWNLOAD</button> */}

            <div className={styles.cheatSheet_outer_container}>
                {svgImg && <div className={styles.buttons_container}>
                    <button>All CheatSheets</button>
                    <button>Share</button>
                    <button onClick={downloadCheatSheet}>Download</button>
                </div>}
                {
                    !svgImg ? <div id='testId' className={styles.cheatsheet_container}>
                        <div className={styles.cheatsheet_header}>
                            <div className={styles.header_left_side}>
                                <div className={styles.logo_container}>
                                    <img src={LogoImg} alt='logo_img' />
                                    <span>CheatSheet.sh</span>
                                </div>
                                <p className={styles.cheatsheet_heading}>{data[location.state.cheatsheet].cheatsheet} CheatSheet</p>
                                <p className={styles.headline}>Find online Cheatsheets at www.cheatsheet.sh</p>
                            </div>
                            <div className={styles.header_right_side}>
                                <img src={LogoImg} alt='logo_img' />
                            </div>
                        </div>
                        <div className={styles.stylesheet_content_container}>
                            {
                                data[location.state.cheatsheet][location.state.cheatsheet].cols.map(col => {
                                    let column = col;
                                    return <div className={styles.col}>
                                        {
                                            column.rows.map(row => <div className={styles.cheat_item}><div className={styles.cheat_item_header}>
                                                <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                            </div>
                                                <div dangerouslySetInnerHTML={{ __html: row.content }} className={styles.cheat_item_text}>
                                                </div>
                                                {/* <div className={styles.cheat_item_text}>
                                            <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                            </p>
                                        </div> */}
                                                {
                                                    row.code && <CodeEditor />
                                                }
                                            </div>)

                                        }
                                    </div>
                                })
                            }
                            {/* {

                                data['python'].python.map(cols => cols.cols).map(col => col.map((col, index) => {
                                    let column = col;
                                    return <div className={styles.col}>
                                        {
                                            column.rows.map(row => <div className={styles.cheat_item}><div className={styles.cheat_item_header}>
                                                <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                            </div>
                                                <div dangerouslySetInnerHTML={{ __html: row.content }} className={styles.cheat_item_text}>
                                                </div>
                                                {
                                                    row.code && <CodeEditor />
                                                }
                                            </div>)
                                        }
                                    </div>
                                }))
                            } */}

                            {/* <div className={styles.col}>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                                <div className={styles.cheat_item}>
                                    <div className={styles.cheat_item_header}>
                                        <p className={styles.header_left}>&gt;</p><p className={styles.header_right}>Intro</p>
                                    </div>
                                    <div className={styles.cheat_item_text}>
                                        <p>Conda is an application for data science package management and environment management. It is primarily used for managing Python packages, though it also supports R, Ruby, Lua, Scala, Java, JavaScript, C, C++, and Fortran packages
                                        </p>
                                    </div>
                                    <CodeEditor />
                                </div>
                            </div> */}
                        </div>
                    </div> : <svg xmlns="http://www.w3.org/2000/svg" viewBox={new DOMParser().parseFromString(svgContent, "image/svg+xml").documentElement.getAttribute('viewBox')} preserveAspectRatio="xMidYMid meet" dangerouslySetInnerHTML={{
                        __html: svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5)
                    }}>
                    </svg>
                }
            </div>
            <Footer />
            {/* {svgImg && <svg xmlns="http://www.w3.org/2000/svg" viewBox={new DOMParser().parseFromString(svgContent, "image/svg+xml").documentElement.getAttribute('viewBox')} preserveAspectRatio="xMidYMid meet" dangerouslySetInnerHTML={{
                __html: svgContent.slice(0, openingTagIndex + 5) + " preserveAspectRatio='xMidYMid meet' " + svgContent.slice(openingTagIndex + 5)
            }}>
            </svg>} */}
        </>);
}

export default FixedCheatSheet;