import { Container, Row, Col, Button } from "react-bootstrap";
import MyNavBar from "./MyNavBar";

const Settings = function () {
  return (
    <>
      <MyNavBar></MyNavBar>

      <Container fluid className="bg-white">
        <Row className="gap-md-0 gap-4">
          <Col xs={12}>
            <h1 className="fs-2 border-bottom border-1 pb-3">Account</h1>
          </Col>
          <Col xs={12} md={4}>
            <h3 className="text-secondary">MEMBERSHIP & BILLING</h3>
            <Button
              variant="secondary"
              className="fw-semibold rounded-0 py-2 px-4 my-3 d-block fs-6"
            >
              Cancel Membership
            </Button>
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-flex justify-content-between border-bottom border-1"
          >
            <div>
              <p className="my-2 fw-bold">student@strive.school</p>
              <p className="text-secondary mb-2 fw-bold">Password: ********</p>
              <p className="text-secondary mb-2 fw-bold">Phone: 321 044 1279</p>
            </div>
            <div>
              <p className="my-2 text-primary fw-medium">
                Change account email
              </p>
              <p className="mb-2 text-primary fw-medium text-end">
                Change password
              </p>
              <p className="mb-2 text-primary fw-medium">Change phone number</p>
            </div>
          </Col>
          <Col xs={12} md={4}></Col>
          <Col
            xs={12}
            md={8}
            className="d-flex justify-content-between border-bottom border-1"
          >
            <div>
              <p className="my-2 fw-bold">
                <i className="bi bi-paypal"></i>
                <span className="fst-italic fw-bold me-2">PayPal</span>
                admin@strive.school
              </p>
            </div>
            <div>
              <p className="my-2 text-primary fw-medium">Update payment info</p>
              <p className="mb-2 text-primary fw-medium text-end">
                Billing details
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={8} className="d-flex justify-content-between">
            <div></div>
            <div>
              <p className="my-2 text-primary fw-medium">
                Redeem gift card or promo code
              </p>
              <p className="mb-2 text-primary fw-medium text-end">
                Where to buy gift card
              </p>
            </div>
          </Col>
          <div className="border-bottom border-1 border-top border-1 d-flex">
            <Row className="flex-grow-1 justify-content-between">
              <Col xs={12} md={4}>
                <h3 className="text-secondary mt-2">Settings</h3>
              </Col>
              <Col xs={12} md={8}>
                <div className="d-flex flex-column">
                  <p className="my-1 fw-bold text-primary">Parental controls</p>
                  <p className="my-1 fw-bold text-primary">
                    Test participation
                  </p>
                  <p className="my-1 fw-bold text-primary">
                    Manage download devices
                  </p>
                  <p className="my-1 fw-bold text-primary">Activate a device</p>
                  <p className="my-1 fw-bold text-primary">
                    Recent device streaming activity
                  </p>
                  <p className="my-1 fw-bold text-primary">
                    Sign out of all devices
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-bottom border-1 border-top border-1 d-flex">
            <Row className="flex-grow-1 justify-content-between">
              <Col xs={12} md={4}>
                <h3 className="text-secondary mt-2">PLAN DETAIL</h3>
              </Col>
              <Col xs={12} md={8} className="d-flex justify-content-between">
                <div>
                  <p className="my-2 fw-bold d-inline-block me-1 text-black">
                    Premium
                  </p>
                  <Button variant="outline-dark" className="rounded-0 p-0">
                    ULTRA<span className="fw-bold">HD</span>
                  </Button>
                </div>
                <div>
                  <p className="my-2 text-primary fw-medium ">Change plan</p>
                </div>
              </Col>
            </Row>
          </div>
          <Col xs={12} md={4}>
            <h3 className="text-secondary mt-2">MY PROFILE</h3>
          </Col>
          <Col xs={12} md={8} className="d-flex justify-content-between">
            <div>
              <p className="mt-3 mb-3 fw-bold">
                <img
                  className="me-2"
                  height="30"
                  src="/logo.png"
                  alt="img-avatar.png"
                />
                Strive Student
              </p>
              <p className="mb-2 text-primary fw-medium">Language</p>
              <p className="mb-2 text-primary fw-medium">Playback setting</p>
              <p className="mb-2 text-primary fw-medium">Subtitle appearance</p>
            </div>
            <div className="d-flex flex-column justify-content-end">
              <p className="mb-2 text-primary fw-medium">Viewing activity</p>
              <p className="mb-2 text-primary fw-medium">Ratings</p>
            </div>
            <div className="d-flex flex-column justify-content-end">
              <p className="mt-2 mb-0 text-primary fw-medium">
                Manage profiles
              </p>
              <p className="mb-2 text-primary fw-medium">Add profile email</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Settings;
