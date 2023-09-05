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

const easybank = () => {
  return (
    <div>
        
   <Navbar expand="lg" className="my-3 navbar-main bg-white">
      <Container className='navbar-align'>
        <Navbar.Brand href="#" >
          <a href=""className='border-b'><img src={logo} alt=""/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto  my-lg-0" >
            <Nav.Link href="#action1" className='navlink'>Home</Nav.Link>
            <Nav.Link href="#action2"className='navlink'>About</Nav.Link>
            <Nav.Link href="#action2"className='navlink'>Contact</Nav.Link>
            <Nav.Link href="#" className='navlink'> Blog</Nav.Link>
            <Nav.Link href="#"className='navlink ' >Careers</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <button className='nav-btn border-b'>Request Invite</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='section-1'style={{position:'relative'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1>Next generation digital banking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, accusamus. Quae totam eaque voluptates similique autem ducimus placeat voluptas expedita mollitia.</p>
            <button className='nav-btn border-b'>Request Invite</button>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6" >
          <img src={img1} alt="" height={800} width={600}/>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default easybank;
