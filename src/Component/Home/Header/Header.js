import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo-blocktrain.png';


const Header = () => {
  return (
    <div className='header-area '>
      {/* top of the page */}
      <Navbar  expand="lg">
  <Container className='nav-fl' >
    <Navbar.Brand href="#">
    <div className="logo">
         <a href=""  to="/blocktrain"> <img src={logo} alt="" /></a>
          <h6>Waglearn</h6>
        </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <div className='nav-btn'>
          <Link
            to="/blocktrain"
           
          >
              <a className='try-btn' href="">Blocktrain</a>
            
          </Link>
       <a target='_blank' className='get-btn' href="https://twitter.com/aryan_eth">Get in touch</a>
        </div>


    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* <div className="bar">
        <div className="logo">
         <a href=""  to="/blocktrain"> <img src={logo} alt="" /></a>
          <h6>Waglearn</h6>
        </div>
        <div>
          <Link
            to="/blocktrain"
           
          >
              <a className='try-btn' href="">Blocktrain</a>
            
          </Link>
       <a target='_blank' className='get-btn' href="https://twitter.com/aryan_eth">Get in touch</a>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
