import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Bell, PersonCircle, Search } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function MyNav({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sto cercando:", searchText);
    onSearch(searchText);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">
          <img src="/public/Netflix_icon.svg.png" width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleClick} className="nav-link fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" onClick={handleClick} className="nav-link fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#link" onClick={handleClick} className="nav-link fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#link" onClick={handleClick} className="nav-link fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" onClick={handleClick} className="nav-link fw-bold">
              List
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            <Form onSubmit={handleSubmit} className="me-2">
              <Row>
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Search" className=" mr-sm-0" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </Col>
                <Col className="m-0" xs="auto">
                  <Button className="ms-0" variant="outline-secondary" type="submit">
                    <Search className="ms-3 me-3" color="white" size={18}></Search>
                  </Button>
                </Col>
              </Row>
            </Form>
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
