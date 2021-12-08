import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
    return (
        <div>
            {/* Use this for old style simple navbar */}
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    toggle
                </button>
                <Link to="/"><button href="/" type="button" class="btn btn-primary">Home Page</button></Link>
                <Link to="/notes"><button href="/notes" type="button" class="btn btn-primary">Reports</button></Link>
                <Link to="/creates"><button href="/creates" type="button" class="btn btn-primary">Create Reports</button></Link>
            </nav> */}

            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Smart Bed Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/notes">Reports</Nav.Link>
                    <Nav.Link href="/creates">Create Reports</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default MainNavbar;