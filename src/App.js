import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './App.css';
import { About } from './component/About';
import { AllProduct } from './component/AllProduct';
import { Banner } from './component/Banner';
import Footer from './component/Footer';
import { Hero } from './component/Hero';
import Navbar from './component/Navbar';
import { Product } from './component/Product';
import { Testimoni } from './component/Testimoni';
function App() {
  const [nav,setNav] = useState(false);

  useEffect(()=>{
    AOS.init({
      delay:400,
      duration:1200,
      easing:"ease-in-out",
    });
  })
  return (
 <div>
  <Navbar setNav={setNav} nav={nav}/>
  <Hero/>
  <About/>
  <Product/>
  <Banner/>
  <AllProduct/>
  <Testimoni/>
  <Footer/>
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
  );
}

export default App;
