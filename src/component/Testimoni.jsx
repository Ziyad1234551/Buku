import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
export const Testimoni = () => {
    const testis = [
        {
            image:"testimonial-perfil-1.png",
            name:"Amelia",
            text:"Best bookstore in town! Love the variety and cozy vibe."
        },
        {
            image:"testimonial-perfil-2.png",
            name:"John Doe",
            text:"Fantastic selection, always find what I'm looking for."
        },
        {
            image:"testimonial-perfil-3.png",
            name:"Vannessa",
            text:"A book lover's paradise! Great service and atmosphere."


        },
        {
            image:"testimonial-perfil-4.png",
            name:"Jonathan",
            text:"Top-notch bookstore experience – my go-to spot for reads!"






        }
    ]
  return (
    <div data-aos="fade-right" className='lg:w-[1328px] w-[360px] md:w-[728px] my-[50px] mx-auto'>
        <h1 className='text-blue-500 px-4 mb-2 md:text-4xl text-xl lg:text-4xl text-center font-bold poppin'>What Our Customer Say About Us</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay, ]}
        className="mySwiper"
      >
        {testis.map((testi)=>{
            return(

        <SwiperSlide><div className="flex justify-center px-8 items-center w-full md:h-[40vh] lg:h-[60vh]">
            <div className="lg:w-[600px] md:w-[500px] w-[340px] text-white h-[300px] rounded-lg py-4 bg-blue-500">
                <img src={testi.image} className='w-[90px] mx-auto border-[3px] border-white h-[90px] object-cover rounded-full' alt="" />
                <h1 className='text-center poppin font-bold text-4xl my-2'>{testi.name}</h1>
                <p className="font-light text-center text-white">{testi.text}</p>

            </div>
            </div></SwiperSlide>
            )
        })}
       
      </Swiper>
    </div>
  )
}
