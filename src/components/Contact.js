import React from 'react'
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div>
        {/* <div className="container">
             <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                       
                        <form action="" class="contact__form">
                            <div class="contact__inputs">
                                <input type="mail" placeholder="Username" class="contact__input"/><br/>
                                <input type="mail" placeholder="Email" class="contact__input"/><br/>
                                <input type="mail" placeholder="Cell" class="contact__input"/>
                            </div>
                   

                    
</form>
                    </div>
                
                        <textarea name="" id="" cols="0" rows="7" placeholder="Write Your Text" class="contact__input"></textarea>

                        <input type="submit" value="Submit" class="contact__button"/>
                        </div>
            </section> 
            </div> */}






            <section class="services section bd-container" id="contact">
    <h2 class="section-title">Contact</h2>


            <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Cell</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
 
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>










<input type="submit" value="Submit" class="contact__button1"/>
                    

</section>


 </div>
    
    )
}

export default Contact;
