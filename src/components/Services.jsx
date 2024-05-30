import React from 'react'
import Web from '../assets/web.png'
import App from '../assets/mobile.png'
import Uiux from '../assets/uiux.png'

const Services = () => {
  return (
    <div className=' lg:flex lg:items-center lg:justify-evenly py-6 px-6 lg:px-0 '>
        

        <div className='rounded-lg shadow-lg mb-6 lg:mb-0 hover:shadow-gray-600 cursor-pointer duration-75 lg:h-fit lg:basis-[30%]'>
            <img src={Web} alt="" className='w-[100%] lg:h-[40vh]'/>
            <div className='p-6'>
                <h3 className='text-2xl capitalize	font-bold mb-3'>web developement</h3>
                <p className='text-lg font-normal text-justify leading-5'>Crafting visually stunning and highly functional websites. Utilizing modern technologies for seamless user experiences. Reliable, efficient, and scalable solutions tailored to your needs.</p>
            </div>
        </div>
        <div className='rounded-lg shadow-lg mb-6 lg:mb-0 hover:shadow-gray-600 cursor-pointer  lg:h-fit lg:basis-[30%]'>
            <img src={App} alt="" className='w-[100%] lg:h-[40vh]'/>
            <div className='p-6'>
                <h3 className='text-2xl capitalize	font-bold mb-3'>app developement</h3>
                <p className='text-lg font-normal text-justify leading-5'>Building innovative and user-friendly mobile applications. Ensuring smooth performance across platforms. Custom solutions alweays ready to meet your specific requirements and goals</p>
            </div>
        </div>
        <div className='rounded-lg shadow-lg  hover:shadow-gray-600 cursor-pointer  lg:h-fit  lg:basis-[30%]'>
            <img src={Uiux} alt="" className='w-[100%] lg:h-[40vh]'/>
            <div className='p-6'>
                <h3 className='text-2xl capitalize	font-bold mb-3'>Design UI/UX</h3>
                <p className='text-lg font-normal text-justify leading-5'>Creating engaging and intuitive user interfaces. I am always Focused on user experience and accessibility. Delivering designs that enhance usability and visual appeal.</p>
            </div>
        </div>

       
        

       

       
        

       
       
    </div>
  )
}

export default Services