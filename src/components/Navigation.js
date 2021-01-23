import React from "react";
import video from "../vidoe_main.mp4";
import {Navbar, Nav,Form,Button} from 'react-bootstrap';


const Navigation = () => {
  return (
    <div>
     
     {/* <Navbar bg="light" expand="lg">
     <div className="container">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
     
    </Nav>
    <Form inline>
      
      <Button variant="outline-success">SignUp</Button>
    </Form>
  </Navbar.Collapse>
  </div>
</Navbar>*/}
<header className="l-header" id="header">
        <nav className="nav bd-container">
        
          <a href="#" className="nav__logo">
           mPartial 
          </a><span  classname="nav__logos">BETA</span>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  GROUND-TRUTH DATA
                </a>
              </li>
              <li className="nav__item">
                <a href="#working" className="nav__link">
                  How It Works
                </a>
              </li>
              <li className="nav__item">
                <a href="#feestructure" className="nav__link">
                  Fee Structure
                </a>
              </li>
              <li className="nav__item">
                <a href="#exampledeliverable" className="nav__link">
                  Example Deliverables
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__link">
                  Submission Portal
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact us
                </a>
              </li>

              <li>
                <i className="bx bx-moon change-theme" id="theme-button"></i>
              </li>
              {/* <button id ="btn_signup" className="btn btn-success">SignUp</button> */}
              <button className="btn_signup">SignUp</button>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
      
      <div>
      
        <video autoPlay loop muted width="100%">

          <source src={video} type="video/mp4" />
        </video>
        <div>
        <div class="carousel-caption">
     <h2 class="abc"><span>Impartial, Remote, 3rd-Party,
</span>
     <h3 class="abc">Estimating Engine</h3>
     </h2>
     
     </div>
     </div>

      </div>
    </div>
  );
};

export default Navigation;
