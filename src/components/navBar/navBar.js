import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

const NavBarTop = function(){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar className="mr-auto">
                    <Navbar.Link href="#home">Home</Navbar.Link>
                    <Navbar.Link href="#">Start</Navbar.Link>
                </Navbar>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarTop;
