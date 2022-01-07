import React from "react";
import "./navbbar.css";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function navbbar() {
  return (
    <div className="body">
      <Navbar s bg="dark" variant="dark">
        <Container>
          <div>
            {" "}
            <img className="pequeña" src="/LogoTV.png" />{" "}
          </div>

          <Navbar.Brand>Servicsofts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="me-auto">
    

            

              <NavDropdown  title="productos" id="collasible-nav-dropdown"  >
              
                <NavDropdown.Item className="a"     href="#action/3.1">Inicio</NavDropdown.Item>
                
                <NavDropdown.Item  className="a" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item  className="a" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="a" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
             

                <Nav.Link >
                <Link className="letra" style={{ textDecoration: 'none' }}  to="Border">
                Inicio
                </Link>
                </Nav.Link>
           
              <NavDropdown title="informacion" id="collasible-nav-dropdown">
                <NavDropdown.Item  className="a" href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item className="a" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item  className="a" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="a" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
       
            <Nav>
              <Nav.Link>More deets</Nav.Link>
              <Nav.Link>More deets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbbar;
