import React from "react";
import Model1 from '../Images/m1.JPG';
import Model2 from '../Images/m2.JPG';


import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const IMAGES = [
  "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  "https://source.unsplash.com/dpbXgTh0Lac/1600x900",
];

const ImageZoom = () => {
  return (
    <>
      <section class="services section bd-container" id="exampledeliverable">
        {/* <span class="section-subtitle">Offering</span> */}
        <h2 class="section-title">Example Deliverables </h2>
        <p className="section-title1">Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</p>

        <div class="services__container  bd-grid">
          <div class="services__content">
          <TransformWrapper 
                  defaultScale={1}
                  defaultPositionX={1}
                  defaultPositionY={1}
                >
                  <TransformComponent>
                    <img src={Model1} style={{ width: "100%" }} />
                  </TransformComponent>
                </TransformWrapper>
          </div>
          

          {/* <div class="services__container  bd-grid"> */}
          <div class="services__content">
          <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={1}
                  defaultPositionY={1}
                >
                  <TransformComponent>
                    <img src={Model2} style={{ width: "100%" }} />
                  </TransformComponent>
                </TransformWrapper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageZoom;







