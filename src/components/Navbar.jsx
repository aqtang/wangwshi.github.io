import React from "react";
import { Nav } from './NavbarElements';

function Navbar() {
  return(
    <Nav.Wrapper>
      <Nav.Logo to="/about">Hannah Wang</Nav.Logo>
      <Nav.Items>
        <Nav.Item to="/about">About</Nav.Item>
        <Nav.Item to="/art">Art</Nav.Item>
        <Nav.Item to="/cv">Resume</Nav.Item>
        <Nav.Item to="/contact">Contact</Nav.Item>
      </Nav.Items>
    </Nav.Wrapper>
  );
}

export default Navbar;
