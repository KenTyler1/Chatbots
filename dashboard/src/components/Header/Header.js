import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineHome } from "react-icons/ai";
import { BsListStars } from "react-icons/bs";


import "./styles.css";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: 400 }}>
          BEACHES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontWeight: "bolder" }}>
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link href="/products" style={{ fontWeight: "bolder" }}>
              <BsListStars /> Tours List
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products/add-tours">
                More Tours
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/delete-tours">
                Update & Delete Tours
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
