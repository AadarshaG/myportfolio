import React, { useEffect, useState } from 'react'

import {btns} from '../datas/data'
import {projects} from '../datas/data'
import { motion, AnimatePresence } from 'framer-motion'

export function Portfolio(){

    const [images, setImages] = useState(null)

    useEffect(()=>{
        setImages(projects)
    },[]);

    const handleClick = (e) => {
        let btnType = e.target.value;
        const newFilterImages = projects.filter(
        (project) => project.value === btnType
        );
        btnType !== "all"
        ? setImages(newFilterImages)
        : setImages(projects);
    };

    return(
        <div className="w-screen h-full lg:h-[100vh] bg-gray-800">
           <div className="mx-w-[1240px] mx-auto pt-[60px]">
                <div className="text-center pb-10">
                    <h2 className="text-3xl font-semibold text-white underline">My <span className="text-cyan-700">Collections</span></h2>
                </div>
                <div className="max-w-[1240px] mx-auto flex flex-wrap gap-4 text-white items-center justify-center">
                {
                    btns.map((btn) => {
                     return (
                        <button key={btn.id} value={btn.value} onClick={handleClick} className="bg-gray-700 w-fit rounded-lg">
                            {btn.name}
                        </button>
                        );
                    })
                }
                </div>

                <AnimatePresence>
                    <motion.div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-3 px-5">
                    {
                        images &&
                            images.map((filterImage) => {
                            return (
                                <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                key={filterImage.id}
                                >
                                <motion.img src={filterImage.image} alt="" className="mx-auto" />
                                </motion.div>
                            );
                        })
                     }
                    </motion.div>
                </AnimatePresence>
           </div>
        </div>
    )
}