import React from 'react'
import { Link, NavLink } from "react-router-dom";

const ConnectAbout = () => {
  return (
    <div className=" flex min-h-fit bg-red-500 text-white flex-col lg:flex-row">
        <div className='bg-[#515603] px-6 py-6 basis-1/2'>
            <h3 className='text-3xl font-medium mb-3 '>Let's Connect ...  </h3>
            <a href='mailto:vikrambais09021987@gmail.com' className='text-lg font-normal text-justify leading-5 block mb-2 '><i className="fa-solid fa-envelope me-2 text-xl text-[#722300] hover:text-white "></i>vikrambais09021987@gmail.com</a>
            <a href='tel:8109184732' className='text-lg font-normal text-justify leading-5 block mb-2 '><i className="fa-solid fa-phone me-2 text-xl text-[#722300] hover:text-white"></i>+91-8109184732</a>
            <div className='  pt-5  lg:pt-3 flex align-center justify-around '>
            <a href='https://www.linkedin.com/in/technothakur/' target='_blank' className='text-lg font-normal text-justify leading-5 '><i className="fa-brands fa-linkedin text-3xl text-[#722300] hover:text-white"></i></a>
            <a href='https://www.instagram.com/technothakur1987/' target='_blank' className='text-lg font-normal text-justify leading-5 '><i className="fa-brands fa-square-instagram text-3xl text-[#722300] hover:text-white"></i></a>
            </div>
        </div>
        <div className='bg-[#722300] px-6 py-6 basis-1/2'>
            <h3 className='text-3xl font-medium mb-3'>Know Me More ...</h3>
            <p className='text-lg font-normal text-justify leading-5 mb-4'>I am a self-taught front-end developer with a passion for creating dynamic and user-friendly web applications. My expertise lies in front-end technologies such as React.js and Firebase, enabling me to build seamless and interactive user experiences.</p>
            <a href='https://technoera.netlify.app/' target='_blank' className='text-lg font-normal text-justify leading-5 block mb-2 '><i className="fa-solid fa-earth-asia me-2 text-xl text-[#515603] hover:text-white"></i>https://technoera.netlify.app</a>
            
            </div>
    </div>
  )
}

export default ConnectAbout