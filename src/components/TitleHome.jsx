import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Grid, Grid3x3Gap } from "react-bootstrap-icons";

function TitleHome() {
  return (
    <Container className="d-flex justify-content-between align-items-center">
      <Row>
        <Col className="d-flex p-0 mt-4">
          <h2 className="mb-4 text-light me-3">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle className="rounded-0" variant="outline-light" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center">
          <Grid className="ms-3 me-3" color="white" size={20}></Grid>
          <Grid3x3Gap className="ms-3 me-3" color="white" size={20}></Grid3x3Gap>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleHome;
