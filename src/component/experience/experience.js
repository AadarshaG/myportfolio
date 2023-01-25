import React from 'react'

import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs'
import './style.css'

import {MdWork} from 'react-icons/md'

export function Experience(){

    return(
        <div className="w-screen h-full lg:h-[100vh] bg-gray-700">
            <div className="max-w-[1240px] mx-auto pt-[60px]">
                <div className=" flex justify-center items-center">
                    <h1 className="flex underline text-cyan-600 text-3xl font-semibold py-5"> <MdWork size={25} className="mr-2" />Exper<span className="text-green-700">ience</span></h1>
                </div>
            <Tabs>
                <TabList>
                <Tab>
                    <p>Codavatar Tech Pvt. Ltd</p>
                </Tab>
                <Tab>
                    <p>New One </p>
                </Tab>
                </TabList>

                <TabPanel>
                <div className="panel-content">
                    <h2>Working as a React JS Developer</h2>
                </div>
                </TabPanel>
                <TabPanel>
                <div className="panel-content">
                    <h2>New One</h2>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. </h2>
                </div>
                </TabPanel>               
            </Tabs>
            </div>
        </div>
    )
}