import { Container, Dropdown, Row } from "react-bootstrap";

const TvShowsBar = function () {
  return (
    <Container fluid className="mt-4 mb-4 px-4">
      <Row>
        <div className=" d-flex justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <h1 className="text-white ">Tvshows</h1>
            <Dropdown >
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className=" ">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex align-items-center">
          <i className="bi bi-grid icons mx-2 text-white fs-4 " ></i>
          <i className="bi bi-grid-3x3 icons mx-2 text-white fs-4" ></i>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default TvShowsBar
