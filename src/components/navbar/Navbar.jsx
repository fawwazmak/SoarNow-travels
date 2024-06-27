import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavScrollExample = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary position-sticky top-0 w-100"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-dark">
              LOGO
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="d-flex gap-3 me-auto ms-lg-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/Flight" className="text-decoration-none text-dark">
                Flight
              </Link>
              <Link to="/Visas" className="text-decoration-none text-dark">
                Visas
              </Link>
              <Link to="/Holiday" className="text-decoration-none text-dark">
                Holiday
              </Link>
              <Link
                to="/Education-easy-pay"
                className="text-decoration-none text-dark"
              >
                Education Easy-Pay
              </Link>
            </Nav>
            <NavDropdown title="Support" id="navbarScrollingDropdown">
              <NavDropdown.Item>Phone: 08074495421</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Email: SoarNow@gmail.com</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavScrollExample;
