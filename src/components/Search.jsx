import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import ReactVisibilitySensor from "react-visibility-sensor";

const Search = () => {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
            left: "-44rem",
        },
        false: {
            left: "-50rem",
        },
    };
    const redimg = {
        true: {
            left: "18rem",
        },
        false: {
            left: "16rem",
        },
    };
    const musicimg = {
        true: {
            left: "2rem",
        },
        false: {
            left: "6rem",
        },
    };
    return (
        <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem]
    mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem] '>
            <div className='left flex-1'>
                <motion.img
                    variants={bg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1,
                        type: "ease-out",
                    }} src={process.env.PUBLIC_URL + '/img/backgraphics.png'} alt="" className='absolute top-[22rem] left-[-47rem]' />
                <motion.img src={process.env.PUBLIC_URL + '/img/d1.png'} alt="" className='w-[16rem] top-[26rem] absolute' />
                <motion.img src={process.env.PUBLIC_URL + '/img/d2.png'} alt="" className='w-[9rem] top-[32.7rem] left-[7rem] absolute' />
                <motion.img
                    variants={redimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1.2,
                        type: "ease-out",
                    }} src={process.env.PUBLIC_URL + '/img/d3.png'} alt="" className='w-[9rem] top-[33rem] left-[17rem] absolute' />
                <motion.img
                    variants={musicimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1,
                        type: "ease-out",
                    }} src={process.env.PUBLIC_URL + '/img/d4.png'} alt="" className='w-[17rem] top-[50rem] left-[2rem] absolute' />
            </div>
            <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
                <div className="searchbar flex flex-start w-[100%]">
                    <input type="text" placeholder='Enter The Keyword Or URL'
                        className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]' />
                    <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                        <img src={process.env.PUBLIC_URL + '/img/search.png'} alt=""
                            className='w-[1.5rem]' />
                    </div>
                </div>
                <div className="tild flex justify-start mt-7 items-center w-[100%]">
                    <img
                        src={process.env.PUBLIC_URL + "/img/Path 318.png"}
                        alt=""
                        className="w-[5rem]"
                    />
                </div>

                <div className="detail flex flex-col mt-5 text-4xl">
                    <span>Search Music by</span>
                    <span>
                        <b>Name or Direct URL</b>
                    </span>
                    <span className="text-sm mt-3 text-[#4D586A]">
                        Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
                        eget. Vestibulum ullamcorper <br /> volutpat varius.
                    </span>
                </div>
                <ReactVisibilitySensor onChange={(isVisible) => { setElementIsVisible(isVisible) }}>
                    <MusicPlayer />
                </ReactVisibilitySensor>
            </div>
        </div>
    )
}

export default Search
