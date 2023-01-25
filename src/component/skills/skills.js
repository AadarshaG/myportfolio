import React from 'react'

import CSS from '../../img/css.png'
import Github from '../../img/github.png'
import JS from '../../img/javascript.png'
import Tailwind from '../../img/tailwind.png'
import Mongo from '../../img/mongo.png'
import Node from '../../img/node.png'
import Reacts from '../../img/react.png'

import { skillImg } from '../datas/data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Skills(){

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: false,
             autoplay: true,
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
             autoplay: true,
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             autoplay: true,
           }
         }
       ]
    };

    return(
        <div className="w-screen h-full bg-gray-800">
            <div className="text-center pt-[50px]">
                <h3 className="mt-10 text-4xl font-semibold underline">My <span className="text-cyan-600">Skills</span></h3>
                <p className="text-lg mt-2 text-gray-400">My Knowledge</p>

                <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-5 lg:px-3  w-full h-full py-5">
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={CSS} alt="" className="w-32 h-32 object-cover hover:scale-110 transition duration-300 ease-in-out" />
                        <p className="mt-3 text-xl text-white">CSS</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={JS} alt="" className="w-32 h-32 object-cover hover:scale-110 transition duration-300 ease-in-out" />
                        <p className="mt-3 text-xl text-white">Javascript</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={Tailwind} alt="" className="w-32 h-32 object-cover hover:scale-110 transition duration-300 ease-in-out" />
                        <p className="mt-3 text-xl text-white">Tailwind Css</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={Github} alt="" className="w-32 h-32 object-cover hover:scale-110 transition duration-300 ease-in-out" />
                        <p className="mt-3 text-xl text-white">Github</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={Reacts} alt="" className="w-32 h-32 object-cover" />
                        <p className="mt-3 text-xl text-white">React Js</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={Node} alt="" className="w-32 h-32 object-cover" />
                        <p className="mt-3 text-xl text-white">Node Js</p>
                       </div>
                    </div>
                    <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                       <div className="flex flex-col justify-center items-center">
                        <img src={Mongo} alt="" className="w-32 h-32 object-cover" />
                        <p className="mt-3 text-xl text-white">MongoDB</p>
                       </div>
                    </div>
                </div> 

            </div>

            <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 px-5">
               <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                     <div className="flex flex-col justify-center items-center">
                     <img className="w-32 h-32 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-150" src={Tailwind} alt="" />
                     </div>
                     <div className="absolute inset-0 flex translate-y-[60%]  items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Tailwind CSS</h1>
                     </div>
               </div>
            </div>

            <div className="max-w-[1240px] mx-auto py-10 px-10">
               <Slider {...settings}>
               {
                  skillImg && 
                  skillImg.map((imgg,ind)=>(
                     <div key={ind} className="px-2">
                        <div className="border-2 border-cyan-600  bg-gray-900 p-10 rounded-xl">
                           <div className="flex flex-col justify-center items-center">
                           <img src={imgg.img} alt="" className="w-32 h-32 object-cover hover:scale-110 transition duration-300 ease-in-out" />
                           <p className="mt-3 text-xl text-white">{imgg.name}</p>
                           </div>
                        </div>
                     </div>
                  ))
               }
               </Slider>
            </div>
      </div>
    )
}