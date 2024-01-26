import React from 'react'

export const Product = () => {
    const books = [
        {
            image:"book1.jpg",
            name:"who's there"
        },
        {
            image:"book2.jpg",
            name:"his life"
        },
        {
            image:"book3.jpg",
            name:"Lost Boy"
        }
    ]
  return (
    <div data-aos="zoom-in" className='lg:w-[1328px] md:w-[728px] w-full px-3 mx-auto py-10'>
        <h1 className='poppin text-blue-500  font-bold text-center text-3xl md:text-5xl lg:text-5xl'>Best Product</h1>
        <div className="flex lg:flex-row md:flex-row flex-col gap-4 my-4 justify-center">
            {books.map((book)=>{
                return(
                    <div className='bg-white mx-auto shadow-xl rounded-md w-[320px] lg:w-[340px] md:w-[180px] py-6 px-6'>
                        <img src={book.image} className='w-full rounded-md transition-all hover:scale-105 cursor-pointer lg:h-[400px] md:h-[200px] object-cover' alt="" />
                        <h1 className="my-4 text-center lg:text-3xl md:text-xl font-semibold poppin">{book.name}</h1>
                        <button className="my-2 text-white poppin font-bold cursor-pointer transition-all hover:shadow-lg w-full bg-blue-500 py-4 rounded-lg">Buy Now</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
