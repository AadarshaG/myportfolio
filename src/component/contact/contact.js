import React, { useState } from 'react'

import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'

export function Contact(){

    const commonFields = {
        name: '',
        email: '',
        message: ''
    }

    const [data, setData] = useState(commonFields)

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...data, [name]: value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }

    return(
        <div className="w-screen h-full lg:h-[100vh] bg-gray-700">
            <div className="text-center pt-[50px]">
                <h3 className="text-center underline text-2xl py-5">What's <span className="text-gray-600">Next?</span></h3>
                <p className="text-2xl text-white">Get In Touch</p>
                <div className="mx-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-full w-full py-5 gap-4">
                    <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-4 w-full px-[50px]"> 
                        <input type="text" name="name" value={data.name || '' } onChange={handleChange} placeholder="Enter Name" className="outline-none rounded-lg p-3" />
                        <input type="email" name="email" value={data.email || '' } onChange={handleChange} placeholder="Enter Email" className="outline-none rounded-lg p-3" />
                        <textarea type="text" name="message" value={data.message || '' } onChange={handleChange} placeholder="Enter Message" rows={5} className="outline-none rounded-lg p-3"></textarea>
                        <button type="submit" className="bg-cyan-600 uppercase text-white hover:bg-cyan-400 w-[100px] h-[40px] mx-auto md:mx-0 rounded full">Send</button>
                    </form>
                    <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                        <div className="flex gap-3 py-3 text-white">
                            <BsFacebook size={25} />
                            <p>facebook@yahoo.com</p>
                        </div>
                        <div className="flex gap-3 py-3 text-white">
                            <GrMail size={25} />
                            <p>portfolio@gmail.com</p>
                        </div>
                        <div className="flex gap-3 py-3 text-white">
                            <BsGithub size={25} />
                            <p>https://github.com/AadarshaG</p>
                        </div>
                        <div className="flex gap-3 py-3 text-white">
                            <BsLinkedin size={25} />
                            <p>https://www.linkedin.com/</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}