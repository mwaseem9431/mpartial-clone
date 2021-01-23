import React from 'react'
import plan1 from "../plan1.png";
import plan2 from "../plan2.png";
const TruePlan = () => {
    return (
        <div>
             <section class="services section bd-container" id="services">
        {/* <span class="section-subtitle">Offering</span> */}
        <h2 class="section-title">How it Works</h2>

        <div class="services__container  bd-grid">
          <div class="services__content">
            <img src={plan1} alt="plan" />
          </div>
          

          {/* <div class="services__container  bd-grid"> */}
          <div class="services__content">
            <img src={plan2} alt="plan" />
          </div>
        </div>
      </section>
        </div>
    )
}

export default TruePlan
