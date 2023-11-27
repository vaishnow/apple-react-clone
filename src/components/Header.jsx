import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as AppleIcon } from "../icons/logo.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as BagIcon } from "../icons/bag.svg";
function Header() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      sticky="top"
      style={{ height: "3rem", backgroundColor: "rgb(67, 67, 68, 0.9)" }}
    >
      <Container style={{ width: "90%", fontSize: ".9rem", height: "3rem",flexWrap:'nowrap' }}>
        <Navbar.Brand href="#home" className="pt-2">
          <AppleIcon />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pt-1 d-flex flex-fill justify-content-between">
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">Mac</Nav.Link>
            <Nav.Link href="#">iPad</Nav.Link>
            <Nav.Link href="#">iPhone</Nav.Link>
            <Nav.Link href="#">Watch</Nav.Link>
            <Nav.Link href="#">Vision</Nav.Link>
            <Nav.Link href="#">AirPods</Nav.Link>
            <Nav.Link href="#">TV & </Nav.Link>
            <Nav.Link href="#">Entertainment</Nav.Link>
            <Nav.Link href="#">Accessories</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="" className="pt-2">
          <SearchIcon />
        </Button>
        <Button variant="" className="pt-2">
          <BagIcon />
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
