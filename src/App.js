import React from 'react'
import Navigation from '../src/components/Navigation';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import About from '../src/components/About';
import ImageSlider from '../src/components/ImageSlider';
import SliderData from '../src/components/SliderData';
import ImageZoom from '../src/components/ImageZoom';
import TruePlan from '../src/components/TruePlan';
import Working from '../src/components/Working';
import Rangeslider from '../src/components/Rangeslider';
import './footer.css';


const App = () => {
  return (
    <div className="all">
    <div>
      <Navigation/>
      <About/>
      <Working/>
      <ImageZoom/>
      <section class="services section bd-container" id="services">
    {/* <span class="section-subtitle">Offering</span> */}
    <h2 class="section-title">Immaculate. Impartial. [ESX]</h2>
    </section>
      <ImageSlider slides={SliderData} />;

      
      <TruePlan/>
      <Rangeslider/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
