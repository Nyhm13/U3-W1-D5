import { Navbar, Container, Nav } from "react-bootstrap";


const MyNavBar = function () {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container fluid className="px-4 ">
        <Navbar.Brand href="#">
          <img src="/logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold ">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center gap-3 fs-5 ">
            <i className="bi bi-search icons text-white"></i>
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons text-white"></i>
            <i className="bi bi-person-circle icons text-white"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
