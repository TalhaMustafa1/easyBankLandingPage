import React from 'react';
import './easybank.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assests/logo.svg";
import img1 from "../assests/image-mockups.png";
import onlineBanking from"../assests/icon-online.svg";
import simple from "../assests/icon-budgeting.svg";
import onboarding from "../assests/icon-onboarding.svg";
import api from "../assests/icon-api.svg";
import resturent from "../assests/image-restaurant.jpg";
import airplane from "../assests/image-plane.jpg";
import currency from "../assests/image-currency.jpg";
import confetti from "../assests/image-confetti.jpg";
import fb from "../assests/icon-facebook.svg";
import youtube from "../assests/icon-youtube.svg";
import twitter from "../assests/icon-twitter.svg";
import pinterest from "../assests/icon-pinterest.svg";
import insta from "../assests/icon-instagram.svg";
import headerimg from "../assests/image-mockups-mobile-version.png";

import Card from 'react-bootstrap/Card';
const easybank = () => {
  return (
    <div>
        
   <Navbar expand="lg" className="pt-3 pb-3 navbar-main bg-white">
      <Container className='navbar-align'>
        <Navbar.Brand href="#" >
          <a href=""className='border-b'><img src={logo} alt=""/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto  my-lg-0 text-center" >
            <Nav.Link href="#action1" className='navlink'>Home</Nav.Link>
            <Nav.Link href="#action2"className='navlink'>About</Nav.Link>
            <Nav.Link href="#action2"className='navlink'>Contact</Nav.Link>
            <Nav.Link href="#" className='navlink'> Blog</Nav.Link>
            <Nav.Link href="#"className='navlink ' >Careers</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <button className='nav-btn border-b btn-nav'>Request Invite</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='section-1'style={{position:'relative'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-5  col-sm-12 ">
            <h1>Next generation digital banking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, accusamus. Quae totam eaque voluptates similique autem ducimus placeat voluptas expedita mollitia.</p>
            <button className='nav-btn border-b'>Request Invite</button>
          </div>
          <div className="col-md-1  col-sm-12"></div>
          <div className="col-md-6  col-sm-12">
  <picture>
    <source media="(max-width: 900px)" srcSet={headerimg} />
    <img src={img1} alt="" />
  </picture>
</div>

        </div>
      </div>
    </section>
    <section className='section-2 '>
      <div className="container">
        <div class="row">
        <h2>Why choose Easybank?</h2>
        <div className="col-md-8">        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam tempora unde quo labore tempore exercitationem incidunt accusantium dolor nostrum eveniet atque id obcaecati
.</p></div>
        </div>
        <div className="row cards-row">
         <div className="col-md-3">
          <img src={onlineBanking} alt="" />
          <h4>Online Banking</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non impedit eius distinctio officia doloremque saepe nesciunt quidem!</p>
          </div>
          <div className="col-md-3">
          <img src={simple} alt="" />
          <h4>Simple Budgeting</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non impedit eius distinctio officia doloremque saepe nesciunt quidem!</p>
          </div>   
          <div className="col-md-3">
          <img src={onboarding} alt="" />
          <h4>Fast Onboarding</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non impedit eius distinctio officia doloremque saepe nesciunt quidem!</p>
          </div>   
          <div className="col-md-3">
          <img src={api} alt="" />
          <h4>Open API</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non impedit eius distinctio officia doloremque saepe nesciunt quidem!</p>
          </div>           
        </div>
      </div>
     
    </section>
    <section className='section-3'>
        <div className="container"><h2 className=''>Latest Articles</h2>
        <div className="row">
          <div className="col-md-3">
          <Card>
      <Card.Img variant="top" src={currency} style={{height:"240px"}} />
      <Card.Body>
        <Card.Title>Receive money in any currency with no fees</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo maxime corporis tempora ab dolor rerum sint nostrum sunt.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card className='card'>
      <Card.Img variant="top" src={resturent} style={{height:"240px"}}/>
      <Card.Body>
        <Card.Title>Receive money in any currency with no fees</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo maxime corporis tempora ab dolor rerum sint nostrum sunt.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card>
      <Card.Img variant="top" src={airplane} style={{height:"240px"}}/>
      <Card.Body>
        <Card.Title>Receive money in any currency with no fees</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo maxime corporis tempora ab dolor rerum sint nostrum sunt.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-3">
          <Card>
      <Card.Img variant="top" src={confetti} style={{height:"240px"}}/>
      <Card.Body>
        <Card.Title className='card-title'>Receive money in any currency with no fees</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo maxime corporis tempora ab dolor rerum sint nostrum sunt.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
        </div>   
    </section>
    <footer>
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
          <a href=""className=''><img src={logo} alt=""/></a>
          <div className="icons">
         <img src={fb} alt="" />
         <img src={youtube} alt="" />
         <img src={twitter} alt="" />
         <img src={pinterest} alt="" />
         <img src={insta} alt="" />
          </div>
          </div>
          <div className="col-md-2">
            <h6 className='hover-magic'>About Us</h6>
            <h6>Contact</h6>
            <h6>Blog</h6>
          </div>
          <div className="col-md-2">
            <h6>Careers</h6>
            <h6>Support</h6>
            <h6>Privacy Policy</h6>
          </div>
          <div className="col-md-5">
          <button className='nav-btn border-b'>Request Invite</button>
          <p1>EasyBank.All Rights Reserved</p1>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default easybank;
