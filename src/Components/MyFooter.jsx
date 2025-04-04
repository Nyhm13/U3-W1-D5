import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container className=" w-50 mt-5">
      <Row className="justify-content-center mb-4  ">
        <Col xs={12} className=" text-center text-sm-start ">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-secondary me-3"
          >
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="text-secondary me-3"
          >
            <i className="bi bi-instagram fs-3"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="text-secondary me-3"
          >
            <i className="bi bi-youtube fs-3"></i>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            className="text-secondary"
          >
            <i className="bi bi-twitter-x fs-3"></i>
          </a>
        </Col>
      </Row>
      <Row className=" text-center text-sm-start row-cols-1 row-cols-sm-2 row-cols-md-4">
        <Col md={3} sm={6} className="mb-3 text-secondary">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <div className="mt-4">
            <Button variant="dark" className="border-secondary text-secondary">
              Service Code
            </Button>
            <p className="mt-3 mb-0 small">© 1997-2023 Netflix, Inc.</p>
          </div>
        </Col>
        <Col className="mb-3 text-secondary">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </Col>
        <Col className="mb-3 text-secondary">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </Col>
        <Col className="mb-3 text-secondary">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
