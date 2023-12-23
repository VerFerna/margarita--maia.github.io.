import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Margarita Maia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Damas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Vestidos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Otros
                </NavDropdown.Item>
              </NavDropdown>       

               <NavDropdown title="Caballeros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Trajes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Otros
                </NavDropdown.Item>
              </NavDropdown>

               <NavDropdown title="Kids" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Otros
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>       
           <CartWidget />
        </Container>

      </Navbar>
    </header>
  );
};

export default NavBar;
