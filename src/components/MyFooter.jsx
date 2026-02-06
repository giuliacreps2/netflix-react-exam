import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <footer>
      <Container fluid={true} className="bg-dark p-4" data-bs-theme="dark">
        <Row className="justify-content-center mt-5">
          <Col xs={6} className="bg-dark">
            <Row className="d-flex flex-nowrap justify-content-center">
              <Col className="mb-2">
                <Facebook className="me-3" color="white" size={18}></Facebook>
                <Instagram className="me-3" color="white" size={18}></Instagram>
                <Twitter className="me-3" color="white" size={18}></Twitter>
                <Youtube className="me-3" color="white" size={18}></Youtube>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/about" className="text-white text-decoration-none small">
                          Audio and Subtitles
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Media Center
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/about" className="text-white text-decoration-none small">
                          Audio Description
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Investor Relations
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Legal Notices
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/about" className="text-white text-decoration-none small">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Jobs
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Cookie Preferences
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/about" className="text-white text-decoration-none small">
                          Gift Cards
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Terms of Use
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-white text-decoration-none small">
                          Corporate Information
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Row>
                <Col>
                  <Button type="button" variant="outline-secondary">
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="mb-2 mt-2 copyright">
                  <p className="mb-2 mt-2 copyright text-light small">1997-2023 Netflix, Inc.</p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
