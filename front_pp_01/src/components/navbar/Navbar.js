import React from "react";
import logo from"../../assets/images/icono test.jpg";
import { Container, NavbarBrand, Nav, Navbar as Nb} from "react-bootstrap";

export const Navbar = () => {
    return(
        <Container className="d-flex justify-content-center">
            <Nb className="bg-body_tertiary">
                <Container className="container-fluid">
                    <NavbarBrand href="/">
                        <img src={logo}
                             height="60px"
                             width="60px"
                             alt="logo"/></NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/MainInventory">Main inventory</Nav.Link>
                    </Nav>
                </Container>
            </Nb>
        </Container>
    )
}