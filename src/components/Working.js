import React from 'react'


const Working = () => {
    return (
        <div>
             <section class="home section bd-container" id="working">
        {/* <span class="section-subtitle">Offering</span> */}
        <h2 class="section-title">How it Works</h2>

        <div class="services__container  bd-grid">
          <div class="services__content">
            <h1 class="services__title">1</h1>
            <p class="services__description">
             Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
            </p>
          </div>

          {/* <div class="services__container  bd-grid"> */}
          <div class="services__content">
            <h1 class="services__title">2</h1>
            <p class="services__description">
            Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera..
            </p>
          </div>

          <div class="services__content">
            <h1 class="services__title">3</h1>

            <p class="services__description">
            Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
            </p>
           
          </div>
         
        </div>
        <input type="submit" value="Submit" class="contact__button1"/>
      </section>
     
        </div>
    )
}

export default Working
