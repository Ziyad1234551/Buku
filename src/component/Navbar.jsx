import React from 'react';
import { IoBook } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({setNav,nav}) => {
  return (
    <div data-aos="fade-up" className='flex w-full items-center justify-between px-4 lg:px-[100px] md:px-10 h-[100px] shadow-lg bg-gradient-to-r from-blue-500 to-blue-900 text-white'>
        <div className="flex items-center gap-2">
            <IoBook className='text-5xl lg:text-6xl'/>

      <h1 className='poppin text-2xl lg:text-4xl'>BookStore</h1>
        </div>

        <div className="lg:flex md:flex hidden overflow-hidden gap-4 text-2xl font-semibold nunito items-center">
            <NavLink to="/">Home</NavLink>
            <ScrollLink smooth={true}  to="about">About</ScrollLink>
            <ScrollLink smooth={true} to="product">Product</ScrollLink>
            <NavLink to="/">Contact</NavLink>

        </div>
        <div className='lg:hidden px-4 md:hidden flex text-white text-4xl font-bold cursor-pointer'>
            <RiMenu3Fill onClick={()=>setNav(!nav)}/>

        </div>
       
      
      
    </div>
  )
}

export default Navbar
