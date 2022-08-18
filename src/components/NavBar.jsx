import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPlus, FaPencilAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

const styles = {
  backgroundColor: '#b1b8f6',
  height: '10%',
  display: 'flex'
}
const nav1 = {
  justifyContent: 'left'
}
const nav2 = {
  justifyContent: 'center'
}
const nav3 = {
  justifyContent: 'right'
}
const navBarButton = {
  cursor: 'pointer',
  "&:hover": {
    background: "blue"
  },
}

const NavbarMain = () => {
  function logOut() {
    localStorage.clear()
    window.location.href='/'
  }
  
  function changeBackground(e) {
    e.target.style.color = 'blue';
  }

  function changeBackground2(e) {
    e.target.style.color = 'black';
  }

  return (
    <Navbar expand="xl" fixed="top" style={styles}>
      <Container style={nav1}>
        <Navbar.Brand href="/" >L4Syn</Navbar.Brand>
      </Container>
      <Container style={nav2}>
        <Navbar.Brand href="/" ></Navbar.Brand>
      </Container>
      <Container style={nav3} >
        <Navbar.Brand onClick={() => logOut()} style={navBarButton}><FiLogOut /></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;