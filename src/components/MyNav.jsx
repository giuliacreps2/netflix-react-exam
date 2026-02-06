import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">
          <img src="/public/Netflix_icon.svg.png" width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link fw-bold">
              List
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Search className="me-3" color="white" size={18}></Search>
            <Col id="kids" className="fw-bold text-white">
              KIDS
            </Col>
            <Bell className="ms-3 me-3" color="white" size={18}></Bell>
            <PersonCircle className="ms-3 me-3" color="white" size={18}></PersonCircle>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
