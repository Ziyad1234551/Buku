import React from 'react'

export const AllProduct = () => {
  const books = [
    {
    image:"book-1.png",
    name:"The Lord Of The Rings"
  },

  {
    image:"book-2.png",
    name:"Simple And Minimalist"
  },
  {
    image:"book-3.png",
    name:"Muted And Poster"
  },
  {
    image:"book-4.png",
    name:"Pouring Dreams"
  },
  {
    image:"book-5.png",
    name:"Customize Your Autumn Clothes"
  }, {
    image:"book-6.png",
    name:"Designed For Work"
  },
  {
    image:"book-7.png",
    name:"Plant Tree For Future"
  },
  {
    image:"book-8.png",
    name:"Modern Abstract Poster"
  },
  {
    image:"book-9.png",
    name:"Bird Park"
  },

]
  return (
    <div data-aos="zoom-in" name="product" className='lg:w-[1328px] bas  w-full md:w-[728px] mx-auto'>
        <h1 className='text-blue-500 lg:text-5xl md:text-5xl text-4xl font-bold text-center'>All Products</h1>
    <div className="grid my-10 md:grid-cols-3 lg:grid-cols-[340px,340px,340px] justify-center gap-10">
      {books.map((book)=>{
        return(
          <div className='lg:w-full w-[250px]  bg-white px-10 lg:h-[560px] h-auto shadow-lg md:h-auto'>
            <img src={book.image} className='lg:w-[290px] w-full md:w-full md:h-[200px] lg:h-[400px] cursor-pointer transition-all hover:scale-105 mx-auto object-cover' alt="" />
            <h1 className="my-4 text-center lg:text-xl font-bold poppin md:text-[10px]">{book.name}</h1>
            <div className="flex justify-center my-3">
              <button className='w-full bg-blue-500 transition-all hover:shadow-xl cursor-pointer text-white py-4 rounded-md font-bold poppin'>Buy Now</button>
            </div>
          </div>
        )
      })}
    </div>

    </div>
  )
}
