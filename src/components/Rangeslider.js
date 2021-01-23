import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const Rangeslider = () => {

  const [ value, setValue ] = useState(0); 
  const [val,setval]=useState(0);

  return (
    <section class="services section bd-container" id="feestructure">
    <h2 class="section-title">Waterfall Fee Structure</h2>
   
    

    <RangeSlider
      value={value}  min={0} max={200}
      onChange={changeEvent => setValue(changeEvent.target.value)}
    />
     <p>0 <span className="center1"></span><span className="center">200</span></p>

     {/* <p class="contact__button0">{value}</p> */}
     {/* <input type="submit" value="" class="contact__button1">{value}</input> 
     */}
     <button class="contact__button1">{value}</button>

    </section>
    
  );

};
export default Rangeslider;