import React, { Component } from 'react'

import { Nav, Navbar } from "react-bootstrap"
 
import Login from './Login.js';

export default class NavBar extends Component {
  render() {
    return (

      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Challenge App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

            </Nav>

            <Nav>

            <Login />

              
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </React.Fragment>

    )
  }
}
