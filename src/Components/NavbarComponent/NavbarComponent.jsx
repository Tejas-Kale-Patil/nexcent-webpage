/** @format */

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/Logo.png";
import "./NavbarComponent.scss";


function NavbarComponent() {
    return (
        <>
            <div className="navcomponent">
                <Navbar expand="lg" className=" mb-3">
                    <Container>
                        <Navbar.Brand href="#">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-lg`}
                        />
                        <Navbar.Offcanvas
                            className="flex-row"
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Nav className="justify-content-center flex-grow-1">
                                <Nav.Link
                                    className="px-4"
                                    href="http://localhost:3000/"
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    className="px-4 mx-0"
                                    href="http://localhost:3000/"
                                >
                                    Service
                                </Nav.Link>
                                <Nav.Link
                                    className="px-4 mx-0"
                                    href="http://localhost:3000/"
                                >
                                    Feature
                                </Nav.Link>
                                <Nav.Link
                                    className="px-4 mx-0"
                                    href="http://localhost:3000/"
                                >
                                    Product
                                </Nav.Link>
                                <Nav.Link
                                    className="px-4 mx-0"
                                    href="http://localhost:3000/"
                                >
                                    Testimonial
                                </Nav.Link>
                                <Nav.Link
                                    className="px-4 mx-0"
                                    href="http://localhost:3000/"
                                >
                                    FAQ
                                </Nav.Link>
                            </Nav>
                            <Offcanvas.Body>
                                <Form className="d-flex">
                                    <Button variant="outline-success mx-3 border-0">
                                        Login
                                    </Button>
                                    <Button variant="success">Signup</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavbarComponent;
