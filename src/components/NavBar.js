import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.jpeg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#sale" className={activeLink === 'sale' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sale')}>Sale</Nav.Link>
          <Nav.Link href="#cart" className={activeLink === 'cart' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cart')}>Cart</Nav.Link>
          <Nav.Link href="#about-us" className={activeLink === 'about-us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-us')}>About Us</Nav.Link>
          <Nav.Link href="#inquiry" className={activeLink === 'inquiry' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('inquiry')}>Inquiry</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    
 );
};