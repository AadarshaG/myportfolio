import React, { useState } from 'react'
import Logo from '../../img/index.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {NavLink} from 'react-router-dom'

import './style.css'

export function Header(){

    const [nav, setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }

    return(
        <div className="w-screen  h-[50px] z-10 fixed bg-cyan-700 drop-shadow-lg">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center h-full w-full">
                <div className="">
                    <img className="w-full h-[40px]" src={Logo} alt="" />
                </div>
                <ul className=" hidden md:flex text-white">
                    <li className="px-3"><NavLink to={"/"}>Home</NavLink> </li>
                    <li className="px-3"><NavLink to={"/about"}>About</NavLink></li>
                    <li className="px-3"><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                    <li className="px-3"><NavLink to={"/skills"}>Skills</NavLink></li>
                    <li className="px-3"><NavLink to={"/experience"}>Experience</NavLink></li>
                    <li className="px-3"><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
                <div className="md:hidden pr-7" onClick={handleClick}>
                   { nav ?  <GrClose size={25} /> :  <GiHamburgerMenu size={25} /> }
                </div>
            </div>
            <ul className={ !nav ? "hidden" : "absolute flex flex-col bg-cyan-600 h-screen w-full px-10 text-white"}>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/"}>Home</NavLink></li>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/about"}>About</NavLink></li>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/skills"}>Skills</NavLink></li>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/experience"}>Experience</NavLink></li>
                <li className="py-3 border-b-2 w-full"><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </div>
    )
}