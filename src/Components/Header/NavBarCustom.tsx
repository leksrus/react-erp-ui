import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LoginCustom from './LoginCustom';
import CartCustom from './CartCustom';

export default class NavBarCustom extends Component {
    render(): React.ReactNode {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <LoginCustom />
                    <CartCustom />
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
