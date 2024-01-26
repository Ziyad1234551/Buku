import React from 'react'
const bg = {
    backgroundImage:"join-bg.jpg",
    backgrounPosition:"center",
    backgroundSize:"cover"
}
export const Banner = () => {
  return (
    <div data-aos="fade-up" style={bg} className='lg:mx-auto md:mx-auto mx-auto bg-gradient-to-b from-blue-700 to-blue-800 py-6 my-[50px] poppin  lg:w-[1028px] bg-center bg-cover px-5 h-[300px] md:w-[628px] w-[360px] md:px-6  rounded-md'>
        <h1 className='lg:text-5xl md:text-3xl  text-2xl mb-4 text-center font-bold text-white'>Subscribe For More</h1>
        <div className="flex justify-center lg:flex-row md:flex-row flex-col gap-2 my-4">
            <input type="text" placeholder='Enter Your Email' className='lg:w-[500px] md:w-[400px] w-full h-[50px] px-4 bg-white outline-none border-none rounded-md' />
            <button className='px-4 py-2 rounded-md text-white bg-green-400'>Subscribe</button>
        </div>

    </div>
    
  )
}
