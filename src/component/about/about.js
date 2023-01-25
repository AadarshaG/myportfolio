import React from 'react'

import Logo from '../../img/index.png'
import {GiSaveArrow} from 'react-icons/gi'

import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

export function About(){

    return(
        <div className="w-screen h-[100vh] bg-gray-800">
            <div className="max-w-[1240px] mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-5 lg:gap-x-10">
                <div className="flex-1 flex items-center justify-center">
                    <img src={Logo} alt="" className="md:w-11/12 h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl underline uppercase text-white">About <span className="text-gray-700">Me</span></p>
                    <p className="text-0.5xl lg:text-xl py-5 text-white px-[20px] text-center lg:text-start lg:px-[0px]">
                    Having working experience as a React Developer, I would like to pursue my performance as a Software Developer and
                    lead the organization in the better performanace for the nation building.
                    </p>
                         
                    <button className="bg-cyan-700 hover:bg-gray-600 text-white w-[180px] h-[50px] rounded-full transition font-semibold flex gap-x-3 justify-center items-center">Download CV <GiSaveArrow size={20} className="" /></button>

                    <div className="flex flex-wrap gap-6 py-3">
                        <BsFacebook size={25} />
                        <BsGithub size={25} />
                        <BsLinkedin size={25} />
                        <GrMail size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}