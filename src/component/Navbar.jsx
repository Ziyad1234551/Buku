import React, { useState } from 'react';
import { IoBook } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav,setNav] = useState(false);
  return (
    <div data-aos="fade-up" className='flex w-full items-center justify-between px-4 lg:px-[100px] md:px-10 h-[100px] shadow-lg bg-gradient-to-r from-blue-500 to-blue-900 text-white'>
        <div className="flex items-center gap-2">
            <IoBook className='text-5xl lg:text-6xl'/>

      <h1 className='poppin text-2xl lg:text-4xl'>BookStore</h1>
        </div>

        <div className="lg:flex md:flex hidden overflow-hidden gap-4 text-2xl font-semibold nunito items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>

        </div>
        <div className='lg:hidden px-4 md:hidden flex text-white text-4xl font-bold cursor-pointer'>
            <RiMenu3Fill onClick={()=>setNav(!nav)}/>

        </div>
        {nav?
         <div className='lg:hidden text-blue-500 gap-6 px-4 text-2xl font-bold poppin transition-all md:hidden flex flex-col absolute top-0 left-0 w-[200px] h-[100vh] bg-white'>
         <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>          
         </div>
        :
        <div className='lg:hidden md:hidden flex flex-col absolute top-0 left-0 w-[0px] overflow-hidden transition-all h-[100vh] bg-white'>

        </div>
        
        }
      
      
    </div>
  )
}

export default Navbar
