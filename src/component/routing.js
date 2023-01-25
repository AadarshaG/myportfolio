import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {About} from '../component/about/about'
import {Contact} from '../component/contact/contact'
import {Portfolio} from '../component/portfolio/portfolio'
import {Skills} from '../component/skills/skills'
import {Home} from '../component/home/home'
import {Layout} from '../component/layout/layout'
import { Experience } from './experience/experience'


export function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="/skills" element={<Skills />}></Route>
                    <Route path="/experience" element={<Experience />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}