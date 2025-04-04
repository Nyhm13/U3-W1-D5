import {
  Button,
  Col,
  Container,
  DropdownButton,
  DropdownItem,
  Form,
  Row,
} from "react-bootstrap";

const Profile = function () {
  return (
    <Container fluid className=" bg-black">
      <Row className="mb-5">
        <img
          src="/logo.png"
          alt="logo netflix"
          style={{ height: "60px", width: "120px" }}
        />
      </Row>
      <Container className="w-50 mx-auto">
        <h1 className=" border-bottom mb-4">Edit Profile</h1>
        <Row>
          <Col sm={4} className="text-center">
            <img
              src="/logo.png"
              alt="logo profilo"
              style={{ height: "60px", width: "auto" }}
            />
          </Col>
          <Col sm={8}>
            <Form.Control
              type="text"
              className=" bg-secondary rounded-0 mb-3 w-75  text-light"
              value="Strive Students"
              placeholder="Cado malato"
            />
            <p className=" text-secondary h1 mb-3">Language</p>
            <DropdownButton title="English" variant="dark" className="mb-4 ">
              <DropdownItem className="bg-dark text-white">
                Italiano
              </DropdownItem>
              <DropdownItem className="bg-dark text-white">
                Spagnolo
              </DropdownItem>
              <DropdownItem className="bg-dark text-white ">
                Tedesco
              </DropdownItem>
            </DropdownButton>
            <p className="border-top pt-3 fs-3 text-secondary">
              Maturity Settings:
            </p>
            <Form.Control
              type="text"
              placeholder="ALL MATURITY RATING"
              className="w-50 bg-secondary text-white"
            ></Form.Control>
            <p className="text-white py-4">
              Show Tittles of <b className="text-white">all maturity ratings</b>{" "}
              for this profile{" "}
            </p>
            <Button className="px-4 bg-black border-1 border-white mb-3 rounded-0">
              Edit
            </Button>
            <p className="fs-3 mb-1 border-top text-secondary">
              Autoplay controls
            </p>
            <Form.Check
              type="checkbox"
              label="Autoplay next episode in a series on all devices."
              className="d-flex align-items-center gap-1 mb-3"
              defaultChecked
            />
            <Form.Check
              type="checkbox"
              label="Autoplay previews while browsing on all devices."
              className="d-flex align-items-center gap-1 mb-5  "
              defaultChecked
            />
          </Col>
        </Row>
        <div className="d-flex border-top pt-4 w-100 mb-3 gap-2 gap-lg-5 justify-content-around justify-content-lg-center">
            <Button variant="dark" className="px-1 py-0 px-md-3 px-lg-4 border rounded-0 h5">
              SAVE
            </Button>
            <Button variant="dark" className="px-1 py-0 px-md-3 px-lg-4 border rounded-0 h5">
              CANCEL
            </Button>
            <Button variant="dark" className="px-1 py-0 px-md-3 px-lg-5 border rounded-0 h5">
              DELETE PROFILE
            </Button>
          </div>
      </Container>
    </Container>
  );
};

export default Profile;
