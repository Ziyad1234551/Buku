import React from 'react'

export const About = () => {
  return (
    <div data-aos="fade-left" className='lg:w-[1328px] bas px-3 md:w-[728px] w-full mx-auto flex-col lg:flex-row md:flex-row flex justify-between py-10 '>
        <div className='flex gap-2 items-center'>
            <img src="discount-book-1.png"   className='rotate-12 md:w-[160px] w-[150px] lg:w-[280px] object-cover' alt="" />
            <img src="discount-book-2.png" className='-rotate-12 md:w-[160px]  w-[150px] lg:w-[280px] object-cover' alt="" />


        </div>
        <div className='my-3'>
            <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold my-4 poppin text-blue-600'>About Us</h1>
            <p className='lg:w-[500px] md:w-[260px] w-[320px] lg:leading-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusantium ducimus dolores commodi doloribus laborum soluta enim ipsam ipsum incidunt sequi dolor eaque voluptate aliquam quo itaque et corporis, ea minus corrupti non sunt dolore perspiciatis nesciunt. Repellat molestias tenetur laudantium mollitia, ex dolor.</p>

            <button className='bg-gradient-to-b from-blue-500 to-blue-900 text-white font-bold w-[200px] py-4 rounded-lg my-4'>Read More</button>

        </div>
    </div>
  )
}
