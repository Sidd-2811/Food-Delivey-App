import React, { useState } from 'react'
import '../../styles/HeaderStyles.css'
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
function Header() {
  const[nav , setNav] = useState(false);

  // Scroll Navbar
    const changeValueOnScroll = ()=>{
      // jab dynamic data aata hai or jb data available na ho to code crash na ho isliye ? ka use kiya hai
      const scrollValue = document?.documentElement?.scrollTop;
      (scrollValue>100)?setNav(true):setNav(false);
    }

    window.addEventListener('scroll',changeValueOnScroll)

  return (
    <header>
       <Navbar collapseOnSelect expand="lg" className={`${nav===true? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          {/* logo */}
          <Link to="/" className='logo'>
            <img src={Logo} alt="Logo" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* converting NavLink to Link */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
                <div className='cart'>
                <i className="bi bi-bag fs-5"></i>
                <em className='roundpoint'></em>
                </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </header>
  )
}

export default Header

