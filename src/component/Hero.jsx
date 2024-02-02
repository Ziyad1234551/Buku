import React, { useState } from 'react'

export const Hero = () => {
    const books = [
        {
            image:"book-1.png",
        },
        {
            image:"book-2.png",
        },
        {
            image:"book-3.png",
        }

    ]
    const [book,setBook] = useState(books[0])
  return (
    <div data-aos="fade-left" className='lg:w-[1328px] bas px-2 w-full lg:flex-row md:flex-row flex-col md:w-[708px] md:px-2 flex open  mx-auto justify-between py-[40px]'>
        <div>
            <h1 className='lg:text-[65px] text-4xl mb-2 md:text-[50px] text-blue-600  font-bold md:my-1 lg:my-3'>Book Store</h1>

            <p className='text-gray-500 md:leading-6 lg:leading-9 md:w-[300px] w-[350px] lg:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus perferendis, aliquam, pariatur incidunt maxime adipisci eveniet deserunt aperiam placeat magnam temporibus corrupti nulla explicabo cumque distinctio officiis fugiat error sint amet molestias! Et neque incidunt voluptas? Rem ipsam eligendi, porro unde cum doloremque.</p>

            <button className='bg-gradient-to-b from-blue-500 to-blue-600 my-4 text-white font-bold w-[200px] py-4 rounded-lg'>Read More</button>


        </div>
        <div className='flex  gap-4 my-4'>
            <img src={book.image} className='lg:w-[360px] w-[260px] md:w-[160px] lg:h-[500px] md:h-[300px] object-cover' alt="" />
            <div className='my-4 flex flex-col gap-3'>
                {books.map((bo,i)=>{
                    return(
                        <img src={bo.image}  className='lg:w-[80px] md:w-[40px] w-[50px] cursor-pointer' onClick={()=>setBook(books[i])} alt="" />
                    )
                })}
                

            </div>
        </div>
    </div>
  )
}
