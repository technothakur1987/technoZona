import React from 'react'

const MainBanner = () => {
  return (
    <>
    <div className=" h-[50vh] bg-[url('./assets/developer.png')] bg-cover bg-no-repeat flex justify-center lg:h-screen">
        {/*h-screen  bg-cover flex justify-center*/}
        <div className='text-white pt-4 '>
            <p className='text-3xl font-normal text-center lg:text-7xl lg:text-left'>Hi, <span className='text-xl lg:text-4xl'>I am Vikram Bais.</span></p>
            <p className='text-3xl font-normal text-center uppercase lg:text-7xl lg:text-left'>I am Frontend Developer.</p>
        </div>
    </div>
    <div className='h-[10.5rem] bg-black text-white flex justify-center items-center'>
        <h2 className='text-3xl font-normal text-center uppercase lg:text-6xl '>work, I can do for <span className='text-4xl lg:text-8xl'>you</span></h2>
    </div>
    </>
  )
}

export default MainBanner