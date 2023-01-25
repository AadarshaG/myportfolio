import React from 'react'
import {NavLink} from 'react-router-dom'
import {GiSaveArrow} from 'react-icons/gi'

import Logo from '../../img/index.png'
import BannerImg from '../../img/banner.jpg'
import { AnimatedTextCharacter } from './animatedtextcharacter'

export function Banner(){

    return(
        <div className="w-screen h-[100vh] relative">
            <img src={BannerImg} alt="" className="object-fill w-full h-[100vh]" />
            <div className="h-full w-full absolute inset-0 bg-cyan-600 bg-opacity-90"></div>
            <div className="max-w-[1240px] mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-3 lg:gap-x-10 absolute top-0 left-0">
                <div className=" flex flex-col lg:pl-[80px]">
                    <h1 className="text-3xl font-bold text-center lg:text-start text-pink-700 lg:text-7xl">
                        <AnimatedTextCharacter text="HI, I am Susan" />
                    </h1>
                    {/* <h1 className="text-3xl font-bold text-center lg:text-start text-pink-700 lg:text-7xl">Hi, I'm Susan</h1> */}
                    <h6 className="text-2xl font-semibold text-center lg:text-start text-green-500 lg:text-5xl py-3">React Developer</h6>
                    <p  className="text-0.5xl text-center lg:text-start text-white lg:text-xl px-[20px] lg:px-[0px]">
                        Having working experience as a React Developer, I would like to pursue my performance as a Software Developer and
                        lead the organization in the better performanace for the nation building.
                    </p>
                    <div className="flex gap-x-10 pt-5 justify-center items-center lg:justify-start ">
                        <a href='../../img/Resume.pdf' download>
                            <button className="bg-white w-[180px] h-[50px] rounded-full transition font-semibold flex gap-x-3 justify-center items-center hover:bg-cyan-700 hover:text-white">Download CV <GiSaveArrow size={20} className="" /></button>
                        </a>
                        {/* <button className="bg-white w-[180px] h-[50px] rounded-full transition font-semibold flex gap-x-3 justify-center items-center hover:bg-pink-700 hover:text-white">Download CV <GiSaveArrow size={20} className="" /></button> */}
                        <button className="bg-white w-[150px] h-[50px] rounded-full transition font-semibold hover:bg-cyan-700 hover:text-white"><NavLink to={"/portfolio"}>View Portfolio</NavLink></button>
                    </div>
                </div>
                <div className="mx-auto">
                    <img src={Logo} alt="" className="mx-auto" />
                </div>
            </div>
            
        </div>
    )
}