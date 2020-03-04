import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, ButtonGroup } from 'react-bootstrap'

interface NavBarData {
    isLogged: boolean;
}


export default class NavBarCustom extends Component implements NavBarData {
    isLogged = false;

    render() {
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
                    <Form inline>
                        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                        <FormControl type="text" placeholder="Password" className="mr-sm-2" />
                        <ButtonGroup>
                            <Button variant="outline-success">Sing In</Button>
                            <Button variant="outline-primary">Sign Up</Button>
                        </ButtonGroup>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
