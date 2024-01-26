import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
  useEffect(()=>{
    AOS.init({
      delay:400,
      duration:1200,
      easing:"ease-in-out",
      offset:500
    });
  })
  return (
 <div>
  <Navbar/>
  <Hero/>
  <About/>
  <Product/>
  <Banner/>
  <AllProduct/>
  <Testimoni/>
  <Footer/>
 </div>
  );
}

export default App;
